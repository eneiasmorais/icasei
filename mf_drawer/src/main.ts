import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Configurações adicionais do servidor...

app.listen(PORT, () => {
  console.log(`Drawer server is running on http://localhost:${PORT}`);
});
