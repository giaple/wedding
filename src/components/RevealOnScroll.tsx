import { useEffect, useRef, useState } from "react";
import "./RevealOnScroll.css";

interface RevealOnScrollProps {
  children: React.ReactNode;
  /** Hướng hiệu ứng: fade, slide-up, slide-left, slide-right */
  animation?: "fade" | "slide-up" | "slide-left" | "slide-right";
  /** Khoảng delay (ms) cho animation */
  delay?: number;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  animation = "fade",
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 } // 20% component xuất hiện mới trigger
    );

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${animation} ${isVisible ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
