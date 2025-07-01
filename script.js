//BLOG ENTRIES//

const blogEntries = [
  {
    date: "2025-06-30",
    title: "manifesto",
    content: "book I got from the bookstore for $6 <br> titled 'manifesto' by anonymous <br> had to look it up since the front n back are completly blank,,,",
    images:[ "img/blog/IMG_8684.jpeg",]
  },
  {
    date: "2025-06-29",
    title: "idk what love is",
    content: "my dad carved his and my mom's name into this bench <br> i like to think that they are practicing everyday how to love with us, even if that means they are no longer head over heels for each other",
    images:[ "img/blog/IMG_8546.jpeg",
            "img/blog/IMG_8542.jpeg",
            ]
  },
];


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
    images: ["img/iheartwebcam1.png", "img/iheartwebcam2.png", "img/iheartwebcam3.png"],
    title: "iheartwebcam.com",
    year: "2025",
    medium: "Website",
    description:
      "Inspired by early Tumblr, iheartwebcam.com is an online image-sharing platform stripped to its core, using only tags as iys sole search method. The webcam image-sharing platform explores intimacy in the age of digital presence, blurring the line between artistic self-portraiture and cam modeling. It fosters a sense of anonymous connection, deliberately rejecting the engagement-focused mechanics of mainstream social media. UI/UX design and development by Hugo Adrian Marin. Database development and engineering by Diego Romero Ramirez and Hugo Adrian Marin."
  },
  proj3: {
    images: ["img/monibel.png", "img/otto2.jpeg", "img/otto3.jpeg"],
    title: "Otto (Para Gabriel)",
    year: "2022",
    medium: "Blender",
    description:
      "Otto is a digital plush brought into the physical world. Otto was created as a digital gift to comfort a loved one 3000 miles away. Existing in the digital world, Otto reflects how virtual spaces offer the ability to connect when loved ones are far away."
  },
  proj4: {
    images: ["img/self portrait img 1.jpg", "img/self portrait img 2.jpg", "img/selfportrait-4.jpg"],
    title: "Untitled (Self Portrait on Webcam)",
    year: "2022",
    medium: "Webcam photography",
    description:
      "A self portait composed on the webcam. This collection of personal objects display a movement bewteen feminity and masculinity."
  },
  proj5: {
    images: ["img/howlifehasfelt.png", "img/howlifehasfelt2.png", "img/howlifehasfelt3.png"],
    title: "how life has felt ever since i have turned 13",
    year: "2024",
    medium: "Web story",
    description:
      'A scroll-through web story depicting adolescent dysphoria, told through the captions of femcel memes. This net.art piece depicts  gender dysphoria in response to popular internet cultures. By configuring and distorting adobe stock images with unexpected silohuetts, these new genre of silhouettes disrupt the homogeneity of commercial stock imagery. Find a live version here: <a href=" https://users.dma.ucla.edu/~hugoperez/p3/" target="_blank" rel="noopener">how life has felt ever since i turned 13</a>'
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
      "A typographic translation of The Library of Babel by Jorge Luis Borges, originally published in 1941 as part of his collection El Jardín de senderos que se bifurcan (The Garden of Forking Paths). Set entirely in 8pt New Courier, this 42 page, Spanish to English manuscript becomes a quiet echo of Borges’ infinite library—an endless grid of letters, rooms, and silence."
  },

  proj7: {
    images: [
      "img/webcamphotoseries1.png",
      "img/webcamphotoseries2.png",
      "img/webcamphotoseries3.png",
      "img/webcamphotoseries4.png",
      "img/webcamphotoseries7.png",
      "img/webcamphotoseries5.png",
      "img/webcamphotoseries6.png",
    ],
    title: "A Webcam Photo Series",
    year: "2024",
    medium: "Java Script, Book, printed on cotton paper",
    description:
      "A Webcam Photo Series is a 15-page book featuring images captured by various users through a custom webcam filter built with p5.js. The series includes two distinct filters: one based on a recursive subdivision algorithm, and another developed from scratch by Hugo Adrian Marin using JavaScript. This book showcases the creative compositions users generated through these interactive tools."
  },
  
   proj8: {
    images: [
      "img/sex:box1.png"
    ],
    title: "Sex / Box",
    year: "2024",
    medium: "Wood, misc metal, found objects. 7.5 x 11 x 2.5", 
    description:
      "In collaboration with Rachel Lee. Using a contact mic, this handmade box adorned with misc items including a zipper, buttons, and metal scraps acts as instrument. Fabrication and sound production by Hugo Adrian Marin. Development, fabrication, video production, and sound production by Rachel Lee."
  },
  
  proj9: {
    images: [
      "img/mysonisasoldier9.png",
      "img/mysonisasoldier2.png",
      "img/mysonisasoldier5.png",
      "img/mysonisasoldier3.png",
      "img/mysonisasoldier10.png",
      "img/mysonisasoldier1.png",
      "img/mysonisasoldier7.png",
    ],
    title: "MY SON IS A SOL(DIE)R",
    year: "2025",
    medium: "Book, 72 pages", 
    description:
      "Concept research book documenting the devlopment of graphics surrounding the topic of militarism and gay bodies. This 72 page book dissects how militarized masculinties appropriates feminity through warped ideas of brotherhood using media and the internet as methods of normalization."
  },
  
  proj10: {
    images: [
      "img/quieromorir1.jpeg",
      "img/quieromorir2.jpeg",
      "img/quieromorir3.jpeg",
      "img/quieromorir4.jpeg",
      "img/quieromorir5.jpeg"
    ],
    title: "quiero morir muy cerca de ti",
    year: "2025",
    medium: "Found photography, wooden panels", 
    description:
      "Found google street images across the streets of Bogota, Colombia, and the most romantic city, Villa de Leyva, Colombia, capture couples displaying physical acts of affection. These images are mounted on handmade wooden panels. Accompanying these photos is a text by the artist: <br><br><span style=font-style:italic>'I have overcomplicated my relationship with physical affection. I think my past lovers would say it is my love language. My mother would agree. And I, would not disagree with them. Yet, I find it difficult to admit to this. Not verbally as I am doing so now, but, I cannot perform this for others. In a stranger’s eyes I find doubt and judgment. Perhaps this comes from growing up in a place where I could not stray from the line that has been there for centuries. Or perhaps, it is an insecurity to how I love. <br><br>More than likely, it is the latter. But, I will have payed for it by the time I have chosen love.'</span>" 
  },

  graphics: {
    images: ["img/Dean Blunt Poster.png", "img/lolinaflyer.png", "img/dw_suit.png"],
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
  },

  bio: {
    images: ["img/me.png"],
    title: "",
    year: "",
    medium: "",
    description:
      "Artist first, designer second, Hugo A. Marin (b. 2001) is a Mexican multidisciplinary artist-designer working across physical and virtual spaces. Intimacy, community, and queerness are central to Marin's artistic practice, while essentialist and spartan design choices define their design and typographic work. They currently based in Los Angeles, CA. <span style=color:gray>#busy #me #lookingforwork</span>"
  }
};

