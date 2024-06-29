import express from 'express';
import axios from 'axios';

const app = express();
const port = 4000;
const API_KEY = 'YOUR_YOUTUBE_API_KEY';
const API_URL = 'https://www.googleapis.com/youtube/v3/search';

app.use(express.json());

app.get('/search', async (req: any, res: any) => {
  const query = req.query.q as string;
  try {
    const response = await axios.get(API_URL, {
      params: {
        key: API_KEY,
        q: query,
        part: 'snippet',
        type: 'video',
        maxResults: 10,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).send('Error fetching data from YouTube API');
  }
});

app.listen(port, () => {
  console.log(`BFF server is running on http://localhost:${port}`);
});
