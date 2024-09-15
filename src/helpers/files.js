const fs = require('node:fs');
const path = require('node:path');

function getFileList(source) {
  function getTree(dir) {
    return fs.readdirSync((dir)).map(name => {
      const itemPath = path.join(dir, name);
      return fs.statSync(itemPath).isDirectory() ? getTree(itemPath) : itemPath;
    });
  }
  return getTree(path.resolve(source)).flat(Infinity);
}

function createFolder(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function readFile(fileName) {
  const formattedDir = path.resolve(fileName);
  return fs.existsSync(formattedDir)
    ? fs.readFileSync(formattedDir, 'utf8')
    : '';
}

function removeSpace(text) {
  return text.split('\n').map(row => row.trim()).join('');
}

function writeFile(fileName, content) {
  const formattedDir = path.resolve(fileName);
  fs.writeFileSync(formattedDir, removeSpace(content));
}

module.exports = {
  createFolder,
  getFileList,
  writeFile,
  readFile,
};
