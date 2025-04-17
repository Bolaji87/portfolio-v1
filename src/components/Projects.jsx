// import React from "react";

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce App",
//     image: "/images/ecommerce.png",
//     description:
//       "A full-featured e-commerce web application with cart, authentication, and payment integration.",
//   },
//   {
//     id: 2,
//     title: "Portfolio Website",
//     image: "/images/portfolio.png",
//     description:
//       "A modern and responsive portfolio to showcase developer skills, experience, and projects.",
//   },
//   {
//     id: 3,
//     title: "Task Manager",
//     image: "/images/task-manager.png",
//     description:
//       "A productivity tool for managing tasks and goals with drag-and-drop support.",
//   },
//   {
//     id: 4,
//     title: "Weather App",
//     image: "/images/weather-app.png",
//     description:
//       "A clean weather app using a public API to display forecast data and user location.",
//   },
// ];

// function Projects() {
//   return (
//     <section
//       id="projects"
//       className="py-16 px-6 min-h-screen bg-gray-100 text-gray-800"
//     >
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//           {projects.map((project) => (
//             <div
//               key={project.id}
//               className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform transform hover:scale-105"
//             >
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-64 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
//                 <p className="text-gray-600">{project.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Projects;

import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    image: "https://via.placeholder.com/400x250.png?text=E-Commerce+Project",
    description:
      "A responsive e-commerce site with cart functionality, payment gateway, and admin dashboard.",
  },
  {
    id: 2,
    title: "Portfolio Website",
    image: "https://via.placeholder.com/400x250.png?text=Portfolio+Project",
    description:
      "My personal portfolio showcasing React and Tailwind CSS skills.",
  },
  {
    id: 3,
    title: "Blog Platform",
    image: "https://via.placeholder.com/400x250.png?text=Blog+Platform",
    description:
      "A full-stack blog with markdown support, categories, and a CMS dashboard.",
  },
  {
    id: 4,
    title: "Weather App",
    image: "https://via.placeholder.com/400x250.png?text=Weather+App",
    description:
      "Weather forecasting app using OpenWeatherMap API and geolocation.",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-12 px-4 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-100 rounded-xl shadow-md overflow-hidden cursor-pointer transform hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative animate-fadeIn">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-3 text-gray-700 text-xl font-bold hover:text-red-500"
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-600">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
