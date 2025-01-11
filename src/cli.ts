#!/usr/bin/env node
import { Command } from "commander";

import { add } from "./commands/add.js";
import { template } from "./commands/init.js";
import { listTemplates } from "./commands/ls.js";
import { searchTemplates } from "./commands/search.js";

const program = new Command();

program
  .name("wwia")
  .description("CLI for adding predefined functions and templates")
  .version("1.0.1");

program
  .command("init")
  .description("Create a new project from template")
  .argument("name", "Template name (i.e., ts-base)")
  .action(template);

program
  .command("add")
  .description(
    "Add util(s) or component(s)\nIf only category is provided, the entire folder will be added. If name is also provided then it will only add one file.",
  )
  .argument("category", "Category (i.e, hooks, math, array)")
  .argument(
    "[name]",
    "Optional: Utils/component name (i.e., randomInt, tw-indicator)",
  )
  .action(add);

program
  .command("ls")
  .description("List all available templates and utilities")
  .action(listTemplates);

program
  .command("search")
  .description("Search templates and utilities")
  .argument("<query>", "Search query")
  .action(searchTemplates);

program.parse();
