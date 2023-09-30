class Localization {
  language:string = 'ru';

  translations: any = {};

  get(key = '') {
    const dictionary = this.translations[this.language];
    console.dir(dictionary);
    return dictionary?.[key] || '';
  }

  add(langId: string, text: string) {
    if (!this.translations[langId]) {
      this.translations[langId] = {};
    }

    text.split('§ ').slice(1).forEach((part: string) => {
      let index = part.indexOf('\n');
      if (index === (part.length - 1)) {
        index = part.indexOf(':');
      }
      const key = part.slice(0, index);
      const value = part.slice(index + 1).trim();
      this.translations[langId][key] = value;
      console.dir(key);
    });
  }
}

const localization = new Localization();

export default localization;
