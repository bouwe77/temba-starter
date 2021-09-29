#!/usr/bin/env node
import { execSync } from "child_process";
import kleur from "kleur";

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

console.log(kleur.green(`Cloning the temba-starter repository...`));
const gitCheckoutCommand = `git clone --depth 1 https://github.com/bouwe77/temba-starter ${projectName}`;
const checkedOut = runCommand(gitCheckoutCommand);
if (!checkedOut) process.exit(-1);

console.log(kleur.green(`Installing dependencies...`));
const installDepsCommand = `cd ${projectName} && npm install`;
const installedDeps = runCommand(installDepsCommand);
if (!installedDeps) process.exit(-1);

console.log(kleur.green(""));
console.log(kleur.green("Done! 🎉"));
console.log(kleur.green(""));
console.log(kleur.green("Start your Temba server as follows:"));
console.log(kleur.green(""));
console.log(kleur.green(`cd ${projectName} && npm start`));
console.log(kleur.green(""));
