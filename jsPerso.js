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
let profissao ="";
let passa = "";

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
  "<div class='conteudoClasse'><div class = 'textoClasse'><img class='logoClasse' src='img/LogoBigBig.png'><h2>BigBig</h2></div><br> Sua força e tamanho te garantem uma presença que nenhuma roupa de grife pode alcançar. Os Bigs não só intimidam, mas dominam. Dizem que podem dobrar carros e atropelar tanques apenas por diversão... ou será que é verdade? De qualquer forma, ninguém é louco o suficiente para testar.<br><h2>Atributos</h2> <table><tr><th>Vida</th><td>50</td></tr><tr><th>Destreza</th><td>3</td></tr><tr><th>Força</th><td>9</td></tr><tr><th>Inteligência</th><td>2</td></tr><tr><th>Ram</th><td>3</td></tr><tr><th>Carisma</th><td>5</td></tr><tr><th>Valor</th><td>0</td></tr></table></div><img class='fotoDescClasse' src='img/iconPerso.png'>",
  "<div class = 'textoClasse'><img class='logoClasse' src='img/LogoNerd.png'><h2>Nerd</h2></div><br> Sua mente é sua arma mais letal. Com inteligência e raciocínio rápido, você realiza façanhas que outros julgariam impossíveis. Os Nerds são mestres do conhecimento e da lógica, mas não espere que se destaquem em algo físico. Afinal, eles dominam o mundo a partir do teclado.<br> <img class='fotoDescClasse' src='img/iconPerso.png'>",
  "<div class = 'textoClasse'><img class='logoClasse' src='img/LogoPistoleiro.png'><h2>Pistoleiro</h2></div><br>Força bruta não é o seu forte, mas suas habilidades com armas transformam você em uma verdadeira máquina de precisão. Até os maiores brutamontes pensam duas vezes antes de te enfrentar, afinal, quem em sã consciência traz uma faca para um tiroteio?.<br> <img class='fotoDescClasse' src='img/iconPerso.png'>",
  "<div class = 'textoClasse'><img class='logoClasse' src='img/LogoValentao.png'><h2>Valentão</h2></div><br>Nascidos para lutar, os Valentões combinam força e velocidade para resolver tudo com os punhos ou com armas. Especialistas em combates corpo a corpo e de média distância, eles não fogem de uma briga, mas provavelmente não serão muito úteis quando o assunto exige sutileza ou intelecto.<br> <img class='fotoDescClasse' src='img/iconPerso.png'>",
  "<div class = 'textoClasse'><img class='logoClasse' src='img/LogoAcogueiro.png'><h2>Açougueiro</h2></div><br>Na selva urbana, você é o único 'médico' que a maioria pode pagar. Não tem glamour, mas também não tem papo furado: por aqui, amputar e substituir com próteses é mais prático do que cuidar de uma infecção. Entre bisturis e serras elétricas, você é a linha tênue entre a vida e a morte.<br> <img class='fotoDescClasse' src='img/iconPerso.png'>",
  "<div class = 'textoClasse'><img class='logoClasse' src='img/LogoAtor.png'><h2>Ator</h2></div><br> Você é um camaleão social. Rico ou pobre, amigo ou inimigo, ninguém escapa do seu charme. Suas palavras podem inspirar e unir, mas também enganar e manipular. Sua língua é sua arma mais afiada — seja para mudar o mundo ou para dobrá-lo ao seu favor.<br> <img class='fotoDescClasse' src='img/iconPerso.png'>",
  "<div class = 'textoClasse'><img class='logoClasse' src='img/LogoMaquina.png'><h2>Máquina</h2></div><br>Você não é humano. Seus membros são de metal, e suas memórias de infância são engrenagens em uma linha de montagem. Estranho aos olhos humanos, você vive na fronteira entre a criação e a consciência. Agora você é livre... ou pelo menos acredita que é.<br> <img class='fotoDescClasse' src='img/iconPerso.png'>",
];

