"use client";

import { useLayoutEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

type UseProblemCardsScrollOptions = {
  minWidth?: number;
  navOffset?: number;
  cardsSelector?: string;
};

export function useProblemCardsScroll(
  sectionRef: RefObject<HTMLElement | null>,
  options: UseProblemCardsScrollOptions = {}
) {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const {
      minWidth = 1024,
      navOffset = 180,
      cardsSelector = "[data-problem-card]",
    } = options;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${minWidth}px)`, () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardsSelector);
        if (cards.length === 0) return;

        gsap.set(cards, { autoAlpha: 0, y: 24 });
        gsap.set(cards[0], { autoAlpha: 1, y: 0 });

        const steps = Math.max(cards.length - 1, 1);

        const pxPerStep = Math.round(
          Math.min(620, Math.max(420, window.innerHeight * 0.7))
        );

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `top top+=${navOffset}`,
            end: () => `+=${steps * pxPerStep}`,
            pin: true,
            scrub: 1.1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap:
              cards.length > 1
                ? {
                    snapTo: 1 / (cards.length - 1),
                    duration: { min: 0.18, max: 0.35 },
                    delay: 0.12,
                    ease: "power2.out",
                  }
                : undefined,
          },
        });

        for (let i = 1; i < cards.length; i++) {
          const pos = i - 1;

          tl.to(
            cards[i - 1],
            { autoAlpha: 0, y: -12, duration: 0.45, ease: "none" },
            pos
          );

          tl.fromTo(
            cards[i],
            { autoAlpha: 0, y: 12 },
            { autoAlpha: 1, y: 0, duration: 0.75, ease: "none" },
            pos + 0.25
          );
        }

        ScrollTrigger.refresh();
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [sectionRef, options.minWidth, options.navOffset, options.cardsSelector, options]);
}

