import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css"; 


const ImageGallery = ({ images }) => {
  if (!images || images.length === 0) return null;
  
  return (
    <div className={styles.gallery}>
      {images.map((image) => (
        <ImageCard key={image.id} src={image.urls.small} alt={image.alt_description} />
      ))}
    </div>
  );
};

export default ImageGallery;

