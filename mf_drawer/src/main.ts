if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const videosLink = document.getElementById('videos-link');
    const favoritesLink = document.getElementById('favorites-link');

    if (videosLink) {
      videosLink.addEventListener('click', () => {
        console.log(videosLink);
        fetch('/api/popularVideos')
          .then((response) => response.json())
          .then((videos: any[]) => {
            const videoList = document.getElementById('video-list');
            if (videoList) {
              videoList.innerHTML = '';
              videos.forEach((video) => {
                const li = document.createElement('li');
                li.textContent = video.title;
                if (videoList) {
                  videoList.appendChild(li);
                }
              });
            }
          })
          .catch((error) => {
            console.error('Erro ao buscar vídeos:', error);
          });
      });
    }

    if (favoritesLink) {
      favoritesLink.addEventListener('click', () => {
        window.location.href = '/mf_favorites/index.html';
      });
    }
  });
}
