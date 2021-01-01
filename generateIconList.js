const fs = require("fs");

const ICONS_PATH = "./src/assets/icomoon/SVG";
const PATH_TO_SAVE = "./src/components/Icon/iconList.tsx";

const iconPaths = fs.readdirSync(ICONS_PATH);
const iconNames = [];

console.log("Generating icons");

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const unCapitalize = (string) =>
  string.charAt(0).toLowerCase() + string.slice(1);

const getImportLine = (name, path) =>
  `import { ReactComponent as ${name} } from "assets/icomoon/SVG/${path}";`;

const getIconName = (path) =>
  path.replace(".svg", "").split("-").map(capitalize).join("");

const iconImports = iconPaths.map((path) => {
  const name = getIconName(path);
  iconNames.push(name);

  return getImportLine(name, path);
});

const imports = ['import React from "react";', ...iconImports];

const iconList = iconNames.reduce(
  (list, name) => ({
    ...list,
    [unCapitalize(name)]: `<${name} />`,
  }),
  {}
);

const fileContents =
  "// This file is generated automatically! \n" +
  imports.join("\n") +
  `\n \n export const iconList = ${JSON.stringify(iconList).replace(/"/g, "")}`;

fs.writeFileSync(PATH_TO_SAVE, fileContents);
console.log(`Icons file saved to ${PATH_TO_SAVE}`);

console.log(iconNames.map(unCapitalize).join("\n"));
