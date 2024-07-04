import express from 'express';
import path from 'path';
import { getMostPopularVideosHandler } from './controllers';

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname)));

app.use(
  '/mf_drawer',
  express.static(path.join(__dirname, '../../mf_drawer/dist')),
);
app.use(
  '/mf_videos',
  express.static(path.join(__dirname, '../../mf_videos/dist')),
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use(express.json());

app.get('/searchVideos', searchVideosHandler);

app.get('/api/popularVideos', getMostPopularVideosHandler);

app.get('/api/videos/:videoId', getVideoByIdHandler);
