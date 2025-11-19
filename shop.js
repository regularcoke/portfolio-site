const shopItems = {
  item1: {
    title: "Do Urs Press Mine? Finger Contortion",
    price: "$50",
    images: [
      "img/shop/IMG_2920.jpg"
    ],
    description: "yes"
  }
};

function loadItem(key, element) {
  const item = shopItems[key];
  if (!item) return;

  // images
  const gallery = document.getElementById("shop-gallery");
  gallery.innerHTML = item.images
    .map(img => `<img src="${img}" />`)
    .join("");

  // caption
  const caption = document.getElementById("caption");
  caption.innerHTML = `
    <h1>${item.title}</h1>
    <p>${item.price}</p>
    <p>${item.description || ""}</p>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("shop-gallery");
  gallery.classList.add("shop-grid");

  gallery.innerHTML = Object.keys(shopItems)
    .map(key => {
      const item = shopItems[key];
      return `
        <div class="shop-item">
          <img src="${item.images[0]}" alt="${item.title}">
          <div class="shop-caption">
            <p>${item.title}</p>
            <p>${item.price} <a href="mailto:hugoparizs@gmail.com">buy</a></p>
          </div>
        </div>
      `;
    })
    .join("");
});