function preloadAllProjectImages(projects) {
  Object.values(projects).forEach((project) => {
    if (project.images && Array.isArray(project.images)) {
      project.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    }
  });
}


function loadProject(projectKey, clickedLink) {
  const gallery = document.getElementById("gallery");
  const caption = document.getElementById("caption");
  gallery.innerHTML = "";
  caption.innerHTML = "";

  const project = projects[projectKey];
  
  const allLinks = document.querySelectorAll(".list a");
  allLinks.forEach((link) => link.classList.remove("active"));

  // Add 'active' to the clicked link
  if (clickedLink) {
    clickedLink.classList.add("active");
  }
  
  if (projectKey === "bio") {
    const allLists = document.querySelectorAll(".list");
    allLists.forEach((list) => (list.style.display = "none"));

    const allHeaders = document.querySelectorAll(".nav h3");
    allHeaders.forEach((h) => h.classList.remove("active"));
  }

  if (project) {
    project.images.forEach((src, i) => {
      const a = document.createElement("a");
      a.href = src; // link to the image itself
      a.target = "_blank"; // open in a new tab
      a.rel = "noopener";

      const img = document.createElement("img");
      img.src = src;
      img.alt = project.title || "Project image";
      img.loading = "lazy";
      img.classList.add("lazy");
      if (projectKey === "graphics") {
        img.classList.add("graphic-border");
      }
      a.appendChild(img);
      gallery.appendChild(a);
    });

    caption.innerHTML = `
      <h2>${project.title || ""}</h2>
      ${project.year || project.medium ? `<p><il>${project.year} ${project.medium ? "· " + project.medium : ""}</il></p>` : ""}
      <p>${project.description || ""}</p>
    `;
  }
}

function toggleSection(clickedHeader) {
  const allHeaders = document.querySelectorAll(".nav h3");
  const allLists = document.querySelectorAll(".list");

  // 🧹 Clear any loaded project
  const gallery = document.getElementById("gallery");
  const caption = document.getElementById("caption");
  gallery.innerHTML = "";
  caption.innerHTML = "";
  if (blogFeed) blogFeed.innerHTML = "";

  const targetId = clickedHeader.getAttribute("data-toggle-id");
  const targetList = document.getElementById(targetId);
  const isOpen = targetList.style.display === "block";

  // Close all lists and deactivate headers
  allHeaders.forEach((h) => h.classList.remove("active"));
  allLists.forEach((list) => (list.style.display = "none"));

  // Open clicked one if not already open
  if (!isOpen) {
    targetList.style.display = "block";
    clickedHeader.classList.add("active");

    if (targetId === "worksList") {
      const firstLink = targetList.querySelector("a");
      if (firstLink) {
        firstLink.click();
      }
    }

    if (targetId === "blog") {
      loadBlog();
    }
  }
}

function loadBlog() {
  const gallery = document.getElementById("gallery");
  const caption = document.getElementById("caption");
  const blogList = document.getElementById("blog");
  const blogDates = document.getElementById("blogDates");
  const blogFeed = document.getElementById("blogFeed");
  
  gallery.innerHTML = "";
  caption.innerHTML = "";
  blogDates.innerHTML = ""; // clear previous

  blogEntries.forEach((entry, index) => {
    const link = document.createElement("a");
    link.href = "#entry-" + index;
    link.textContent = entry.date;
    link.style.display = "block"; 
    link.onclick = (e) => {
      e.preventDefault();
      document.getElementById("entry-" + index).scrollIntoView({ behavior: "smooth" });
    };
    blogDates.appendChild(link);


    const post = document.createElement("div");
    post.classList.add("blog-entry");
    post.id = "entry-" + index;
    post.innerHTML = `
      <h2>${entry.title}</h2>
      <p><il>${entry.date}</il></p>
      <p>${entry.content}</p>
      ${
        entry.images && entry.images.length? entry.images.map(src => `<img src="${src}" alt="${entry.title}" loading="lazy" />`).join("")
          : ""
      }
    `;

    blogFeed.appendChild(post);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const hash = window.location.hash;
  
  preloadAllProjectImages(projects);

  if (hash === "#blog") {
    const blogHeader = document.querySelector('[data-toggle-id="blog"]');
    if (blogHeader) {
      toggleSection(blogHeader);
    }
  }
});

document.addEventListener("DOMContentLoaded", () => {
  preloadAllProjectImages(projects);
});