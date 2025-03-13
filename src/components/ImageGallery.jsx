import ImageCard from "./ImageCard";

const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null; 
  return (
    <div className="gallery">
      {images.map((image) => (
        <img key={image.id} src={image.urls.small} alt={image.alt_description} />
      ))}
    </div>
  );
};

export default ImageGallery;
