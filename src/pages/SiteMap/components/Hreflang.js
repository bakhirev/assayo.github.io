module.exports = function(url, language) {
  return `<xhtml:link rel="alternate" hreflang="${language}" href="${url}"/>`;
}
