let elementos = {
  input: {
    etiqueta: "input",
    atributosTypeText: { type: "type", text: "text" },
  },
  boton: {
    etiqueta: "button",
    atributos: { id: "id", funcion: "miFuncion" },
  },
  seccion: {
    etiqueta: "section",
  },
  form: {
    etiqueta: "form",
    etiquetaBoton: "button",
    etiquetaInput: "input",
    etiquetaLabel: "label",
    atributos: {
      doBoton: {
        id: "id",
        funcion: "funcionEnvioForm",
        funcionEngadirAficion: "funcionEngadirAficion",
      },
      doInput: {
        type: "type",
        text: "text",
        name: "name",
        valorName: "aficion",
        styles: {
          display: "flex",
          padding: "16px",
          fontFamily: "Poppins",
          justifyContent: "center",
          alignItems: "center",
          gap: "8px",
          borderRadius: "8px",
          backgroundColor: "#f5faff",
        },
      },
    },
    // Add a 'styles' property for form styles
  },
  header: {
    etiqueta: "header",
  },
  nav: {
    etiqueta: "nav",
  },
  a: {
    etiqueta: "a",
    referenciaNavInput: "nav > input",
    referenciaNavInputDiv: "nav > input + div",
    elementosNavegacion: {
      a1: "Reputation",
      a2: "Newusers",
      a3: "Voters",
      a4: "Editors",
      a5: "Moderators",
    },
    div: {
      etiqueta: "div",
    },
  },
  main: {
    etiqueta: "main",
  },
};

export { elementos };