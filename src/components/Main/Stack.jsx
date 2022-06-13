import React from "react";
import { stack } from "../../data/stack.js";
import Marquee from "react-fast-marquee";
function Stack() {
  console.log(stack.map((item) => item));
  return (
    <article className="stack">
      <div className="container">
        <p className="section_title">tech stack</p>

        <section className="stack_info">
          <Marquee gradientColor speed={75} pauseOnHover>
            {stack.map((stack) => {
              return (
                <>
                  <div className="stack_info-box" key={stack.uid}>
                    <img src={stack.img} alt={stack.name} />
                  </div>
                </>
              );
            })}
          </Marquee>
        </section>
      </div>
    </article>
  );
}

export default Stack;
