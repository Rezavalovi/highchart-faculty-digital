const Controller = require("../controllers/controller");
const authentication = require("../middlewares/authentication");
const router = require("express").Router();

router.post("/login", Controller.login);
router.get("/data", authentication, Controller.getAllData);

module.exports = router;
