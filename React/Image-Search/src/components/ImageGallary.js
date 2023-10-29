
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageGallery.css'; 

const ImageGallery = ({ searchQuery, onSearch }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const accessKey = 'AQglQXKYg1T5G_1jreotYGHtMknTvH8wXvpeVAyS4I8'; 
    const apiUrl = searchQuery
      ? `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`
      : `https://api.unsplash.com/photos?client_id=${accessKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setImages(response.data.results || response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(e.target.elements.search.value);
  };

  return (
    <div>
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            className="search-input"
            type="text"
            name="search"
            placeholder="Search images"
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="image-grid">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.urls.regular} alt={image.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;

