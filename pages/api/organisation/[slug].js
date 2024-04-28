const {
  OrganisationRegistration,
  fetchApprovedOrganisation,
} = require("../../../controller/organisation");

export default function handler(req, res) {
  const slug = req.query.slug;
  console.log(slug, req.body);
  if (req.method === "GET") {
    switch (slug) {
      case "approved":
        fetchApprovedOrganisation(req, res);
        break;
      default:
        res.json({ msg: "Invalid slug" });
    }
  }
  if (req.method === "POST") {
    switch (slug) {
      // case "login":
      //   DriverSignIn(req, res);
      //   break;
      case "register":
        OrganisationRegistration(req, res);
        break;

      default:
        res.json({ msg: "Invalid slug" });
    }
  }
}
