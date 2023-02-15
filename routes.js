const router = require("express").Router();

const homeController = require("./cotrollers/homeController");
const authController = require("./cotrollers/authController");

router.use(homeController);
router.use(authController);

module.exports = router;
