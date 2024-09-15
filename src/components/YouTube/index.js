module.exports = function(link, title) {
  link = link || 'https://www.youtube.com/embed/mqfu-ea3jao?si=UD_lFAekj7UmiL5N';
  link = '';
  return `
    <iframe width="100%" height="315" src="${link}" title="${title || 'Video from YouTube'}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
`;
}
