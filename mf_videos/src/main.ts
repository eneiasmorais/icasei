// mf_videos/src/main.ts
const searchForm = document.getElementById('search-form') as HTMLFormElement;
const searchInput = document.getElementById('search-input') as HTMLInputElement;
const resultsContainer = document.getElementById(
  'results-container',
) as HTMLDivElement;

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();

  try {
    // Realiza a requisição para buscar vídeos no YouTube
    const response = await fetch(
      `/searchVideos?searchQuery=${encodeURIComponent(searchQuery)}`,
    );
    const videos = await response.json();

    // Limpa o container de resultados antes de adicionar os novos vídeos
    resultsContainer.innerHTML = '';

    // Renderiza os vídeos encontrados
    videos.items.forEach((video: any) => {
      const videoElement = document.createElement('iframe');
      videoElement.src = `https://www.youtube.com/embed/${video.id.videoId}`;
      videoElement.title = video.snippet.title;
      videoElement.width = '560';
      videoElement.height = '315';
      videoElement.allowFullscreen = true;

      const videoTitle = document.createElement('h2');
      videoTitle.textContent = video.snippet.title;

      const videoDescription = document.createElement('p');
      videoDescription.textContent = video.snippet.description;

      const videoContainer = document.createElement('div');
      videoContainer.classList.add('video-container');
      videoContainer.appendChild(videoElement);
      videoContainer.appendChild(videoTitle);
      videoContainer.appendChild(videoDescription);

      resultsContainer.appendChild(videoContainer);
    });
  } catch (error) {
    console.error('Erro ao buscar vídeos do YouTube:', error);
    alert('Erro ao buscar vídeos. Por favor, tente novamente mais tarde.');
  }
});
