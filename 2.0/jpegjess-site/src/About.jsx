import React from "react";

function About() {
  return (
    <section id="about">
      <div className="section page-container">
        <h2>about me</h2>
        <div className="md:grid grid-cols-12 md:gap-6 flex flex-col gap-3">
          <div className="col-span-4">
            <p>
              I’m a third year double degree Business Administration and
              Computer Science student at Wilfrid Laurier University.
            </p>
          </div>
          <div className="col-span-4">
            <p>
              Outside of school, I am passionate about photography, music, and
              design and the technology of these fields.
            </p>
          </div>
          <div className="col-span-4">
            <p>
              To unwind, I enjoy cooking for my loved ones, reading, hitting the
              gym, and mentally designing my dream home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
