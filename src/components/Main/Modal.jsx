import React from "react";
import logo from "./../../assets/images/logo512.png";
import { AiOutlinePoweroff } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
function Modal({ setModal, details }) {
  return (
    <div className="modal">
      <div className="modal_box">
        <div className="modal_box-header" onClick={() => setModal(false)}>
          <img src={logo} alt={logo} />

          <div className="exit">
            <AiOutlinePoweroff className="icon" />
          </div>
        </div>
        <div className="modal_box-body">
          {details.map((detail) => {
            const {
              id,
              title,
              thumbnail,
              desc,
              github,
              live_site,
              tech_stack,
            } = detail;
            return (
              <>
                <div className="img">
                  <img src={thumbnail} alt={title} />
                </div>
                <h2 className="title">{title}</h2>
                <div className="modal-stack">
                  {tech_stack.map((stack) => (
                    <span>{stack}</span>
                  ))}
                </div>
                <p className="desc">{desc}</p>

                <div className="externals">
                  <a href={github} className="external_links" target="_blank">
                    <FaGithub /> github
                  </a>
                  <a
                    href={live_site}
                    className="external_links"
                    target="_blank"
                  >
                    <FaExternalLinkAlt /> live site
                  </a>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Modal;
