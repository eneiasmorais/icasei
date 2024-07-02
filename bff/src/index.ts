import {
  searchVideosHandler,
  getMostPopularVideosHandler,
  getVideoByIdHandler,
} from './controllers';
import express from 'express';
import path from 'path';
import axios from 'axios';

const app = express();
const port = 4000;
const apiKey = 'AIzaSyCT6ebcDTZsRQfecDUd2gCv884_H6w4_hc';

app.use(express.static(path.join(__dirname, 'public')));

app.get('/searchVideos', async (req, res) => {
  const { q } = req.query;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${q}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data.items);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
}); // Middleware para permitir requisições JSON
app.use(express.json());

// Rota para buscar vídeos no YouTube por termo de busca
app.get('/searchVideos', searchVideosHandler);

// Rota para buscar vídeos mais populares no YouTube
app.get('/api/popularVideos', getMostPopularVideosHandler);

// Rota para buscar vídeo no YouTube por ID
app.get('/api/videos/:videoId', getVideoByIdHandler);

// Servir arquivos estáticos das aplicações microfrontend
app.use(
  '/mf_drawer',
  express.static(path.join(__dirname, '../../mf_drawer/dist')),
);
app.use(
  '/mf_videos',
  express.static(path.join(__dirname, '../../mf_videos/dist')),
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
