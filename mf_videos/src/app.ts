import express = require('express');

const app = express();
const port = process.env.PORT || 3001; // Porta 3001 para mf_videos

// Configuração do servidor e rotas para mf_videos
// ...

app.listen(port, () => {
  console.log(
    `Microfrontend mf_videos está rodando em http://localhost:${port}`,
  );
});
