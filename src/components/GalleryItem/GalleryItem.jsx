import './GalleryItem.css';
import PropTypes from 'prop-types';

export const GalleryItem = ({ src, alt, largeImageURL, openModal }) => {
  return (
    <li className="GalleryItem" onClick={() => openModal(largeImageURL)}>
      <img src={src} alt={alt} className="GalleryItem-image" />
    </li>
  );
};

GalleryItem.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  largeImageURL: PropTypes.string,
  openModal: PropTypes.func,
};