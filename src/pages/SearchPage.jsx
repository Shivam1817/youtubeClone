import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { searchVideos } from '../services/api';
import VideoCard from '../components/VideoCard';

function SearchPage() {
  const { searchQuery } = useParams();
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
        const response = await searchVideos(searchQuery);
        setVideos(response.items);
        setLoading(false);
      } catch (err) {
        console.error('Search error:', err);
        setError('Error fetching search results');
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  if (loading) return <div className="loading">Loading search results...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <h2>Search Results for: {searchQuery}</h2>
      </div>
      <div className="searchPage__results">
        {videos.map((video) => (
          <VideoCard
            key={video.id.videoId}
            video={{
              id: video.id.videoId,
              snippet: video.snippet,
              statistics: { viewCount: "N/A" }
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchPage;