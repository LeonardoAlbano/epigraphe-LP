"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type UseProjectsStackScrollOptions = {
  sectionRef: RefObject<HTMLElement | null>;
  pinRef: RefObject<HTMLElement | null>;
  cardSelector: string;
  itemCount: number;
  minWidth?: number;
};

// Estados visuais das posições no deck
const FRONT = {
  x: 0, y: 0, opacity: 1,
  rotateY: 0, rotateZ: 0, rotateX: 0,
  z: 0, scale: 1,
} as const;

const ONE_BACK = {
  x: 0, y: -20, opacity: 0.55,
  rotateY: 0, rotateZ: 0, rotateX: -5,
  z: -200, scale: 0.955,
} as const;

const TWO_BACK = {
  x: 0, y: -40, opacity: 0.25,
  rotateY: 0, rotateZ: 0, rotateX: -9,
  z: -360, scale: 0.91,
} as const;

// Card ainda não revelado — entra pela direita (ímpar) ou esquerda (par)
function hiddenState(index: number) {
  const fromRight = index % 2 !== 0;
  return {
    x: fromRight ? 340 : -340,
    y: 0,
    opacity: 0,
    rotateY: fromRight ? -15 : 15,
    rotateZ: fromRight ? -1.6 : 1.6,
    rotateX: 0,
    z: -80,
    scale: 1,
  };
}

export function useProjectsStackScroll({
  sectionRef,
  pinRef,
  cardSelector,
  itemCount,
  minWidth = 1024,
}: UseProjectsStackScrollOptions) {
  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const pinEl = pinRef.current;
    if (!sectionEl || !pinEl) return;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${minWidth}px)`, () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardSelector);
        if (cards.length < 2) return;

        const steps = cards.length - 1; // número de transições

        gsap.set(pinEl, { perspective: 1200 });
        gsap.set(cards, {
          transformStyle: "preserve-3d",
          transformOrigin: "50% 0%",
          willChange: "transform",
        });

        // Card 0 começa visível; demais entram de lados alternados
        gsap.set(cards[0], FRONT);
        for (let i = 1; i < cards.length; i++) {
          gsap.set(cards[i], hiddenState(i));
        }

        /**
         * Cada step ocupa exatamente 1 unidade no timeline.
         * Timeline total = `steps` unidades → snapTo: 1/steps
         * alinha 100% com o início de cada transição.
         */
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: sectionEl,
            start: "top top+=80",
            end: `+=${steps * 100}vh`,
            scrub: 0.9,
            pin: pinEl,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            pinSpacing: true,
            snap: {
              snapTo: 1 / steps,
              duration: { min: 0.2, max: 0.45 },
              delay: 0.05,
              ease: "power2.inOut",
            },
          },
        });

        for (let i = 0; i < steps; i++) {
          const curr = cards[i];
          const next = cards[i + 1];
          const prev = i > 0 ? cards[i - 1] : null;

          // Todos os tweens deste step começam em `i` e duram 1 unidade
          tl.to(next, { ...FRONT, duration: 1 }, i);
          tl.to(curr, { ...ONE_BACK, duration: 1 }, i);
          if (prev) tl.to(prev, { ...TWO_BACK, duration: 1 }, i);
        }
      }, sectionEl);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [sectionRef, pinRef, cardSelector, itemCount, minWidth]);
}
