import express = require('express');

const app = express();
const port = process.env.PORT || 3000; // Porta 3000 para mf_drawer

// Configuração do servidor e rotas para mf_drawer
// ...

app.listen(port, () => {
  console.log(
    `Microfrontend mf_drawer está rodando em http://localhost:${port}`,
  );
});
