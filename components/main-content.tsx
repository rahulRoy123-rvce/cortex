"use client";
import dynamic from "next/dynamic";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const GridBackground = dynamic(() => import("@/components/ui/grid-background").then(mod => mod.GridBackground), {
  ssr: false
});

const HeroParallax = dynamic(() => import("@/components/ui/hero-parallax").then(mod => mod.HeroParallax), {
  ssr: false
});

const testimonials = [
  {
    quote: "Cortex IDE has revolutionized how we develop Web3 applications. The AI-powered features are a game-changer.",
    name: "Sarah Chen",
    title: "Lead Developer at DeFi Solutions"
  },
  {
    quote: "The security analysis tools have helped us catch potential vulnerabilities before they became issues. Absolutely essential for blockchain development.",
    name: "Michael Rodriguez",
    title: "Security Engineer at BlockSafe"
  },
  {
    quote: "The multi-chain support and seamless deployment features have significantly reduced our development time.",
    name: "Alex Thompson",
    title: "CTO at ChainBridge Technologies"
  }
];

const searchPlaceholders = [
  "Search smart contracts...",
  "Analyze security vulnerabilities...",
  "Deploy to multiple chains...",
  "Debug transactions..."
];

export function MainContent() {
  return (
    <main className="min-h-screen">
      <GridBackground>
        <HeroParallax />
        
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">
          <BackgroundGradient className="p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2">Ask Cortex Anything</h2>
              <p className="text-gray-400">Your AI-powered blockchain development assistant</p>
            </div>
            <PlaceholdersAndVanishInput 
              placeholders={searchPlaceholders}
              onChange={(e) => console.log(e.target.value)}
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Submitted");
              }}
            />
          </BackgroundGradient>

          <div className="py-8">
            <h2 className="text-2xl font-bold text-center mb-8">What Developers Say</h2>
            <InfiniteMovingCards 
              items={testimonials}
              direction="left"
              speed="slow"
            />
          </div>
        </div>
      </GridBackground>
    </main>
  );
} 