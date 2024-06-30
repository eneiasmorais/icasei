// src/index.ts
import express from 'express';
import {
  getDrawerInfo,
  searchVideosHandler,
} from '../../mf_drawer/src/controllers';
import path from 'path';

const app = express();
const port = 4000;

// Middleware para permitir requisições JSON
app.use(express.json());

// Rota para obter informações do microfrontend mf_drawer
app.get('/mf_drawer', getDrawerInfo);

// Rota para buscar vídeos no YouTube
app.get('/searchVideos', searchVideosHandler);

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
