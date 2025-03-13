import React from "react";
import { heroImage } from "./assets/images/imageIndex";

export default function Hero() {
  return (
    <section>
      <div className="section page-container columns">
        <div className="lg:col-span-4 col-span-2">
          <h1> 
            jessica<br></br>tidd
          </h1>
        </div>
        <div className="text-right lg:col-span-2 sm:col-span-1 lg:col-start-7 md:col-start-4 col-start-4 self-end hidden sm:block">
          <p>Hi, my name is Jessica (or Jess)</p>
        </div>
        <div className="lg:col-span-4 col-span-2 lg:col-start-9 col-start-5">
          <img src={heroImage} alt="Jessica Tidd" />
        </div>
      </div>
    </section>
  );
}
