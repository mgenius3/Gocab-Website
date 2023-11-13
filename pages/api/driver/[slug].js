const {
  DriverRegistration,
  DriverSignIn,
} = require("../../../controller/driver");

export default function handler(req, res) {
  const slug = req.query.slug;

  if (req.method === "POST") {
    switch (slug) {
      case "login":
        DriverSignIn(req, res);
        break;
      case "register":
        DriverRegistration(req, res);
        break;
      default:
        res.json({ msg: "Invalid slug" });
    }
  }
}
