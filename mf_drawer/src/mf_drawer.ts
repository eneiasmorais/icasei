// drawer.ts

// Função para carregar a lista de vídeos
const loadVideos = async () => {
  try {
    // Realiza uma requisição ao BFF para buscar os vídeos
    const response = await fetch('/videos');
    const videos = await response.json();

    // Exibe os vídeos na interface do usuário
    renderVideos(videos);
  } catch (error) {
    console.error('Erro ao carregar vídeos:', error);
    alert('Erro ao carregar vídeos. Por favor, tente novamente mais tarde.');
  }
};

// Função para carregar a lista de favoritos
const loadFavorites = async () => {
  try {
    // Realiza uma requisição ao BFF para buscar os vídeos marcados como favoritos
    const response = await fetch('/favorites');
    const favorites = await response.json();

    // Exibe os vídeos favoritos na interface do usuário
    renderFavorites(favorites);
  } catch (error) {
    console.error('Erro ao carregar favoritos:', error);
    alert('Erro ao carregar favoritos. Por favor, tente novamente mais tarde.');
  }
};

// Função para renderizar a lista de vídeos na interface
const renderVideos = (videos: any[]) => {
  const resultsContainer = document.getElementById('results-container');
  if (!resultsContainer) return;

  resultsContainer.innerHTML = '';

  videos.forEach((video) => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video-item');
    videoElement.textContent = video.title;
    resultsContainer.appendChild(videoElement);
  });
};

// Função para renderizar a lista de favoritos na interface
const renderFavorites = (favorites: any[]) => {
  const resultsContainer = document.getElementById('results-container');
  if (!resultsContainer) return;

  resultsContainer.innerHTML = '';

  favorites.forEach((video) => {
    const favoriteElement = document.createElement('div');
    favoriteElement.classList.add('favorite-item');
    favoriteElement.textContent = video.title + ' (favorito)';
    resultsContainer.appendChild(favoriteElement);
  });
};

// Adiciona event listeners aos botões
document.getElementById('videos-btn')?.addEventListener('click', loadVideos);
document
  .getElementById('favorites-btn')
  ?.addEventListener('click', loadFavorites);
