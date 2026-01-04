export default function Skills() {
  const skills = ['Laravel', 'React','Redux', 'Next.js', 'MySQL', 'MongoDB','Tailwind', 'Git', 'Docker','LAMP', 'HTML', 'CSS', 'Javascript', 'Bootstrap', 'Jquery', 'Ajax', 'Json', 'Rest Api',  'PHP', 'OOP', 'Alpine', 'Livewire', 'Soft Skills & Communication', 'Time Management', 'Empathy', 'Problem Solving' ];

  return (
    <section id="skills" className="py-20 text-center max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="flex justify-center flex-wrap gap-4 mt-6">
        {skills.map(skill => (
          <span key={skill} className="px-4 py-2 bg-gray-800 rounded text-white">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
