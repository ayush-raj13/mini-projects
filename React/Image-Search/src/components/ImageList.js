
import React, { useState } from 'react';
import './ImageList.css'; 

const ImageList = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-grid">
      {images.map((image) => (
        <div key={image.id} className="image-item" onClick={() => handleImageClick(image)}>
          <img src={image.urls.regular} alt={image.alt_description || 'Image'} />
          <div className="image-details">
            <div className="user-info">
              <span className="user-name">{image.user.username}</span>
            </div>
            <div className="likes-count">
              <span>{image.likes} Likes</span>
            </div>
          </div>
        </div>
      ))}
      {selectedImage && (
        <ImageModal open={true} onClose={() => setSelectedImage(null)} image={selectedImage} />
      )}
    </div>
  );
};

export default ImageList;
