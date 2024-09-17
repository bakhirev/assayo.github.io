const { VERSION } = require('./constants');

function replace(text, symbol, tag) {
  return text
    .split(symbol)
    .map((v, i) => i % 2 !== 0 ? `<${tag}>${v}</${tag}>` : v)
    .join('');
}

function clearHtml(text) {
  return text
    .replace(/</gim, '&lt;')
    .replace(/>/gim, '&gt;')
    .replace(/\s-\s/gim, ' — ')
    .trim();
}

function getFormattedText(text) {
  text = clearHtml(text);
  text = replace(text, '```', 'i');
  text = replace(text, '`', 'i');
  text = replace(text, '**', 'b');
  text = text.replace(/(\[)([^\]]+)(])(\()([^)]+)(\))/gim, '<a href="$5">$2</a>');
  return text;
}

function getUlTag(list) {
  const items = list
    .map(text => `<li>${getFormattedText(text)}</li>`)
    .join('');
  return `<ul>${items}</ul>`
}

function getImage(tag) {
  if (!tag.title) {
    return `
      <figure>
        <img src="${tag.src}?v=${VERSION}" alt="${tag.alt}" />
      </figure>`;
  }

  return `
    <figure>
      <img src="${tag.src}?v=${VERSION}" alt="${tag.alt}" />
      <figcaption>${tag.title}</figcaption>
    </figure>`;
}

module.exports = function (json) {
  let html = [];

  (json || []).forEach((item) => {
    if (!item) return;

    if (item.tag === 'p') html.push(`<p>${getFormattedText(item.content)}</p>`);
    else if (item.tag === 'li') html.push(getUlTag(item.content));
    else if (item.tag === 'pre') html.push(`<div class="console">${getFormattedText(item.content.join('<br/>'))}</div>`);
    else if (item.tag === 'h1') html.push(`<h1>${item.content}</h1>`);
    else if (item.tag === 'h2') html.push(`<h2>${item.content}</h2>`);
    else if (item.tag === 'h3') html.push(`<h3>${item.content}</h3>`);
    else if (item.tag === 'h4') html.push(`<h4>${item.content}</h4>`);
    else if (item.tag === 'h5') html.push(`<h5>${item.content}</h5>`);
    else if (item.tag === 'img') html.push(getImage(item));
  });

  return html.join('');
}
