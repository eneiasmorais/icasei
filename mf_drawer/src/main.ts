if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const videosLink = document.getElementById('videos-link');
    const favoritesLink = document.getElementById('favorites-link');

    if (videosLink) {
      videosLink.addEventListener('click', () => {
        window.location.href = '/mf_videos/index.html';
      });
    }

    if (favoritesLink) {
      favoritesLink.addEventListener('click', () => {
        window.location.href = '/mf_favorites/index.html';
      });
    }
  });
}
