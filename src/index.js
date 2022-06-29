const app = require("./app");

// Connect to DB
const mongoose = require("mongoose");
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB");
  })
  .catch((e) => {
    console.log("Error connecting to DB");
  });

// Start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Lisening on port: ${port}`);
});
