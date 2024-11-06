function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
}

window.onload = function () {
  const darkMode = localStorage.getItem("darkMode") === "true";
  if (darkMode) {
    document.body.classList.add("dark-mode");
  }
};

//variaveis
let vida = 0;
let des = 0;
let forc = 0;
let inte = 0;
let ram = 0;
let car = 0;
let hum = 0;
let val = 0;
let din = 0;
let familia = "";
let inventario = [];
let nome = "";
let idade = 0;

//variaveis das escolhas
let classe = 0;
let fam = 0;
let prof = 0;
let passado = 0;

let valido = false;

//funções para escolha feita na página

function escolhaCla(escCla) {
  classe = escCla;
}

function escolhaPro(escPro) {
  prof = escPro;
}

function escolhaPass(escPass) {
  passado = escPass;
}

function escolhaFam(escFam) {
  fam = escFam;
}

function mostraDados() {
  console.log(classe, prof, passado, fam);
  criarFicha();
}

// funções para produção da ficha

//classe
let indexClass = 0;

const titClass = [
  "<h2>titulo</h2><br> consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.<br>consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.",
  "<h2>titulo1</h2><br> consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.<br>consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.",
  "<h2>titulo2</h2><br> consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.<br>consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.",
  "<h2>titulo3</h2><br> consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.<br>consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.",
  "<h2>titulo4</h2><br> consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.<br>consectetur adipiscing elit. Nam non pulvinar metus.consectetur adipiscing elit. Nam non pulvinar metus.",
  "<h2>titulo5</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo6</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
];

const desClass = [
  "<h2>titulo</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo1</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo2</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo3</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo4</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo5</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>titulo6</h2>Nam non pulvinar metus. <table><tr><th>Header 1</th><th>Header 2</th></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
];

const imagens = [
  "img/perso1Place.JPG",
  "img/perso2Place.JPG",
  "img/perso3Place.JPG",
  "img/perso4Place.JPG",
  "img/perso5Place.JPG",
  "img/perso6Place.JPG",
  "img/perso3Place.JPG",
];

const btnClaVet = [
  "escolhaCla(1)",
  "escolhaCla(2)",
  "escolhaCla(3)",
  "escolhaCla(4)",
  "escolhaCla(5)",
  "escolhaCla(6)",
  "escolhaCla(7)",
];

let tituClass = document.getElementById("titClass");
tituClass.innerHTML = titClass[0];

let descClass = document.getElementById("descClass");
descClass.innerHTML = desClass[0];

const btnClass = document.getElementById("btnClass");
btnClass.setAttribute("onclick", btnClaVet[0]);

function updateTextClass() {
  const tituClass = document.getElementById("titClass");
  tituClass.innerHTML = titClass[indexClass];

  const desccClass = document.getElementById("descClass");
  desccClass.innerHTML = desClass[indexClass];

  const btnClass = document.getElementById("btnClass");
  btnClass.setAttribute("onclick", btnClaVet[indexClass]);
}

function atualizarSlide() {
  const slideImg = document.getElementById("sliderClass");
  slideImg.src = imagens[indexClass];
}

function antClass() {
  indexClass = (indexClass - 1 + imagens.length) % imagens.length;
  atualizarSlide();
  updateTextClass();
}

function nextClass() {
  indexClass = (indexClass + 1) % imagens.length;
  atualizarSlide();
  updateTextClass();
}

//Familia

function mudarIndexFam(i) {
  indexVetFam = i;
  console.log(indexVetFam);
  updateTextFam();
}

const titFam = [
  "Titulo1",
  "Titulo2",
  "Titulo3",
  "Titulo4",
  "Titulo5",
  "Titulo6",
];

const par1 = [
  "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
];

const par2 = [
  "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
];

const par3 = [
  "1Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "2Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "3Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "4Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "5Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
  "6Lorem ipsum dolor sit amet, consectetur adipiscing elit. In viverra ex a velit mattis fringilla. Praesent condimentum nisl ex. Pellentesque at blandit lacus. Phasellus felis magna, suscipit non consequat nec, rutrum eu dui. Praesent orci quam, bibendum id sollicitudin lacinia, ultrices vel purus. Aenean tristique iaculis purus, eget mollis enim scelerisque a. Aenean placerat feugiat nisi. Cras pellentesque nisi vitae nibh dignissim lobortis. Nam a convallis leo.",
];

