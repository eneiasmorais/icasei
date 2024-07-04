import express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(
    `Microfrontend mf_drawer está rodando em http://localhost:${port}`,
  );
});
