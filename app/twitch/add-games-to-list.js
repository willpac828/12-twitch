import createGameItem from './create-game-element';

export default function addGamesToList(parentEl, data) {
  // sets grid to empty
  parentEl.innerHTML = '';

  // for each i, use createGameItem to make an element
  // append that resulting element to the parent element
  // that is sent in to the addGamesToList function
  for (let i = 0; i < data.length; i += 1) {
    // game obj isn't the element
    // just the object data for that element4
    const gameObj = data[i].game;
    const resultingElement = createGameItem(gameObj);

    parentEl.appendChild(resultingElement);
  }
}
