import axios from 'axios';
import { API_KEY } from '../config';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export const fetchVideos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'IN',
        key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
};

export const searchVideos = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search`, {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: query,
        type: 'video',
        key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error searching videos:', error);
    throw error;
  }
};

// Add to play video 
export const getVideoDetails = async (videoId) => {
  try {
    const response = await axios.get(`${BASE_URL}/videos`, {
      params: {
        part: 'snippet,statistics',
        id: videoId,
        key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching video details:', error);
    throw error;
  }
};

//adding to get comment on video 
export const getVideoComments = async (videoId) => {
  try {
    const response = await axios.get(`${BASE_URL}/commentThreads`, {
      params: {
        part: 'snippet',
        videoId: videoId,
        maxResults: 25,
        order: 'relevance',
        key: API_KEY
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};