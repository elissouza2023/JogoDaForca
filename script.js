//para importar o getWord do arquivo words.js trazendo a palavra e a dica
import getWord from "./words.js";

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
btnNew.onclick = () => init();
let indexImg;
let errorCount = 0;  // Variável para contar os erros
let currentWord = {}; // Armazenar palavra e dica sorteadas

init();

function init() {
  indexImg = 1;
  img.src = `img1.png`;

  errorCount = 0;  // Reinicia o contador de erros a cada nova palavra
  contentClue.textContent = "";  // Limpa a dica

  // Sorteia uma nova palavra e dica e armazena em `currentWord`
  currentWord = getWord();

  generateGuessSection();
  generateButtons();
}
//para gerar a palavra com os underlines
function generateGuessSection() {
  contentGuessWord.textContent = "";

  const { word, clue } = currentWord; // Usa a palavra e a dica armazenadas no arquivo words.js
  const wordWithoutAccent = word
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  Array.from(wordWithoutAccent).forEach((letter) => {
    const span = document.createElement("span");

    span.textContent = "_";
    span.setAttribute("word", letter.toUpperCase());
    contentGuessWord.appendChild(span);
  });

  // A dica só será mostrada após 5 erros
  if (errorCount >= 5) {
    contentClue.textContent = `Dica: ${clue}`;
  }
}

function wrongAnswer() {
  errorCount++;  // Incrementa o contador de erros
  indexImg++;
  img.src = `img${indexImg}.png`;

  if (errorCount >= 5) {
    const { clue } = currentWord; // Usa a dica da palavra sorteada
    contentClue.textContent = `Dica: ${clue}`;  // Exibe a dica após 5 erros
  }

  if (indexImg === 7) {
    setTimeout(() => {
      // Acessando a palavra correta através de currentWord.word
      alert(`Que Pena você Perdeu, a palavra era: ${currentWord.word}`);
      init();
    }, 100);
  }
}
//para verificar se a letra clicada está correta
function verifyLetter(letter) {
  const arr = document.querySelectorAll(`[word="${letter}"]`);

  if (!arr.length) wrongAnswer();

  arr.forEach((e) => {
    e.textContent = letter;
  });

  const spans = document.querySelectorAll(`.guess-word span`);
  const won = !Array.from(spans).find((span) => span.textContent === "_");

  if (won) {
    setTimeout(() => {
      alert("Parabéns !!! Você Ganhou!!!");
      init();
    }, 100);
  }
}
//para gerar o teclado através da tabela ASCII usando do 97 ao 123 que refre-se a letra a até a letra z
function generateButtons() {
  contentBtns.textContent = "";

  for (let i = 97; i < 123; i++) {
    const btn = document.createElement("button");
    const letter = String.fromCharCode(i).toUpperCase();
    btn.textContent = letter;
// para desabilitar o botão após clicar na letra
    btn.onclick = () => {
      btn.disabled = true;
      btn.style.backgroundColor = "gray";
      verifyLetter(letter);
    };

    contentBtns.appendChild(btn);
  }
}
