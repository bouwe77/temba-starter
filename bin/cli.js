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

console.log(`Cloning the temba-starter repository...`);
const gitCheckoutCommand = `git clone --depth 1 https://github.com/bouwe77/temba-starter ${projectName}/tmp`;
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

// Copy necessary file from tmp to project folder
const filesToCopy = [
  "src",
  ".babelrc",
  ".env.example",
  ".gitignore",
  "package.template.json",
  "readme.md",
];
for (const file of filesToCopy) {
  const copied = runCommand(
    `mv ${projectName}/tmp/${file} ${projectName}/${file}`
  );
  if (!copied) process.exit(-1);
}

// Delete tmp folder
const deleted = runCommand(`rm -rf ${projectName}/tmp`);
if (!deleted) process.exit(-1);

// Install dependencies
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
