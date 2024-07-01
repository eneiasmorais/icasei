import axios from 'axios';

interface Video {
  id: string;
  title: string;
  favorite: boolean;
}

export class VideoService {
  private static readonly YOUTUBE_API_KEY =
    'AIzaSyCT6ebcDTZsRQfecDUd2gCv884_H6w4_hc';
  private static readonly YOUTUBE_API_URL =
    'https://www.googleapis.com/youtube/v3/search';

  public static async searchVideos(query: string): Promise<Video[]> {
    const params = {
      key: this.YOUTUBE_API_KEY,
      part: 'snippet',
      q: query,
      type: 'video',
      maxResults: '10', // Defina conforme necessário
    };

    try {
      const response = await axios.get(this.YOUTUBE_API_URL, { params });
      const videos: Video[] = response.data.items.map((item: any) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        favorite: false, // Inicialmente nenhum vídeo é favorito
      }));
      return videos;
    } catch (error) {
      console.error('Erro ao buscar vídeos do YouTube:', error);
      return [];
    }
  }
}
