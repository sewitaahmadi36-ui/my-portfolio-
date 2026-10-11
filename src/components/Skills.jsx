function Skills() {
  const categories = [
    {
      title: "Programming & Web",
      icon: "💻",
      description: "Building websites and learning application development.",
      skills: ["HTML", "CSS", "JavaScript", "Python", "Java"],
    },
    {
      title: "Cybersecurity",
      icon: "🛡️",
      description: "Developing my foundation in digital and information security.",
      skills: ["Security Fundamentals", "Networking", "Digital Safety"],
    },
    {
      title: "Tools & Databases",
      icon: "⚙️",
      description: "Learning tools for coding and data management.",
      skills: ["SQL", "Git", "GitHub"],
    },
    {
      title: "Languages",
      icon: "🌐",
      description: "Communicating across languages and cultures.",
      skills: ["Dari", "English", "Pashto"],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container skills-container">
        <div className="skills-heading">
          <h2 className="section-title">My Skills</h2>

          <p className="section-description">
            Technologies, security knowledge, and communication skills
            I am developing through study and practice.
          </p>
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <article className="skill-card" key={category.title}>
              <div className="skill-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.description}</p>

              <div className="skill-tags">
                {category.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;