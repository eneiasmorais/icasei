import { Request, Response } from 'express';
import { searchVideos } from './services';

// Controlador para lidar com requisições relacionadas a vídeos no microfrontend mf_videos
export const searchVideosHandler = async (req: Request, res: Response) => {
  const { searchQuery } = req.query;

  try {
    // Chama o serviço para buscar vídeos no YouTube com base no termo de busca
    const videos = await searchVideos(String(searchQuery));

    // Retorna os vídeos encontrados como resposta JSON
    res.json(videos);
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    res.status(500).json({ error: 'Erro ao buscar vídeos do YouTube' });
  }
};
