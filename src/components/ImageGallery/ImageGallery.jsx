import PropTypes from "prop-types";
import "./ImageGallery.css";
function ImageGallery({ imagesPath = [] }) {
  const images = imagesPath.map((image) => {
    return <img key={image} src={image} className="project-image" />;
  });

  return <div className="image-gallery content-container">{images}</div>;
}

ImageGallery.propTypes = {
  imagesPath: PropTypes.array,
};
export default ImageGallery;
