const { LINKS } = require('../../../helpers/constants');

module.exports = function(json, meta) {
  const link = meta.language === 'ru' ? LINKS.FORM.RU : LINKS.FORM.EN;
  return `
    <section class="banner">
      <h1 class="title">
        ${json["banner.title"]}
      </h1>
      <p class="text">
        ${json["banner.description1"]}
        <br/>
        ${json["banner.description2"]}
      </p>
      <br />
      <br />
      <a href="${link}" target="_blank" rel="noreferrer" role="button" class="button button_green">
        ${json["banner.buy"]}
      </a>
    </section>`;
}
