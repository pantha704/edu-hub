"use client";

import { MarqueeDemoVertical } from "@/components/blocks/footer";
import { HeroSection } from "@/components/blocks/hero-section-dark";

export default function Home() {
  return (
    <div className="flex flex-col">
      <>
        <HeroSection />
        <MarqueeDemoVertical />
      </>
    </div>
  );
}
