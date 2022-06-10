import React from "react";
import Typical from "react-typical";

function Intro() {
  return (
    <article className="intro">
      <div className="container">
        <section className="content">
          <p className="content_text content_hello">Hello, My name is</p>
          {/* <h1 className="content_text content_name">Jonel Hatwell</h1> */}
          <Typical
            steps={["Jonel Hatwell", 3000]}
            loop={5}
            wrapper="h1"
            className="content_text content_name"
          />
          <p className="content_text content_tagline">
            Front-end developer, I translate mock-up design to an awesome
            website.
          </p>
        </section>
      </div>
    </article>
  );
}

export default Intro;
