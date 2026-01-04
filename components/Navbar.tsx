export default function Navbar() {
  return (
    <nav className="p-5 flex justify-between max-w-6xl mx-auto">
      <h1 className="text-xl font-bold">Asadullah</h1>
      <div className="space-x-4">
        <a href="#skills">Skills</a>
        <a href="#education">Education</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
