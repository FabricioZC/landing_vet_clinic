import { useEffect, useRef, useState } from "react";

export function useCardHint(isHint: boolean, isFlipped: boolean) {
  const [hinting, setHinting] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const flippedRef = useRef(isFlipped);
  const hintingRef = useRef(false);

  useEffect(() => { flippedRef.current = isFlipped; }, [isFlipped]);
  useEffect(() => { hintingRef.current = hinting; }, [hinting]);

  useEffect(() => {
    if (!isHint) return;
    const card = cardRef.current;
    if (!card) return;

    let interval: ReturnType<typeof setInterval>;

    const tryHint = () => {
      if (!flippedRef.current && !hintingRef.current) setHinting(true);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(tryHint, 500);
          interval = setInterval(tryHint, 5000);
        } else {
          clearInterval(interval);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(card);
    return () => { observer.disconnect(); clearInterval(interval); };
  }, [isHint]);

  useEffect(() => {
    if (!hinting || !innerRef.current) return;
    const el = innerRef.current;
    const onEnd = () => setHinting(false);
    el.addEventListener("animationend", onEnd, { once: true });
    return () => el.removeEventListener("animationend", onEnd);
  }, [hinting]);

  const stopHint = () => { if (hintingRef.current) setHinting(false); };

  return { hinting, cardRef, innerRef, stopHint };
}
