const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");

const MONGO_URl = "mongodb://127.0.0.1:27017/test";
main()
  .then(() => {
    console.log("connected to Db");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URl);
}

app.get("/testList", async (req, res) => {
  let sampleListening = new Listing({
    title: "My New Villa ",
    description: "this villa inside testlist route",
    price: 1200,
    location: "delhi",
    country: "india",
  });
  await sampleListening.save();
  console.log("respond was saved");
  res.send("send successfully");
});
app.listen("8000", () => console.log("app is listening"));
