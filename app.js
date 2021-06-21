const { response } = require("express");
const express = require("express");
const data = require("./data");
const app = express();

// to get the array of data
app.get("/trails", (req, res) => {
  res.json(data);
});

app.listen(8000);

app.use(express.json()); // before all of our routes

// trails detail route
app.get("/trails/:trailId", (req, res) => {
  const reqMovie = data.find((trail) => trail.id === +req.params.trailID);
  if (reqTrail) {
    res.json(reqTrail);
  } else {
    res.status(404).json({ msg: "This path is not found" });
  }
});

// trail delete route

app.delete("/trails/:trailId", (req, res) => {
  const reqTrail = data.find((trail) => trail.id === +req.params.trailId);
  if (reqMovie) {
    data = data.filter((trail) => trail.id !== +req.params.trailId);
    res.status(204).end();
  } else {
    res.status(404).json({ msg: "This trip doesn't exist" });
  }
});

// trails create route
app.post("/trails", (req, res) => {
  req.body.id = data[data.length - 1].id + 1;
  req.body.slug = req.body.name.toLowerCase().replace(/ /gi, "-");
  data.push(req.body);
  res.status(201).json(req.body);
});

const trailsRouters = require("./routes/trailsRoutes");

// to get the array of data
app.use("/trails", trailsRouters);

const PORT = 8080;
