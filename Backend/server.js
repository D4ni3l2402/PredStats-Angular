// server.js
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

app.get('/api/items', async (req, res) => {
  const result = await axios.get('https://omeda.city/items.json');
  res.json(result.data);
  console.log(result.data);
});

app.get('/api/items/:item', async (req, res) => {
  const itemName = req.params.item;
  try {
    const result = await axios.get(`https://omeda.city/items/${itemName}.json`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: `Fehler beim Abrufen von Held "${itemName}"` });
  }
});

app.get('/api/heroes', async (req, res) => {
  const result = await axios.get('https://omeda.city/heroes.json');
  res.json(result.data);
  console.log(result.data);
});

app.get('/api/heroes/:hero', async (req, res) => {
  const heroName = req.params.hero;
  try {
    const result = await axios.get(`https://omeda.city/heroes/${heroName}.json`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: `Fehler beim Abrufen von Held "${heroName}"` });
  }
});

app.get('/api/hero_stats', async (req, res) => {
  const result = await axios.get('https://omeda.city/dashboard/hero_statistics.json');
  res.json(result.data);
  console.log(result.data);
});

app.get('/api/players', async (req, res) => {
  const result = await axios.get('https://omeda.city/players.json');
  res.json(result.data);
  console.log(result.data);
});

app.get('/api/players/:playerID', async (req, res) => {
  const playerID = req.params.playerID;
  try {
    const result = await axios.get(`https://omeda.city/players/${playerID}.json`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: `Fehler beim Abrufen von Held "${playerID}"` });
  }
});

app.get('/api/players/:playerID/statistics', async (req, res) => {
  const playerID = req.params.playerID;
  try {
    const result = await axios.get(`https://omeda.city/players/${playerID}/statistics.json`);
    res.json(result.data);
  } catch (err) {
    res.status(500).json({ error: `Fehler beim Abrufen von Held "${playerID}"` });
  }
});






app.listen(3000, () => console.log('Proxy läuft auf Port 3000'));

