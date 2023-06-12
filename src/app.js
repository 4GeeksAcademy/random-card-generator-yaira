window.onload = function() {
  button();
  randomCard();
};
const cards = [
  "src/assets/img/2_of_clubs.png",
  "src/assets/img/2_of_diamonds.png",
  "src/assets/img/2_of_hearts.png",
  "src/assets/img/2_of_spades.png",
  "src/assets/img/3_of_clubs.png",
  "src/assets/img/3_of_diamonds.png",
  "src/assets/img/3_of_hearts.png",
  "src/assets/img/3_of_spades.png",
  "src/assets/img/4_of_clubs.png",
  "src/assets/img/4_of_diamonds.png",
  "src/assets/img/4_of_hearts.png",
  "src/assets/img/4_of_spades.png",
  "src/assets/img/5_of_clubs.png",
  "src/assets/img/6_of_diamonds.png",
  "src/assets/img/7_of_hearts.png",
  "src/assets/img/8_of_spades.png",
  "src/assets/img/9_of_diamonds.png",
  "src/assets/img/10_of_clubs.png",
  "src/assets/img/ace_of_diamonds.png",
  "src/assets/img/jack_of_spades2.png",
  "src/assets/img/king_of_clubs2.png",
  "src/assets/img/queen_of_hearts2.png"
];
const urCards = cards[Math.floor(Math.random() * cards.length)];
const pic = document.querySelector("#thePic");

function randomCard() {
  var urCards = cards[Math.floor(Math.random() * cards.length)];
  pic.innerHTML = "<img src=" + urCards + ">";
}
let button = () => {
  document.querySelector("#button").addEventListener("click", function() {
    randomCard();
  });
};

setInterval(randomCard, 5000);
