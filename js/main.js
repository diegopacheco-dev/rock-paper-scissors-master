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

const jugar = (optionUsuario, opciones) => {
    // Encontramos la opcion del usuario y la renderizamos
    let objOptionUsuario = opciones.find(option => option.name === optionUsuario);
    const container = document.getElementById('containerOptions');
    container.classList.add("bg-none")
    container.innerHTML = `<div name=${objOptionUsuario.name} class="option icon-${objOptionUsuario.name}"><img src="./images/icon-${objOptionUsuario.name}.svg" alt="" /></div><div class="option-empty" id="optionEmpty"></div>`

    // Elegimos de forma aleatoria alguna de las opciones disponibles
    let opcionesDisponibles = opciones.filter(option => option.name !== objOptionUsuario.name);
    let objOpcionMaquina =  opcionesDisponibles[Math.round(Math.random())];
    // Renderizamos la opción
    setTimeout(() => {


        let div = document.createElement('div');
        div.classList.add('option', `icon-${objOpcionMaquina.name}`)
        div.setAttribute('name', objOpcionMaquina.name)
        div.innerHTML = `<img src="./images/icon-${objOpcionMaquina.name}.svg" alt="" />`
        document.getElementById('optionEmpty').remove();
        container.appendChild(div)
    
        // mostrar el ganador
        if (objOptionUsuario.beats.includes(objOpcionMaquina.name)) {
            console.log("gana : ", objOptionUsuario.name);
        } else {
            console.log("gana : ", objOpcionMaquina.name);
        }
    }, 800)

  }




// Asignar funcion jugar a cada boton
let buttons = Array.from(document.querySelectorAll('.option'));
buttons.forEach(button => button.addEventListener('click', () => {
    jugar(button.getAttribute('name'), opciones);
} ))