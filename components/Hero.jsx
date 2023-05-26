"use client";

import ComputersCanvas from "./canvas/ComputersCanvas";
import AnimatedScrollWheel from "./heroComponents/AnimatedScrollWheel";
import HeroIntroText from "./heroComponents/HeroIntroText";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <HeroIntroText />
      <ComputersCanvas />
      <AnimatedScrollWheel />
    </section>
  );
};

export default Hero;
