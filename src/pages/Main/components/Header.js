const { LINKS } = require('../../../helpers/constants');
const { t } = require('../../../helpers/translations');
const HeaderSelect = require('./HeaderSelect');

function BlogLink(json) {
  return `
    <a href="./blog/" class="header_link">
      ${json["header.blog"]}
    </a>`;
}

module.exports = function(json, meta) {
  const { language } = meta;
  return `
    <header class="header">
      <img src="../assets/logo.svg" class="header_logo" alt="${t('header.logo')}"/>
      <a href="${LINKS.DEMO}" class="header_link">
        ${json["header.demo"]}
      </a>
      <a href="${LINKS.GITHUB}" target="_blank" class="header_link">
        GitHub
      </a>
      <a href="${LINKS.DOCKER}"  target="_blank" class="header_link">
        Docker
      </a>
      ${language === 'ru2' ? BlogLink(json, language) : ''}
      ${HeaderSelect(language)}
    </header>`;
}
