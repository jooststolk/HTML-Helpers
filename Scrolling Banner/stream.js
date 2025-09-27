
currentIndex=0
function generatePseudoLine() {
  //These are the lines that are shown .
  // you can put anything you want here, e.g. product names .
  const lines = [
    "Chocolate Waffles",
    "  500 grams",
    "  USD 4.50",
    " ",
    "Chuppa Lollypops",
    "  Strawberry",
    "  USD 0.50",
    "  ",
    "Dutch Licorice",
    "  Original taste",
    "  USD 7.99 for 1 kg",
    "  ",
      "Icecream",
    "  Chocolate",
    "  Usd 3.85 per liter",
    "  ",
    "Citrus lemonade",
    "   Can .33 liters",
    "  Usd 2.00",
    "  ",
    "Mom's Apple Pie",
    "  2 per box",
    "  USD 10.99",
    "  "
  ];
  // show them in order, comment these 2 lines if you want random order:
  const line = lines[currentIndex];
  currentIndex = (currentIndex + 1) % lines.length; // Loop back to start
  
  // show the lines in random order, uncomment the next line
  // return lines[Math.floor(Math.random() * lines.length)];

  return line;
}

function getMaxLines() {
  const lineHeight = 16;
  const screenHeight = window.innerHeight;
  return Math.floor(screenHeight / lineHeight);
}

function streamCode(codeStream) {
  const line = document.createElement("div");
  line.textContent = generatePseudoLine();
  codeStream.appendChild(line);

  codeStream.scrollTop = codeStream.scrollHeight;

  const maxLines = getMaxLines();
  if (codeStream.children.length > maxLines) {
    codeStream.removeChild(codeStream.firstChild);
  }
}

function startCodeStream() {
  const codeStream = document.getElementById("code-stream");
  if (!codeStream) return;

  const speed=220//the higher, the slower
  setInterval(() => streamCode(codeStream), speed);
}

 