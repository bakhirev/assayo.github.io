const { LINKS } = require('../../helpers/constants');
const { t } = require('../../helpers/translations');
const Wrapper = require('./components/Wrapper');
const Column = require('./components/Column');

module.exports = function(meta, baseUrl = '..') {
  return Wrapper(`
    ${Column('Assayo:', [
      { title: t('footer.assayo.about'), url: '/' },
      { title: t('footer.assayo.demo'), url: LINKS.DEMO },
      { title: 'Docker', url: LINKS.DOCKER },
      { title: 'Github', url: LINKS.GITHUB },
      { title: t('footer.assayo.contacts'), url: LINKS.TG },
    ])}

    ${Column(t('footer.themes.title'), [
      { title: t('footer.themes.assayo'), url: `${baseUrl}/assayo/` },
      { title: t('footer.themes.teamlead'), url: `${baseUrl}/teamlead/` },
      { title: t('footer.themes.project'), url: `${baseUrl}/project/` },
    ])}
  
    ${Column(t('footer.video.title'), [
      { title: 'PiterJS', url: 'https://www.youtube.com/watch?v=mqfu-ea3jao' },
      { title: 'TeamLeadConf', url: 'https://www.youtube.com/@ManagementChannel/playlists' },
      { title: 'Yandex for Products', url: 'https://www.youtube.com/watch?v=yvSKcDrNYgw&list=PLEs8EuAPI73Bj78n7-BIW3s1we0r15yJl&pp=iAQB' },
    ])}
  
    ${Column(t('footer.languages'), [
      // { title: 'English', url: `../../en/${pageUrl}` },
      // { title: 'Español', url: `../../es/${pageUrl}` },
      { title: 'Русский', url: `../../ru/${meta.category}/${meta.title}` },
    ])}
  `);
}
