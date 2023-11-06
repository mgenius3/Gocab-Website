const DriverRegistrationInformationValidation = async (data) => {
  if (!data.name) throw Error("No name");
  if (!data.phone) throw Error("No phone");
  if (!data.email) throw Error("No email");
  if (!data.address) throw Error("No address");
};

module.exports = { DriverRegistrationInformationValidation };
