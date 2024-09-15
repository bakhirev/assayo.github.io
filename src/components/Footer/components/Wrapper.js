const { t } = require('../../../helpers/translations');

module.exports = function(content) {
  return `
    <footer class="footer">
      <section class="footer_top">
        ${content}
      </section>
      <section class="footer_bottom">
        ${t('footer.right')}
      </section>
    </footer>`;
}
