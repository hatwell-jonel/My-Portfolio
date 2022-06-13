import React, { useState } from "react";
import { projects } from "../../data/projects";

function Projects() {
  const [noOfElements, setNoOfElelments] = useState(3);
  const slice = projects.slice(0, noOfElements);

  const showMore = () => {
    setNoOfElelments(noOfElements + 3);
  };

  return (
    <article className="projects">
      <div className="container">
        <p className="section_title">projects</p>

        <section className="projects_items">
          {slice.map((item) => {
            const {
              id,
              title,
              thumbnail,
              desc,
              github,
              live_site,
              tech_stack,
            } = item;

            return (
              <div className="item" key={id}>
                <div className="img">
                  <img src={thumbnail} alt={title} />
                </div>
                <div className="text">
                  <p className="text_title">{title}</p>
                </div>
                <div className="tech_stack">
                  {tech_stack.map((stack) => (
                    <span className="tech_stack-tag">{stack}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {noOfElements !== 9 ? (
          <div className="more_button">
            <button type="button" onClick={showMore}>
              Show More...
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default Projects;
