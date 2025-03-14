import React from "react";

const ImageCard = ({ src, alt, onClick }) => {
  return <img src={src} alt={alt} onClick={onClick} style={{ cursor: "pointer" }} />;
};

export default ImageCard;
