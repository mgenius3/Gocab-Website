const {
  OrganisationRegistrationInformationValidation,
} = require("../validation/organisation");
const jwt = require("jsonwebtoken");
const {
  RegisterOrganisation,
  getAllOrganisation,
  getApprovedOrganisations,
} = require("../database/organisation");

const OrganisationRegistration = async (req, res) => {
  try {
    console.log("hell");
    console.log(req.body);
    await OrganisationRegistrationInformationValidation(req.body);
    console.log("organisation");
    await RegisterOrganisation(req.body);
    res.status(201).json({ msg: token });
  } catch (err) {
    console.log(err.messsage);
    res.status(400).json({ msg: err.message });
  }
};

// const DriverSignIn = async (req, res) => {
//   try {
//     const user = await LoginDriver(req.body);
//     const token = jwt.sign({ ...user }, "gocab.transit.logistics");
//     res.status(200).json({ msg: token });
//   } catch (err) {
//     res.status(400).json({ msg: err.message });
//   }
// };

const fetchAllOrganisation = async (req, res) => {
  try {
    const allDrivers = await getAllOrganisation();
    res.status(200).json({ msg: allDrivers });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

const fetchApprovedOrganisation = async (req, res) => {
  try {
    const approvedOrganisations = await getApprovedOrganisations();
    res.status(200).json({ msg: approvedOrganisations });
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
};

module.exports = {
  OrganisationRegistration,
  fetchAllOrganisation,
  fetchApprovedOrganisation,
};
