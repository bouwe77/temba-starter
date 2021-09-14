import "dotenv/config";
import { create } from "temba";

// Example config:
// const config = {
//   resourceNames: ['movies'],
//   connectionString: 'mongodb://localhost:27017',
//   staticFolder: 'build',
//   apiPrefix: 'api',
// }

const server = create();

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Temba is running on port ${port}`);
});
