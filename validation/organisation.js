const OrganisationRegistrationInformationValidation = async (data) => {
  if (!data.name) throw Error("No name");
  if (!data.phone) throw Error("No phone");
  if (!data.email) throw Error("No email");
  if (!data.address) throw Error("No address");
  if (!data.model_service) throw Error("No model service");
  if (!data.business_document_url)
    throw Error("Please upload your business document");
  if (!data.bus_reg_no)
    throw Error("Please upload a business registration number");
};

module.exports = { OrganisationRegistrationInformationValidation };
