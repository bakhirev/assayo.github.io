module.exports = function(url, children) {
  return `
    <url>
      <loc>${url}</loc>
      ${children || ''}
    </url>`;
}
