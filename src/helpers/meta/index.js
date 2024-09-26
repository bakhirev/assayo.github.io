const path = require('node:path');

const { PAGE_ORDER } = require('./constants');
const { LINKS } = require('../constants');

module.exports = class Meta {
  constructor() {
    this.refIdMeta = {};
  }

  add(fileName, attributes, article) {
    const info = this.create(fileName, attributes, article);
    this.addInRef(info);
  }

  create(fileName, attributes, article) {
    const infoFromPath = this.getInfoFromPath(fileName);

    const description = attributes.description || {};
    const firstTitle = article.find(tag => tag.tag === 'h1');
    const title = attributes.title || firstTitle?.content || '';
    const recommendations = attributes.recommendations || [];

    const index = PAGE_ORDER.indexOf(infoFromPath.id);
    const hasPagination = index !== -1;
    const prev = hasPagination ? PAGE_ORDER[index - 1] : null;
    const next = hasPagination ? PAGE_ORDER[index + 1] : null;

    return {
      ...infoFromPath,
      ...attributes,
      title,
      template: attributes.template || 'article',
      description: {
        short: description?.short || description?.long || title || '',
        long: description?.long || description?.short || title || '',
      },
      prev,
      next,
      recommendations,
      youtube: attributes.youtube || LINKS.YOUTUBE,
    };
  }

  getInfoFromPath(fileName) {
    const parts = fileName.split(path.sep);
    const id = parts.pop().split('.').shift();
    const category = parts.pop();
    if (category !== 'blog') parts.pop();
    const language = parts.pop();
    return { id, language, category, fileName };
  }

  addInRef(meta) {
    const { id, language, category, fileName } = meta;
    this.refIdMeta[id] = meta;
    this.refIdMeta[`${category}.${id}`] = meta;
    this.refIdMeta[`${language}.${category}.${id}`] = meta;
    this.refIdMeta[fileName] = meta;
  }

  get(id) {
    const meta = this.refIdMeta[id] || {};
    meta.recommendations = meta.recommendations.map(id => this.refIdMeta[id]).filter(v => v);
    return meta;
  }
}
