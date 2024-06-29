import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

// Configurações adicionais do servidor...

app.listen(PORT, () => {
  console.log(`Videos server is running on http://localhost:${PORT}`);
});
