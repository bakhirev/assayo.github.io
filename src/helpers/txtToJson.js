function parse(text, refKeyValue = {}) {
  text.replace(/\r/gim, '').split('§ ').slice(1).forEach((part) => {
    let index = part.indexOf('\n');
    if (index === (part.length - 1)) {
      index = part.indexOf(':');
    }
    const key = part.slice(0, index);
    refKeyValue[key] = part.slice(index + 1).trim();
  });
  return refKeyValue;
}

function getSeoFromJson(json) {
  return {
    title: json['meta.title'],
    template: json['meta.template'],
    language: json['meta.language'],
    description: {
      short: json['meta.description.long'],
      long: json['meta.description.long'],
    },
    keywords: json['meta.keywords'],
    recommendations: json['meta.recommendations'],
  }
}

module.exports = { parse, getSeoFromJson }
