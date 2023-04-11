import { Link } from 'react-router-dom';

import { FaLinkedin, FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <h2>NextinGo</h2>
          </Link>
          <p>
            We believe that the power of new mobility – safer, greener and more
            connected – can change the world. And we know how to get it done. At
            NextinGo, we’re delivering the software capabilities, advanced
            computing platforms and networking architecture that makes mobility
            work.
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>
        <article>
          <h4>PARMALINKS</h4>
          <Link className="footer__links" to="/">
            Home
          </Link>
          <Link className="footer__links" to="/solutions">
            Solutions
          </Link>
          <Link className="footer__links" to="/careers">
            Career
          </Link>
          <Link className="footer__links" to="/about">
            About
          </Link>
          <Link className="footer__links" to="/contacts">
            Contact
          </Link>{' '}
        </article>

        <article>
          <h4>SOLUTIONS</h4>
          <Link className="footer__links">Business Segments</Link>
          <Link className="footer__links">Advanced Safety</Link>
          <Link className="footer__links">Connected Services</Link>
          <Link className="footer__links">Connection System</Link>
          <Link className="footer__links">Connectivity and Security</Link>
          <Link className="footer__links">Servers</Link>
          <Link className="footer__links">User Experiance</Link>
        </article>

        <article>
          <h4>PRIVACY</h4>
          <Link className="footer__links">Terms of Use</Link>
          <Link className="footer__links">NextinGo Privary Statement</Link>
          <Link className="footer__links">Cookie Policy</Link>
        </article>

        <article>
          <h4>GET IN TOUCH</h4>
          <Link className="footer__links" to="/contacts">
            Contact Us
          </Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small> NextinGo made with ❤️ &copy; 2023 All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
