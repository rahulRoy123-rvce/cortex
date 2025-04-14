"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const ResizableNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  return (
    <motion.nav
      style={{
        height: useTransform(scrollYProgress, [0, 0.1], [80, 60]),
      }}
      className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur-sm"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-full items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">Cortex IDE</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="#features"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Features
            </Link>
            <Link
              href="#security"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Security
            </Link>
            <Link
              href="#chains"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Supported Chains
            </Link>
            <Link
              href="#demo"
              className="text-sm font-medium text-gray-300 hover:text-white"
            >
              Demo
            </Link>
            <Link
              href="#contact"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
            >
              {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="md:hidden"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link
            href="#features"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Features
          </Link>
          <Link
            href="#security"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Security
          </Link>
          <Link
            href="#chains"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Supported Chains
          </Link>
          <Link
            href="#demo"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Demo
          </Link>
          <Link
            href="#contact"
            className="block rounded-md bg-blue-600 px-3 py-2 text-base font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}; 