const btnEscolhaFam = [
  "escolhaFam(1)",
  "escolhaFam(2)",
  "escolhaFam(3)",
  "escolhaFam(4)",
  "escolhaFam(5)",
  "escolhaFam(6)",
];

const imagens2 = [
  "img/perso1Place.JPG",
  "img/perso2Place.JPG",
  "img/perso3Place.JPG",
  "img/perso4Place.JPG",
  "img/perso5Place.JPG",
  "img/perso6Place.JPG",
];

let titFam1 = document.getElementById("tituFamEsc");
titFam1.innerHTML = titFam[0];

let para1 = document.getElementById("parag1Fam");
para1.innerHTML = par1[0];

let para2 = document.getElementById("parag2Fam");
para2.innerHTML = par2[0];

let para3 = document.getElementById("parag3Fam");
para3.innerHTML = par3[0];

const btnEscFam = document.getElementById("btnEscolhaFam");
btnEscFam.setAttribute("onclick", btnClaVet[0]);

function updateTextFam() {
  const titFam1 = document.getElementById("tituFamEsc");
  titFam1.innerHTML = titFam[indexVetFam];

  const para1 = document.getElementById("parag1Fam");
  para1.innerHTML = par1[indexVetFam];

  const para2 = document.getElementById("parag2Fam");
  para2.innerHTML = par2[indexVetFam];

  const para3 = document.getElementById("parag3Fam");
  para3.innerHTML = par3[indexVetFam];

  const btnEscFam = document.getElementById("btnEscolhaFam");
  btnEscFam.setAttribute("onclick", btnEscolhaFam[indexVetFam]);
}

// código para criação das fichas
function validar() {
  let vI = false;
  let vN = false;
  let vC = false;
  let vPr = false;
  let vPa = false;
  let vF = false;
  if (nome != "") {
    vN = true;
  }
  if (idade >= 10 && idade <= 150) {
    vI = true;
  }
  if (classe >= 1 && classe <= 7) {
    vC = true;
  }
  if (prof >= 1 && prof <= 20) {
    vPr = true;
  }
  if (passado >= 1 && passado <= 3) {
    vPa = true;
  }
  if (fam >= 1 && fam <= 6) {
    vF = true;
  }

  if (
    vC == true &&
    vPr == true &&
    vPa == true &&
    vF == true &&
    vN == true &&
    vI == true
  ) {
    valido = true;
  } else {
    alert(
      "Alguma escolha não foi feita\n" +
        "Classe foi escolhida: " +
        vC +
        "\n" +
        "Profissão foi escolhida: " +
        vPr +
        "\n" +
        "Passado foi escolhido: " +
        vPa +
        "\n" +
        "Nome foi escolhidO: " +
        vN +
        "\n" +
        "Idade foi escolhida: " +
        vI +
        "\n" +
        "Família foi escolhida: " +
        vF
    );
    console.log(vC, vPr, vPa, vF);
  }
}

function pegarNome() {
  nome = document.getElementById("nomePerso").value;
  idade = document.getElementById("idadePerso").value;
}
function resetarDados() {
  nome = "";
  inventario = [];
  familia = "";
  vida = 0;
  des = 0;
  forc = 0;
  inte = 0;
  ram = 0;
  car = 0;
  hum = 0;
  val = 0;
  din = 0;
}

