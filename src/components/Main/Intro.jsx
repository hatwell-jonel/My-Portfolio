import React from "react";
import TypeAnimation from "react-type-animation";

function Intro() {
  return (
    <article className="intro">
      <div className="container">
        <section className="content">
          <p className="content_text content_hello">Hello, My name is</p>
          <TypeAnimation
            cursor={true}
            sequence={["Jonel Hatwell", 1000, " "]}
            wrapper="h1"
            repeat={Infinity}
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
