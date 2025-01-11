import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import chalk from "chalk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function listTemplates() {
  try {
    const templatesDir = resolve(__dirname, "../../templates");

    console.log(chalk.bold("\nAvailable Templates:"));

    // List init templates
    const initPath = resolve(templatesDir, "init");
    try {
      const initTemplates = await fs.readdir(initPath);
      console.log(chalk.blue("\ninit/"));
      for (const template of initTemplates) {
        const templatePath = resolve(initPath, template);
        const stats = await fs.stat(templatePath);
        if (stats.isDirectory()) {
          console.log(chalk.cyan(`  ${template}/`));
        }
      }
    } catch (error) {
      console.log(chalk.yellow("  No init templates found"));
    }

    // List utils
    const utilsPath = resolve(templatesDir, "utils");
    try {
      const utilCategories = await fs.readdir(utilsPath);
      console.log(chalk.blue("\nutils/"));
      for (const category of utilCategories) {
        const categoryPath = resolve(utilsPath, category);
        const stats = await fs.stat(categoryPath);
        if (stats.isDirectory()) {
          console.log(chalk.cyan(`  ${category}/`));
          try {
            const files = await fs.readdir(categoryPath);
            const tsFiles = files.filter(
              (file) => file.endsWith(".ts") || file.endsWith(".tsx"),
            );
            for (const file of tsFiles) {
              console.log(`    ${file.replace(/\.tsx?$/, "")}`);
            }
          } catch (error) {
            console.log(chalk.yellow(`    No files found`));
          }
        }
      }
    } catch (error) {
      console.log(chalk.yellow("  No utils found"));
    }
  } catch (error) {
    console.error("Error listing templates:", error);
    process.exit(1);
  }
}
