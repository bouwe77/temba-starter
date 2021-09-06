import "dotenv/config";
import { create } from "temba";
// import { create } from "../temba/dist/index.js";

const config = {
  connectionString: process.env.MONGO_URL,
  resourceNames: ["movies"],
};
const server = create(config);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Temba is running on port ${port}`);
});
