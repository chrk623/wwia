# wwia

**W**hat **W**as **I**t **A**gain (wwia)?

Over the years, I've written or come across many useful functions, but they often get lost because they were deleted or I simply forgot where I saved them. This tool is my attempt at collecting them again and making it easy to add them to my projects in the future.

In addition, starting a new project is often repetitive thus this tool also includes templates for scaffolding projects. For example, you can quickly scaffold a TypeScript project by running `npx wwia init ts-base`. Obviously, these templates are set up for my preferences, but they provide a good starting point.

## Installation

```bash
pnpm install -g wwia
# or npm, bun, yarn...
```

Or use directly with `npx`:

```bash
npx wwia
```

## Usage

```bash
# init a ts project
npx wwia init ts-base
# or js
npx wwia init js-base

# to add a single file/function
npx wwia add dt unix-to-date
# to add the whole datetime collection
npx wwia add dt

# list everything
npx wwia ls

# fuzzy search unix related files
npx wwia search unix
```

## Usage

### Add utility functions

```bash
# add single util
wwia add dt unix-to-date
# add entire datetime category
wwia add dt
```

### Create new project

```bash
wwia init ts-base
```

### List available templates

```bash
wwia ls
```

### Search templates

```bash
wwia search unix
```

## Available Templates

See [TEMPLATES.md](./TEMPLATES.md) for a complete list of available templates and utilities.
