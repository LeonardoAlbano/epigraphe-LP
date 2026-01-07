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
  endPerItem?: number;
  endMin?: number;
};

export function useProjectsStackScroll({
  sectionRef,
  pinRef,
  cardSelector,
  itemCount,
  minWidth = 1024,
  endPerItem = 650,
  endMin = 1400,
}: UseProjectsStackScrollOptions) {
  useLayoutEffect(() => {
    const sectionEl = sectionRef.current;
    const pinEl = pinRef.current;

    if (!sectionEl || !pinEl) return;

    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      mm.add(`(min-width: ${minWidth}px)`, () => {
        const cards = gsap.utils.toArray<HTMLElement>(cardSelector);
        if (cards.length === 0) return;

        const BASE_Y = -80;

        const STACK = {
          oneBack: {
            y: BASE_Y - 26,
            scale: 0.955,
            opacity: 0.7,
            z: -220,
            rotateX: -6,
            duration: 0.6,
          },
          twoBack: {
            y: BASE_Y - 58,
            scale: 0.92,
            opacity: 0.45,
            z: -360,
            rotateX: -10,
            duration: 0.6,
          },
        } as const;

        gsap.set(pinEl, { perspective: 1200 });
        gsap.set(cards, {
          transformStyle: "preserve-3d",
          transformOrigin: "50% 0%",
          willChange: "transform",
        });

        cards.forEach((card, i) => {
          gsap.set(card, {
            x: i % 2 === 0 ? 260 : -260,
            opacity: 0,
            rotateY: i % 2 === 0 ? -14 : 14,
            rotateZ: i % 2 === 0 ? -1.1 : 1.1,
            z: -220,
            y: BASE_Y,
          });
        });

        const tl = gsap.timeline({
          defaults: { ease: "power4.out" },
          scrollTrigger: {
            trigger: sectionEl,
            start: "top top",
            end: `+=${Math.max(itemCount * endPerItem, endMin)}`,
            scrub: 0.9,
            pin: pinEl,
            anticipatePin: 1,
          },
        });

        cards.forEach((card, i) => {
          tl.to(
            card,
            {
              x: 24,
              opacity: 1,
              rotateY: 2,
              rotateZ: 0.4,
              z: -40,
              duration: 0.75,
            },
            i
          );

          tl.to(
            card,
            {
              x: 0,
              rotateY: 0,
              rotateZ: 0,
              z: 0,
              duration: 0.35,
              ease: "power3.out",
            },
            i + 0.72
          );

          if (i > 0) {
            tl.to(
              cards[i - 1],
              {
                y: STACK.oneBack.y,
                scale: STACK.oneBack.scale,
                opacity: STACK.oneBack.opacity,
                z: STACK.oneBack.z,
                rotateX: STACK.oneBack.rotateX,
                duration: STACK.oneBack.duration,
                ease: "power2.out",
              },
              i
            );
          }

          if (i > 1) {
            tl.to(
              cards[i - 2],
              {
                y: STACK.twoBack.y,
                scale: STACK.twoBack.scale,
                opacity: STACK.twoBack.opacity,
                z: STACK.twoBack.z,
                rotateX: STACK.twoBack.rotateX,
                duration: STACK.twoBack.duration,
                ease: "power2.out",
              },
              i
            );
          }
        });

        return () => {
          tl.kill();
          ScrollTrigger.getAll().forEach((st) => {
            if (st.trigger === sectionEl || st.pin === pinEl) st.kill();
          });
        };
      });
    }, sectionEl);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, [sectionRef, pinRef, cardSelector, itemCount, minWidth, endPerItem, endMin]);
}
