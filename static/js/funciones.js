// importar clases y funciones de "clases.js"
import { HTML, Boton, Estilos } from "./clases.js";


// Funcion para crear y estilar elementos HTML
function pintando(etiquetaIntrouduciendoEn, etiquetaACrear, elementos) {
  let refVariable;
  //switch basado en el elemento a crear
  switch (etiquetaACrear) {
    case "nav":
      {
        // Creando un nuevo elemento HTML con la etiqueta "nav"
        refVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = refVariable.creoElemento();

        // Añadir el elemento creado al DOM
        refVariable.pintoElementoCreado();

        // Aplicar estilos especificos al elemento creado
        refVariable = new Estilos(ref);
        refVariable.estiloNav();
      }
      break;

    case "input":
      {
        // Crear un nuevo elemento HTML con la etiqueta "input"
        refVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = refVariable.creoElemento();

        // Añadir el elemento creado al DOM
        refVariable.pintoElementoCreado();

        // Aplicando estilos especificos al elemento creado
        refVariable = new Estilos(ref);

        if (elementos === "") {
          //Aplicar estilo especifico para input de busqueda
          refVariable.estiloBuscador();

          //// Agregar eventListener de busqueda al "input" para aña
          //console.log("qué é ref????", ref);

          ref.addEventListener("input", () => {
            filtrarLista(ref);
            //console.log("valor de input? ", ref.value);
          });
        } else {
          // Estilar para un input normal
          refVariable.estiloInputForm();

          // Modificar los elementos de input existentes
          if (document.querySelectorAll("form > input").length === 3) {
            let ref1 = document.querySelectorAll("form > input")[0];
            let ref2 = document.querySelectorAll("form > input")[1];
            let ref3 = document.querySelectorAll("form > input")[2];
            ref1.setAttribute("name", "nome");
            ref2.setAttribute("name", "apelido");
            ref3.setAttribute("type", "file");
            ref3.setAttribute("name", "imaxen");
          }
        }
      }
      break;

    case "a":
      {
        //Crear un nuevo "div" y añadirlo despues de un elemento especificado
        let introducindoDiv = document.querySelector(
          elementos.a.referenciaNavInput,
        );
        let creoDiv = document.createElement(elementos.a.div.etiqueta);
        introducindoDiv.after(creoDiv);

        for (let dato in elementos.a.elementosNavegacion) {
          refVariable = new HTML(
            etiquetaACrear,
            elementos.a.referenciaNavInputDiv,
          );
          refVariable.creoElemento();
          refVariable.introduzcoTexto(
            elementos.a.elementosNavegacion[`${dato}`],
          );
          refVariable.pintoElementoCreado();
          
          let ref = document.querySelector(elementos.a.referenciaNavInputDiv);
          refVariable = new Estilos(ref);
          refVariable.estiloDivA();
        }
        let ref2 = document.querySelectorAll("nav > input + div > a");
        ref2.forEach((etiquetaA) => {

          refVariable = new Estilos(etiquetaA)
          refVariable._estiloDoA()
        })
        console.log("ref2: ",ref2)

      }
      break;

    case "section":
      {
      
        refVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = refVariable.creoElemento();
        refVariable.pintoElementoCreado();
        refVariable = new Estilos(ref);
        refVariable.estiloSeccion();
      }
      break;

    case "form":
      {
        refVariable = new HTML(etiquetaACrear, etiquetaIntrouduciendoEn);
        let ref = refVariable.creoElemento();
        refVariable.pintoElementoCreado();
        refVariable = new Estilos(ref);
        refVariable.estiloForm();
      }
      break;
    case "button":
      {
        refVariable = new Boton(etiquetaACrear, etiquetaIntrouduciendoEn);

        let ref = refVariable.creoElemento();
        if (elementos === "funcionEnvioForm") {
          refVariable.introduzcoAtributos("id", elementos);
          refVariable.introduzcoTexto("Enviar");
        } else {
          refVariable.introduzcoAtributos("id", elementos);
          refVariable.introduzcoTexto("Engadir afición");
        }

        refVariable.pintoElementoCreado();
        refVariable.eventoListener();
        refVariable = new Estilos(ref);
        refVariable.estiloBotonForm();
      }
      break;
  }
}

// Funcion para inicializar la estructura de la página
function iniciando() {
  let datos = {
    cabecera: "header",
    principal: "main",
  };

  // Crear eleementos "header" y "main" en el DOM
  for (let etiqueta in datos) {
    let ref = document.createElement(datos[`${etiqueta}`]);
    document.body.append(ref);
  }
  let referenciaMain = document.querySelector("main");
  referenciaMain.style.display = "flex";
}

function filtrarLista(ref) {
  console.log("valor de input? ", ref.value);
  let osH3 = document.querySelectorAll("h3");
  console.log("osH3: ", osH3, osH3[0]);
  // Obtener valor y convertir a mayusculas para evitar distinciones entre minus. y mayus.            
            const filtro = ref.value.toUpperCase();  

            // Recorrer la lista y mostrar u ocultar elementos según la letra introducida
            for (let i = 0; i < osH3.length; i++) 
            {
                const objetivo = osH3[i];
                const textoElemento = objetivo.textContent.toUpperCase();

                // Mostrar u ocultar según si la letra coincide o no. "includes" recorre todo el texto. "startsWith" solo busca si coincide al principio la palabra.
                if (textoElemento.includes(filtro)) {
                    objetivo.parentElement.parentElement.style.display = 'block';
                } else {
                    objetivo.parentElement.parentElement.style.display = 'none';
                }
            }
}

export { pintando, iniciando };
//export { pintando, iniciando};

/** 
function pintando2(elemento, etiqueta, etiquetaReferencia) {
  let referencia = cambioReferencias(etiquetaReferencia);

  let clase;
  let claseBoton;
  let claseForm;
  let claseSection;
  switch (etiqueta) {
    case "input":
      clase = new HTML(etiqueta, referencia);
      clase.crearElemento();
      clase.engadirAtributo(
        elemento.atributosTypeText.type,
        elemento.atributosTypeText.text,
      );
      clase.engadindoElemento();
      break;
    case "button":
      claseBoton = new Boton(etiqueta, referencia);
      claseBoton.engadoBoton(elemento.atributos.id, elemento.atributos.funcion);
      claseBoton.eventoListener();
      break;
    case "form":
      claseForm = new Form(etiqueta, referencia, elemento, Estilos);
      console.log("claseForm ", claseForm);
      pintoForm(claseForm);

      break;
    case "section":
      document.querySelector("main").append(referencia);

      break;
    default:
      console.log("pintando");
  }
}


*/
