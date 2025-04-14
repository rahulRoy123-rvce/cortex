"use client";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
import { useMotionValue } from "framer-motion";

interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

const products: Product[] = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/invoker.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/efreeinvoice.png",
  },
];

export function HeroParallax() {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10);

  const ref = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const initialMotionValue = useMotionValue(0);
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const translateXReverse = useTransform(scrollYProgress, [0, 1], [0, 1000]);
  const rotateX = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [15, 0, 0, 15]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.2, 1, 1, 0.2]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [20, 0, 0, 20]);
  const translateY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [-700, 0, 0, -700]);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX: isMounted ? rotateX : initialMotionValue,
          rotateZ: isMounted ? rotateZ : initialMotionValue,
          translateY: isMounted ? translateY : initialMotionValue,
          opacity: isMounted ? opacity : initialMotionValue,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translate={isMounted ? translateX : initialMotionValue}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translate={isMounted ? translateXReverse : initialMotionValue}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              key={product.title}
              {...product}
              translate={isMounted ? translateX : initialMotionValue}
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
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <a href={link} className="block group-hover/product:shadow-2xl">
        <Image
          src={thumbnail}
          alt={title}
          width={480}
          height={384}
          className="object-cover object-left-top absolute h-full w-full inset-0"
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white text-2xl font-bold">
        {title}
      </h2>
    </motion.div>
  );
}; 