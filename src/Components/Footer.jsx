
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <a href="#home" className="footer-brand">
          Narendra<span>.</span>
        </a>

        <p>
          Designed and built by Narendra Chary.
        </p>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Narendra Chary. All rights reserved.
          </p>
          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;