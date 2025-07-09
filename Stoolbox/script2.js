const slides = [
    {
      name: "ROY",
      text: "Originaire de Toulouse, dit La ville Rose, Roy est un jeune étudiant qui passe son temps perdu à imaginer et à dessiner tout ce qui se passe dans son esprit. Créateur derrière les elans, il passe d'étudiant en Management à artiste numérique à mi-temps. Avec son meilleur pote Newplouf, nos deux protagonistes ont la volonté de vous faire vivre leur aventure et surtout vous aider à créer la vôtre !",
      img: "Image/ElanRoy.png"
    },
    {
      name: "NEWPLOUF",
      text: "Jeune passionné de programmation, Newplouf est notre second protagoniste dans notre aventure. Il est notre technicien quand nous rencontrons des soucis et un ingénieur brillant quand il faut développer de nouvelles idées. Equiper, il va tout faire pour faire vivre notre projet.",
      img: "Image/ElanNewplouf.png"
    },
    {
      name: "DAIKI",
      text: "Daiki est notre tout premier résident, c'est l'elan originel. Celui qui donna ses traits aux autre elans. Décrit comme curieux, maladroit et sociable son objectif est de découvrir le monde humain.",
      img: "Image/ElanDaiki.png"
    },
    {
      name: "None",
      text: "...",
      img: "Image/ElanVide.png"
    }
  ];

  function changeSlide(index) {
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML = `
    <h1>${slides[index].name}</h1>
    <p>${slides[index].text}</p>
  `;
    document.getElementById("main-avatar").src = slides[index].img;

    const thumbs = document.querySelectorAll(".avatars img");
    thumbs.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }
  const toggleBtn = document.getElementById('toggleDropdown');
  const dropdown = document.getElementById('dropdownContent');

  document.addEventListener('click', function (e) {
    // Si on clique sur le bouton
    if (toggleBtn.contains(e.target)) {
      dropdown.classList.toggle('active');
    } 
    // Si on clique ailleurs
    else if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });