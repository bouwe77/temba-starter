require("dotenv").config();
const tembaServer = require("temba");

const config = {
  connectionString: process.env.MONGO_URL,
  resourceNames: ["movies"],
};
const server = tembaServer.create(config);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Temba is running on port ${port}`);
});
