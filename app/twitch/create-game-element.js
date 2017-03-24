export default function createGameItem(data) {
  const el = document.createElement('DIV');
  el.classList.add('game-item');

  el.innerHTML = `
      <h3 class="game-item__name">${data.name}</h3>
      <h4 class="game-item__popularity">${data.popularity} Viewers</h4>
      <img src="${data.box.large}" class="game-item__pic" alt="${data.name}">
      `;

  return el;
}
