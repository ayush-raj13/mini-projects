// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import SearchPage from './pages/SearchPage';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const accessKey = 'AQglQXKYg1T5G_1jreotYGHtMknTvH8wXvpeVAyS4I8'; // Replace with your API key
    const apiUrl = searchQuery
      ? `https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=${accessKey}`
      : `https://api.unsplash.com/photos?client_id=${accessKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setImages(response.data.results || response.data); // Check if results property exists
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchQuery]);

  return (
    <Router>
      <div className="App">
        <Switch>
          
          <Route path="/">
            <SearchPage images={images} onSearch={setSearchQuery} />
          </Route>

        </Switch>
      </div>
    </Router>

  );
};

export default App;
