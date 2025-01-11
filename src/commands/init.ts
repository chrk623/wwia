import chalk from "chalk";
import fs from "fs/promises";
import readline from "readline";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function template(templateName: string) {
  const templateDir = resolve(__dirname, "../../templates/init", templateName);

  // Check if template exists
  try {
    await fs.access(templateDir);
  } catch {
    console.error(
      chalk.red(
        `Template '${chalk.bold(templateName)}' not found in templates/init directory`,
      ),
    );
    process.exit(1);
  }

  // Create readline interface
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt for project name
  const projectName = await new Promise<string>((resolve) => {
    rl.question(chalk.cyan("Enter project name: "), (answer) => {
      rl.close();
      resolve(answer.trim());
    });
  });
  if (!projectName) {
    console.error(chalk.red("Project name cannot be empty"));
    process.exit(1);
  }

  const targetDir = resolve(process.cwd(), projectName);
  // Check if target directory already exists
  try {
    await fs.access(targetDir);
    console.error(
      chalk.red(`Directory '${chalk.bold(projectName)}' already exists`),
    );
    process.exit(1);
  } catch {
    // Directory dont exist, OK
  }

  try {
    // Create project directory
    await fs.mkdir(targetDir, { recursive: true });
    // Copy template files
    await fs.cp(templateDir, targetDir, { recursive: true });

    console.log(
      chalk.green(`
Project created successfully!
Location: ${chalk.bold(targetDir)}\n
Remeber to install!
chalk.cyan(pnpm install)
`),
    );
  } catch (error) {
    console.error(chalk.red("Error creating project:"), chalk.red(error));
    process.exit(1);
  }
}
