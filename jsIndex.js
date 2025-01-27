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
      let index = 0;
	  const titulo = ["E.U.A. - Radioativo", "China - Vazia","Russia - Desconhecido","",];
	  
    const textos = [
        "Os Estados Unidos já foram a terra da liberdade e o lar dos bravos. Agora, são a terra das mutações e o lar de quem ainda consegue respirar. Após os bombardeios, o sonho americano virou um pesadelo tóxico – literalmente. O ar é venenoso, a água é radioativa, e as criaturas... bem, digamos que a seleção natural fez seu trabalho.",
        "A China entrou na guerra como uma força imparável – invadindo, bombardeando e deixando claro logo do ínicio como a guerra iria acabar. Mas, como dizem, o inimigo mais perigoso é aquele que você não espera. Um conflito interno explodiu bem no meio da guerra, e o país acabou lutando em duas frentes: contra o mundo e contra si mesmo.",
        "A Rússia entrou na guerra mais para se defender do que para atacar. Fraca e desgastada das guerras recentes, seu foco era proteger o que restava do próprio território. Mas não se engane: isso não os torna santos. Os poucos soldados que tiveram a infelicidade de cair em suas mãos raramente voltaram para contar a história – a maioria desapareceu para sempre, vítima de interrogatórios que seriam assustadores até para os piores monstros da fantasia.",
        "",
      ];
	  const textos2 = [
        'Quem ainda sobrevive nos destroços vive em algo que só pode ser descrito como uma pré-civilização. Facções surgiram, e nenhuma delas acredita em "paz mundial". Pelo contrário, essas gangues são tão bem armadas e perigosas que fariam até um tanque pensar duas vezes antes de cruzar o território delas.',
        "No fim, o governo percebeu que estava perdendo controle. Tentaram negociar uma paz, mas o caos global tinha outras ideias. Com os EUA já fora do jogo, o famigerado “Dead Hand” entrou em cena. O resultado? Um bombardeio devastador que transformou a China em uma paisagem de pesadelos: crateras intermináveis, lagos fundos no meio das ruinas e a vegetação voltando a tomar conta dos prédios e paísagens que um dia ja foram do páis mais populoso do mundo.",
        'Quando os EUA caíram e o "Dead Hand" disparou seu golpe final, a Rússia conseguiu interceptar o ataque. Mas sobreviver não significa viver. O país já estava em frangalhos: pouca população, recursos quase inexistentes, e um clima implacável que transformava colheitas em fracassos e plantações em desertos congelados.',
        "",
      ];
	  const textos3 = [
        "Enquanto isso, o resto do mundo assiste à distância, esperando uma oportunidade para saquear os equipamento militares antigos e os artefatos do antigo mundo. Ah, e cuidado ao explorar as ruínas – não é só o capitalismo que continua selvagem por lá.",
        "Hoje, embora o local não seja tóxico, o solo é traiçoeiro e não sustenta construções nem promessas. O futuro deste local parece mais incerto do que nunca, mas ainda abriga pequenos grupos de sobreviventes da Europa e da Asia.",
        "A solução? Descer. Literalmente. A Rússia criou um gigantesco sistema de bunkers subterrâneos: cidades inteiras abaixo da terra, com plantações artificiais, canais subterrâneos, linhas ferroviárias e tudo o que fosse necessário para sobreviver. Mas, acima deles, o mundo congelou. Nevascas eternas, permafrost inquebrável e destroços tornaram impossível voltar à superfície.Ou pelo menos é o que dizem. Porque, em algum momento, eles simplesmente desapareceram. Um país inteiro, sumido. Sem sinais, sem respostas. Tudo o que resta é imaginar: o que realmente aconteceu lá embaixo? E será que eles ainda estão vivos?",
        "",
      ];
  
      let isCooldown = false;
	  let primeiroTXTT = document.getElementById("txtT");
      titulo[3] = primeiroTXTT.textContent;
      let primeiroTXT = document.getElementById("txtSlider");
      textos[3] = primeiroTXT.textContent;
	  let primeiroTXT2 = document.getElementById("txtSlider2");
      textos2[3] = primeiroTXT2.textContent;
	  let primeiroTXT3 = document.getElementById("txtSlider3");
      textos3[3] = primeiroTXT3.textContent;
    

      function updateText() {
		const tituloT = document.getElementById("txtT");
        tituloT.textContent = titulo[index];
        const paragrafo = document.getElementById("txtSlider");
        paragrafo.textContent = textos[index];
		const paragrafo2 = document.getElementById("txtSlider2");
        paragrafo2.textContent = textos2[index];
		const paragrafo3 = document.getElementById("txtSlider3");
        paragrafo3.textContent = textos3[index];

      }

      function addTxt() {
        if (isCooldown) return; // Não faz nada se ainda estiver no cooldown
        isCooldown = true; // Ativa o cooldown

        index = (index + 1) % textos.length; // Cicla pelo array de textos
        updateText(); // Atualiza o texto na tela
       

        setTimeout(() => {
          isCooldown = false; // Libera o cooldown após 0.3 segundos
        }, 500);
      }

      function subTxt() {
        if (isCooldown) return; // Não faz nada se ainda estiver no cooldown
        isCooldown = true; // Ativa o cooldown

        index = (index - 1 + textos.length) % textos.length; // Cicla para o índice anterior
        updateText(); // Atualiza o texto na tela
		
        

        setTimeout(() => {
          isCooldown = false; // Libera o cooldown após 0.3 segundos
        }, 500);
      }

      // Inicializa o texto
      document.addEventListener("DOMContentLoaded", () => {
        updateText(); // Mostra o primeiro texto
      });
	  
	  
	  //Slider da parte da Familias poggers
	  
	  
	  let indexFam = 0;
	  const tituloFam = ["","Grande migração 2040 - 2053","Utopia Tropical 2054 - 2064","Queda de Brasília 2065 - 2097","Era estável???  2098 - 2111 ",];
	  
	  const subtituloFam = ["","Um país para todos","Os heróis nacionais","Luto e corporações","Onde estamos",];
	  
	  
	  const txtFam1 = [ "",'De 2040 a 2053, o Brasil virou o destino preferido dos sobreviventes da Última Guerra. E quando eu digo "preferido", leia-se "um dos únicos lugares que ainda aceitava gente". Cidades, que estavam vazias, ficaram lotadas e viraram verdadeiros caldeirões culturais, claro,que com muita violência. Imagina só: pais que perderam filhos cruzando com filhos que perderam pais – e os dois lados eram "inimigos".',
        "Aqui é uma confusão, mas você deve estar acostumado. Tudo começou com um atentado que explodiu a base do governo e, junto, qualquer ideia de ordem que o país tinha. A estabilidade recém-conquistada foi para o espaço, e o caos reinou. Revoltas pipocavam em toda parte, rivalidades antigas ressurgiram com força, e a noite trazia toques de recolher para proteger a população.",
		"A Queda de Brasília não foi sobre sangue ou golpes, mas sobre algo que ninguém pode controlar: a fragilidade humana. Depois de anos no governo, o Número 2 e o Número 1, os rostos e corações do país, se tornaram mais que parceiros de liderança – eles eram um casal. Um casal tão adorado que beirava a idolatria, mas isso não os livrou de um final triste. O Número 2, calmo, estratégico, o “peso de equilíbrio” para o otimismo radiante do Número 1, adoeceu. E, antes que qualquer avanço tecnológico ou esperança pudesse salvá-lo, ele se foi. O país inteiro entrou em luto, mas ninguém sofreu mais do que o Número 1. Sem seu parceiro, sua energia contagiante desapareceu. Ela perdeu a vontade de liderar e, aos poucos, se afastou até sumir completamente do cenário público. ",
		"O governo, agora uma sombra do que já foi, assiste impotente enquanto as corporações tomam as rédeas do país. A corrupção é um segredo aberto: ninguém duvida, mas ninguém consegue provar nada. As grandes empresas não só dominam as ruas, como também moldam as leis, os preços e até as vidas.",
        ];
		
	  const txtFam2 = [  "","Foi um show de conflitos por anos,pequenos grupos começaram a tentar separar os povos em bairros exclusivos, mas o governo e as familias, que já tinham seu espaço na cidade, não permitiram isso, com medo de gerarem novos conflitos dentro do país.",
        "Mas então, surgiram os Cinco. Um grupo misterioso de civis que cresceram com movimentos populares e, com um jeitinho (e muita negociação), entrou no governo cansado e sem forças para continuar. Cada um dos Cinco assumiu um papel crucial: o Número 5 cuidava da agricultura, garantindo que ninguém passasse fome; o Número 4 tomou conta do exército e da infraestrutura, colocando ordem nas ruas e nos escombros; o Número 3 trouxe avanços tecnológicos que deixariam até os antigos gigantes de queixo caído; e os Números 2 e 1 viraram os símbolos do novo Brasil, inspirando a população com uma ideia de um brasileiro ideal – corajoso, humilde, simpático, calmo e com presença.",
		"Com a ausência dos dois pilares do grupo, as rachaduras começaram a aparecer. Pequenas crises políticas surgiam, e a certeza de um futuro promissor deu lugar à incerteza. Foi então que os três membros restantes dos Cinco concordaram: era hora de passar a tocha. Eles organizaram uma eleição e deram início a um novo governo. Eles se afastaram para atuar como conselheiros – em teoria. Na prática, seus conselhos foram sendo cada vez mais ignorados, até que o grupo perdeu toda relevância política. Enquanto o novo governo tentava se encontrar (e tropeçava), o país continuava crescendo economicamente. Mas esse progresso veio com um preço. Grandes corporações começaram a dominar mercados, criar suas próprias milícias e ditar suas próprias regras. A violência ressurgiu, com as ruas virando palco de conflitos.",
		"Bairros inteiros são comprados a preço de ouro, suas comunidades desalojadas para dar lugar a novas sedes empresariais. Ex-funcionários que ousam acusar as empresas de assédio? Simplesmente desaparecem, como se nunca tivessem existido. A saúde pública foi sucateada, enquanto impérios farmacêuticos lucram em cima da escassez e do sofrimento. Na cidade, a regra é clara: ou você mostra seu valor ou será esmagado pela máquina.",
       ];
		
	  const txtFam3 = [ "",'Foi então que nasceu o "Tratado de Batismo". Nome religioso? Sim. Função religiosa? Não. A regra era simples: para ficar aqui, você deixava o passado de lado e aceitava ser brasileiro, não sobrevivente ou refugiado. Muito longe de ser perfeito, mas ajudou a "passar um pano" na treta e começar algo novo... ou pelo menos, menos explosivo.',
        "O resultado? Um Brasil que floresceu de forma quase inacreditável. Prédios modernos erguiam-se com plantações verticais, carros voadores cruzavam os céus, e a DALVA, uma fonte de energia solar limpa revolucionária, se tornou o coração do país. Robôs de alta tecnologia patrulhavam as ruas, garantindo segurança, enquanto parques, teatros e uma economia pulsante construíam a harmonia perfeita entre a natureza, a tecnologia e o povo. Se você vivesse nessa época, poderia até pensar que o Brasil tinha finalmente se tornado o país do futuro.",
		"Os Cinco, agora aposentados, ainda aparecem em grandes eventos nacionais, tratados quase como lendas vivas. Mas seu tempo já passou, e o Brasil segue em frente, as coorporações e familias agora se tornam cada vez mais poderosas e agressivas. O país segue oscilando entre o progresso e os mesmos velhos problemas. Afinal, até mesmo as maiores utopias podem se desfazer quando lembramos que, no fim, somos todos humanos.",
		"Bom, dito tudo isto, é aqui onde você está, feliz?",
        ];
		
		
	const imagens = [
            'img/slide1d.png',
            'img/slide2d.png',
            'img/slide3d.png',
			'img/slide4d.png',
			'img/slide5d.png',];
			
	 // Inicializa os textos das famílias
    const atualizarFamTexto = () => {
        let titFam = document.getElementById("tituloFam");
        tituloFam[0] = titFam.textContent;
		
		let subFam = document.getElementById("subTFam");
		subtituloFam[0] = subFam.textContent;

        let txtPFam1 = document.getElementById("txtFam1");
        txtFam1[0] = txtPFam1.textContent;

        let txtPFam2 = document.getElementById("txtFam2");
        txtFam2[0] = txtPFam2.textContent;

        let txtPFam3 = document.getElementById("txtFam3");
        txtFam3[0] = txtPFam3.textContent;
    };

    function updateText2() {
        const titFam = document.getElementById("tituloFam");
        titFam.textContent = tituloFam[indexFam];
		
		const subFam = document.getElementById("subTFam");
        subFam.textContent = subtituloFam[indexFam];
        
        const paragrafoFam1 = document.getElementById("txtFam1");
        paragrafoFam1.textContent = txtFam1[indexFam]; // Certifique-se de que a lógica aqui está correta

        const paragrafoFam2 = document.getElementById("txtFam2");
        paragrafoFam2.textContent = txtFam2[indexFam];

        const paragrafoFam3 = document.getElementById("txtFam3");
        paragrafoFam3.textContent = txtFam3[indexFam];
		
		
    }

    function atualizarSlide() {
        const slideImg = document.getElementById('slideImgFam');
        slideImg.src = imagens[indexFam];
    }

    function antFam() {
        if (isCooldown) return;
        isCooldown = true;

        indexFam = (indexFam - 1 + imagens.length) % imagens.length;

        atualizarSlide();
        updateText2();
		console.log(indexFam);

        setTimeout(() => {
            isCooldown = false;
        }, 500);
    }

    function nextFam() {
        if (isCooldown) return;
        isCooldown = true;

        indexFam = (indexFam + 1) % imagens.length;
        atualizarSlide();
        updateText2();
		console.log(indexFam);

        setTimeout(() => {
            isCooldown = false;
        }, 500);
    }

    // Inicializa os textos das famílias
    document.addEventListener("DOMContentLoaded", () => {
        atualizarFamTexto(); // Inicializa os textos das famílias
        atualizarSlide(); // Mostra a primeira imagem
    });
	