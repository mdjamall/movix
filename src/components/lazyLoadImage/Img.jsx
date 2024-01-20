import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage className={className || ""} alt="" src={src} effect="blur" />
  );
};

export default Img;
