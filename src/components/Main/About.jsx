import React from "react";
import gif from "../../assets/images/computer-gif.gif";
import resume from "../../data/JonelHatwell-Resume.pdf";

function About() {
  return (
    <article className="about">
      <div className="container">
        <p className="section_title">about</p>

        <section className="about_info">
          <div className="about_info-top">
            <img src={gif} alt="gif" />
          </div>
          <div className="about_info-bottom">
            <p>
              Hello ✋! I'm Jonel Hatwell, an enthusiastic front-end developer.
              I graduated at City of Malabon university under the program of
              Bachelor of Science in Information Technology (BSIT).
              <br />
              <br />I have fundamental knowledge on front-end technologies like
              ReactJs, Figma, and Boostrap etc,. What I like the most about this
              field of development is I can express my creativity and logical
              thinking skills, which gives me the feeling of enthusiasm.
            </p>

            <a
              href={resume}
              className="download-btn"
              title="resumé"
              tabIndex={2}
              download="JonelHatwell-Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

export default About;
