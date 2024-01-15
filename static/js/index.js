import { pintando, iniciando } from "./funciones.js";
import { elementos } from "../datos/etiquetas.js";

iniciando();
//filtrarLista();

pintando(elementos.header.etiqueta, elementos.nav.etiqueta, "");
pintando(elementos.nav.etiqueta, elementos.input.etiqueta, "");
pintando(elementos.nav.etiqueta, elementos.a.etiqueta, elementos);
pintando(elementos.main.etiqueta, elementos.seccion.etiqueta, "");
pintando(elementos.main.etiqueta, elementos.form.etiqueta, "");
pintando(elementos.form.etiqueta, elementos.input.etiqueta, elementos);
pintando(elementos.form.etiqueta, elementos.input.etiqueta, elementos);
pintando(elementos.form.etiqueta, elementos.input.etiqueta, elementos);
pintando(
  elementos.form.etiqueta,
  elementos.form.etiquetaBoton,
  elementos.form.atributos.doBoton.funcionEngadirAficion,
);

pintando(
  elementos.form.etiqueta,
  elementos.form.etiquetaBoton,
  elementos.form.atributos.doBoton.funcion,
);

// styles.js

// Function to create and append a style tag with dynamic styles
function applyStyles() {
  const style = document.createElement("style");
  style.textContent = `
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
        }

        header {
            background-color: #17202A;
            color: #EAEDED;
            border: 1px solid #C0392B;
            width: 100%;
            height: 5vh;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20vw;
        }

        main {
            display: flex;
            flex-direction: column;
            background-color: #17202A;
            color: #F8F9F9;
            border: 1px solid black;
            padding: 5px;
        }

        section {
            background-color: #cfe2f3;
            border: 1px solid red;
            border-radius: 10px solid white;
            width: 60%;
            display: flex;
            flex-wrap: wrap;
        }

        ul {
            list-style: none;
            color: #131212;
        }

        li {
            /* Additional list item styles go here */
        }

        /* Add more styles as needed */
    `;
  document.head.appendChild(style);
}

// Function to create the webpage structure dynamically
