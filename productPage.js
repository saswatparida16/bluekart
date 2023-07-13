const express = require("express");
const product = require("./models/products.js");
const router = express.Router();


router.post("/addproduct", async (req, res) => {
  let data = await product.findOne({ id: req.body.id });
  if (data) {
    return res
      .status(400)
      .json({ error: "sorry a product with this id aready exists" });
  }
  data = await product.create({
    id: req.body.id,
    ProductName: req.body.ProductName,
    ProductDescription: req.body.ProductDescription,
    ProductFeature: req.body.ProductFeature,
    ProductRatings: req.body.ProductRatings,
    image1: req.body.image1,
    image2: req.body.image2,
    image3: req.body.image3,
    image4: req.body.image4,
    image5: req.body.image5,
    tag: req.body.tag,
    price: req.body.price,
  });
  res.send("Posted");
});

// router.get("/getProductDetails/:id",async(req,res)=>{
router.get("/getProductDetails",async(req,res)=>{
  try{
  //  let fetchId = req.params.id;
  const value = await product.find().exec();
  res.send(value);
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
})
router.get("/getProductDetails/:id",async(req,res)=>{
  try{
   let fetchId = req.params.id;
  const value = await product.find({id:fetchId}).exec();
  res.send(value);
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
})
module.exports = router;
