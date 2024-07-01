import axios from 'axios';

// Chave da API do YouTube
const YOUTUBE_API_KEY = 'AIzaSyCT6ebcDTZsRQfecDUd2gCv884_H6w4_hc';

// URL base da API do YouTube
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Função para buscar vídeos no YouTube com base nos termos de busca
export const searchVideos = async (searchQuery: string) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        part: 'snippet',
        maxResults: 10, // Número máximo de resultados
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

export const getMostPopularVideos = async (regionCode: string = 'US') => {
  try {
    const response = await axios.get(
      'https://www.googleapis.com/youtube/v3/videos',
      {
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          regionCode,
          key: YOUTUBE_API_KEY,
        },
      },
    );

    return response.data.items;
  } catch (error) {
    console.error('Erro ao buscar vídeos mais populares do YouTube:', error);
    throw error;
  }
};

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

    return response.data.items[0]; // Retorna o primeiro item encontrado (deveria haver apenas um)
  } catch (error) {
    console.error('Erro ao buscar vídeo do YouTube pelo ID:', error);
    throw error;
  }
};
