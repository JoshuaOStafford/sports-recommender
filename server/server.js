const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const { bothPlayoffContendersOnly } = require('./rules');
app.use(cors({
  origin: 'http://localhost:3000',
}));

const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api', async (req, res) => {
  try {
    let { date, rules } = req.query;
    const response = await axios.get(`https://api.balldontlie.io/v1/games?dates[]=${date}`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    let games = response.data.data; 
    if (rules == 'playoff_contenders') {
      games = bothPlayoffContendersOnly(games);
    }
    console.log(games);
    res.json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(5005, () => console.log('Server listening on port 5005'));

