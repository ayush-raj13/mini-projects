
import React, { useState } from 'react';
import './SearchPage.css';
import ImageModal from '../components/ImageModal'; 
import logo from './logo.jpg'

const SearchPage = ({ images, onSearch }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query); 
  };

  
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div>
      <div className="search-container">
        <div className="logo">
          <a href="/"> 
            <img src={logo} alt="Logo" width="150" height="100" />
          </a>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search images"
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
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
      </div>

      {/* Conditionally render the ImageModal when a selected image exists */}
      {selectedImage && (
        <ImageModal open={true} onClose={() => setSelectedImage(null)} image={selectedImage} />
      )}
    </div>
  );
};

export default SearchPage;
