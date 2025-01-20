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
	  
	  
	  
	  
	  //passivas
	  const pass = [
    { title: "Golpe Brutal", type: "dano" , description: "Causa um golpe devastador no inimigo."},
	  ];
	  
	  function displayPass(passList) {
    const skillsContainer = document.getElementById('passContainer');
    passContainer.innerHTML = ""; // Limpa o container

    passList.forEach(pass => {
        const passDiv = document.createElement('div');
        passDiv.classList.add('skill-card');
		passDiv.classList.add(`${pass.type}-bg`);
        passDiv.innerHTML = `
            <h3 class="skill-title">${pass.title}</h3>
			<p> ${pass.class}</P>
            <p class="skill-description">${pass.description}</p>
        `;
        skillsContainer.appendChild(passDiv);
    });
}

function filterAndSearchPass() {
    const searchText = document.getElementById('searchInput2').value.toLowerCase();
    const selectedType = document.getElementById('typeFilter2').value;

    const filteredPass = pass.filter(pass => {
        const matchesSearch = pass.title.toLowerCase().includes(searchText);
        const matchesType = selectedType ? pass.type === selectedType : true;
    

        return matchesSearch && matchesType;
    });

    displayPass(filteredPass);
}

// Event Listeners para filtros e campo de pesquisa
document.getElementById('searchInput2').addEventListener('input', filterAndSearchPass);
document.getElementById('typeFilter2').addEventListener('change', filterAndSearchPass);

// Exibe todas as habilidades inicialmente
filterAndSearchPass();
	  
	  const todos = ["BigBig","Valentao","Nerd","Pistoleiro","Açogueiro","Ator","Máquina"];
	  
	  //habilidades 
	  const skills = [
    { title: "Aceleração", class: todos, type: "status" , description: "Aumenta sua locomoção, assim como também aumenta sua destreza durante 1d4 de turnos.",cost1: 3, level1: " Locomoção 30%/ des +3.", cost2:4, level2:  "Locomoção 40%/ des +4." ,cost3: 5, level3: "Locomoção 50%/ des +5." },
    { title: "Adaptação neural", class: todos, type: "status" , description: "Melhora sua resistência à hacks por 1d4 de turnos.", cost1: 2, level1: "Mais 2 de resistência",cost2: 3, level2: "Mais 3 de resistência" ,cost3: 5, level3: "Mais 5 de resistência" },
    { title: "Anatomia eletrônica", class: ["Máquina"], type: "status", description: "Permite modificar alguma parte cibernética do seu corpo e dar algum buff de atributo até o final do combate(só pode usar uma vez por combate).", cost1: 3, level1:"+2",cost2: 4, level2: "+3" ,cost3: 5, level3: "+5" },
	{ title: "Apagão", class: ["Máquina"], type: "status", description: "Provoca uma queda de energia, afetando todos os alvos na área, incluindo os jogadores e o usuário desta habilidade. Qualquer criatura ou dispositivo que dependa de energia deve realizar um teste de resistência; aqueles que falharem ficam incapacitados e precisam aguardar 1 turno antes de retornar ao combate. ", cost1: 5, level1: "5 Metros",cost2: 7, level2: "10 Metros" ,cost3: 10, level3: "20 Metros"},
	{ title: "Admin", class: ["Nerd"], type: "status", description: "Passiva: permite entrar em 1 sistema por mesa sem precisar de testes.  |  Ativa: Fala um teste de Int para descobrir onde estão os inimigos conectados na área", cost1: 3, level1: "3 inimigos",cost2: 5, level2: "3 inimigos" ,cost3: 10, level3: "Todos inimigos" },
	{ title: "F.I.A.", class: todos, type: "criaturaserobos", description: "Um robô de suporte irá te auxiliar em campo durante uma batalha. Ele pode te curar e atacar.", cost1: 5, level1: "Cura: 1d6/ Dano = 1d4/ Vida = 10",cost2: 7, level2: "2d6/ Dano = 2d4/ Vida = 20." ,cost3: 10, level3: "3d6/ Dano = 3d4/ Vida = 40." },
	{ title: "Barreira de fumaça", class: todos, type: "status", description: "Uma área de fumaça é lançada, pessoas sofrem penalidade em mira(ataques a distância) dentro desta área.", cost1: 3, level1: "5 Metros / -2 de mira.",cost2: 5, level2: "10 Metros / -3 de mira." ,cost3: 10, level3: "15 Metros / -5 de mira." },
	{ title: "Barreira de carbono", class: ["Máquina","BigBig"], type: "status", description: "Uma barreira é colocada e serve como proteção durante combate.", cost1: 3, level1: "Vida = 30",cost2: 4, level2: "Vida = 50" ,cost3: 5, level3: "Vida = 70"},
	{ title: "Bioamplificação", class: ["Açogueiro","Ator"], type: "status", description: "Aumenta todos atributos base do alvo(somente jogadores) durante 1d4 de turnos.", cost1: 3, level1: "+1",cost2: 4, level2: "+2" ,cost3: 6, level3: "+3" },
	{ title: "Biohacker", class: todos, type: "status", description: "A habilidade permite invadir o corpo de um inimigo e fazer perder controle de alguma parte cibernética.(O inimigo pode tentar resistir ou retomar controle usando a ação bônus de seus turnos).", cost1: 5, level1: "sem bônus na rolagem + mod de int.",cost2: 7, level2: "+2 de bônus na rolagem + mod de int.",cost3: 9, level3: "+4 de bônus na rolagem + mod de int." },
	{ title: "Bio-amigo", class: ["Açogueiro","Ator"], type: "criaturaserobos", description: "Um pequeno ser mutante com aparência de sua escolha, irá te auxiliar durante toda a sessão, só pode ser usado uma vez por mesa.", cost1: 8, level1: "dano  = 2d10 + seu mod de int + o mod de car. | vida = 30 +  mod de int * mod de car."},
	{ title: "Bio Escudo", class: ["BigBig","Açogueiro"], type: "status", description: "Sua Vida ou a de um aliado é aumentada temporariamente, usando como base a quantidade de partes NÃO robóticas do seu corpo.", cost1: 3, level1: "+1d4 de vida por parte.",cost2: 5, level2: "+1d6 de vida por parte." ,cost3: 8, level3: "+1d10 de vida por parte." },
	{ title: "Bombardeio neural", class: todos, type: "dano", description: "Hack que permite invadir o sistema de um inimigo e atacá-lo à distância sem ser rastreado.", cost1: 3, level1: "Dano = 2d5 + mod de Int.",cost2: 4, level2: "Dano = 2d10 + mod de Int." ,cost3: 6, level3: "Dano = 3d8 + mod de Int." },
	{ title: "Cortina digital", class: todos, type: "status", description: "Permite uma pessoa atravessar áreas com sistema de seguranças sem ser rastreado.", cost1: 5, level1: "Essa habilidade dura 5 turnos" },
	{ title: "Conexão-neural", class: ["Nerd","Ator","Açogueiro"], type: "status", description: "Permite entrar dentro do sistema de um aliado e auxiliá-lo em algum teste.", cost1: 4, level1: "+1 + mod de car.",cost2: 6, level2: "+2 + mod de car." ,cost3: 7, level3:"+3 + mod de car." },
	{ title: "Criptografia", class: ["Máquina"], type: "status", description: "Permite decifrar a maioria dos textos/mensagens/documentos ou escondê-los.", cost1: 3 },
	{ title: "Clonagem", class: ["Ator"], type: "status", description: "Cria uma imitação idêntica a você para distrair inimigos.", cost1: 3, level1: "cria somente uma cópia com 3 pontos de resistência que são perdidos conforme recebe dano." },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
	{ title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },


];
function sortSkillsAlphabetically(skillsList) {
    return skillsList.sort((a, b) => a.title.localeCompare(b.title));
}

