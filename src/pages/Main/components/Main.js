const { LINKS } = require('../../../helpers/constants');

module.exports = function(json) {
  return `
    <main class="main">
      <h1 class="title">
        ${json["main.title"]}
      </h1>
      <p class="text">
        ${json["main.description"]}
      </p>
      <nav class="main_nav">
        <a href="/demo/" role="button" class="button">
          ${json["main.demo"]}
        </a>
        <a href="${LINKS.DEMO}" role="button" class="button button_blue">
          ${json["main.demoWithData"]}
        </a>
      </nav>
      <video width="90%" preload autoplay muted loop="loop" class="main_screenshot">
        <source src="../assets/images/index.webm" type="video/webm">
      </video>
    </main>`;
  // <img src="../assets/images/index.gif" alt="screenshot" className="main_screenshot"/>
}
