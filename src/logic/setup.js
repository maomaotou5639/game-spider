const { createDeck } = require('./deck.js');

function initialDeal(difficulty = 1, seed = Date.now()) {
  const deck = createDeck(difficulty, seed);
  const columns = [];
  let index = 0;
  for (let c = 0; c < 10; c++) {
    const count = c < 4 ? 6 : 5;
    const column = { id: `col${c}`, cards: [] };
    for (let i = 0; i < count; i++) {
      const card = deck[index++];
      card.faceUp = i === count - 1;
      column.cards.push(card);
    }
    columns.push(column);
  }
  const stock = [];
  for (let batch = 0; batch < 5; batch++) {
    const batchCards = [];
    for (let j = 0; j < 10; j++) {
      const card = deck[index++];
      card.faceUp = false;
      batchCards.push(card);
    }
    stock.push(batchCards);
  }
  return { columns, stock };
}

module.exports = { initialDeal };
