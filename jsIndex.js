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
	  const titulo = ["titulo1", "titulo2","",];
	  
      const textos = [
        "1 Lorem ipsum dolor sit amet, aaaaectetur adipiscing elit.dddddddinar metus. Curabitur rhoncus bibendum efficitur. Donec suscipit sagittis vestibulum. Morbi viverra mollis enim quis lobortis.Cras ac risus libero. Curabitur rutrum est non justo auctor, eget efficitur felis mollis. Quisque ullamcorper neque sit ametlorem lacinia dignissim.",
        "2   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaa sagittis vestibulum. Morbi viverra mollis enim quis lobortis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
        "",
      ];
	  const textos2 = [
        "1 Lorem ipsum dolor sit amet, aaaaaaectetur adipiscing elit.ddddddddvinar metus. Curabitur rhoncus bibendum efficitur. Donec suscipit sagittis vestibulum. Morbi viverra mollis enim quis lobortis.Cras ac risus libero. Curabitur rutrum est non justo auctor, eget efficitur felis mollis. Quisque ullamcorper neque sit ametlorem lacinia dignissim.",
        "2   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaaaa sagittis vestibulum. Morbi viverra mollis enim quis lobortis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
        "",
      ];
	  const textos3 = [
        "1 Lorem ipsum dolor sit amet, aaaaaaaaetur adipiscing elit.dddddddddar metus. Curabitur rhoncus bibendum efficitur. Donec suscipit sagittis vestibulum. Morbi viverra mollis enim quis lobortis.Cras ac risus libero. Curabitur rutrum est non justo auctor, eget efficitur felis mollis. Quisque ullamcorper neque sit ametlorem lacinia dignissim.",
        "2   aaaaaaaaaaaconsectetur adipiscing elit. Nam non pulvinar metus. Curabitur rhoncus aaaaaaaaaa sagittis vestibulum. Morbi viverra mollis enim quis lobortis. Cras ac risus libero. Curabitur rutrum est non justo auctor, eget aaaaaaaaaaaaaaaaaaaaaaaaaaer neque sit amet lorem lacinia dignissim.",
        "",
      ];

      let isCooldown = false;
	  let primeiroTXTT = document.getElementById("txtT");
      titulo[2] = primeiroTXTT.textContent;
      let primeiroTXT = document.getElementById("txtSlider");
      textos[2] = primeiroTXT.textContent;
	  let primeiroTXT2 = document.getElementById("txtSlider2");
      textos2[2] = primeiroTXT2.textContent;
	  let primeiroTXT3 = document.getElementById("txtSlider3");
      textos3[2] = primeiroTXT3.textContent;
      console.log("00110001 00110101 00111001 00111000 00110110");
      console.log("Você não deveria estar aqui");

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
	