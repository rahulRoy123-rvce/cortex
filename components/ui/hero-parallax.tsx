"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const products = [
  {
    title: "AI-Powered Development",
    link: "#ai",
    thumbnail: "/images/ai-development.svg",
    description: "Smart code completion and AI-assisted development"
  },
  {
    title: "Multi-Chain Support",
    link: "#chains",
    thumbnail: "/images/multi-chain.svg",
    description: "Deploy to multiple blockchains seamlessly"
  },
  {
    title: "Security Analysis",
    link: "#security",
    thumbnail: "/images/security.svg",
    description: "Real-time security analysis and vulnerability detection"
  },
  {
    title: "Transaction Builder",
    link: "#transactions",
    thumbnail: "/images/transaction.svg",
    description: "Visual transaction builder and testing"
  },
  {
    title: "Chain Explorer",
    link: "#explorer",
    thumbnail: "/images/explorer.svg",
    description: "Built-in blockchain explorer and analytics"
  },
];

const ProductCard = ({
  product,
  translate,
}: {
  product: typeof products[0];
  translate: any;
}) => (
  <motion.div
    style={{
      x: translate,
    }}
    whileHover={{
      y: -20,
    }}
    className="group/product h-96 w-[30rem] relative shrink-0"
  >
    <Link href={product.link} className="block group-hover/product:shadow-2xl">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover/product:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">{product.title}</h2>
        <p className="text-gray-300 text-sm">{product.description}</p>
      </div>
    </Link>
  </motion.div>
);

const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <div className="flex items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-7xl font-bold text-white">
            The Ultimate Web3
            <br />
            Development Experience
          </h1>
          <p className="max-w-2xl text-base md:text-xl mt-8 text-gray-300">
            Build, deploy, and secure your Web3 applications with our AI-powered IDE.
            Experience seamless development across multiple chains with built-in security
            analysis and transaction tools.
          </p>
          <div className="mt-8">
            <Link
              href="#get-started"
              className="rounded-md bg-blue-600 px-6 py-3 text-lg font-medium text-white hover:bg-blue-700"
            >
              Start Building
            </Link>
          </div>
        </div>
        <div className="hidden lg:block flex-1">
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/ide-preview.svg"
              alt="Cortex IDE Preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const HeroParallax = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2], [15, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2], [20, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.2], [-700, 500]);

  return (
    <div
      ref={ref}
      className="relative h-[300vh] py-40 overflow-hidden antialiased flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateX}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {products.slice(3, 5).map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              translate={translateXReverse}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}; 