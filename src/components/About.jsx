// const About = () => {
//   return (
//     <div className="max-w-3xl py-8 min-h-screen px-8  text-center my-6 mx-auto">
//       <h2 className="text-3xl font-semibold mb-7">About Me</h2>
//       <p className="text-gray-700">
//         Hi, I'm a frontend developer with a focus on building responsive and
//         engaging web experiences using modern technologies like React and
//         Tailwind CSS.
//       </p>
//     </div>
//   );
// };

// export default About;

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Next.js",
  "TypeScript",
];

function About() {
  return (
    <div className="max-w-3xl py-12 min-h-screen px-8 text-center my-6 mx-auto">
      <h2 className="text-3xl font-semibold mb-7 text-gray-800">About Me</h2>
      <p className="text-gray-700 font-medium mb-8">
        Hi, I'm a frontend developer passionate about crafting responsive,
        accessible, and high-performing web applications. My goal is to create
        seamless digital experiences with clean and scalable code using modern
        web technologies.
      </p>

      <h3 className="text-2xl font-semibold mb-4 text-gray-800">My Skills</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-blue-100 text-emerald-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gradient-to-b from-blue-400 to-indigo-600  hover:text-white p-8  transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default About;
