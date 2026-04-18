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
  const {
    minWidth = 1024,
    navOffset = 80,
    cardsSelector = "[data-problem-card]",
  } = options;

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${minWidth}px)`, () => {
      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>(cardsSelector);
        if (cards.length < 2) return;

        const steps = cards.length - 1;

        // Card 0 visível; demais ocultos abaixo (fora do overflow-hidden)
        gsap.set(cards[0], { autoAlpha: 1, y: 0 });
        for (let i = 1; i < cards.length; i++) {
          gsap.set(cards[i], { autoAlpha: 0, y: 56 });
        }

        /**
         * Timeline discreta: cada step ocupa exatamente 1 unidade.
         * snapTo: 1/steps → alinha perfeitamente com cada transição.
         * scrub alto (2) = resposta lenta e cinematográfica ao scroll.
         */
        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut" },
          scrollTrigger: {
            trigger: section,
            start: `top top+=${navOffset}`,
            end: `+=${steps * 100}vh`,
            pin: true,
            scrub: 2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            pinSpacing: true,
            snap: {
              snapTo: 1 / steps,
              duration: { min: 0.5, max: 0.9 },
              delay: 0.1,
              ease: "power2.inOut",
            },
          },
        });

        for (let i = 0; i < steps; i++) {
          // Card atual sobe e some
          tl.to(cards[i], { autoAlpha: 0, y: -48, duration: 1 }, i);
          // Próximo card sobe do fundo
          tl.to(cards[i + 1], { autoAlpha: 1, y: 0, duration: 1 }, i);
        }

        ScrollTrigger.refresh();
      }, section);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, [sectionRef, minWidth, navOffset, cardsSelector]);
}
