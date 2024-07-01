import { Request, Response } from 'express';
import { VideoService } from '../src/services/videoServices';

export class VideoController {
  public static async getVideos(req: Request, res: Response): Promise<void> {
    const query = req.query.q as string;

    if (!query) {
      res
        .status(400)
        .json({ error: 'Parâmetro "q" não fornecido na consulta.' });
      return;
    }

    try {
      const videos = await VideoService.searchVideos(query);
      res.json(videos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar vídeos.' });
    }
  }
}
