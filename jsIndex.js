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
	  const tituloFam = ["","titulo1","titulo2","titulo3","titulo4",];
	  
	  const subtituloFam = ["","subtitulo1","subtitulo2","subtitulo3","subtitulo4",];
	  
	  
	  const txtFam1 = [ "","1 Lorem ipsum dolor sit amet, aaaaectetur adipiscing elit.dddddddinar metus. Curabitur rhoncus bibendum efficitur. Donec suscipit sagittis vestibulum. Morbi viverra mollis enim quis lobortis.Cras ac risus libero. Curabitur rutrum est non justo auctor, eget efficitur felis mollis. Quisque ullamcorper neque sit ametlorem lacinia dignissim.",
        "2   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra mollis enim quis lobortis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
		"3   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viveraaaaaaaaaaaaaaaaaaaatis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
		"4   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra molaaaaaaaaaaaaaaaaaatis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
        ];
		
	  const txtFam2 = [  "","1 Lorem ipsum dolor sit amet, aaaaectetur adipiscing elit.dddddddinar metus. Curabitur rhoncus bibendum efficitur. Donec suscipit sagittis vestibulum. Morbi viverra mollis enim quis lobortis.Cras ac risus libero. Curabitur rutrum est non justo auctor, eget efficitur felis mollis. Quisque ullamcorper neque sit ametlorem lacinia dignissim.",
        "2   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra mollis enim quis lobortis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
		"3   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viveraaaaaaaaaaaaaaaaaaaatis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
		"4   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra molaaaaaaaaaaaaaaaaaatis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
       ];
		
	  const txtFam3 = [ "","1 Lorem ipsum dolor sit amet, aaaaectetur adipiscing elit.dddddddinar metus. Curabitur rhoncus bibendum efficitur. Donec suscipit sagittis vestibulum. Morbi viverra mollis enim quis lobortis.Cras ac risus libero. Curabitur rutrum est non justo auctor, eget efficitur felis mollis. Quisque ullamcorper neque sit ametlorem lacinia dignissim.",
        "2   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra mollis enim quis lobortis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
		"3   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viveraaaaaaaaaaaaaaaaaaaatis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
		"4   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra molaaaaaaaaaaaaaaaaaatis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
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
	