const express = require("express");
const app = express();

app.use(express.json());

// Before the other routes
app.use(express.static("build"));

const catList = [
  {
    id: 1,
    name: "Dimitrij",
    breed: "Korat",
    color: "dark grey",
    age: 6,
    sex: "Male",
    image: "https://cataas.com/cat",
  },
  {
    id: 2,
    name: "Yuliya",
    breed: "Ragdoll",
    color: "white/brown",
    age: 4,
    sex: "Female",
    image: "https://cataas.com/cat",
  },
  {
    id: 3,
    name: "Igor",
    breed: "Ragamuffin",
    color: "white/grey",
    age: 5,
    sex: "Male",
    image: "https://cataas.com/cat",
  },
  {
    id: 4,
    name: "Katja",
    breed: "Khao Manee",
    color: "white",
    age: 1,
    sex: "Female",
    image: "https://cataas.com/cat",
  },
];

app.get("/api/cats", (req, res) => {
  const singleCat = catList[Math.floor(Math.random() * catList.length)];
  res.send(singleCat);
});

app.post("/api/cats", (req, res) => {
  const data = req.body;
  data.id = catList.length + 1;
  catList.push(data);
  res.send(data);
});

// After all other routes

app.get("*", (req, res) => {
  res.sendFile("build/index.html");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`listening on port ${port}`));
