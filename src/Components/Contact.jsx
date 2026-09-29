
import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <div className="section-heading">
          <p>Let's Connect</p>
          <h2>Contact Me</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together!</h3>

            <p>
              I'm looking for opportunities to start my career as a
              frontend developer. If you have an opportunity or would
              like to discuss a project, feel free to reach out.
            </p>

            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <div>
                <h4>Email</h4>
                <a href="nchary791@gmail.com">
                 nchary791@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span className="contact-icon">⌘</span>
              <div>
                <h4>GitHub</h4>
                <a
                  href="https://github.com/nchary791-bot"
                  target="_blank"
                  rel="noreferrer"
                >
                  View my GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Have a project in mind?</h3>
            <p>
              I'd love to hear from you. Send me an email to get in touch.
            </p>

            <a
              className="contact-button"
              href="mailto:nchary791@gmail.com?subject=Portfolio%20Enquiry"
            >
              Send Me an Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;