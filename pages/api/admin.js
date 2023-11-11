// In the ./pages/api/your-api-route-handler.js file (API route handler)
import nextConnect from "next-connect";

import router from "../next_routes/admin";

const apiHandler = nextConnect();
apiHandler.use(router);

export default apiHandler;
