import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
    </>
  );
}
