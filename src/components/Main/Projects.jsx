import React from "react";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <article className="projects">
      <div className="container">
        <p className="section_title">projects</p>

        <section className="projects_items">
          {projects.map((item) => {
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
      </div>
    </article>
  );
}

export default Projects;
