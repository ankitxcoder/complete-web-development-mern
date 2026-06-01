const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");

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

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("HomePage route");
});

app.get("/listingsss", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

//Create Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

// Read / Show Route
app.get("/listings/:id", async (req, res) => {
  //mere paas Id aa gye hai
  let { id } = req.params;

  // now id se id daa nikal lo db se
  const listingsIdData = await Listing.findById(id);

  res.render("listings/show.ejs", { listingsIdData });
});

// Create Post Route
app.post("/listings", async (req, res) => {
  // let {title,description,image,price,country,location}= req.body;
  let listing = req.body.listing;
  console.log(listing);
});
// app.get("/testList", async (req, res) => {
//   let sampleListening = new Listing({
//     title: "My New Villa ",
//     description: "this villa inside testlist route",
//     price: 1200,
//     location: "delhi",
//     country: "india",
//   });
//   await sampleListening.save();
//   console.log("respond was saved");
//   res.send("send successfully");
// });

app.listen("8000", () => console.log("app is listening"));
