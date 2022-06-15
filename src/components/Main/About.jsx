import React from "react";
import gif from "../../assets/images/computer-gif.gif";

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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              iure facere, necessitatibus et rem illum molestias, aspernatur
              odit voluptate aperiam temporibus quasi cupiditate minus
              dignissimos maiores quia. Deserunt, hic obcaecati nostrum nesciunt
              exercitationem qui adipisci maiores rem aperiam animi id excepturi
              earum ullam reprehenderit, molestias error consequatur tempora,
              suscipit vel.
            </p>

            <a className="download-btn" title="resumé" tabIndex={2}>
              Download Resume
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}

export default About;
