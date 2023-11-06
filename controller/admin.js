const { LoginAdmin, getAllUsers, getAllReports } = require("../database/admin");
const jwt = require("jsonwebtoken");

const AdminSignIn = async (req, res) => {
  try {
    const user = await LoginAdmin(req.body);
    const token = jwt.sign({ ...user }, "gocab.transit.logistics");
    res.status(200).json({ msg: token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const fetchAllUsers = async (req, res) => {
  try {
    const allUsers = await getAllUsers();
    res.status(200).json({ msg: allUsers });
  } catch (error) {
    console.error("Error fetching drivers:", error.message);
  }
};

const fetchAllReports = async (req, res) => {
  try {
    const allReports = await getAllReports();
    res.status(200).json({ msg: allReports });
  } catch (error) {
    console.error("Error fetching drivers:", error.message);
  }
};

module.exports = {
  AdminSignIn,
  fetchAllUsers,
  fetchAllReports,
};
