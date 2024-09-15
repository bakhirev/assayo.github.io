const Url = require('./components/Url');
const Hreflang = require('./components/Hreflang');
const { DOMAIN } = require('../../helpers/constants');
const { LANGUAGES } = require('../../helpers/translations');

function getArticleUrl(page) {
  return `${DOMAIN}${page.path.join('/')}/${page.fileName}`.replace('index', '');
}

module.exports = function (pages) {
  const blog = pages
    .map((page) => Url(getArticleUrl(page)))
    .sort()
    .join('');

  const mainAlt = LANGUAGES
    .map((lang) => Hreflang(`${DOMAIN}/${lang.id}/`, lang.id))
    .join('');

  const main = Url(`${DOMAIN}/`, mainAlt);
  const mains = LANGUAGES
    .map((lang) => Url(`${DOMAIN}/${lang.id}/`, mainAlt))
    .join('');

  return `
    <?xml version='1.0' encoding='UTF-8'?>
    <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${main}
      ${mains}
    </urlset>`;
}
