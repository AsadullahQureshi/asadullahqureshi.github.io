import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
    </>
  );
}
