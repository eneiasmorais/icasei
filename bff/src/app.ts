import express from 'express';
import path from 'path';
import {
  searchVideosHandler,
  getMostPopularVideosHandler,
  getVideoByIdHandler,
} from './controllers';
import axios from 'axios';

const app = express();
const port = 4000;

app.get('/api/videos', async (req, res) => {
  const { query } = req.query;
  const apiKey = 'YOUR_YOUTUBE_API_KEY';
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

// Middleware para permitir requisições JSON
app.use(express.json());

// Rota para buscar vídeos no YouTube por termo de busca
app.get('/searchVideos', searchVideosHandler);

// Rota para buscar vídeos mais populares no YouTube
app.get('/api/popularVideos', getMostPopularVideosHandler);

// Rota para buscar vídeo no YouTube por ID
app.get('/api/videos/:videoId', getVideoByIdHandler);

// Rota para renderizar o index.html
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rota para enviar o arquivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
