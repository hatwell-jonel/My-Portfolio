import React from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <blockquote className="blockqoute">
          <q className="blockqoute_qoute">
            The bridge between knowledge and skill is practice. The bridge
            between skill and mastery is time.
          </q>
          <br />
          <cite className="blockqoute_cite">-Jim Bouchard</cite>
        </blockquote>

        <section className="contacts">
          <h2 className="contacts_title">Contacts</h2>

          <ul className="social_links">
            <li className="social_links-items">
              <a
                href="https://github.com/hatwell-jonel"
                target="_blank"
                aria-label="github"
              >
                <FaGithubSquare />
              </a>
            </li>
            <li className="social_links-items">
              <a
                href="https://www.linkedin.com/in/jonel-hatwell/"
                target="_blank"
                aria-label="linkedIn"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social_links-items">
              <a
                href="mailto:jonel.hatwell@gmail.com"
                target="_blank"
                aria-label="gmail"
              >
                <MdEmail />
              </a>
            </li>
          </ul>

          <p className="copyright">copyright &copy; 2022 Jonel Hatwell</p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
