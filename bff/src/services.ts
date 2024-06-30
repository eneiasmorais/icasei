import axios from 'axios';

// Chave da API do YouTube
const API_KEY = 'SUA_API_KEY_DO_YOUTUBE';

// URL base da API do YouTube
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

// Função para buscar vídeos no YouTube com base nos termos de busca
export const searchVideos = async (searchQuery: string): Promise<any> => {
  try {
    // Endpoint de busca de vídeos
    const url = `${BASE_URL}/search?key=${API_KEY}&part=snippet&type=video&q=${searchQuery}`;

    // Realiza a requisição GET para buscar vídeos
    const response = await axios.get(url);

    // Retorna os dados da resposta da API do YouTube
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    throw error;
  }
};
