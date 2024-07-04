import express = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(
    `Microfrontend mf_videos está rodando em http://localhost:${port}`,
  );
});
