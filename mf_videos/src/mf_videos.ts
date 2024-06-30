interface Video {
  id: string;
  title: string;
}

document.addEventListener('DOMContentLoaded', () => {
  const searchBtn = document.getElementById('searchBtn') as HTMLElement;
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      const query = (document.getElementById('search') as HTMLInputElement)
        .value;
      fetch(`/search?q=${query}`)
        .then((response) => response.json())
        .then((data) => {
          const videos = document.getElementById('videos') as HTMLElement;
          videos.innerHTML = data.items
            .map(
              (item: any) => `
              <div>
                <h3>${item.snippet.title}</h3>
                <button onclick="addToFavorites('${item.id.videoId}', '${item.snippet.title}')">⭐</button>
              </div>
            `,
            )
            .join('');
        })
        .catch((err) => console.error('Error fetching videos:', err));
    });
  }
});

function addToFavorites(id: string, title: string) {
  fetch('/favorites', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, title } as Video),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.message);
    })
    .catch((err) => console.error('Error adding to favorites:', err));
}

// Load favorites when hash is #favoritos
if (window.location.hash === '#favoritos') {
  fetch('/favorites')
    .then((response) => response.json())
    .then((data) => {
      const favorites = document.getElementById('favorites') as HTMLElement;
      favorites.innerHTML = data
        .map(
          (item: Video) => `
          <div>
            <h3>${item.title}</h3>
          </div>
        `,
        )
        .join('');
    })
    .catch((err) => console.error('Error fetching favorites:', err));
}
