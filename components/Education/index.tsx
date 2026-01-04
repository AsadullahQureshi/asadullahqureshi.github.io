export default function Education() {
  const education = [
    {
      degree: 'Bachelor of science in Computer Science',
      institute: 'University of Southern Punjab Multan,Pakistan',
      year: '2016 - 2021',
    },
  ];

  return (
    <section id="education" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center">Education</h2>

      <div className="mt-10 space-y-6">
        {education.map((edu, index) => (
          <div
            key={index}
            className="bg-gray-900 p-6 rounded text-center"
          >
            <h3 className="text-xl font-bold text-white">
              {edu.degree}
            </h3>
            <p className="text-gray-400 mt-2">
              {edu.institute}
            </p>
            <p className="text-gray-500 mt-1">
              {edu.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
