"use client";
import { useEffect, useRef, useState } from "react";

type Variant = "up" | "down" | "left" | "right" | "scale" | "fade";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  mount?: boolean;
  duration?: number;
  rootMargin?: string;
}

const getInitialStyle = (variant: Variant): React.CSSProperties => {
  switch (variant) {
    case "up":    return { opacity: 0, transform: "translateY(48px)" };
    case "down":  return { opacity: 0, transform: "translateY(-32px)" };
    case "left":  return { opacity: 0, transform: "translateX(-56px)" };
    case "right": return { opacity: 0, transform: "translateX(56px)" };
    case "scale": return { opacity: 0, transform: "scale(0.93)" };
    case "fade":  return { opacity: 0, transform: "none" };
  }
};

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  variant = "up",
  mount = false,
  duration = 900,
  rootMargin = "0px 0px -120px 0px",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (mount) {
      const t = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.12, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [mount, delay]);

  const initial = getInitialStyle(variant);
  const easing = "cubic-bezier(0.16,1,0.3,1)";

  return (
    <div
      ref={ref}
      className={className}
      style={
        visible
          ? { opacity: 1, transform: "none", transition: `opacity ${duration}ms ${easing} ${mount ? 0 : delay}ms, transform ${duration}ms ${easing} ${mount ? 0 : delay}ms` }
          : { ...initial, transition: "none" }
      }
    >
      {children}
    </div>
  );
}
