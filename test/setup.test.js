const test = require('node:test');
const assert = require('node:assert');
const { createDeck } = require('../src/logic/deck.js');
const { initialDeal } = require('../src/logic/setup.js');

test('createDeck deterministic with seed', () => {
  const d1 = createDeck(1, 123);
  const d2 = createDeck(1, 123);
  assert.deepStrictEqual(d1, d2);
});

test('initialDeal creates correct structure', () => {
  const { columns, stock } = initialDeal(1, 123);
  assert.equal(columns.length, 10);
  const firstFour = columns.slice(0,4).every(col => col.cards.length === 6);
  const lastSix = columns.slice(4).every(col => col.cards.length === 5);
  assert.equal(firstFour, true);
  assert.equal(lastSix, true);
  const faceUpCount = columns.filter(col => col.cards[col.cards.length - 1].faceUp).length;
  assert.equal(faceUpCount, 10);
  assert.equal(stock.length, 5);
  assert.equal(stock.every(batch => batch.length === 10), true);
});
