import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { ParallaxInterlude } from "@/components/sections/ParallaxInterlude";
import { Projects } from "@/components/sections/Projects";
import { Stack } from "@/components/sections/Stack";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <Stack />
      <Experience />
      <ParallaxInterlude />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
