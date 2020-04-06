const path = require("path");
const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const filePathsArr = __dirname.split("/");
  const projectName = filePathsArr[filePathsArr.length - 1];
  const outputFolderName = path.resolve(__dirname, "dist", projectName);

  const files = [
    path.resolve(__dirname, "dist", projectName, "runtime-es2015.js"),
    path.resolve(__dirname, "dist", projectName, "polyfills-es2015.js"),
    path.resolve(__dirname, "dist", projectName, "main-es2015.js"),
  ];
  await fs.ensureDir(outputFolderName);
  await concat(files, path.resolve(outputFolderName, "header-module.js"));

  // await fs.copy(
  //   path.resolve(__dirname, "dist", projectName, "style.css"),
  //   path.resolve(outputFolderName, "style.css")
  // );

  // await fs.copy(
  //   path.resolve(__dirname, "dist", projectName, "assets"),
  //   path.resolve(outputFolderName, "assets")
  // );
})();
