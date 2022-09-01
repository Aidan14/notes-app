require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes");
const PORT = process.env.PORT;
const cors = require("cors");

//Express Configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000" }));

//DB Configuration
mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;
db.on("error", (err) => console.error(err));
db.once("open", () => console.log("Connected to DB"));

//Initializing the server
app.use("/", router);

app.listen(PORT, () => {
  console.log("Server listening on: http://localhost:" + PORT);
});
