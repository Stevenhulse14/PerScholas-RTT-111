console.log("Lodash is loaded:", typeof _ !== "undefined");

const players = [
  { name: "Ada Lovelace", hand: [] },
  { name: "Grace Hopper", hand: [] },
  { name: "Barbara Liskov", hand: [] },
  { name: "Joyce Aylard", hand: [] },
];

const suits = ["clubs", "diamonds", "hearts", "spades"];
const ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king", "ace"];
const deck = _.flatMap(suits, function (suit) {
  return _.map(ranks, function (rank) {
    return {
      rank,
      suit,
    };
  });
});

const CARDS_PER_HAND = 2;
const dealt = _.take(_.shuffle(deck), players.length * CARDS_PER_HAND);

_.forEach(dealt, function (card, cardIndex) {
  const playerIndex = cardIndex % players.length;
  players[playerIndex].hand.push(card);
});

const winner = _.maxBy(players, function (player) {
  return _.reduce(
    player.hand,
    function (score, card) {
      if (card.rank === "ace") return score + 11;
      if (_.isString(card.rank)) return score + 10;
      return score + card.rank;
    },
    0
  );
});

console.log("winner:", winner.name, winner.hand);
