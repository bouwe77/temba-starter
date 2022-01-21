#!/usr/bin/env node

// ===================================================================================
// This script will test a Temba server works by cloning it from the GitHub repository
// ===================================================================================

import { execSync } from "child_process";

const isDebugging = false;

// Logs to the console if debugging is enabled
const log = (message) => {
  if (isDebugging) console.log(message);
};

// Runs a command in the current shell
const run = (command) => {
  log(command);
  execSync(`${command}`, { stdio: "inherit" });
};

const folder = "smoketest";

// Remove the folder if it already exists
run(`rm -rf ${folder}`);

// Remove the .env file from the root folder
run(`rm .env`);

// Call Temba starter script
run(`node bin/cli.js ${folder}`);

// Overwrite .env with "PORT=9887"
run(
  `echo "# This .env is created by the test script and can safely be removed\nPORT=9887" > .env`
);

// Start the Temba server
run(`cd ${folder} && npm start`);

console.log("Done! 🎉");
