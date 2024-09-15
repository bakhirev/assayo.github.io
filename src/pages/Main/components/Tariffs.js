const { LINKS } = require('../../../helpers/constants');

function Feature(title, hasFeature) {
  const className = hasFeature ? '' : ' class="tariff_no"';
  return `<li${className}>${title}</li>`;
}

module.exports = function(json, meta) {
  const list = Array.isArray(json.features)
    ? json.features
    : json.features.split('\n');
  const features = (f) => list.map(f).join('');
  const personal = (t, i) => Feature(t, i < 7);
  const company = (t) => Feature(t, true);
  const link = meta.language === 'ru' ? LINKS.FORM.RU : LINKS.FORM.EN;

  return `
    <h2 class="tariff_title">
      ${json["tariff"]}
    </h2>
    <section class="tariff">
      <article class="tariff_item">
        <h3>
          ${json["tariff.personal.title"]}
        </h3>
        <ul>
          ${features(personal)}
        </ul>
        <span class="button button_disabled">
          ${json["tariff.personal.button"]}
        </span>
      </article>
  
      <article class="tariff_item">
        <h3>
          ${json["tariff.company.title"]}
        </h3>
        <ul>
          ${features(company)}
        </ul>
        <a href="${link}" target="_blank" rel="noreferrer" class="button button_green">
          ${json["tariff.company.button"]}
        </a>
      </article>
    </section>`;
}
