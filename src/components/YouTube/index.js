module.exports = function(code, title) {
  if (!code) return '';
  const allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  const referrerPolicy = "strict-origin-when-cross-origin";
  const url = `https://www.youtube.com/embed/${code}`;
  return `<iframe width="100%" height="315" src="${url}" title="${title || 'Video from YouTube'}" frameborder="0" allow="${allow}" referrerpolicy="${referrerPolicy}" allowfullscreen></iframe>
`;
}
