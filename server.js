const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/auth');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 3000;


mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida');
});


// Rotas

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // Substitua por sua origem frontend
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});