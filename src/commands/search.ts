import chalk from "chalk";
import Fuse from "fuse.js";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface TemplateItem {
  name: string;
  path: string;
  type: "init" | "utils";
  category?: string;
}

async function getAllTemplates(): Promise<TemplateItem[]> {
  const templatesDir = resolve(__dirname, "../../templates");
  const templates: TemplateItem[] = [];

  // Get init templates
  const initPath = resolve(templatesDir, "init");
  try {
    const initTemplates = await fs.readdir(initPath);
    for (const template of initTemplates) {
      const templatePath = resolve(initPath, template);
      const stats = await fs.stat(templatePath);
      if (stats.isDirectory()) {
        templates.push({
          name: template,
          path: `init/${template}`,
          type: "init",
        });
      }
    }
  } catch (error) {
    console.error("Error reading init templates:", error);
  }

  // Get utils
  const utilsPath = resolve(templatesDir, "utils");
  try {
    const categories = await fs.readdir(utilsPath);
    for (const category of categories) {
      const categoryPath = resolve(utilsPath, category);
      const stats = await fs.stat(categoryPath);
      if (stats.isDirectory()) {
        const files = await fs.readdir(categoryPath);
        for (const file of files) {
          if (file.endsWith(".ts") || file.endsWith(".tsx")) {
            templates.push({
              name: file.replace(/\.tsx?$/, ""),
              path: `utils/${category}/${file}`,
              type: "utils",
              category: category,
            });
          }
        }
      }
    }
  } catch (error) {
    console.error("Error reading utils:", error);
  }

  return templates;
}

export async function searchTemplates(query: string) {
  const templates = await getAllTemplates();

  // fuse, fuzzy search instance
  const fuse = new Fuse(templates, {
    keys: ["name", "category"],
    threshold: 0.4,
    shouldSort: true,
  });
  // fuzzy search
  const results = fuse.search(query);
  if (results.length === 0) {
    console.log(chalk.yellow("\nNo matching templates found."));
    return;
  }

  console.log(chalk.bold("\nSearch results:"));
  results.forEach(({ item }, index) => {
    console.log(`\n${chalk.blue(index + 1)}. ${chalk.bold(item.name)}`);
    console.log(chalk.dim("   Type:"), item.type);
    if (item.category) {
      console.log(chalk.dim("   Category:"), item.category);
    }

    // Show instructions
    console.log(
      chalk.dim("   To add:"),
      chalk.green(
        item.type === "init"
          ? `npx wwia init ${item.name}`
          : `npx wwia add ${item.category} ${item.name}`,
      ),
    );
  });
}
