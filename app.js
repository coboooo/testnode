const express = require("express");
const axios = require("axios");

const app = express();
const baseURL = "https://pokeapi.co/api/v2/";

app.get("/", (req, res) => {
  res.send("Welcome to Pokemon API");
});

app.get("/pokemon", (req, res) => {
  const limit = 151; // 가져올 포켓몬 수
  axios
    .get(`${baseURL}pokemon?limit=${limit}`)
    .then((response) => {
      const names = response.data.results.map((pokemon) => pokemon.name);
      res.send({ names });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error);
    });
});

// app.listen(3000, () => {
//   console.log("Server running at http://localhost:3000/");
// });

//
