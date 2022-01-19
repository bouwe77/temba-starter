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
const gitCheckoutCommand = `git clone --depth 1 https://github.com/bouwe77/temba-starter ${projectName}`;
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(`Installing dependencies...`);
const installDepsCommand = `cd ${projectName} && npm install`;
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(`Cleaning up...`);

const whereAreWeCommand = `pwd`;
runCommand(whereAreWeCommand);

// Replace package.json by the nice and clean template
const movePackageJsonCommand = `cd ${projectName} && mv package.template.json package.json`;
const packageJsonMoved = runCommand(movePackageJsonCommand);
if (!packageJsonMoved) process.exit(-1);

// Delete the bin folder
const deleteBinFolderCommand = `cd ${projectName} && rm -rf bin`;
const binFolderDeleted = runCommand(deleteBinFolderCommand);
if (!binFolderDeleted) process.exit(-1);

console.log("");
console.log("Done! 🎉");
console.log("");
console.log("Start your Temba server as follows:");
console.log("");
console.log(`cd ${projectName} && npm start`);
console.log("");