function filterAndSearchSkills() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const selectedClass = document.getElementById('classFilter').value;
    const selectedType = document.getElementById('typeFilter').value;

    // Filtra as habilidades
    let filteredSkills = skills.filter(skill => {
        const matchesSearch = skill.title.toLowerCase().includes(searchText);
        const matchesClass = selectedClass ? skill.class.includes(selectedClass) : true;
        const matchesType = selectedType ? skill.type === selectedType : true;

        return matchesSearch && matchesClass && matchesType;
    });

    // Ordena as habilidades filtradas em ordem alfabética
    filteredSkills = sortSkillsAlphabetically(filteredSkills);

    // Exibe as habilidades filtradas e ordenadas
    displaySkills(filteredSkills);
}

function displaySkills(skillsList) {
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = ""; // Limpa o container

    skillsList.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-card');
        skillDiv.classList.add(`${skill.type}-bg`);
        skillDiv.innerHTML = `
			<div class="skillFund">
            <h3 class="skill-title">${skill.title}</h3>
            <p> ${skill.class.join(', ')}</p>
            <p class="skill-description">${skill.description}</p>
			<hr>
            <p><strong>Custo de ram 1:</strong> ${skill.cost1} <br> <strong>Nível 1:</strong> ${skill.level1}</p>
			<hr>
            <p><strong>Custo de ram 2:</strong> ${skill.cost2} <br> <strong>Nível 2:</strong> ${skill.level2}</p>
			<hr>
            <p><strong>Custo de ram 3:</strong> ${skill.cost3} <br> <strong>Nível 3:</strong> ${skill.level3}</p>
			</div>
        `;
        skillsContainer.appendChild(skillDiv);
    });
}

// Event Listeners para filtros e campo de pesquisa
document.getElementById('searchInput').addEventListener('input', filterAndSearchSkills);
document.getElementById('classFilter').addEventListener('change', filterAndSearchSkills);
document.getElementById('typeFilter').addEventListener('change', filterAndSearchSkills);

// Exibe todas as habilidades inicialmente
filterAndSearchSkills();
