const DOMAIN = 'https://bakhirev.github.io';

const VERSION = Math.ceil(Math.random() * 100 * 100 * 100);

const LINKS = {
  TRY: '/demo/?ref=blog',
  DEMO: '/demo/?ref=blog&dump=./test.txt',

  DOCKER: 'https://hub.docker.com/r/bakhirev/assayo',
  GITHUB: 'https://github.com/bakhirev/assayo',
  NPM: 'https://www.npmjs.com/package/assayo',
  COMPOSER: 'https://packagist.org/packages/bakhirev/assayo',
  PIP: 'https://pypi.org/project/assayo/',
  GEM: 'https://rubygems.org/gems/assayo',

  REDDIT: 'https://www.reddit.com/r/ITManagers/comments/1e5k291/the_visualization_and_analysis_of_git_commit/',
  VC: 'https://vc.ru/tribuna/1283182-vizualizaciya-i-analiz-git-log-provodim-audit-komandy-razrabotki',
  HABR: 'https://habr.com/ru/articles/814035/',
  YOUTUBE: 'https://www.youtube.com/embed/mqfu-ea3jao?si=UD_lFAekj7UmiL5N',

  TG: 'https://t.me/bakhirev',
  FORM: {
    RU: 'https://forms.yandex.ru/u/66df2b67068ff008c206af1c/',
    EN: 'https://forms.yandex.ru/u/66e6046aeb61469572a7d843/',
  },
}

module.exports = { DOMAIN, LINKS, VERSION };
