const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

mongoose.connect(
  "mongodb+srv://root:root@cluster0-1oicn.mongodb.net/buscadev?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port);
