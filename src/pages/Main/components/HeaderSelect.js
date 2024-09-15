const { LINKS } = require('../../../helpers/constants');
const { t, LANGUAGES } = require('../../../helpers/translations');

function Option(item, selectedLanguage) {
  const selected = item.id === selectedLanguage
    ? 'selected="selected"'
    : '';
  return `<option value="${item.id}" ${selected}>${item.title}</option>`
}

module.exports = function(selectedLanguage) {
  const options = LANGUAGES.map((item) => Option(item, selectedLanguage)).join('');

  return `
    <select onchange="updateLanguage()" id="updateLanguage" aria-label="language">
      ${options}
    </select>
    <script type="text/javascript">
      function updateLanguage() {
        const lang = document.getElementById("updateLanguage").value;
        location.href = "../" + lang + "/";
      }
    </script>`;
}
