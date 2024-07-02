export function loadMicrofrontend(elementId: string, scriptUrl: string) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id '${elementId}' not found.`);
    return;
  }

  const script = document.createElement('script');
  script.src = scriptUrl;
  script.type = 'module';

  script.onload = () => {
    console.log(`Microfrontend '${scriptUrl}' carregado.`);
  };

  element.appendChild(script);
}
