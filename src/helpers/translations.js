const TEXT = {};

const LANGUAGES = [
  { id: 'en', title: 'English' },
  { id: 'es', title: 'Español' },
  { id: 'zh', title: '中文' },
  { id: 'de', title: 'Deutsch' },
  { id: 'fr', title: 'Français' },
  { id: 'pt', title: 'Português' },
  { id: 'ru', title: 'Русский' },
  { id: 'ja', title: '日本語' },
  { id: 'ko', title: '한국어' },
];

let language = 'ru';

function addTranslations(lang, json) {
  TEXT[lang] = {
    ...(TEXT[lang] || {}),
    ...(json || {})
  };
}

function updateLanguage(lang) {
  language = lang;
}

function t(id, lang) {
  return TEXT?.[lang || language]?.[id] || TEXT?.en?.[id] || TEXT?.ru?.[id] || '';
}

module.exports = { updateLanguage, addTranslations, t, LANGUAGES };
