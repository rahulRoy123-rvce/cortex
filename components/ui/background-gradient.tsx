"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      container.style.setProperty("--x-offset", `${x * 100}%`);
      container.style.setProperty("--y-offset", `${y * 100}%`);
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, [animate]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full h-full bg-slate-950 rounded-3xl p-0.5 overflow-hidden",
        containerClassName
      )}
    >
      <div className="absolute inset-0 [mask-image:linear-gradient(black,transparent)]">
        <div
          className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-[2] blur-[100px] opacity-50"
          style={{
            backgroundPosition: "var(--x-offset, 50%) var(--y-offset, 50%)",
            transition: "background-position 0.3s ease-out",
          }}
        />
      </div>
      <div className={cn("relative w-full h-full bg-slate-900 rounded-3xl", className)}>
        {children}
      </div>
    </div>
  );
}; 