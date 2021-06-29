const express = require("express");
// const upload = require("../middleware/multer");

// let products = require("../data");

const router = express.Router();

const {
  productCreate,
  producList,
  productDelete,
  productUpdate,
  fetchProduct,
} = require("../controllers/productControllers");

router.param("productId", async (req, res, next, productId) => {
  const product = await fetchProduct(productId, next);
  if (product) {
    req.product = product;
    next();
  } else {
    const err = new Error("Product Not Found");
    err.status = 404;
    next(err);
  }
});

//another way to import
// const{productControllers} = require("../controllers/productControllers");
router.get("/", producList);

router.post("/", productCreate);

router.delete("/:productId", productDelete);

router.put("/:productId", productUpdate);

module.exports = router;