//função para calcular a escolha da classe
function escolhaClasse(classe) {
  switch (classe) {
    case 1:
      vida = 50;
      des = 3;
      forc = 9;
      inte = 2;
      ram = 3;
      car = 5;
      val = 0;

      break;
    case 2:
      vida = 25;
      des = 3;
      forc = 2;
      inte = 9;
      ram = 5;
      car = 3;
      val = 0;
      break;
    case 3:
      vida = 30;
      des = 9;
      forc = 3;
      inte = 5;
      ram = 3;
      car = 2;
      val = 0;
      break;
    case 4:
      vida = 35;
      des = 5;
      forc = 9;
      inte = 2;
      ram = 2;
      car = 3;
      val = 0;
      break;
    case 5:
      vida = 30;
      des = 3;
      forc = 2;
      inte = 9;
      ram = 3;
      car = 5;
      val = 0;
      hum = 5;
      break;
    case 6:
      vida = 30;
      des = 3;
      forc = 2;
      inte = 5;
      ram = 3;
      car = 9;
      val = 999;
      break;
    case 7:
      vida = 50;
      des = 5;
      forc = 5;
      inte = 5;
      ram = 5;
      car = 0;
      val = 0;
      break;
  }
  console.log(vida, des, forc, inte, ram, car, val);
}
//Função para calcular a escolha da profissão
function escolhaProfissao(prof) {
  switch (prof) {
    case 1:
      des += 1;
      forc += 5;
      inte += 0;
      ram += 0;
      car += 3;
      break;
    case 2:
      des += 3;
      forc += 0;
      inte += 5;
      ram += 1;
      car += 0;
      break;
    case 3:
      des += 3;
      forc += 0;
      inte += 0;
      ram += 1;
      car += 5;
      break;
    case 4:
      des += 1;
      forc += 3;
      inte += 5;
      ram += 0;
      car += 0;
      break;
    case 5:
      des += 0;
      forc += 0;
      inte += 3;
      ram += 1;
      car += 5;
      break;
    case 6:
      des += 3;
      forc += 5;
      inte += 0;
      ram += 1;
      car += 0;
      break;
    case 7:
      des += 1;
      forc += 5;
      inte += 0;
      ram += 3;
      car += 0;
      break;
    case 8:
      des += 1;
      forc += 0;
      inte += 5;
      ram += 3;
      car += 0;
      break;
    case 9:
      des += 5;
      forc += 0;
      inte += 0;
      ram += 1;
      car += 3;
      break;
    case 10:
      des += 5;
      forc += 3;
      inte += 0;
      ram += 0;
      car += 1;
      break;
    case 11:
      des += 0;
      forc += 3;
      inte += 5;
      ram += 1;
      car += 0;
      break;
    case 12:
      desempregado();
      console.log("teste");
      break;
    case 13:
      des += 5;
      forc += 1;
      inte += 3;
      ram += 0;
      car += 0;
      break;
    case 14:
      des += 0;
      forc += 0;
      inte += 1;
      ram += 3;
      car += 5;
      break;
    case 15:
      des += 3;
      forc += 0;
      inte += 1;
      ram += 0;
      car += 5;
      break;
    case 16:
      des += 0;
      forc += 0;
      inte += 5;
      ram += 1;
      car += 3;
      break;
  }
  console.log(vida, des, forc, inte, ram, car, val);
}
//caso a prof seja desempregado:
let valorCerto = false;
let escolhaAtrt = 0;

function desempregado() {
  while (valorCerto == false) {
    let escolhaAtrt = prompt(
      "escolha seu atributo, digite o numero da sua escolha: \n 1.Força \n 2.Destreza \n 3.Inteligência \n 4.Carisma \n 5.Ram"
    );
    if (escolhaAtrt >= 1 && escolhaAtrt <= 5) {
      valorCerto = true;
    } else {
      alert("valor invalido");
    }
  }
  switch (escolhaAtrt) {
    case 1:
      forc += 2;
      break;
    case 2:
      des += 2;
      break;
    case 3:
      inte += 2;
      break;
    case 4:
      car += 2;
      break;
    case 5:
      ram += 2;
      break;
  }
}

//função para calcular a escolha do passado :
function escolhaPassado(passado) {
  switch (passado) {
    case 1:
      adicionarItem("Granada incendiária");
      adicionarItem("Granada incendiária");
      adicionarItem("Barricada de metal");
      adicionarItem("Rastreador");
      adicionarItem("Maço de cigarro");
      adicionarItem("Corrente");
      adicionarItem("Caixa de ferramentas");
      din += 1000;

      break;
    case 2:
      adicionarItem("Equipamento de trilha de rede barato");
      adicionarItem("Granada incendiária");
      adicionarItem("Barricada de metal");
      adicionarItem("Rastreador");
      adicionarItem("Maço de cigarro");
      din += 2000;
      break;
    case 3:
      adicionarItem("Granada incendiária");
      adicionarItem("Granada incendiária");
      adicionarItem("Barricada de metal");
      din += 5000;
      break;
  }
}
//função para adicionar itens no inventário
let item = "";
let j = 0;
function adicionarItem(nomeItem) {
  let item = inventario.find((j) => j.nome === nomeItem);

  if (item) {
    item.quantidade += 1;
  } else {
    inventario.push({ nome: nomeItem, quantidade: 1 });
  }
}
// função para calculo familia, não vai ter muita coisa afinal a familia só da a passiva e não tem como eu saber quantos jogadores vão ser da mesma familia

