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
	  
	  
	  
	  //habilidades 
	  const skills = [
    { title: "Golpe Brutal", class: ["BigBig","Valentao"], type: "dano" , description: "Causa um golpe devastador no inimigo.",cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Nerd"], type: "cura" , description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
    { title: "Cura Mágica", class: ["Pistoleiro"], type: "cura", description: "Restaura vida ao aliado.", cost1: 8, level1: 2,cost2: 8, level2: 2 ,cost3: 8, level3: 2 },
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
	  
	  
	  
	  
	function displaySkills(skillsList) {
    const skillsContainer = document.getElementById('skillsContainer');
    skillsContainer.innerHTML = ""; // Limpa o container

    skillsList.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('skill-card');
		skillDiv.classList.add(`${skill.type}-bg`);
        skillDiv.innerHTML = `
            <h3 class="skill-title">${skill.title}</h3>
			<p> ${skill.class}</P>
            <p class="skill-description">${skill.description}</p>
            <p><strong>Custo1:</strong> ${skill.cost1} <strong>Nível1:</strong> ${skill.level1}</p>
			<p><strong>Custo2:</strong> ${skill.cost2} <strong>Nível2:</strong> ${skill.level2}</p>
			<p><strong>Custo3:</strong> ${skill.cost3} <strong>Nível3:</strong> ${skill.level3}</p>
        `;
        skillsContainer.appendChild(skillDiv);
    });
}

function filterAndSearchSkills() {
    const searchText = document.getElementById('searchInput').value.toLowerCase();
    const selectedClass = document.getElementById('classFilter').value;
    const selectedType = document.getElementById('typeFilter').value;

    const filteredSkills = skills.filter(skill => {
        const matchesSearch = skill.title.toLowerCase().includes(searchText);
        const matchesClass = selectedClass ? skill.class.includes(selectedClass) : true;
        const matchesType = selectedType ? skill.type === selectedType : true;
    

        return matchesSearch && matchesClass && matchesType;
    });

    displaySkills(filteredSkills);
}

// Event Listeners para filtros e campo de pesquisa
document.getElementById('searchInput').addEventListener('input', filterAndSearchSkills);
document.getElementById('classFilter').addEventListener('change', filterAndSearchSkills);
document.getElementById('typeFilter').addEventListener('change', filterAndSearchSkills);

// Exibe todas as habilidades inicialmente
filterAndSearchSkills();