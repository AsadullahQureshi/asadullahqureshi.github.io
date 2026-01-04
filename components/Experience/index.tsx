export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Konext',
      duration: 'April 2025 – Present',
      description:
        'Contributed to the development of a modern time tracking platform at Konext, utilizing Laravel and React to build a dynamic and scalable web application',
    },
    {
      role: 'Associate Software Engineer (Remote)',
      company: 'Remax',
      duration: 'Sep 2024- March 2025',
      description:
        'Contributed to the development of a cutting-edge real estate platform for Remax, leveraging the TALL stack (TailwindCSS, Alpine.js, Laravel, Livewire) to deliver a seamless and interactive user experience.',
    },

    {
      role: 'Full Stack Engineer',
      company: 'XOHOA',
      duration: 'August 2022- August 2024',
      description:
        'Developed and maintained web applications using Laravel, React.js, and Next.js',
    },
  ];

  return (
    <section id="experience" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Experience</h2>

      <div className="mt-10  grid md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded"
          >
            <h3 className="text-xl font-bold text-white">
              {exp.role}
            </h3>
            <p className="text-gray-400 mt-1">
              {exp.company} • {exp.duration}
            </p>
            <p className="text-gray-400 mt-3">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
