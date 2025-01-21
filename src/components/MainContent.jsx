// src/components/MainContent.jsx
import { useState, useEffect } from 'react';
import { fetchVideos } from '../services/api';
import VideoCard from './VideoCard';

function MainContent() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    "All", "Music", "Gaming", "News", "Sports", "Learning", "Fashion"
  ];

  // Update the fetchVideos function in api.js
  const loadVideos = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchVideos();
      if (response.items && response.items.length > 0) {
        // Randomize the order of videos
        const shuffledVideos = [...response.items].sort(() => Math.random() - 0.5);
        setVideos(shuffledVideos);
      }
      setLoading(false);
    } catch (err) {
      console.error('Error loading videos:', err);
      setError('Error fetching videos');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVideos();
  }, [selectedCategory]); // Dependency on selectedCategory

  // Add refresh functionality
  const handleRefresh = () => {
    loadVideos();
  };

  if (loading) return <div className="loading">Loading videos...</div>;
  if (error) return (
    <div className="error">
      {error}
      <button onClick={handleRefresh} className="refresh-button">Try Again</button>
    </div>
  );

  return (
    <div className="mainContent">
      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            className={`category ${category === selectedCategory ? 'category--selected' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="videos">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
}

export default MainContent;