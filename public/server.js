const express = require("express");
const path = require("path");

const app = express();

// Public folder serve karna
app.use(express.static(path.join(__dirname, "public")));

// Server start karna
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
