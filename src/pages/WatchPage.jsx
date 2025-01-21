import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoDetails } from '../services/api';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import SaveIcon from '@mui/icons-material/Save';

function WatchPage() {
  const { videoId } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await getVideoDetails(videoId);
        setVideo(response.items[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching video details:', error);
        setLoading(false);
      }
    };

    fetchVideoDetails();
  }, [videoId]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!video) return <div className="error">Video not found</div>;

  return (
    <div className="watchPage">
      <div className="watchPage__player">
        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={video.snippet.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="watchPage__info">
        <h1>{video.snippet.title}</h1>
        
        <div className="watchPage__stats">
          <div className="watchPage__stats__left">
            <span>{video.statistics.viewCount} views</span>
            <span>{new Date(video.snippet.publishedAt).toLocaleDateString()}</span>
          </div>
          
          <div className="watchPage__stats__right">
            <button>
              <ThumbUpIcon /> {video.statistics.likeCount}
            </button>
            <button>
              <ThumbDownIcon />
            </button>
            <button>
              <ShareIcon /> Share
            </button>
            <button>
              <SaveIcon /> Save
            </button>
          </div>
        </div>

        <div className="watchPage__description">
          <h3>{video.snippet.channelTitle}</h3>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
}

export default WatchPage;