#!/usr/bin/env node
import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: "inherit" });
  } catch (e) {
    console.error("Failed to execute ${command}", e);
    return false;
  }
  return true;
};

const projectName = process.argv[2];

console.log(`Cloning the repository...`);
const gitCheckoutCommand = `git clone --depth 1 https://github.com/bouwe77/temba-starter ${projectName}`;
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies...`);
const installDepsCommand = `cd ${projectName} && npm install`;
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log("");
console.log("Done! 🎉");
console.log("");
console.log("Start your Temba server as follows:");
console.log("");
console.log(`cd ${projectName} && npm start`);
console.log("");