function escolhaFamilia(fam) {
  switch (fam) {
    case 1:
      familia = "Vazio";
      break;
    case 2:
      familia = "Divinos";
      break;
    case 3:
      familia = "Antigos";
      break;
    case 4:
      familia = "Afogados";
      break;
    case 5:
      familia = "Adubados";
      break;
    case 6:
      familia = "Matilha";
      break;
  }
  console.log(familia);
}

// função para criar os dados para a ficha:
function criarFicha() {
  resetarDados();
  pegarNome();
  console.log(idade);
  console.log(nome);
  validar();
  console.log(valido);
  escolhaClasse(classe);
  escolhaProfissao(prof);
  escolhaPassado(passado);
  console.log(inventario);
  escolhaFamilia(fam);
  gerarPDF();
}

//código para PDF

let val1hum = 0;
async function gerarPDF() {
  const { PDFDocument } = PDFLib;

  // Carrega o PDF existente
  const pdfs =
    "https://raw.githubusercontent.com/ThiagoPScc/CF-br/main/documentos/fichaRpg.pdf";
  const existingPdfBytes = await fetch(pdfs).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPage(0);

  // Inicializa o formulário no PDF
  const form = pdfDoc.getForm();

  // Cria um campo de texto para o nome
  const nomeField = form.createTextField("nomeField");
  nomeField.setText(String(nome)); // Substitua `nome` pela variável que contém o nome do personagem
  nomeField.addToPage(page, { x: 250, y: 450, width: 300, height: 20 });

  // Cria um campo de texto para a idade
  const idadeField = form.createTextField("idadeField");
  idadeField.setText(String(idade)); // Substitua `idade` pela variável que contém a idade do personagem
  idadeField.addToPage(page, { x: 250, y: 420, width: 300, height: 20 });

  // Cria um campo de texto para a valor
  const valorField = form.createTextField("valorField");
  valorField.setText(String(val));
  valorField.addToPage(page, { x: 250, y: 400, width: 300, height: 20 });

  // Cria um campo de texto para a humanidade
  const humanidadeField = form.createTextField("humanidadeField");
  humanidadeField.setText(String(val1hum));
  humanidadeField.addToPage(page, { x: 260, y: 310, width: 300, height: 20 });

  const vidaField = form.createTextField("vidaField");
  vidaField.setText(String(vida));
  vidaField.addToPage(page, { x: 100, y: 280, width: 300, height: 20 });

  const ramField = form.createTextField("ramField");
  ramField.setText(String(ram));
  ramField.addToPage(page, { x: 100, y: 260, width: 300, height: 20 });

  const vidaAtualField = form.createTextField("vidaAtualField");
  vidaAtualField.setText(String(vida));
  vidaAtualField.addToPage(page, { x: 80, y: 280, width: 30, height: 20 });

  const ramAtualField = form.createTextField("ramAtualField");
  ramAtualField.setText(String(ram));
  ramAtualField.addToPage(page, { x: 80, y: 260, width: 30, height: 20 });

  // Cria um campo de texto para a int
  const intField = form.createTextField("intField");
  intField.setText(String(inte));
  intField.addToPage(page, { x: 230, y: 330, width: 300, height: 20 });

  // Cria um campo de texto para a for
  const forField = form.createTextField("forField");
  forField.setText(String(forc));
  forField.addToPage(page, { x: 250, y: 400, width: 300, height: 20 });

  // Cria um campo de texto para a car
  const carField = form.createTextField("carField");
  carField.setText(String(car));
  carField.addToPage(page, { x: 290, y: 200, width: 300, height: 20 });

  // Cria um campo de texto para a des
  const desField = form.createTextField("desField");
  desField.setText(String(des));
  desField.addToPage(page, { x: 260, y: 200, width: 300, height: 20 });

  // Cria um campo de dropdown para a família
  const dropdownField = form.createDropdown("dropdownField");
  dropdownField.addOptions([
    "Vazio",
    "Divinos",
    "Antigos",
    "Afogados",
    "Adubados",
    "Matilha",
  ]);
  dropdownField.select(familia); // Substitua `familia` pela variável que contém a família selecionada
  dropdownField.addToPage(page, { x: 120, y: 260, width: 100, height: 20 });

  // Salva o PDF atualizado
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "formulario_editavel.pdf";
  link.click();
}
