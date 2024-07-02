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
});
app.use(express.json());

app.get('/searchVideos', searchVideosHandler);

app.get('/api/popularVideos', getMostPopularVideosHandler);

app.get('/api/videos/:videoId', getVideoByIdHandler);

app.use(
  '/mf_drawer',
  express.static(path.join(__dirname, '../../mf_drawer/dist')),
);
app.use(
  '/mf_videos',
  express.static(path.join(__dirname, '../../mf_videos/dist')),
);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
