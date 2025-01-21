// src/components/Comments.jsx
import { useState, useEffect } from 'react';
import { getVideoComments } from '../services/api';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Comments({ videoId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await getVideoComments(videoId);
        setComments(response.items);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching comments:', err);
        setError('Error loading comments');
        setLoading(false);
      }
    };

    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  const formatTimeAgo = (publishedAt) => {
    const now = new Date();
    const commentDate = new Date(publishedAt);
    const diffInSeconds = Math.floor((now - commentDate) / 1000);

    if (diffInSeconds < 60) return 'just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`;
    if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
    return `${Math.floor(diffInSeconds / 31536000)} years ago`;
  };

  const formatLikeCount = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
    return count;
  };

  const formatCommentText = (text) => {
    // Handle YouTube timestamps and links
    let formattedText = text.replace(
      /<a\s+href="([^"]+)"[^>]*>(.*?)<\/a>/g,
      (match, url, content) => {
        // Extract timestamp if it's a YouTube link
        if (url.includes('youtube.com/watch')) {
          const timeMatch = url.match(/[?&]t=(\d+)/);
          if (timeMatch) {
            const seconds = parseInt(timeMatch[1]);
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
          }
        }
        return content;
      }
    );

    // Remove HTML tags and convert entities
    formattedText = formattedText
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();

    return formattedText;
  };

  if (loading) return <div className="comments__loading">Loading comments...</div>;
  if (error) return <div className="comments__error">{error}</div>;

  return (
    <div className="comments">
      <div className="comments__header">
        <h3>{comments.length} Comments</h3>
        <div className="comments__sort">
          <AccountCircleIcon />
          <input type="text" placeholder="Add a comment..." />
        </div>
      </div>

      <div className="comments__list">
        {comments.map((comment) => {
          const { snippet } = comment.snippet.topLevelComment;
          return (
            <div key={comment.id} className="comment">
              <div className="comment__avatar">
                <img 
                  src={snippet.authorProfileImageUrl || 'default-avatar.png'} 
                  alt={snippet.authorDisplayName}
                  onError={(e) => {
                    e.target.src = 'https://yt3.ggpht.com/ytc/default-avatar.jpg';
                  }}
                />
              </div>
              <div className="comment__body">
                <div className="comment__header">
                  <span className="comment__author">
                    {snippet.authorDisplayName}
                  </span>
                  <span className="comment__timestamp">
                    {formatTimeAgo(snippet.publishedAt)}
                  </span>
                </div>
                <div className="comment__text">
                  {formatCommentText(snippet.textDisplay).split('\n').map((line, index) => (
                    <p key={index}>{line}</p>
                  ))}
                </div>
                <div className="comment__actions">
                  <button className="comment__action">
                    <ThumbUpIcon fontSize="small" />
                    <span>{formatLikeCount(snippet.likeCount)}</span>
                  </button>
                  <button className="comment__action">
                    <ThumbDownIcon fontSize="small" />
                  </button>
                  <button className="comment__action">Reply</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Comments;