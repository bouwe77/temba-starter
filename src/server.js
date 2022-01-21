import "dotenv/config";
import { create } from "temba";

const server = create();

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Temba is running on port ${port} ✅`);
});
