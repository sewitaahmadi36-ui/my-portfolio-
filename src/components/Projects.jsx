function Projects() {
  const projects = [
    {
      number: "01",
      title: "Personal Portfolio Website",
      description:
        "A responsive personal portfolio website built with React, JavaScript, HTML, and CSS.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85",
      alt: "Laptop displaying code in a developer workspace",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      link: "https://github.com/sewitaahmadi36-ui",
    },
    {
      number: "02",
      title: "Cybersecurity Learning Projects",
      description:
        "Practical cybersecurity learning activities focused on security concepts, networking, and protecting digital systems.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85",
      alt: "Person working on a laptop",
      technologies: [
        "Networking",
        "Security Fundamentals",
        "Security Analysis",
      ],
      link: "https://github.com/sewitaahmadi36-ui",
    },
    {
      number: "03",
      title: "Programming Projects",
      description:
        "Beginner programming projects created while developing my skills in Python, JavaScript, and other technologies.",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=85",
      alt: "Programming code displayed on a computer screen",
      technologies: ["HTML", "CSS", "JavaScript", "Python", "Java"],
      link: "https://github.com/sewitaahmadi36-ui",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Explore my work in web development, cybersecurity,
          and programming.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <img
                className="project-image"
                src={project.image}
                alt={project.alt}
                loading="lazy"
              />

              <div className="project-content">
                <span className="project-number">
                  {project.number}
                </span>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <span aria-hidden="true">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;