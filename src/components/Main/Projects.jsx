import React, { useState } from "react";
import { projects } from "../../data/projects";
import Modal from "./Modal";

function Projects() {
  const [noOfElements, setNoOfElelments] = useState(3);
  const slice = projects.slice(0, noOfElements);
  const [projDetails, setProjDetails] = useState([]);
  const [modal, setModal] = useState(false);

  const showMore = () => {
    setNoOfElelments(noOfElements + 3);
  };

  const getProject = (details) => {
    setModal(true);
    setProjDetails([
      {
        id: details.id,
        title: details.title,
        thumbnail: details.thumbnail,
        desc: details.desc,
        github: details.github,
        live_site: details.live_site,
        tech_stack: details.tech_stack,
      },
    ]);
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
              <div
                className="item"
                title={title}
                onClick={() => getProject(item)}
                key={id}
              >
                <div className="img">
                  <img src={thumbnail} alt={title} loading="lazy" />
                </div>
                <div className="text">
                  <p className="text_title">{title}</p>
                </div>
                <div className="tech_stack">
                  {tech_stack.map((stack) => (
                    <span className="tech_stack-tag" key={stack}>
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {modal && <Modal setModal={setModal} details={projDetails} />}

        {noOfElements !== 9 ? (
          <div className="more_button">
            <button type="button" onClick={showMore} tabIndex={3}>
              Show More...
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

export default Projects;
