const { t } = require('../../helpers/translations');

function Link(link, title) {
  return `
    <a href="./${link}" class="prev_next_link">
      ${title}
    </a>`;
}

module.exports = function(meta) {
  if (!meta.prev && !meta.next) return '';
  const empty = '<span></span>';
  return `
    <nav class="prev_next">
      ${meta.prev ? Link(meta.prev, t('prevNext.prev')) : empty}
      ${Link('', t('prevNext.all'))}
      ${meta.next ? Link(meta.next, t('prevNext.next')) : empty}
    </nav>`;
}
