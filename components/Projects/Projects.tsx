export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="bg-gray-900 p-6 rounded">
          <h3 className="font-bold">Student Management CMS</h3>
          <p className="text-gray-400 mt-2">
            Laravel + Filament + Multi-Tenancy
          </p>
          <a href="#" className="text-blue-400 mt-3 inline-block">
            GitHub →
          </a>
        </div>
      </div>
    </section>
  );
}
