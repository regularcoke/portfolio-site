
 const projects = {
  proj1: {
    images: [
      "img/idomf1.png",
      "img/idomf2.jpeg",
    ],
    caption: "Welded steel belt, prototype. Inspired by my father's bull riding expierence, the buckle morphs from a sybmol of masculinity to a weapon of protection."
  },
  proj2: {
    images: [
      "img/iheartwebcam.png",
    ],
    caption: "iheartwebcam.com (2024) is an online image sharing platform. The site is stripped to its core, allowing the user to use the internet in its most basic manner for online ineraction, using only tags as the search engine. This webcam image sharing platform is itimacy in the age of digital presence."
  },
  proj3: {
    images: [
      "img/monibel.png",
      "img/otto2.jpeg",
      "img/otto3.jpeg",
    ],
    caption: "Otto, (2022). Blender. These digital plushies are a new breed of children's toys"
  },
  proj4: {
    images: [
      "img/self portrait img 1.jpg",
      "img/self portrait img 2.jpg",
      "img/selfportrait-4.jpg"
    ],
    caption: "Untitled (self portrait on webcam), 2022. The webcam is my mirror."
  },
  proj5: {
    images: [
      "img/howlifehasfelt.png",
      "img/howlifehasfelt2.png",
      "img/howlifehasfelt3.png"
    ],
    caption: "how life has felt ever since i have turned 13 (2024) is a scroll-through web story depicting adolensence dysphoria. Told through the captions of femcel meme culture, the homogeneity of commerical stock images is disrupted."
  },
  graphics: {
    images: [
      "img/Dean Blunt Poster.png",
      "img/lolinaflyer.png",
    ],
  },
  threed: {
    images: [
      "img/riquiqui2.png",
      "img/tucuerpo.jpg",
      "img/cupidinstereo.png"
    ],
   
  },
  sketches: {
    images: [
      "img/sketch5.png",
      "img/sketch4.png",
      "img/sketch3.png",
      "img/sketch6.png"
    ],
    caption: "Fashion process drawings and visual development."
  }
};

function loadProject(projectKey) {
  const gallery = document.getElementById('gallery');
  const caption = document.getElementById('caption');
  gallery.innerHTML = ''; // Clear existing images

  if (projects[projectKey]) {
    projects[projectKey].images.forEach(src => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Project Image';
      gallery.appendChild(img);
    });

    // Set the caption
    caption.textContent = projects[projectKey].caption || '';
  }
}
