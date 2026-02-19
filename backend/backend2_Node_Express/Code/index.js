// Import express module
const express = require("express");

// Create an express application
const app = express();

// Server port
const port = 3000;

// app.use((request, response, next) => {
//   console.log(request); //---> this will print object
//   console.log("request recieved");
//   next(); // move to the next route
// });

// ------------------------------
//      BASIC ROUTES
// ------------------------------

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to Express Server!");
});
app.get("/search", (req, res) => {
  // console.log(req.query);
  let { q } = req.query;
  //res.send("no ressult");
  res.send(`searched is: ${q}`);
});
// Example route for sending HTML
app.get("/html", (req, res) => {
  if (!q) {
    res.send("<h1>nothing searched</h1>");
  }
  res.send("<h1>This is HTML response</h1>");
});

// Example route sending JSON
app.get("/json", (req, res) => {
  res.json({
    key: "value",
    number: 123,
    success: true,
  }); 
});

// Example POST route
app.post("/", (req, res) => {
  console.log("POST request received");
  res.send("POST request response!");
});

// app.get("/search",(req,res)=>{
//     console.log(req.query);
// })
// ------------------------------
//      PATH PARAMETERS
// ------------------------------
app.get("/:username/:id", (req, res) => {
  console.log(req.params); // will print { username: "value" }
  let htmlstr = `<h1>Hello, ${req.params.username}</h1>`;
  res.send(htmlstr);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
