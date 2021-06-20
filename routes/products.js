const express = require("express");
const data = require("./data");
 
router.get("/products", (req,res)=>{    res.json(products)
})

router.get("/products",(req,res)=>{
    {...}
})


// controllers import here

const trailsControllers = require("../controllers/trailsControllers");

const { trailCreate, trailDelete, trailsList, trailDetail } = require("../controllers/trailsControllers");


const router = express.Router();

// to get the array of data

router.get("/", trailsList);

// trails datail route
router.get("/:trailId", trailDetail);

// trails delete route
router.delete("/:trailId", trailDelete);

// trails create route
router.post("/", trailCreate);

module.exports = router;