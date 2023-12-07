import { readFileSync } from 'fs';
import { read, utils } from 'xlsx';
import url from 'url'; 

const pluginName = '@ulu/vite-plugin-sheetjs';
const suffixRegex = /\?sheetjs(&.*)*$/;

/**
 * Vite plugin to load Excel Spreadsheets
 * @example
 *   import allSheets from "./data/example.xlsx?sheetjs";
 *   import specificSheet from "./data/example.xlsx?sheetjs&name=people";
 *   import specificSheets from "./data/example.xlsx?sheetjs&name=people&name=places";
 * @see https://docs.sheetjs.com/docs/demos/static/vitejs/#pure-data-plugin
 */
export default function vitePluginSpreadsheets() {
  return {
    name: pluginName,
    transform(_, id) {
      if (suffixRegex.test(id)) {
        return {
          code: outputCode(id),
          map: null
        };
      }
    },
    config: () => ({
      assetsInclude: ["**/*.xlsx"]
    }),
  }
}

/**
 * Open spreadsheet and extract either all sheets or only certains sheets
 */
function outputCode(id) {
  const cleanPath = id.replace(suffixRegex, "");
  const queries = url.parse(id, true)?.query;
  const specific = queries?.name;

  const sheets = {};
  const workbook = read(readFileSync(cleanPath));

  let sheetNames = workbook.SheetNames;

  if (specific) {
    // Can be either array or single string
    sheetNames = Array.isArray(specific) ? specific : [ specific ];
  }
  
  sheetNames.forEach(name => {
    if (workbook.SheetNames.includes(name)) {
      sheets[name] = utils.sheet_to_json(workbook.Sheets[name]);
    } else {
      throw new Error(`${ pluginName }: Unable to locate sheet "${ name }" in: "${ cleanPath }"`);
    }
  });

  return `export default JSON.parse('${ JSON.stringify(sheets) }')`;
}