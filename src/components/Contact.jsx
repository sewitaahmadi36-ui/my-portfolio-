import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const accessKey = "60154006-8d16-4e6c-9e60-bd17c24200ab";
  const email = "sewitaahmadi36@gmail.com";
  const github = "https://github.com/sewitaahmadi36-ui";
  const linkedin = "https://www.linkedin.com/in/sewita-ahmadi-interpretor-cybersecurity";

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", accessKey);
    formData.append("subject", "New Portfolio Contact Message");
    formData.append("from_name", "Portfolio Contact Form");

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        form.reset();
      } else {
        setStatus(result.message || "Could not send your message. Please try again.");
      }
    } catch {
      setStatus("Connection error. Please check your internet and try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-description">
          Have a question, opportunity, or project idea? I'd love to hear from you.
        </p>

        <div className="contact-layout">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              I'm interested in cybersecurity, technology, programming,
              and opportunities to learn and grow.
            </p>

            <a className="contact-link" href={`mailto:${email}`}>
              <span>✉️</span>
              <span><strong>Email Me</strong><small>{email}</small></span>
            </a>

            <a className="contact-link" href={github} target="_blank" rel="noopener noreferrer">
              <span>💻</span>
              <span><strong>GitHub</strong><small>Explore my projects</small></span>
            </a>

            <a className="contact-link" href={linkedin} target="_blank" rel="noopener noreferrer">
              <span>🌐</span>
              <span><strong>LinkedIn</strong><small>Connect professionally</small></span>
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send Me a Message</h3>

            <div className="form-group">
              <label htmlFor="contact-name">Your Name</label>
              <input id="contact-name" name="name" type="text"
                placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email">Your Email</label>
              <input id="contact-email" name="email" type="email"
                placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-message">Your Message</label>
              <textarea id="contact-message" name="message"
                placeholder="Write your message..." rows="5" required />
            </div>

            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Send Message ↗"}
            </button>

            {status && <p role="status" aria-live="polite">{status}</p>}

            <p className="form-note">
              Your message will be sent to the email linked to your Web3Forms key.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;