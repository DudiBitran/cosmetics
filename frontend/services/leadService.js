import httpService from "./httpService";

const createLead = async (credentials) => {
  try {
    const response = await httpService.post("/api/leads", credentials);
    return response;
  } catch (err) {
    throw err;
  }
};

const leadService = {
  createLead,
};

export default leadService;
