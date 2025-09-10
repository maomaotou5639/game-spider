// Deck generation and shuffling for Spider Solitaire
// Using a seeded PRNG (mulberry32) for deterministic shuffles.

function mulberry32(seed) {
  let t = seed >>> 0;
  return function () {
    t += 0x6D2B79F5;
    let r = t;
    r = Math.imul(r ^ (r >>> 15), r | 1);
    r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function generateSuits(difficulty) {
  if (difficulty === 1) return ['S'];
  if (difficulty === 2) return ['S', 'H'];
  return ['S', 'H', 'D', 'C'];
}

function createDeck(difficulty = 1, seed = Date.now()) {
  const suits = generateSuits(difficulty);
  const repeats = 104 / (13 * suits.length); // 1:8, 2:4, 4:2
  const cards = [];
  let id = 0;
  for (let r = 0; r < repeats; r++) {
    for (const suit of suits) {
      for (let rank = 1; rank <= 13; rank++) {
        cards.push({ id: String(id++), suit, rank, faceUp: false });
      }
    }
  }
  const rng = mulberry32(seed);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  return cards;
}

module.exports = { createDeck, generateSuits, mulberry32 };
