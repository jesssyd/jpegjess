import React from "react";
import { eduImage } from "./assets/images/imageIndex";

export default function Edu() {
  return (
    <section id="education">
      <div className="section page-container lg:gap-6 md:gap-4 gap-2 grid grid-cols-12">
        <div className="col-span-4">
          <img src={eduImage} alt="" />
        </div>
        <div className="col-span-8 flex flex-col flex-wrap justify-end">
          <h2>education</h2>
          <div className="lg:grid grid-cols-2 lg:gap-6 lg:items-end flex flex-col flex-wrap justify-end gap-3">
            <div>
              <p>Bachelor of Business Administration</p>
              <p className="caption">Wilfrid Laurier University | 2027</p>
            </div>
            <div>
              <p>Bachelor of Science, Computer Science</p>
              <p className="caption">Wilfrid Laurier University | 2027</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
