function Link(link) {
  const target = link.url.indexOf('http') === 0
    ? 'target="_blank" rel="noreferrer"'
    : '';

  return`
    <li class="footer_list_item">
      <a href="${link.url}" ${target} class="footer_link">
        ${link.title}
      </a>
    </li>`;
}

module.exports = function FooterColumn(title, links) {
  return `
    <nav class="footer_nav">
      <label class="footer_title" aria-label="${title}">
        ${title}
      </label>
      <ul class="footer_list">
        ${links.map(Link).join('')}
      </ul>
    </nav>`;
}
