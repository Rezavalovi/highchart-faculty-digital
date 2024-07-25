const route = require("./route");

const router = require("express").Router();

router.use("/", route);

module.exports = router;
