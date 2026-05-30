const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const MONGO_URl = "mongodb://127.0.0.1:27017/test";

async function main() {
  await mongoose.connect(MONGO_URl);
  console.log("Connected to Db");
  await initDB();
}
main().catch((err) => {
  console.log(err);
});

const initDB = async () => {
  await listing.deleteMany({});
  await listing.insertMany(initData.data);
  console.log("data was inilized ");
};
