const router = require("express").Router();

const homeController = require("./cotrollers/homeController");
const authController = require("./cotrollers/authController");
const cryptoController = require("./cotrollers/cryptoController");

router.use(homeController);
router.use(authController);
router.use("/crypto", cryptoController);
router.all("*", (req, res) => {
  res.render("home/404");
});

module.exports = router;
