export default function Skills() {
  const skills = ['Laravel', 'React', 'Next.js', 'MySQL', 'Tailwind', 'Git'];

  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 rounded">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
