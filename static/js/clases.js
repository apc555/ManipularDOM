class HTML {
    refEtiquetaCreada;
    constructor(etiquetaACrear, etiquetaRef) {
    this.etiquetaACrear = etiquetaACrear;
    this.etiquetaRef = etiquetaRef;
  }

  creoElemento() {
    this.refEtiquetaCreada = document.createElement(this.etiquetaACrear);
    return this.refEtiquetaCreada;
  }

  set _etiquetaACrear(valor) {
    return (this.etiquetaACrear = valor);
  }

  introduzcoTexto(texto) {
    this.refEtiquetaCreada.textContent = texto;
  }
  pintoElementoCreado() {
    let refEtiquetaSeleccionada = document.querySelector(this.etiquetaRef);
    refEtiquetaSeleccionada.append(this.refEtiquetaCreada);
  }
}
class Boton extends HTML {
  refInputAficion;
  #novoLi;
  #refSeccion;
  constructor(etiquetaACrear, etiquetaRef) {
  super(etiquetaACrear, etiquetaRef); // actualiza
  }

  introduzcoAtributos(atributo, valor) {
    this.refEtiquetaCreada.setAttribute(atributo, valor);
  }

  pintoInputAficion() {
    this.refInputAficion = document.querySelector(
      "form > input + input + button",
    );
    this.refInputAficion.before(this.refEtiquetaCreada);
  }

  engadirInputAficion() {
    let refForm = document.querySelector("form");
    super._etiquetaACrear = "input";
    super.creoElemento();
    this.introduzcoAtributos("type", "text");
    this.introduzcoAtributos("name", "aficion");
  }

