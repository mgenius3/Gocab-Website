const router = require("express").Router();

const { DriverRegistration, DriverSignIn } = require("../controller/driver");

router.post("/register", DriverRegistration);
router.post("/login", DriverSignIn);

module.exports = router;
