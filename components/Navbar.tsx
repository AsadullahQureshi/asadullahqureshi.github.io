'use client'
import { useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="p-5 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Asadullah</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 flex flex-col space-y-3">
          <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="#education" onClick={() => setOpen(false)}>Education</a>
          <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
          <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
