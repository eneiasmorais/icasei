import { VideoService } from './services/videoServices';

document.addEventListener('DOMContentLoaded', () => {
  const videoData: Video[] = [
    { id: 'abc123', title: 'Vídeo 1', favorite: false },
    { id: 'def456', title: 'Vídeo 2', favorite: true },
  ];
  const videoContainer = document.getElementById('video-container');
  const urlParams = new URLSearchParams(window.location.search);
  const showFavorites = urlParams.get('favorites') === 'true';

  if (!videoContainer) {
    console.error('Element with id "video-container" not found.');
    return;
  }

  interface Video {
    id: string;
    title: string;
    favorite: boolean;
  }

  const renderVideos = (videos: Video[]) => {
    videoContainer.innerHTML = ''; // Limpar container antes de renderizar

    videos.forEach((video: Video) => {
      const iframeElement = document.createElement('iframe');
      iframeElement.src = `https://www.youtube.com/embed/${video.id}`;
      iframeElement.width = '560';
      iframeElement.height = '315';
      iframeElement.allowFullscreen = true;

      const favoriteButton = document.createElement('button');
      favoriteButton.textContent = video.favorite
        ? 'Remover Favorito'
        : 'Adicionar Favorito';
      favoriteButton.addEventListener('click', () => {
        video.favorite = !video.favorite;
        favoriteButton.textContent = video.favorite
          ? 'Remover Favorito'
          : 'Adicionar Favorito';
        updateFavoritesCounter();
      });

      const videoTitle = document.createElement('h3');
      videoTitle.textContent = video.title;

      const videoDiv = document.createElement('div');
      videoDiv.appendChild(videoTitle);
      videoDiv.appendChild(iframeElement);
      videoDiv.appendChild(favoriteButton);

      videoContainer.appendChild(videoDiv);
    });
  };

  const filterFavorites = () => {
    const favoriteVideos = videoData.filter((video: Video) => video.favorite);
    renderVideos(favoriteVideos);
  };

  const showAllVideos = () => {
    renderVideos(videoData);
  };

  const updateFavoritesCounter = () => {
    const favoriteCount = videoData.filter(
      (video: Video) => video.favorite,
    ).length;
    console.log(`Total de vídeos favoritos: ${favoriteCount}`);
  };

  const loadVideos = async (query: string) => {
    try {
      const videos = await VideoService.searchVideos(query);
      renderVideos(videos);
    } catch (error) {
      console.error('Erro ao carregar vídeos:', error);
    }
  };

  // Event listeners para os botões Vídeos e Favoritos
  const videosLink = document.getElementById('videos-link');
  const favoritesLink = document.getElementById('favorites-link');

  if (videosLink) {
    videosLink.addEventListener('click', () => {
      const query = 'YOUR_SEARCH_QUERY'; // Defina o que você quer buscar
      loadVideos(query);
    });
  }

  if (favoritesLink) {
    favoritesLink.addEventListener('click', () => {
      filterFavorites();
    });
  }
});
