"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

interface ParallaxProps {
  products: Product[];
}

export function HeroParallax() {
  const products: Product[] = [
    {
      title: "Secure Smart Contract Development",
      link: "#",
      thumbnail: "/images/smart-contract.png"
    },
    {
      title: "Multi-Chain Deployment",
      link: "#",
      thumbnail: "/images/multi-chain.png"
    },
    {
      title: "AI-Powered Code Analysis",
      link: "#",
      thumbnail: "/images/ai-analysis.png"
    }
  ];

  const firstRow = products.slice(0, 1);
  const secondRow = products.slice(1, 2);
  const thirdRow = products.slice(2);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -1000],
    springConfig
  );
  const translateXReverse = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1000],
    springConfig
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [15, 0, 0, 15],
    springConfig
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.2, 1, 1, 0.2]
  );
  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [20, 0, 0, 20],
    springConfig
  );
  const translateY = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [-700, 0, 0, -700],
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translate={translateX}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate Web3 <br /> Development Experience
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Build, deploy, and secure your Web3 applications with our AI-powered IDE.
        Experience seamless development across multiple chains.
      </p>
    </div>
  );
};

const ProductCard = ({
  title,
  link,
  thumbnail,
  translate,
}: Product & {
  translate: any; // This is a motion value from framer-motion, can be typed more specifically if needed
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a href={link} className="block group-hover/product:shadow-2xl">
        <img
          src={thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-2xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}; 