const desClass = [
  "<h2>Passiva</h2> Você pode escolher um aliado por combate para tomar metade do dano por ele, durante o combate todo.Você também pode escolher a hora de tomar o dano ou não desse aliado. <br>Melhorias com o aumento no nível de valor. <br><strong>Todos:</strong>+3d6 de vida, + 1d4 de força, +1 de Carisma e +1 de ram. <br><strong>Boato:</strong>Você agora pode ignorar 25% de todo dano recebido, + 3d4 de vida.<br><strong> Notícia:</strong>Você agora pode tomar dano por 2 aliados.<br><strong> Lenda:</strong>Você pode escolher uma passiva, o mestre deve aprová-la, você agora também possui a passiva: “Duro na queda”, após sua primeira morte no combate, volta com 50% dos seus pontos de vida.<br><strong> Mito:</strong>Você deve ir na lista de passivas/habilidades supremas e escolher uma.",
  "<h2>Passiva</h2> Não precisa fazer testes de hack em objetos simples(o mestre determina quais objetos serão simples) e possui + 2 no teste de hack.<br> Melhorias com o aumento no nível de valor.<br><strong>Todos:</strong>+2d4 de vida, + 1d4 de inteligência  e + 3 de Ram.<br><strong>Boato:</strong>Seu bônus para os testes de hack aumenta para +4, recebe mais 4 de Ram.<br><strong>Notícia:</strong>Você agora pode uma vez por combate, usar duas habilidades no mesmo turno + 4 de ram.<br><strong>Lenda:</strong>Você pode escolher uma passiva, o mestre deve aprová-la, você agora também possui a passiva: “Mago virtual”, após eliminar um inimigo, pode utilizar mais uma habilidade no mesmo turno, limitado a somente uma vez.<br><strong>Mito:</strong>Você deve ir na lista de passivas míticas e escolher uma.",
  "<h2>Passiva</h2>Seus ataques a distância causam + 1d6 de dano e recebe + 1 em testes de ataque.<br> Melhorias com o aumento no nível de valor.<br><strong>Todos:</strong>+2d4 de vida, + 1d4 de Destreza e +2 de Ram.<br><strong>Boato:</strongSua distância de combate agora é 10 metros maior, causa 1d10 ao inves de 1d6 de dano extra e recebe +2 em testes de ataque ao inves de +1.<br><strong> Notícia:</strong>Seus tiros causam um efeito e dano adicional, escolha entre:<br><table><tr><th>Incêndio</th><td>+4 de dano de fogo</td></tr><tr><th>Envenenamento</th><td>+4 de dano de envenenamento</td></tr><tr><th>Curto-Circuito</th><td>+4 de dano elétrico</td></tr></table><br><strong> Lenda:</strong>Você pode escolher uma passiva, o mestre deve aprová-la, você agora também possui a passiva: “Se pega nos olhos”, seu primeiro dano(com soma das passivas e efeitos) causado á um inimigo será dobrado. <strong>Mito:</strong>Você deve ir na lista de passivas míticas e escolher uma",
  "<h2>Passiva</h2></tr><tr><th>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>Passiva</h2></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>Passiva</h2></tr><tr><td>Row 1</td><td>Row 2</td></tr></table> Curabitur rhoncus sagittis vestibulum. Morbi viverra mollis enim quis lobortis.",
  "<h2>Passiva</h2> Seu personagem recebe as 5 modificações do nível novato de graça.<br>Melhorias com o aumento no nível de valor. <br><strong>Todos:</strong>+1 de cada atributo, + 2 para um atributo a sua escolha e +2d4 de vida. <br><strong>Boato:</strong>Escolha o upgrade de “Boato” de alguma classe para si e +5 pontos de atributos a sua escolha. <br><strong>Notícia:</strong>Escolha o upgrade de “Notícia” de alguma classe para si e +5 pontos de atributos a sua escolha. <br><strong>Lenda:</strong>Você pode escolher uma passiva, o mestre deve aprová-la, você agora também possui a passiva: “Backup”,mesmo que seus pontos de vida cheguem a zero, é possível que algum membro da sua equipe salve seus dados e seu personagem volte ao jogo na próxima mesa.  <br><strong>Mito:</strong>Você deve ir na lista de passivas míticas e escolher uma.",
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
btnEscFam.setAttribute("onclick", btnEscolhaFam[0]);

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
  profissao = '';
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
	  profissao = "Bombeiro";
      des += 1;
      forc += 5;
      inte += 0;
      ram += 0;
      car += 3;
      break;
    case 2:
	  profissao = "Médico";
      des += 3;
      forc += 0;
      inte += 5;
      ram += 1;
      car += 0;
      break;
    case 3:
	  profissao = "Vendedor";
      des += 3;
      forc += 0;
      inte += 0;
      ram += 1;
      car += 5;
      break;
    case 4:
	  profissao = "Mecânico";
      des += 1;
      forc += 3;
      inte += 5;
      ram += 0;
      car += 0;
      break;
    case 5:
	  profissao = "Político";
      des += 0;
      forc += 0;
      inte += 3;
      ram += 1;
      car += 5;
      break;
    case 6:
	  profissao = "Lutador";
      des += 3;
      forc += 5;
      inte += 0;
      ram += 1;
      car += 0;
      break;
    case 7:
	  profissao = "Pedreiro";
      des += 1;
      forc += 5;
      inte += 0;
      ram += 3;
      car += 0;
      break;
    case 8:
	  profissao = "Pesquisador";
      des += 1;
      forc += 0;
      inte += 5;
      ram += 3;
      car += 0;
      break;
    case 9:
	  profissao = "Recepcionista";
      des += 5;
      forc += 0;
      inte += 0;
      ram += 1;
      car += 3;
      break;
    case 10:
	  profissao = "Policial";
      des += 5;
      forc += 3;
      inte += 0;
      ram += 0;
      car += 1;
      break;
    case 11:
	  profissao = "Técnico";
      des += 0;
      forc += 3;
      inte += 5;
      ram += 1;
      car += 0;
      break;
    case 12:
	  profissao = "Desempregado";
      desempregado();
      console.log("teste");
      break;
    case 13:
	  profissao = "ladrão";
      des += 5;
      forc += 1;
      inte += 3;
      ram += 0;
      car += 0;
      break;
    case 14:
	  profissao = "Humorista";
      des += 0;
      forc += 0;
      inte += 1;
      ram += 3;
      car += 5;
      break;
    case 15:
	  profissao = "Golpista";
      des += 3;
      forc += 0;
      inte += 1;
      ram += 0;
      car += 5;
      break;
    case 16:
	  profissao = "Professor";
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
	passa = "Extrangeiro";
      adicionarItem("Granada incendiária");
      adicionarItem("Barricada de metal");
      adicionarItem("Rastreador");
      adicionarItem("Maço de cigarro");
      adicionarItem("Corrente");
      adicionarItem("Caixa de ferramentas");
      din += 2000;

      break;
    case 2:
	passa = "Periferia";
      adicionarItem("Equipamento de trilha de rede barato");
      adicionarItem("Granada incendiária");
      adicionarItem("Barricada de metal");
      adicionarItem("Rastreador");
      adicionarItem("Maço de cigarro");
	  adicionarItem("Bebida simples");
      din += 2000;
      break;
    case 3:
	passa = "playboy";
	  adicionarItem("Lanterna descartável(uso único)");
	  adicionarItem("Corda");
	  adicionarItem("Bebida simples");
      adicionarItem("Granada incendiária");
      adicionarItem("Barricada de metal");
	  adicionarItem("Cachorro quente de Osasco superfaturado");
      din += 3000;
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
let codAle = Math.floor(Math.random() * 90000);

let val1hum = 0;
async function gerarPDF() {
  const { PDFDocument ,rgb } = PDFLib;
  
  const imageInput = document.getElementById('imageUpload').files[0];

            if (!imageInput) {
                alert("Por favor, envie uma imagem para o personagem.");
                return;
            }

  // Carrega o PDF existente
  const pdfs =
    "https://raw.githubusercontent.com/ThiagoPScc/CF-br/main/documentos/fichaRpg.pdf";
  const existingPdfBytes = await fetch(pdfs).then((res) => res.arrayBuffer());
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const page = pdfDoc.getPage(0);
  
  const imageBytes = await imageInput.arrayBuffer();
            const imgType = imageInput.type;

            let img;
            if (imgType === 'image/jpeg') {
                img = await pdfDoc.embedJpg(imageBytes);
            } else if (imgType === 'image/png') {
                img = await pdfDoc.embedPng(imageBytes);
            } else {
                alert("Formato de imagem não suportado. Use JPEG ou PNG.");
                return;
            }

  // Inicializa o formulário no PDF
  const form = pdfDoc.getForm();
  
			const imgWidth = 109;
            const imgHeight = 88;
            const xPosition = 40;
            const yPosition = 702;

            page.drawImage(img, {
                x: xPosition,
                y: yPosition,
                width: imgWidth,
                height: imgHeight,
            });

  // Cria um campo de texto para o nome
  const nomeField = form.createTextField("nomeField");
  nomeField.setText(String(nome)); // Substitua `nome` pela variável que contém o nome do personagem
  nomeField.addToPage(page, { x: 260, y: 778, width: 141, height: 20 });
  
  
   page.drawText(String(codAle), { x: 326, y: 756, size:12, color: rgb(0.58, 0.58, 0.58) });

  // Cria um campo de texto para a idade
  const idadeField = form.createTextField("idadeField");
  idadeField.setText(String(idade)); // Substitua `idade` pela variável que contém a idade do personagem
  idadeField.addToPage(page, { x: 260, y: 749, width: 32, height: 20 });

  // Cria um campo de texto para a valor
  const valorField = form.createTextField("valorField");
  valorField.setText(String(val));
  valorField.addToPage(page, { x: 462, y: 689, width: 66, height: 20 });

  // Cria um campo de texto para a humanidade
  const humanidadeField = form.createTextField("humanidadeField");
  humanidadeField.setText(String(val1hum));
  humanidadeField.addToPage(page, { x: 487, y: 715, width: 41, height: 20 });

  const vidaField = form.createTextField("vidaField");
  vidaField.setText(String(vida));
  vidaField.addToPage(page, { x: 75, y: 535, width: 41, height: 20 });

  const ramField = form.createTextField("ramField");
  ramField.setText(String(ram));
  ramField.addToPage(page, { x: 75, y: 511, width: 41, height: 20 });

  const vidaAtualField = form.createTextField("vidaAtualField");
  vidaAtualField.setText(String(vida));
  vidaAtualField.addToPage(page, { x: 122, y: 535, width: 41, height: 20 });

  const ramAtualField = form.createTextField("ramAtualField");
  ramAtualField.setText(String(ram));
  ramAtualField.addToPage(page, { x: 122, y: 511, width: 41, height: 20 });

  // Cria um campo de texto para a int
  const intField = form.createTextField("intField");
  intField.setText(String(inte));
  intField.addToPage(page, { x: 216, y: 527, width: 40, height: 40 });
  
  
  const intModField = form.createTextField("intModField");
  intModField.setText(String(parseInt(inte/5)));
  intModField.addToPage(page, { x: 265, y: 541, width: 27, height: 27 });


  // Cria um campo de texto para a for
  const forField = form.createTextField("forField");
  forField.setText(String(forc));
  forField.addToPage(page, { x: 319, y: 424, width: 40, height: 40 });
  
   const forModField = form.createTextField("forModField");
  forModField.setText(String(parseInt(forc/5)));
  forModField.addToPage(page, { x: 368, y: 438, width: 27, height: 27 });

  // Cria um campo de texto para a car
  const carField = form.createTextField("carField");
  carField.setText(String(car));
  carField.addToPage(page, { x: 319, y: 527, width: 40, height: 40 });
  
  
   const carModField = form.createTextField("carModField");
  carModField.setText(String(parseInt(car/5)));
  carModField.addToPage(page, { x: 368, y: 541, width: 27, height: 27 });

  // Cria um campo de texto para a des
  const desField = form.createTextField("desField");
  desField.setText(String(des));
  desField.addToPage(page, { x: 216, y: 424, width: 40, height: 40 });
  
  const desModField = form.createTextField("desModField");
  desModField.setText(String(parseInt(des/5)));
  desModField.addToPage(page, { x: 265, y: 438, width: 27, height: 27 });

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
  dropdownField.addToPage(page, { x: 274, y: 715, width: 128, height: 20 });
  
  //segunda parte dos formulários
  
  const passField = form.createDropdown("passField");
  passField.addOptions([
    "Extrangeiro",
    "Periferia",
    "Playboy",
  ]);
  passField.select(passa);
  passField.addToPage(page, { x: 75, y: 643, width: 89, height: 20 });
  
  
    
  const profField = form.createDropdown("profField");
  profField.addOptions([
    "Bombeiro",
	"Médico",
	"Vendedor",
	"Mecânico",
	"Político",
	"Lutador",
	"Pedreiro",
	"Pesquisador",
	"Recepcionista",
	"Policial",
	"Técnico",
	"Desempregado",
	"Ladrão",
	"Humorista",
	"Golpista",
	"Professor",
  ]);
  profField.select(profissao);
  profField.addToPage(page, { x: 82, y: 614, width: 82, height: 20 });
  
  //Anotações
  

  const ano1Filed = form.createTextField("ano1Filed");
  ano1Filed.addToPage(page, { x: 36, y: 449, width: 124, height: 15});
  
  const ano2Filed = form.createTextField("ano2Filed");
  ano2Filed.addToPage(page, { x: 36, y: 431, width: 124, height: 15});
  
  const ano3Filed = form.createTextField("ano3Filed");
  ano3Filed.addToPage(page, { x: 36, y: 413, width: 124, height: 15});
  
  const dinField = form.createTextField("dinField");
  dinField.setText(String(din));
  dinField.addToPage(page, { x: 82, y: 388, width: 77, height: 20});
  
  
  
  // inventário e equipamento
  
   const item1Filed = form.createTextField("item1Filed");
  item1Filed.setText(String(inventario[0].nome));
  item1Filed.addToPage(page, { x: 30, y: 252, width: 95, height: 24 });
  
  const item1QFiled = form.createTextField("item1QFiled");
  item1QFiled.setText(String(inventario[0].quantidade));
  item1QFiled.addToPage(page, { x: 135, y: 252, width: 20, height: 24 });
  
  
   const item2Filed = form.createTextField("item2Filed");
  item2Filed.setText(String(inventario[1].nome));
  item2Filed.addToPage(page, { x: 30, y: 215, width: 95, height: 24 });
  
  const item2QFiled = form.createTextField("item2QFiled");
  item2QFiled.setText(String(inventario[1].quantidade));
  item2QFiled.addToPage(page, { x: 135, y: 215, width: 20, height: 24 });
  
    
   const item3Filed = form.createTextField("item3Filed");
  item3Filed.setText(String(inventario[2].nome));
  item3Filed.addToPage(page, { x: 30, y: 178, width: 95, height: 24 });
  
  const item3QFiled = form.createTextField("item3QFiled");
  item3QFiled.setText(String(inventario[2].quantidade));
  item3QFiled.addToPage(page, { x: 135, y: 178, width: 20, height: 24 });
  
    
   const item4Filed = form.createTextField("item4Filed");
  item4Filed.setText(String(inventario[3].nome));
  item4Filed.addToPage(page, { x: 30, y: 141, width: 95, height: 24 });
  
  const item4QFiled = form.createTextField("item4QFiled");
  item4QFiled.setText(String(inventario[3].quantidade));
  item4QFiled.addToPage(page, { x: 135, y: 141, width: 20, height: 24 });
  
    
   const item5Filed = form.createTextField("item5Filed");
  item5Filed.setText(String(inventario[4].nome));
  item5Filed.addToPage(page, { x: 30, y: 104, width: 95, height: 24 });
  
  const item5QFiled = form.createTextField("item5QFiled");
  item5QFiled.setText(String(inventario[4].quantidade));
  item5QFiled.addToPage(page, { x: 135, y: 104, width: 20, height: 24 });
  
  
  const item6Filed = form.createTextField("item6Filed");
  item6Filed.setText(String(inventario[5].nome));
  item6Filed.addToPage(page, { x: 30, y: 67, width: 95, height: 24 });
  
  const item6QFiled = form.createTextField("item6QFiled");
  item6QFiled.setText(String(inventario[5].quantidade));
  item6QFiled.addToPage(page, { x: 135, y: 67, width: 20, height: 24 });
  
  
   //direita
   const item7Filed = form.createTextField("item7Filed");
  item7Filed.addToPage(page, { x: 164, y: 252, width: 95, height: 24 });
  
  const item7QFiled = form.createTextField("item7QFiled");
  item7QFiled.addToPage(page, { x: 269, y: 252, width: 20, height: 24 });
  
  
   const item8Filed = form.createTextField("item8Filed");
  item8Filed.addToPage(page, { x: 164, y: 215, width: 95, height: 24 });
  
  const item8QFiled = form.createTextField("item8QFiled");
  item8QFiled.addToPage(page, { x: 269, y: 215, width: 20, height: 24 });
  
  
   const item9Filed = form.createTextField("item9Filed");
  item9Filed.addToPage(page, { x: 164, y: 178, width: 95, height: 24 });
  
  const item9QFiled = form.createTextField("item9QFiled");
  item9QFiled.addToPage(page, { x: 269, y: 178, width: 20, height: 24 });
  
  
   const item10Filed = form.createTextField("item10Filed");
  item10Filed.addToPage(page, { x: 164, y: 141, width: 95, height: 24 });
  
  const item10QFiled = form.createTextField("item10QFiled");
  item10QFiled.addToPage(page, { x: 269, y: 141, width: 20, height: 24 });
  
  
   const item11Filed = form.createTextField("item11Filed");
  item11Filed.addToPage(page, { x: 164, y: 104, width: 95, height: 24 });
  
  const item11QFiled = form.createTextField("item11QFiled");
  item11QFiled.addToPage(page, { x: 269, y: 104, width: 20, height: 24 });
  
  
   const item12Filed = form.createTextField("item12Filed");
  item12Filed.addToPage(page, { x: 164, y: 67, width: 95, height: 24 });
  
  const item12QFiled = form.createTextField("item12QFiled");
  item12QFiled.addToPage(page, { x: 269, y: 67, width: 20, height: 24 });
  
  
  //arma secundária da ficha
  
  const itemSecField =form.createTextField("itemSecField");
  itemSecField.addToPage(page, { x: 30, y: 24, width: 95, height: 24 });
  
   const item1SecModField = form.createTextField("item1SecModField");
   item1SecModField.addToPage(page, { x: 135, y: 24, width: 92, height: 24 });
   
   const item1SecDanField = form.createTextField("item1SecDanField");
   item1SecDanField.addToPage(page, { x: 238, y: 24, width: 51, height: 24 });
  //Equipamento
  
  const equipamentoAtual = form.createTextField("equipamentoAtual");
  equipamentoAtual.addToPage(page, { x: 309, y: 253, width: 155, height: 20 });
  
  const equipamentoAtualDan = form.createTextField("equipamentoAtualDan");
  equipamentoAtualDan.addToPage(page, { x: 475, y: 253, width: 60, height: 20 })
  
  const equipamentoAtualDesc = form.createTextField("equipamentoAtualDesc");
  equipamentoAtualDesc.addToPage(page, { x: 309, y: 226, width: 225, height: 20 });
  
  //modficações
  
  const modBraba = form.createTextField("modBraba");
  modBraba.addToPage(page, { x: 309, y: 184, width: 155, height: 20 });
  
  const modBrabaDesc = form.createTextField("modBrabaDesc");
  modBrabaDesc.addToPage(page, { x: 473, y: 184, width: 62, height: 20 })
  
  const ModBrabaDescs = form.createTextField("ModBrabaDescs");
  ModBrabaDescs.addToPage(page, { x: 309, y: 160, width: 155, height: 20 });
  
   const modBrabaDesc2 = form.createTextField("modBrabaDesc2");
  modBrabaDesc2.addToPage(page, { x: 473, y: 160, width: 62, height: 20 })
  
  
  
  const mod1 = form.createTextField("mod1");
  mod1.addToPage(page, { x: 309, y: 128, width: 155, height: 20 });
  
  const mo1D = form.createTextField("mo1D");
  mo1D.addToPage(page, { x: 473, y: 128, width: 62, height: 20 })
  
  
   const mod2 = form.createTextField("mod2");
  mod2.addToPage(page, { x: 309, y: 94, width: 155, height: 20 });
  
  const mod2D = form.createTextField("mod2D");
  mod2D.addToPage(page, { x: 473, y: 94, width: 62, height: 20 })
  
   const mod3 = form.createTextField("mod3");
  mod3.addToPage(page, { x: 309, y: 60, width: 155, height: 20 });
  
  const mod3D = form.createTextField("mod3D");
  mod3D.addToPage(page, { x: 473, y: 60, width: 62, height: 20 })
  
  const mod4 = form.createTextField("mod4");
  mod4.addToPage(page, { x: 309, y: 26, width: 155, height: 20 });
  
  const mod4D = form.createTextField("mod4D");
  mod4D.addToPage(page, { x: 473, y: 26, width: 62, height: 20 })
 
  
   
  
  

  
  
  
  
  
  


  // Salva o PDF atualizado
  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: "application/pdf" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "formulario_editavel.pdf";
  link.click();
}
