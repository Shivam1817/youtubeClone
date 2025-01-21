import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function VideoCard({ video }) {
  const formatViews = (views) => {
    if (views >= 1000000) {
      return `${(views / 1000000).toFixed(1)}M views`;
    } else if (views >= 1000) {
      return `${(views / 1000).toFixed(1)}K views`;
    }
    return `${views} views`;
  };

  const formatDate = (date) => {
    const timeAgo = new Date(date);
    const now = new Date();
    const diff = (now - timeAgo) / 1000; // Convert to seconds

    if (diff < 60) return 'Just now';
    if (diff < 3600) return `${Math.floor(diff / 60)} minutes ago`;
    if (diff < 86400) return `${Math.floor(diff / 3600)} hours ago`;
    if (diff < 2592000) return `${Math.floor(diff / 86400)} days ago`;
    if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
    return `${Math.floor(diff / 31536000)} years ago`;
  };

  return (
    <Link to={`/watch/${video.id}`} className="videoCard">
      <div className="videoCard__thumbnail">
        <img 
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="videoCard__info">
        <div className="videoCard__avatar">
          <AccountCircleIcon />
        </div>
        <div className="videoCard__text">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.channelTitle}</p>
          <p>
            {video.statistics && formatViews(video.statistics.viewCount)} • {formatDate(video.snippet.publishedAt)}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default VideoCard;