const quotes = [
  "Life is what happens when you're busy making other plans.",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "You have within you right now, everything you need to deal with whatever the world can throw at you.",
  "Believe you can and you're halfway there."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById("quote");
  quoteElement.textContent = quotes[randomIndex];
}
