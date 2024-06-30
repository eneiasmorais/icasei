import { Request, Response } from 'express';
import { searchVideos } from './services';

// Controlador para lidar com requisições relacionadas ao microfrontend mf_drawer
export const getDrawerInfo = async (req: Request, res: Response) => {
  try {
    // Aqui você pode implementar a lógica necessária para mf_drawer
    // Por exemplo, integrar com serviços back-end, recuperar dados, etc.
    const drawerData = {
      links: ['Vídeos', 'Favoritos'],
      // Outras informações específicas do mf_drawer
    };

    res.json(drawerData);
  } catch (error) {
    console.error('Erro ao obter informações do drawer:', error);
    res.status(500).json({ error: 'Erro ao obter informações do drawer' });
  }
};

// Exemplo de uso do serviço para buscar vídeos do YouTube
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
