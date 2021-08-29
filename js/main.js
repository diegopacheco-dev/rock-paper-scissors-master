const renderOpciones = (opciones, containerId) => {
  const crearOpcion = (opcion) => {
    let div = document.createElement("div");
    div.classList.add("option", `icon-${opcion}`);
    div.setAttribute("name", opcion);
    div.innerHTML = `<img src="./images/icon-${opcion}.svg" alt="" />`;
    return div;
  };
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  if (opciones.length === 2) {
    container.classList.add("bg-none");
  }

  opciones.forEach((opcion) => {
    console.log("renderizando : ", opcion);
    container.appendChild(crearOpcion(opcion.name));
  });
};

const renderResultado = (title, containerId) => {
  const container = document.getElementById(containerId);
  console.log("container : ", container);
  const outcome = document.createElement('p');
  outcome.className = "outcome-title";
  outcome.innerText = title

  container.appendChild(outcome)

}

const play = (optionUsuario, opciones) => {
  // Encontrar el obj usuario
  const objOptionUsuario = opciones.find(option => option.name === optionUsuario);
  
  // Elegimos de forma aleatoria alguna de las opciones disponibles
  let opcionesDisponibles = opciones.filter(
    (option) => option.name !== optionUsuario
  );
  let objOpcionMaquina = opcionesDisponibles[Math.round(Math.random())];

  // Renderizamos las opciones 
  renderOpciones([objOptionUsuario, objOpcionMaquina], "containerOptions");

  // Mostrar el ganador
    if (objOptionUsuario.beats.includes(objOpcionMaquina.name)) {
      renderResultado("YOU WIN", 'containerOptions');
    } else {
      renderResultado("YOU ", 'containerOptions');

    }
    


};

//  1. MOSTRAR OPCIONES Y PUNTAJE VACIO
let opciones = [
  {
    name: "rock",
    beats: ["scissors"],
  },
  {
    name: "paper",
    beats: ["rock"],
  },
  {
    name: "scissors",
    beats: ["paper"],
  },
];

let score = 10;

const renderScore = (score, scoreContainerId) => {
  const container = document.getElementById(scoreContainerId);
  container.innerHTML = score;
};

const asignarPlayEvent = (play, opciones) => {
  document.querySelectorAll(".option").forEach((option) => {
    option.addEventListener("click", () =>
      play(option.getAttribute("name"), opciones)
    );
  });
};

renderScore(score, "scoreNumber");
renderOpciones(opciones, "containerOptions");
asignarPlayEvent(play, opciones);

//  2. SELECCIONAR OPCION DE JUEGO

//  3. EL BOT SELECCIONA SU OPCION DE JUEGO
//  4. MOSTRAR LA OPCION SELECCIONADA DEL BOT
//  5. CALCULAR EL GANADOR
//  6. MOSTRAR MENSAJE DEL RESULTADO
//  7.
