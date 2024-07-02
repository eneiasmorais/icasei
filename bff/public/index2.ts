import { renderVideos } from '../../mf_videos/src/main';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('videos-link');

  if (button) {
    button.addEventListener('click', () => {
      console.log('videos');
      // Load the videos microfrontend
      fetch('/searchVideos?q=example') // Ajuste a URL de acordo com sua API
        .then((response) => response.json())
        .then((videos) => {
          renderVideos(videos);
        })
        .catch((error) => {
          console.error('Erro ao buscar vídeos:', error);
        });
    });
  } else {
    console.error('Elemento com id "videos-link" não encontrado.');
  }
});
