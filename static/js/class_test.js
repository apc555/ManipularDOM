class HTML {
  // ... (unchanged)
}

class Boton extends HTML {
  // ... (unchanged)
}

class Estilos {
  constructor(referencia) {
    this.referencia = referencia;
  }

  estiloForm() {
    this.referencia.style.display = 'flex';
    this.referencia.style.flexDirection = 'column';
    this.referencia.style.width = '500px';
    this.referencia.style.gap = '2px';
  }

  estiloSeccion() {
    this.referencia.style.backgroundColor = '#F2FCFD';
    this.referencia.style.width = '60%';
    this.referencia.style.display = 'flex';
    this.referencia.style.alignItems = 'flex-start';
    this.referencia.style.flexWrap = 'wrap';
  }

  estiloBackgroundColor() {
    this.referencia.style.backgroundColor = 'pink';
  }

  estiloDivA() {
    this.referencia.style.display = 'flex';
    this.referencia.style.padding = '16px';
    this.referencia.style.justifyContent = 'center';
    this.referencia.style.alignItems = 'center';
    this.referencia.style.gap = '8px';
    this.referencia.style.borderRadius = '8px';
    this.referencia.style.backgroundColor = '#f5faff';
  }

  estiloNav() {
    this.referencia.style.display = 'flex';
    this.referencia.style.justifyContent = 'space-between';
    this.referencia.style.alignItems = 'center';
    this.referencia.style.alignSelf = 'stretch';
    this.referencia.style.fontFamily = 'Poppins';
    this.referencia.style.fontSize = '16px';
    this.referencia.style.fontStyle = 'normal';
    this.referencia.style.fontWeight = '500';
    this.referencia.style.lineHeight = 'normal';
    this.referencia.style.opacity = '0.8';
  }

  estiloMain() {
    this.referencia.style.display = 'flex';
    this.referencia.style.padding = '80px';
  }

  estiloLista() {
    this.referencia.style.listStyle = 'none';
    this.referencia.style.color = '#131212';
  }

  estiloBuscador() {
    this.referencia.style.width = '327px';
    this.referencia.style.padding = '16px';
    this.referencia.style.alignItems = 'center';
    this.referencia.style.gap = '8px';
    this.referencia.style.borderRadius = '4px solid #BFC8E5';
    this.referencia.placeholder = '🔎 Buscador';
    this.referencia.name = 'Buscador';
  }

  estiloInputForm() {
    this.referencia.style.backgroundColor = '#d8e8f2';
  }

  estiloBotonForm() {
    this.referencia.style.backgroundColor = 'white';
    this.referencia.style.color = 'black';
  }
}

export { HTML, Boton, Estilos };
