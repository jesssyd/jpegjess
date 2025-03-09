import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import imageMetadata from "./galleryIndex.json";
import { prev, next } from "./assets/images/imageIndex.js";

function NextArrow({ className, style, onClick, height }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        top: height ? `${height / 2}px` : "50%", // Center based on image height
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <img src={next} alt="Next" className="h-full" />
    </div>
  );
}

function PrevArrow({ className, style, onClick, height }) {
  return (
    <div
      className={className}
      style={{
        ...style,
        top: height ? `${height / 2}px` : "50%", // Center based on image height
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <img src={prev} alt="Previous" className="h-full" />
    </div>
  );
}

function Carousel() {
  const images = imageMetadata;
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  const observedDiv = useRef(null);

  const sizesRef = useRef({ width: -1, height: -1 });

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if (observedDiv.current.offsetWidth !== sizesRef.current.width) {
        sizesRef.current.width = observedDiv.current.offsetWidth;
        setWidth(observedDiv.current.offsetWidth);
      }
      if (observedDiv.current.offsetHeight !== sizesRef.current.height) {
        sizesRef.current.height = observedDiv.current.offsetHeight;
        setHeight(observedDiv.current.offsetHeight);
      }
    });

    resizeObserver.observe(observedDiv.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [observedDiv.current]);

  const settings = {
    dots: false,
    arrows: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow height={height} />,
    prevArrow: <PrevArrow height={height} />,
  };

  return (
    <div className="slider-container col-start-2 col-span-4 lg:col-start-2 lg:col-span-10">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={"src/assets/images/gallery/" + image.fileName}
              alt={image.alt}
              className="galleryImage relative"
              ref={observedDiv}
            />
            <p>{image.date}</p>
            <p className="caption">{image.caption}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="section page-container columns ">
        <h2 className="col-start-2 col-span-4 lg:col-start-2 lg:col-span-10">
          gallery
        </h2>
        <Carousel />
      </div>
    </section>
  );
}
