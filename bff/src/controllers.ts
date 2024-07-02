import { Request, Response, query } from 'express';
import { searchVideos, getMostPopularVideos, getVideoById } from './services';

export const searchVideosHandler = async (req: Request, res: Response) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).json({ error: 'Parameter "q" is required' });
  }

  try {
    const videos = await searchVideos(query as string);
    res.json(videos);
  } catch (error) {
    console.error('Erro ao buscar vídeos:', error);
    res.status(500).json({ error: 'Erro ao buscar vídeos' });
  }
};

export const getMostPopularVideosHandler = async (
  req: Request,
  res: Response,
) => {
  const { regionCode } = req.query;

  try {
    const videos = await getMostPopularVideos(regionCode as string);
    res.json(videos);
  } catch (error) {
    console.error('Erro ao buscar vídeos mais populares:', error);
    res.status(500).json({ error: 'Erro ao buscar vídeos mais populares' });
  }
};

export const getVideoByIdHandler = async (req: Request, res: Response) => {
  const { videoId } = req.params;

  if (!videoId) {
    return res.status(400).json({ error: 'Parameter "videoId" is required' });
  }

  try {
    const video = await getVideoById(videoId);
    res.json(video);
  } catch (error) {
    console.error('Erro ao buscar vídeo pelo ID:', error);
    res.status(500).json({ error: 'Erro ao buscar vídeo pelo ID' });
  }
};
