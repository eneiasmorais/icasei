import axios from 'axios';

const YOUTUBE_API_KEY = 'AIzaSyCT6ebcDTZsRQfecDUd2gCv884_H6w4_hc';
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

//pesquisa
export const searchVideos = async (searchQuery: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        maxResults: 10,
        q: searchQuery,
        key: YOUTUBE_API_KEY,
        type: 'video',
      },
    });

    return response.data.items;
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    throw error;
  }
};
//traz videos
export const getMostPopularVideos = async () => {
  try {
    const response = await axios.get(`${baseUrl}/videos`, {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 10,
        regionCode: 'US',
        key: apiKey,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching popular videos');
  }
};
//by id
export const getVideoById = async (videoId: string) => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/videos',
      {
        params: {
          part: 'snippet',
          id: videoId,
          key: YOUTUBE_API_KEY,
        },
      },
    );

    return response.data.items[0];
  } catch (error) {
    console.error('Erro ao buscar vídeo do YouTube pelo ID:', error);
    throw error;
  }
};
