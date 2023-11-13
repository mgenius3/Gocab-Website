const verifyToken = require("../../../middleware/admin");
const router = require("express").Router();

const {
  AdminSignIn,
  fetchAllUsers,
  fetchAllReports,
} = require("../../../controller/admin");
const { fetchAllDrivers } = require("../../../controller/driver");

// module.exports = router;

export default function handler(req, res) {
  const slug = req.query.slug;

  if (req.method === "GET") {
    // Apply middleware only for GET requests
    verifyToken(req, res, function () {
      switch (slug) {
        case "all_drivers":
          fetchAllDrivers(req, res);
          break;
        case "all_users":
          fetchAllUsers(req, res);
          break;
        case "all_reports":
          fetchAllReports(req, res);
          break;
        default:
          res.json({ msg: "Invalid slug" });
      }
    });
  }

  if (req.method === "POST") {
    switch (slug) {
      case "login":
        AdminSignIn(req, res);
        break;
      default:
        res.json({ msg: "Invalid slug" });
    }
  }
}
