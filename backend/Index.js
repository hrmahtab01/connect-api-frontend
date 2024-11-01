const express = require("express");
const cors = require("cors");
const app = express();
const port = 3030;

// Middleware
app.use(express.json());
app.use(cors());

// Home route
app.get("/", (req, res) => {
  res.send("This is the home route, my brother");
});

// User route
app.route('/user')
  .get((req, res) => {
    res.send('This is the user page, my brother');
  })
  .post((req, res) => {
    res.status(200).send(req.body);
  })
  .patch((req, res) => {
    res.send("Update your data successfully");
  })
  .delete((req, res) => {
    res.send("Delete your data successfully");
  })
  .put((req, res) => {
    res.send("Update your special data");
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
