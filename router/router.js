const express = require("express");
const router = express.Router();
const adminAuth = require("../controller/admin_controller");
const authMiddleware = require("../middleware/auth");
const sigInSchema = require("../validator/validate-admin");
const validate = require("../middleware/validate-middleware");


// router.route("/").get((req,res)=>{
//     res.status(200).send("Hello World");
// });
router.route("/").get(adminAuth.home);
// router.route("/user").post(adminAuth.adminPostData);
router.route("/login").post(adminAuth.login);
// router.route("/login").post(validate(sigInSchema), adminAuth.login);
router.route("/user").get(adminAuth.user);
// router.route("/productcatone/:id").get(adminAuth.getPrductOneCatagory);
// router.route("/productcatone/type").get(adminAuth.getPrductOneCatagory);
router.route("/productcatone/:type").get(adminAuth.getPrductOneCatagory);
// router.route("/productcatone").get(adminAuth.getPrductOneCatagory);

router.route("/product").post(adminAuth.Procuct);
router.route("/catagory").post(adminAuth.Catagory);
router.route("/slider").post(adminAuth.Slider);

router.route("/products").get(adminAuth.getAllProcuct);
router.route("/catagorys").get(adminAuth.getAllCatagory);
router.route("/sliders").get(adminAuth.getAllSlider);

router.route("/catagory/delete/:id").delete(adminAuth.deleteCatagory);
router.route("/slider/delete/:id").delete(adminAuth.deleteSlider);
router.route("/product/delete/:id").delete(adminAuth.deleteProduct);

router.route("/product/edit/:id").get(adminAuth.getSingleUser);
router.route("/catagory/edit/:id").get(adminAuth.getSingleCatagory);
router.route("/slider/edit/:id").get(adminAuth.getSingleSlider);

router.route("/product/edit/:id").patch(adminAuth.UpdateProduct);
router.route("/catagory/edit/:id").patch(adminAuth.UpdateCatagory);
router.route("/slide/edit/:id").patch(adminAuth.updateSlider);

// router.route("/product/delete/id").delete(adminAuth.deleteProduct);
// router.route("/sliders").get(authMiddleware, adminAuth.getAllSlider);






module.exports = router
