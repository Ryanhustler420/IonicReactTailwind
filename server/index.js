const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Horse Ridding",
  });
});

app.listen(3000, () => {
  console.log("Listing");
});
