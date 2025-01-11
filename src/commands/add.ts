import chalk from "chalk";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export async function add(category: string, name?: string) {
  try {
    const templatesDir = resolve(__dirname, "../../templates/utils");
    const categoryPath = resolve(templatesDir, category);

    // Check if category exists
    try {
      await fs.access(categoryPath);
    } catch {
      console.error(
        chalk.red(
          `Category '${chalk.bold(category)}' does not exist in templates/utils`,
        ),
      );
      process.exit(1);
    }

    if (!name) {
      // If only category is provided then
      // Copy entire category folder
      const targetDir = resolve(process.cwd(), category);

      // Check if target directory already exists
      try {
        await fs.access(targetDir);
        console.error(
          chalk.red(
            `Directory '${chalk.bold(category)}' already exists in current location`,
          ),
        );
        process.exit(1);
      } catch {
        // Directory dont exist, OK
      }

      // Create and copy folder
      await fs.mkdir(targetDir, { recursive: true });
      await fs.cp(categoryPath, targetDir, { recursive: true });
      console.log(
        chalk.green(
          `Added ${chalk.bold(category)} directory to current location`,
        ),
      );
    } else {
      const extensions = [".ts", ".tsx"];
      let sourceFile: string | null = null;
      let extension: string | null = null;

      // Find file, can be .ts or .tsx
      for (const ext of extensions) {
        const testPath = resolve(categoryPath, `${name}${ext}`);
        try {
          await fs.access(testPath);
          sourceFile = testPath;
          extension = ext;
          break;
        } catch {
          continue;
        }
      }

      // If not found
      if (!sourceFile || !extension) {
        console.error(
          chalk.red(
            `File '${chalk.bold(name)}' does not exist as .ts or .tsx in ${chalk.bold(category)} category`,
          ),
        );
        process.exit(1);
      }

      // Create target path if exist
      const targetPath = resolve(process.cwd(), `${name}${extension}`);
      // Check if target file already exists
      try {
        await fs.access(targetPath);
        console.error(
          chalk.red(
            `File '${chalk.bold(`${name}${extension}`)}' already exists in current location`,
          ),
        );
        process.exit(1);
      } catch {
        // File dont exist in current location, OK
      }

      // Copy file to current location
      await fs.copyFile(sourceFile, targetPath);
      console.log(
        chalk.green(
          `Added ${chalk.bold(`${name}${extension}`)} to current location`,
        ),
      );
    }
  } catch (error) {
    console.error(chalk.red("Error adding file:"), chalk.red(error));
    process.exit(1);
  }
}
