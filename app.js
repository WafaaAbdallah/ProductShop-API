const express = require("express");

const productRoutes = require("./routes/products");
const cors = require("cors");
const path = require("path");
const shopRoutes = require("./routes/shops");
const db = require ("./db/models")
// let products = require("./data");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.use("/media", express.static(path.join(__dirname, "media")));
app.use("/shops", shopRoutes);

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});
db.sequelize.sync();
const PORT = 8000;
app.listen(8000);

