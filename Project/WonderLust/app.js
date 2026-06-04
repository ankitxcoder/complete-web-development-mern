const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");

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
app.use(methodOverride("_method"));

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
  // req.body.listing --> raw data with no rules
  // // let {title,description,image,price,country,location}= req.body;
  // let listing = req.body.listing;
  // console.log(listing);
  // now need to convert this data into mongoose documnet so it can validate and do etc etc
  const newlistong = new Listing(req.body.listing);
  await newlistong.save();
  res.redirect("/listingsss");
});

//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listingsIdData = await Listing.findById(id);
  res.render("listings/edit.ejs", { listingsIdData });
});

//update Rote
app.put("/listings/:id", async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  // res.redirect("/listingsss");
  res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedListing = await Listing.findByIdAndDelete(id);
  console.log(deletedListing);
  res.redirect("/listingsss");
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
