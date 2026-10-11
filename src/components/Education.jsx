function Education() {
  const education = [
    {
      number: "01",
      institution: "American University of Afghanistan (AUAF)",
      program: "Bachelor's Studies in Cybersecurity",
      description:
        "Currently studying cybersecurity and developing skills in information technology and digital security.",
      status: "Currently Studying",
    },
    {
      number: "02",
      institution: "Kabul University",
      program: "Mechanical Engineering",
      description:
        "Studied Mechanical Engineering before my studies were interrupted.",
      status: "Studies Interrupted",
    },
    {
      number: "03",
      institution: "Kateb University",
      program: "English Language Diploma",
      description:
        "Completed English language studies and academic training.",
      status: "Language Studies",
    },
    {
      number: "04",
      institution: "Mohammad Asif Mayel Modern High School",
      program: "High School Diploma",
      description:
        "Graduated in 2020 with a final score of 91.75%.",
      status: "Graduated · 2020",
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container education-container">
        <h2 className="section-title">Education</h2>
        <p className="section-description">
          My academic background and educational journey.
        </p>

        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={item.number}>
              <div className="education-card-top">
                <span className="education-number">{item.number}</span>
                <span className="education-status">{item.status}</span>
              </div>

              <h3>{item.institution}</h3>
              <h4>{item.program}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;