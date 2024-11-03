const path = require('node:path');

const Meta = require('./helpers/meta');
const mdToJson = require('./helpers/mdToJson');
const txtToJson = require('./helpers/txtToJson');
const { addTranslations } = require('./helpers/translations');
const {
  createFolder,
  getFileList,
  writeFile,
  readFile,
} = require('./helpers/files');
const ArticlePage = require('./pages/Articles/index');
const BlogPage = require('./pages/Blog/index');
const MainPage = require('./pages/Main/index');
const SiteMapPage = require('./pages/SiteMap/index');

function getWorkDirPrefix() {
  const parts = __dirname.split(path.sep);
  parts.pop();
  parts.push('content');
  return parts.join(path.sep)
}

const dirPrefix = getWorkDirPrefix();
const sitemap = [];

function createHtmlFile(fileInfo, content) {
  const folder = ['../docs', ...fileInfo.path].join(path.sep);
  const newPath = [folder, fileInfo.fileName + '.html'].join(path.sep);
  const newAbsolutePath = path.join(__dirname, newPath);
  const pathForCSS = fileInfo.path.slice(1).map(() => '..').join('/');

  createFolder(path.join(__dirname, folder));
  writeFile(newAbsolutePath, content.replace('%CSS_PATH%', pathForCSS));
}

function createPages() {
  const meta = new Meta();
  const list = getFileList('../content/');

  const pages = list.map((fileName) => {
    const text = readFile(fileName);
    const dirs = fileName.replace(dirPrefix, '').split(path.sep);
    const name = dirs.pop().split('.').shift();

    if (/\.md/gim.test(fileName)) {
      const { seo, json } = mdToJson(text);
      meta.add(fileName, seo, json);
      const template = seo.template === 'blog' ? 'blog' : 'article';
      return { id: fileName, template, json, path: dirs, fileName: name };
    }

    if (/\.txt/gim.test(fileName)) {
      const json = txtToJson.parse(text);
      json.meta = txtToJson.getSeoFromJson(json);
      return { id: fileName, template: 'main', json, path: dirs, fileName: name };
    }

    const json = JSON.parse(text);
    return { id: fileName, template: 'main', json, path: dirs, fileName: name };
  });

  pages.forEach((data) => {
    const content = {
      article: () => ArticlePage(data.json, meta.get(data.id)),
      blog: () => BlogPage(data.json, meta.get(data.id)),
      main: () => MainPage(data.json, data.json.meta)
    }[data.template];
    if (data.template !== 'main') sitemap.push(data);
    createHtmlFile(data, content());
  });
}

function createSiteMap(sitemap) {
  const content = SiteMapPage(sitemap);
  const fileName = path.join(__dirname, '../docs/sitemap.xml');
  writeFile(fileName, content);
}

function createMainPage() {
  const text = readFile(path.join(__dirname, '../docs/en/index.html'));
  const content = text.replace(/"\.\.\//gim, '"./');
  const fileName = path.join(__dirname, '../docs/index.html');
  writeFile(fileName, content);
}

getFileList('./translations/').forEach((fileName) => {
  const text = readFile(fileName);
  const lang = fileName.split(path.sep).pop().split('.').shift();
  const json = txtToJson.parse(text);
  addTranslations(lang, json);
});

createPages();
createMainPage();
createSiteMap(sitemap);
