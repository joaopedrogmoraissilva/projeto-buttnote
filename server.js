const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('src/routes/auth');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;


mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Conexão com o banco de dados estabelecida');
});


// Rotas
app.use('/api/auth', authRoutes);

app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});