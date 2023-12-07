# Vite Plugin Sheetjs

This plugin will convert spreadsheets into JSON when imported. Apply the suffix ie. `file.xlsx?sheetjs` to load as JSON, optional "name" query can be used to get only specific sheet(s). See usage details below.

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
