const verifyToken = require("../middleware/admin");
const router = require("express").Router();

const {
  AdminSignIn,
  fetchAllUsers,
  fetchAllReports,
} = require("../controller/admin");
const { fetchAllDrivers } = require("../controller/driver");

router.post("/login", AdminSignIn);

router.use(verifyToken);
router.get("/all_drivers", fetchAllDrivers);
router.get("/all_users", fetchAllUsers);
router.get("/all_reports", fetchAllReports);

module.exports = router;