  engadoLista() {
    /*
            console.log(document.forms[0].elements.aficion[0].value)
            console.log(document.forms[0].elements.aficion[1].value)
            console.log(document.forms[0].elements.aficion[2].value)
            console.log(document.forms[0].elements.aficion[3].value)
            console.log(document.forms[0].elements.aficion.length)
      */
    //console.log(document.forms[0].elements.aficion)
    console.log("document.forms[0].elements : ", document.forms[0].elements);
    let unDiv = document.createElement("div");
    let datos = document.createElement("ul");
    let datoLista = document.createElement("h3");
    let ficheiro = document.forms[0].imaxen.files[0];
    let imaxen = URL.createObjectURL(ficheiro);
    let etiquetaImaxe = document.createElement("img");
    etiquetaImaxe.setAttribute("src", `${imaxen}`);
    datos.append(etiquetaImaxe);
    datoLista.textContent =
      document.forms[0].elements.nome.value +
      " " +
      document.forms[0].elements.apelido.value;
    datos.append(datoLista);
    let tamano = document.forms[0].elements.aficion;
    // Verificar si tamano es válido y no es undefined
    //this.#refSeccion = document.querySelectorAll("section")[1];
    this.#refSeccion = document.querySelectorAll("section")[0];
    for (let dato of tamano) {
      this.#novoLi = document.createElement("li");

      this.#novoLi.textContent = dato.value;
      let novoEstilo = new Estilos(this.#novoLi); // referencia estilos

      novoEstilo.estiloLista();
      datos.append(this.#novoLi);
    }

    unDiv.append(datos);
    this.#refSeccion.append(unDiv);
  }

  eventoListener() {
    if (document.querySelectorAll("button").length == 2) {
      funcionEnvioForm.addEventListener("click", (e) => {
        e.preventDefault();
        this.engadoLista();
      });
      funcionEngadirAficion.addEventListener("click", (e) => {
        e.preventDefault();
        this.engadirInputAficion();
        this.pintoInputAficion();
      });
    }
  }
}
class Estilos {
  constructor(referencia) {
    this.referencia = referencia;
  }

  estiloForm() {
    this.referencia.style.display = "flex";
    this.referencia.style.flexDirection = "column";
    this.referencia.style.width = "500px";
    this.referencia.style.gap = "2px";
  }
  estiloSeccion() {
    this.referencia.style.backgroundColor = "#F2FCFD";
   // this.referencia.style.border = "1px solid red";
  //  this.referencia.style.borderRadius = "10px solid white";
    this.referencia.style.width = "60%";
    this.referencia.style.display = "flex";
    this.referencia.style.alignItems = "flex-start";
    this.referencia.style.flexWrap = "wrap";
  }
  estiloBackgroundColor() {
    this.referencia.style.backgroundColor = "pink";
  }
  estiloDivA() {
    this.referencia.style.display = "flex";
    this.referencia.style.padding = "16px";
    this.referencia.style.justifyContent = "center";
    this.referencia.style.alignItems = "center";
    this.referencia.style.gap = "8px";
    this.referencia.style.borderRadius = "8px";
    //this.referencia.style.backgroundColor = "#f5faff";
    this.referencia.style.color = "#151B32";
  }
  estiloNav() {
    this.referencia.style.display = "flex";
    this.referencia.style.justifyContent = "space-between";
    this.referencia.style.alignItems = "center";
    this.referencia.style.alignSelf = "stretch";
    //this.referencia.style.backgroundColor = "#17202A";
    this.referencia.style.fontFamily = "Poppins";
    this.referencia.style.fontSize = "16px";
    this.referencia.style.fontStyle = "normal";
    this.referencia.style.fontWeight = "500";
    this.referencia.style.lineHeight = "normal";
    this.referencia.style.opacity = "0.8";
    /*
    this.referencia.style.color = "#151B32";
    this.referencia.style.border = "1px solid #C0392B";
    this.referencia.style.width = "100%";
    this.referencia.style.height = "5vh";
    this.referencia.style.gap = "20vw";*/
  }
  _estiloDoA(){
    this.referencia.style.display = "flex";
    this.referencia.style.padding = "16px";
    this.referencia.style.justifyContent = "center";
    this.referencia.style.alignItems = "center";
    this.referencia.style.gap = "8px";
    this.referencia.style.borderRadius = "8px";
    this.referencia.style.backgroundColor = "#f5faff";

    this.referencia.addEventListener("mouseover",(e)=>{
      
      this.referencia.style.backgroundColor = "#849FFF";
      this.referencia.style.color ="#fff";
    })
    this.referencia.addEventListener("mouseout",(e)=>{
      
      this.referencia.style.backgroundColor = "#f5faff";
      this.referencia.style.color = "#151B32";
    })
    //this.referencia.style.color = "red"
  }
  estiloA()
  {
 
  }
  estiloMain() {
    console.log("referencias MAIN: ", this.referencia.main);
    this.referencia.style.display = "flex";
//    this.referencia.style.backgroundColor = "#17202A";
//    this.referencia.style.color = "#F8F9F9";
//    this.referencia.style.border = "1px solid black";
    this.referencia.style.padding = "80px";
  }
  estiloLista() {
    console.log("referencias li?: ", this.referencia);
    this.referencia.style.listStyle = "none";
    //this.referencia.style.list-style-type = "none"
    this.referencia.style.color = "#131212";
  }
  estiloBuscador() {
    //this.referencia.style.backgroundColor = "#e7ebef";
    //this.referencia.style.height = "3vh";
    this.referencia.style.width = "327px";
    this.referencia.style.padding = "16px";
    this.referencia.style.alignItems = "center";
    this.referencia.style.gap = "8px";
    this.referencia.style.borderRadius = "4px solid #BFC8E5";
/*    this.referencia.style.margin = "5px";
    this.referencia.style.padding = "3px";
    this.referencia.style.flex = "0.5";   */
    this.referencia.placeholder = "🔎 Buscador";
    this.referencia.name = "Buscador";
  }
  estiloInputForm() {
    this.referencia.style.backgroundColor = "#d8e8f2";
    this.referencia.style.padding = "16px";
    this.referencia.style.alignItems = "center";
    this.referencia.style.gap = "8px";
    this.referencia.style.borderRadius = "4px";
    this.referencia.style.border = "1px solid #BFC8E5";
    this.referencia.style.boxShadow = "0px 8px 23px 0px grey";
    this.referencia.placeholder = "Escribe . . .";
    
  }
  estiloBotonForm() {
    this.referencia.style.display = "flex";
    this.referencia.style.padding = "16px";
    this.referencia.style.justifyContent = "center";
    this.referencia.style.alignItems = "center";
    this.referencia.style.gap = "8px";
    this.referencia.style.borderRadius = "8px";
    this.referencia.style.backgroundColor = "#f5faff";
  }
}

export { HTML, Boton, Estilos };

/** 

class HTML2 {
  static refEtiquetaNova = 6; // creeina para facer proba
  //#refEtiqueta;
  outraProba = 43;
  static refEtiqueta;
  constructor(etiqueta, referencia) {
    this.etiqueta = etiqueta;
    this.refBody = referencia;
     this.atributo = atributo;
        this.valorAtributo = valorAtributo; 
  }

  
  set refNovaEtiqueta(novaEtiqueta) {
    this.etiqueta = novaEtiqueta;
  }
 
  set refNovaRefBody(novaRef) {
    this.refBody = novaRef;
  }

  set refNovaRefEtiqueta(novaRef) {
    this.refEtiqueta = novaRef;
  }

  crearElemento() {
    this.refEtiqueta = document.createElement(this.etiqueta);
    //this.#refEtiqueta = document.createElement(this.etiqueta)
  }

  devolverRefElemento(etiqueta) {
    return document.createElement(etiqueta);
  }
  engadirAtributo(atributo, valorAtributo) {
    console.log("????", atributo, valorAtributo);
    this.refEtiqueta.setAttribute(atributo, valorAtributo);
    console.log(atributo, valorAtributo);
    //this.#refEtiqueta.setAttribute(atributo,valorAtributo)
  }
  engadindoElemento() {
    //this.refBody.append(this.#refEtiqueta)
    console.log("engadindoElemento: ", this.refEtiqueta);
    this.refBody.append(this.refEtiqueta);
  }
}
class Boton2 extends HTML {
  constructor(etiqueta, referencia) {
    super(etiqueta, referencia); //actualiza
  }

  engadoBoton(atributo, valorAtributo) {
    super.crearElemento();
    super.engadirAtributo(atributo, valorAtributo);
    this.refEtiqueta.textContent = "enviar";
    super.engadindoElemento();
  }
  eventoListener() {
    miFuncion.addEventListener("click", () => {
      console.log("dende o evento");
    });
  }
}

class Form extends HTML {
  #refSeccion;
  #novoLi;
  constructor(etiqueta, referencia, elementos, estilos) {
    super(etiqueta, referencia); //actualiza
    this.elementos = elementos;
    this.estiloRef = estilos;
  }

  creoInputForm() {
    super.refNovaEtiqueta = this.elementos.etiquetaInput; // update this.etiqueta => update this.refEtiqueta
    super.crearElemento();
  }
  creoInputAficion() {
    super.refNovaEtiqueta = this.elementos.etiquetaInput;
    super.crearElemento();
  }
  pintoInputAficion() {
    funcionEngadirAficion.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clico pintoInputAficion");
      super.refNovaEtiqueta = this.elementos.etiquetaInput;
      super.crearElemento();
      this.pintoMeuInput();
    });
  }
  pintoMeuInput() {
    super.engadirAtributo(
      this.elementos.atributos.doInput.type,
      this.elementos.atributos.doInput.text,
    );
    super.engadirAtributo(
      this.elementos.atributos.doInput.name,
      this.elementos.atributos.doInput.valorName,
    );
    super.engadindoElemento();
  }
  creoEtiquetaForm() {
    super.crearElemento();
    let ejecutoReferencias = new this.estiloRef(this.refEtiqueta);
    ejecutoReferencias.estiloForm();
  }
  creoBotonForm() {
    super.refNovaEtiqueta = this.elementos.etiquetaBoton;
    super.crearElemento();
    let ejecutoReferencias = new this.estiloRef(this.refEtiqueta);
    ejecutoReferencias.estiloBackgroundColor();
    super.engadirAtributo(
      this.elementos.atributos.doBoton.id,
      this.elementos.atributos.doBoton.funcion,
    ); // Se o poñemos antes cambia a referencia e pinta no input
  }
  creoBotonAficion() {
    super.refNovaEtiqueta = this.elementos.etiquetaBoton;
    super.crearElemento();
    super.engadirAtributo(
      this.elementos.atributos.doBoton.id,
      this.elementos.atributos.doBoton.funcionEngadirAficion,
    );
  }
  pintoMeuBoton(texto) {
    console.log("texto en pinto meu botón", texto);
    this.refEtiqueta.textContent = texto;
    super.engadindoElemento();
  }
  engadoForm() {
    super.engadindoElemento();
    super.refNovaRefBody = this.refEtiqueta;
  }
  engadoLista() {
    
            console.log(document.forms[0].elements.aficion[0].value)
            console.log(document.forms[0].elements.aficion[1].value)
            console.log(document.forms[0].elements.aficion[2].value)
            console.log(document.forms[0].elements.aficion[3].value)
            console.log(document.forms[0].elements.aficion.length)
            

    let unDiv = document.createElement("div");
    let datos = document.createElement("ul");
    let tamano = document.forms[0].elements.aficion;

    for (let dato of tamano) {
      this.#novoLi = document.createElement("li");
      this.#novoLi.textContent = dato.value;
      datos.append(this.#novoLi);
      let refLi = new this.estiloRef(this.#novoLi);
      refLi.estiloLista();
    }
    unDiv.append(datos);
    this.#refSeccion.append(unDiv);
    console.log('ref li? ',this.#novoLi)
            let p = document.createElement('li');
            let refLi = new this.estiloRef(this.#novoLi);
            refLi.estiloLista()
  }
  insertarUserEnSection() {
    funcionEnvioForm.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("clico enviar: ");
      this.#refSeccion = document.querySelector("section");
      this.engadoLista();
    });
  }
}


class Proba {
  #variablePrivada;
  static outraVariable;

  set modifico(valor) {
    this.#variablePrivada = valor;
  }

  set modificoStatica(valor) {
    this.outraVariable = valor;
  }

  get leoStatica() {
    return this.outraVariable;
  }

  get leo() {
    return this.#variablePrivada;
  }
}
*/
