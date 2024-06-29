// Exemplo ajustado para corrigir erros de possibilidade de 'null'

// Exemplo de carregamento do microfrontend Drawer
let drawerElement = document.querySelector('#mf_drawer');
if (drawerElement !== null) {
  fetch('http://localhost:3000')
    .then((response) => response.text())
    .then((html) => {
      drawerElement!.innerHTML = html; // Usamos ! para indicar ao TypeScript que drawerElement não é null
    })
    .catch((error) => {
      console.error('Erro ao carregar microfrontend Drawer:', error);
    });
} else {
  console.error('Elemento #mf_drawer não encontrado');
}

// Exemplo de carregamento do microfrontend Videos
let videosElement = document.querySelector('#mf_videos');
if (videosElement !== null) {
  fetch('http://localhost:3001')
    .then((response) => response.text())
    .then((html) => {
      videosElement!.innerHTML = html; // Usamos ! para indicar ao TypeScript que videosElement não é null
    })
    .catch((error) => {
      console.error('Erro ao carregar microfrontend Videos:', error);
    });
} else {
  console.error('Elemento #mf_videos não encontrado');
}
