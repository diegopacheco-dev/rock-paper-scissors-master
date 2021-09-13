import { loadScore, storeScore } from "./storageFunctions.js";
import { opciones } from "./playOptions.js";
import { renderOpciones, renderScore, renderOutcome } from "./renderFunctions.js";

let score = loadScore("scoreNumber");

const play = (optionUsuario, opciones, storeScore) => {
  // Encontrar el obj usuario
  const objOptionUsuario = opciones.find(
    (option) => option.name === optionUsuario
  );

  // Elegimos de forma aleatoria alguna de las opciones disponibles
  let opcionesDisponibles = opciones.filter(
    (option) => option.name !== optionUsuario
  );
  let objOpcionMaquina = opcionesDisponibles[Math.round(Math.random())];

  // Renderizamos las opciones
  renderOpciones([objOptionUsuario, objOpcionMaquina], "containerOptions");

  // Mostrar el ganador
  if (objOptionUsuario.beats.includes(objOpcionMaquina.name)) {
    score++;
    
    renderScore(score, "scoreNumber");
    renderOutcome("YOU WIN", "containerOptions", renderizadoInicial);
  } else {
    if (score > 0) {
      score--;
    }
    renderScore(score, "scoreNumber");
    renderOutcome("YOU LOSE", "containerOptions", renderizadoInicial);
  }
  storeScore(score);
};

const asignarPlayEvent = (play, opciones) => {
  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () =>
      play(option.id, opciones, storeScore)
    );
  });
};

const showRules = () => {
  const container = document.getElementById("rules-container");
  const buttonRules = document.getElementById("rules-button");
  const buttonExit = document.getElementById("rulesButtonExit");
  buttonRules.addEventListener("click", () => {
    container.classList.add("show");
  });
  buttonExit.addEventListener("click", () => {
    container.classList.remove("show");
  });
};
showRules();

const renderizadoInicial = () => {
  renderOpciones(opciones, "containerOptions");
  asignarPlayEvent(play, opciones);
  renderScore(score, "scoreNumber");
};
renderizadoInicial();


