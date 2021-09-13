export const renderOpciones = (opciones, containerId) => {
    const crearOpcion = (opcion) => {
      let div = document.createElement("div");
      div.classList.add("option", `icon-${opcion}`);
      div.setAttribute("name", opcion);
      div.innerHTML = `
      <img src="./images/icon-${opcion}.svg" alt="" />`;
      return div;
    };
    const container = document.getElementById(containerId);
    container.innerHTML = "";
    container.classList.remove("bg-none");
  
    
    opciones.forEach((opcion) => {
      container.appendChild(crearOpcion(opcion.name));
    });
    
    container.classList.remove("outcome");
    if (opciones.length === 2) {
      container.classList.add("bg-none");
      container.classList.add("outcome");
      let options = Array.from(document.querySelectorAll('.option'));
      options[0].classList.add('animation');
  
  
    }
  
    
  };