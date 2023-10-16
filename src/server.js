import "dotenv/config";
import { create } from "temba";

const server = create({
  port: process.env.PORT || 3000,
});

server.start();
