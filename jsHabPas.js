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
	{ title: "Criptografia", class: ["Máquina"], type: "status", description: "Permite decifrar a maioria dos textos/mensagens/documentos ou escondê-los.", cost1: 3 , level1: "Estes textos podem ser usados mais de uma vez na mesma cena."},
	{ title: "Clonagem", class: ["Ator"], type: "status", description: "Cria uma imitação idêntica a você para distrair inimigos.", cost1: 3, level1: "cria somente uma cópia com 3 pontos de resistência que são perdidos conforme recebe dano." },
	{ title: "Corrosão de hardware", class: todos, type: "dano", description: "Causa dano em um inimigo ediminui sua velocidade em 3,causando o dobro de dano", cost1: 3, level1: "1d8 de dano + mod de Int.",cost2: 5, level2: "3d6 de dano + mod de Int." ,cost3: 7, level3: "3d8 de dano + mod de Int*2." },
	{ title: "Drenagem de dados", class: ["Nerd","Valentão"], type: "status", description: "Role um teste de resistência, se tirar mais que 15 o inimigo fica incapacitado instantaneamente, é impossível usar em inimigos com o mais ou mesmo level que você.", cost1: 10, level1:"Os inimigos afetados por esta habilidade não morrem, apenas ficam incapazes de lutar."},
	{ title: "Domesticação", class: todos, type: "criaturaserobos", description: "Permite domar criaturas mutantes.", cost1: 5, level1: "sem bônus na rolagem."   ,cost2: 7, level2: "+2 de bônus na rolagem."   ,cost3: 10, level3: "+4 de bônus na rolagem." },
	{ title: "Domínio de rede", class: ["Nerd"], type: "status", description: "Te dá controle do sistema de segurança da rede, menos sentinelas ou sistemas ofensivos.", cost1: 5, level1: "sem bônus na rolagem.",cost2: 7, level2: "+2 de bônus na rolagem." ,cost3: 10, level3: "+4 de bônus na rolagem." },
	{ title: "Danificação dobrada", class: ["Máquina","Valentão"], type: "dano", description: "Aumenta o dano do próximo ataque.", cost1: 3, level1: "+1d6 de dano.",cost2: 5, level2: "+2d6 de dano." ,cost3: 8, level3: " valor base do atributo de força."},
	{ title: "Drone", class: todos, type: "criaturaserobos", description: "Permite utilizar um pequeno drone para investigar áreas que estão fora do alcance", cost1: 4, level1: "O drone ainda pode ser percebido por inimigos, em testes ele recebe +5 de bônus para permanecer escondido. Caso seja acertado somente uma vez, o drone é destruído."},
	{ title: "Estrondo", class: ["BigBig"], type: "dano", description: "Um grande golpe no chão que causa dano em área e diminui a mobilidade dos inimigos.", cost1: 4, level1: "5 metros/ 1d6 de dano/ -30%Mob.",cost2: 7, level2: "7 metros/ 2d6 de dano/ -40%Mob." ,cost3: 10, level3: "10 metros/ 3d6 de dano/ -50%Mob." },
    { title: "Esteróides", class: todos, type: "dano", description: "Perde um turno em preparação, após isto, até o final do combate, o seu dano corpo a corpo aumenta dano corpo a corpo a mais.", cost1: 3, level1: "1d4 a mais + mod de for.",cost2: 6, level2: "2d4 a mais + mod de for." ,cost3: 12, level3: "3d4 a mais + mod de for*2." },
    { title: "Fragmentos de aço", class: ["Pistoleiro"], type: "dano", description: "Solta pequenos fragmentos de aço que causam sangramento nos inimigos que pisarem em cima.", cost1: 4, level1: "2Metros /1d6 de dano por 3 turnos.",cost2: 5, level2: '4 Metros /1d6 de dano por 4 turnos.' ,cost3: 7, level3: '5 Metros /2d6 de dano por 4 turnos.' },
    { title: "Fabricação emergencial", class: todos, type: "criaturaserobos", description: "Cria um pequeno aparelho eletrônico à sua escolha, porém é necessário sacrificar objetos à sua volta.", cost1: 4, level1: "Este aparelho deve ser algo consumível, como um gerador para uma sala, uma antena para pegar sinal ou etc..." },
    { title: "Farmácia", class: ["Açogueiro"], type: "cura", description: "Permite fabricar remédios, venenos e outras substâncias farmacêuticas.", cost1: 4, level1: "Essa habilidade usa sucata para poder construir itens."},
    { title: "Feromônios", class: ["Ator"], type: "status", description: "Faz com que os inimigos se atrapalhem e possa convencê-los mais facilmente a realizar outras ações.Só é possível usar esta habilidade com inimigos de nível menor ou igual ao do jogador.", cost1: 5, level1: "sem bônus na rolagem.",cost2: 7, level2: "+2 de bônus na rolagem." ,cost3: 10, level3: "+4 de bônus na rolagem." },
    { title: "Fúria", class: ["Valentão"], type: "dano", description: "Aumenta todo o seu dano, porém também aumenta o dano que recebe durante 3 turnos.", cost1: 5, level1: "+30% de dano/ +20% de dano rec.",cost2: 6, level2: "+50% de dano/ +30% de dano rec." ,cost3: 7, level3: "+70% de dano/ +50% de dano rec." },
    { title: "Foco", class: ["Máquina"], type: "status", description: "Aumenta sua capacidade de foco para mirar durante 3 turnos.", cost1: 3, level1: "Aumenta sua mira em 2 para testes de ataque à distância.",cost2: 5, level2: 'Aumenta sua mira em 4 para testes de ataque à distância.' ,cost3: 8, level3: 'Aumenta sua mira em 5 para testes de ataque à distância.' },
    { title: "Farol", class: todos, type: "status", description: "Cria uma luz que te auxilia a ver no escuro.", cost1: 2, level1: " A luz dura 3 turnos.",cost2: 3, level2: " A luz dura 5 turnos." ,cost3: 4, level3: " A luz dura 5 turnos." },
    { title: "Firewall", class: ["Nerd"], type: "status", description: "Aumenta a resistência sua e de mais 1 aliado a hacks durante 3 turnos.", cost1: 3, level1: "+1 de resistência",cost2: 5, level2: "+2 de resistência" ,cost3: 7, level3: "+4 de resistência" },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
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
        values = skill.cost2;
        if (values == undefined){
            skillDiv.innerHTML = `
			<div class="skillFund">
            <h3 class="skill-title">${skill.title}</h3>
            <p> ${skill.class.join(', ')}</p>
            <p class="skill-description">${skill.description}</p>
			<hr>
            <p><strong>Custo de ram 1:</strong> ${skill.cost1} <br> <strong>Nível 1:</strong> ${skill.level1}</p>
			<hr>
           </div>
        `;
        skillsContainer.appendChild(skillDiv)
        
        }
        else{
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
}});
    
}

// Event Listeners para filtros e campo de pesquisa
document.getElementById('searchInput').addEventListener('input', filterAndSearchSkills);
document.getElementById('classFilter').addEventListener('change', filterAndSearchSkills);
document.getElementById('typeFilter').addEventListener('change', filterAndSearchSkills);

// Exibe todas as habilidades inicialmente
filterAndSearchSkills();
