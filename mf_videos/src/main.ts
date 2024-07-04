interface Video {
  id: string;
  title: string;
  thumbnail: { url: string };
}

export function renderVideos(videos: Video[]): void {
  const videoListContainer = document.getElementById('videoList');
  if (!videoListContainer) return;

  videoListContainer.innerHTML = '';

  videos.forEach((video) => {
    const videoElement = document.createElement('div');
    videoElement.classList.add('video-item');

    const thumbnailElement = document.createElement('img');
    thumbnailElement.src = video.thumbnail.url;
    thumbnailElement.alt = video.title;
    thumbnailElement.classList.add('video-thumbnail');

    const titleElement = document.createElement('h3');
    titleElement.textContent = video.title;

    videoElement.appendChild(thumbnailElement);
    videoElement.appendChild(titleElement);
    videoListContainer.appendChild(videoElement);
  });
}
