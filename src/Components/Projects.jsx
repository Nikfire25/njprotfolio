import React from "react";

const projects = [
  {
    id: 1,
    name: "eBookMartByNJ",
    description:
      "E-commerce app for browsing and purchasing ebooks. Uses React, Vanilla JS, REST APIs, and local JSON. Features responsive UI, async data fetching, JSON auth, protected routes, and role-based access control.",
    image: "/projects/eBookCart.png",
    link: "https://ebookcartbynj.netlify.app/",
  },
  {
    id: 2,
    name: "CryptoInfoByNJ",
    description:
      "Real-time cryptocurrency market dashboard built with React and REST APIs. Displays prices, market caps, and trends with responsive design and intuitive user experience.",
    image: "/projects/CryptoInfo.png",
    link: "https://cryptoinfobynj.netlify.app/",
  },
  {
    id: 3,
    name: "MovieInfoByNJ",
    description:
      "Dynamic movie discovery app using React and API integration. Fetches movie titles, ratings, images, and overviews with responsive layout and optimized UX.",
    image: "/projects/MovieInfo.png",
    link: "https://movieinfobynj.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section className="" id="projects">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary ">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my projects. Each project was carefully crafted with
          attention to detail, performance and user experiences.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, ind) => (
            <a href={project.link} target="_blank">
              <div
                key={ind}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overfloow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
