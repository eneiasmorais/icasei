import { Request, Response } from 'express';
import { searchVideos, getMostPopularVideos, getVideoById } from './services';
import axios from 'axios';

const apiKey = 'AIzaSyCT6ebcDTZsRQfecDUd2gCv884_H6w4_hc';

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
  try {
    const videos = await getMostPopularVideos();
    res.json(videos);
  } catch (error) {
    console.error('Error fetching popular videos:', error.message);
    res.status(500).json({ message: 'Internal Server Error' });
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
