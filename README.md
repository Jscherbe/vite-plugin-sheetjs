# Vite Plugin Sheetjs

Vite plugin that will parse spreadsheet files (xlsx, other spreadsheet files), and convert them to ES modules that output the data for use in applications. Apply the `file.xlsx?sheetjs` to imports to use, details below and optional name query to get only specific sheets.

Note this plugin is only for transforming spreadsheet files into data, not for adding sheetjs to project, etc.

This plugin is based on the [example from sheet js](https://docs.sheetjs.com/docs/demos/static/vitejs/#pure-data-plugin) and uses the [xlsx NPM module](https://www.npmjs.com/package/xlsx).

## Usage

```js
// Returns an object of sheets by name 
// ie. { sheetName: JSON, sheetName2: JSON, ... }
import all from "./example.xlsx?sheetjs";

// Only specific sheet name
import query1 from "./example.xlsx?sheetjs&name=test2";
import query2 from "./example.xlsx?sheetjs&name=test&name=test2";
```

## Vite Setup

```js
import { defineConfig } from "vite";
import sheetjsPlugin from "@ulu/vite-plugin-sheetjs";

export default defineConfig({
  plugins: [
    sheetjsPlugin(),
  ],
})

```
