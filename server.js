const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

// Exemplo de rota:
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});