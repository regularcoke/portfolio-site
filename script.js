
 const projects = {
  proj1: {
    images: [
      "img/idomf1.png",
      "img/idomf2.jpeg"
    ],
    title: "Welded steel belt, prototype",
    year: "2024",
    medium: "Steel",
    description: "Inspired by my father's bull riding experience, the buckle morphs from a symbol of masculinity to a weapon of protection."
  },
  proj2: {
    images: ["img/iheartwebcam.png"],
    title: "iheartwebcam.com",
    year: "2024",
    medium: "Website",
    description: "An online image-sharing platform stripped to its core, using only tags as the search engine. A webcam image-sharing platform offering intimacy in the age of digital presence."
  },
  proj3: {
    images: [
      "img/monibel.png",
      "img/otto2.jpeg",
      "img/otto3.jpeg"
    ],
    title: "Otto",
    year: "2022",
    medium: "Blender",
    description: "These digital plushies are a new breed of children's toys."
  },
  proj4: {
    images: [
      "img/self portrait img 1.jpg",
      "img/self portrait img 2.jpg",
      "img/selfportrait-4.jpg"
    ],
    title: "Untitled (self portrait on webcam)",
    year: "2022",
    medium: "Webcam photography",
    description: "The webcam is my mirror."
  },
  proj5: {
    images: [
      "img/howlifehasfelt.png",
      "img/howlifehasfelt2.png",
      "img/howlifehasfelt3.png"
    ],
    title: "how life has felt ever since i have turned 13",
    year: "2024",
    medium: "Web story",
    description: "A scroll-through story depicting adolescent dysphoria, told through captions of femcel meme culture. It disrupts the homogeneity of commercial stock imagery."
  },
  graphics: {
    images: [
      "img/Dean Blunt Poster.png",
      "img/lolinaflyer.png"
    ],
    title: "Graphic Design",
    year: "",
    medium: "",
    description: ""
  },
  threed: {
    images: [
      "img/riquiqui2.png",
      "img/tucuerpo.jpg",
      "img/cupidinstereo.png"
    ],
    title: "3D Modeling Projects",
    year: "",
    medium: "",
    description: ""
  },
  sketches: {
    images: [
      "img/sketch5.png",
      "img/sketch4.png",
      "img/sketch3.png",
      "img/sketch6.png"
    ],
    title: "Sketches",
    year: "",
    medium: "",
    description: "Fashion process drawings and visual development."
  }
};

function loadProject(projectKey) {
  const gallery = document.getElementById('gallery');
  const caption = document.getElementById('caption');
  gallery.innerHTML = '';
  caption.innerHTML = '';

  const project = projects[projectKey];

  if (project) {
    project.images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = project.title || 'Project image';
      if (project.images.length === 1) {
        img.classList.add('full-span');
      }
      gallery.appendChild(img);
    });

    caption.innerHTML = `
      <h2>${project.title || ''}</h2>
      ${(project.year || project.medium) ? `<p><em>${project.year} ${project.medium ? '· ' + project.medium : ''}</em></p>` : ''}
      <p>${project.description || ''}</p>
    `;
  }
}
