const projects = {
  proj1: {
    images: ["img/idomf1.png", "img/idomf2.jpeg"],
    title: "En Defensa de Mi Padre",
    year: "2024",
    medium: "Steel",
    description:
      "Prototype welded steel belt buckle. Commemortaing bull riding, this piece reimagines the traditional buckle—transforming a symbol of masculinity into an object of protection. In this context, the belt buckle functions not only utilitarian but as an exaggerated symbol of hypermasculinity—often oversized, ornate, and awarded as a trophy. This piece critically reinterprets the buckle's role, transforming it from a performative emblem of dominance into a defensive form—recasting the object as both artifact and armor."
  },
  proj2: {
    images: ["img/iheartwebcam.png"],
    title: "iheartwebcam.com",
    year: "2025",
    medium: "Website",
    description:
      "An online image-sharing platform stripped to its core, using only tags as the search engine. A webcam image-sharing platform offering intimacy in the age of digital presence."
  },
  proj3: {
    images: ["img/monibel.png", "img/otto2.jpeg", "img/otto3.jpeg"],
    title: "Otto",
    year: "2022",
    medium: "Blender",
    description:
      "These digital plushies are a new breed of children's toys. Comforting those that grew up on the internet."
  },
  proj4: {
    images: ["img/self portrait img 1.jpg", "img/self portrait img 2.jpg", "img/selfportrait-4.jpg"],
    title: "Untitled (Self Portrait on Webcam)",
    year: "2022",
    medium: "Webcam photography",
    description: "En mi espejo me veo tan guapx, pero en mi computadora no lo se."
  },
  proj5: {
    images: ["img/howlifehasfelt.png", "img/howlifehasfelt2.png", "img/howlifehasfelt3.png"],
    title: "how life has felt ever since i have turned 13",
    year: "2024",
    medium: "Web story",
    description:
      "A scroll-through web story depicting adolescent dysphoria, told through the captions of femcel memes. These new genre of silhouettes disrupt the homogeneity of commercial stock imagery."
  },
  proj6: {
    images: [
      "img/libraryofbabel1.jpeg",
      "img/libraryofbabel2.jpeg",
      "img/libraryofbabel3.jpeg",
      "img/libraryofbabel4.jpeg",
      "img/libraryofbabel5.jpeg"
    ],
    title: "EN/ES The Library of Babel",
    year: "2023",
    medium: "Book, printed on cotton paper",
    description:
      "A typographic translation of The Library of Babel by Jorge Luis Borges, originally published in 1941 as part of his collection El Jardín de senderos que se bifurcan (The Garden of Forking Paths). Set entirely in 8pt New Courier, the Spanish to English manuscript becomes a quiet echo of Borges’ infinite library—an endless grid of letters, rooms, and silence."
  },
  graphics: {
    images: ["img/Dean Blunt Poster.png", "img/lolinaflyer.png"],
    title: "Graphic Design",
    year: "",
    medium: "",
    description: ""
  },
  threed: {
    images: ["img/riquiqui2.png", "img/tucuerpo.jpg", "img/cupidinstereo.png"],
    title: "3D Modeling Projects",
    year: "",
    medium: "",
    description: ""
  },
  sketches: {
    images: ["img/sketch5.png", "img/sketch4.png", "img/sketch3.png", "img/sketch6.png"],
    title: "Sketches",
    year: "",
    medium: "",
    description: "Fashion process drawings and visual development"
  }
};

function loadProject(projectKey) {
  const gallery = document.getElementById("gallery");
  const caption = document.getElementById("caption");
  gallery.innerHTML = "";
  caption.innerHTML = "";

  const project = projects[projectKey];

  if (project) {
    project.images.forEach((src, i) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = project.title || "Project image";
      if (projectKey === "graphics") {
        img.classList.add("graphic-border");
      }
      if (project.images.length === 1) {
        img.classList.add("full-span");
      }
      gallery.appendChild(img);
    });

    caption.innerHTML = `
      <h2>${project.title || ""}</h2>
      ${project.year || project.medium ? `<p><il>${project.year} ${project.medium ? "· " + project.medium : ""}</il></p>` : ""}
      <p>${project.description || ""}</p>
    `;
  }
}

function toggleSection(clickedHeader) {
    const allHeaders = document.querySelectorAll('.nav h3');
    const allLists = document.querySelectorAll('.nav .list');

    const targetId = clickedHeader.getAttribute('data-toggle-id');
    const targetList = document.getElementById(targetId);
    const isOpen = targetList.style.display === 'block';

    // Close all
    allHeaders.forEach(h => h.classList.remove('active'));
    allLists.forEach(list => list.style.display = 'none');

    // Open clicked one if not already open
    if (!isOpen) {
      targetList.style.display = 'block';
      clickedHeader.classList.add('active');
    }
  }
