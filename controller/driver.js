const {
  DriverRegistrationInformationValidation,
} = require("../validation/driver");
const jwt = require("jsonwebtoken");
const {
  RegisterDriver,
  LoginDriver,
  getAllDrivers,
} = require("../database/driver");

const DriverRegistration = async (req, res) => {
  try {
    await DriverRegistrationInformationValidation(req.body);
    await RegisterDriver(req.body);
    const user = await LoginDriver({
      email: req.body.email,
      passwowrd: req.body.password,
    });

    const token = jwt.sign({ ...user }, "gocab.transit.logistics");

    res.status(201).json({ msg: token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const DriverSignIn = async (req, res) => {
  try {
    const user = await LoginDriver(req.body);
    const token = jwt.sign({ ...user }, "gocab.transit.logistics");
    res.status(200).json({ msg: token });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const fetchAllDrivers = async (req, res) => {
  try {
    const allDrivers = await getAllDrivers();
    res.status(200).json({ msg: allDrivers });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  DriverRegistration,
  DriverSignIn,
  fetchAllDrivers,
};
