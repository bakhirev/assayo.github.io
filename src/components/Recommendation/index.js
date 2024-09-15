module.exports = function (title, description, link) {
  if (!link) return '';
  return `
    <a href="${link || ''}" class="recommendation_wrapper">
      <article class="recommendation_item">
        <h3 class="recommendation_title">
          ${title || ''}
        </h3>
        <p class="recommendation_description">
          ${description || ''}
        </p>
      </article>
    </a>`;
}
