class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, img, desc, price) {
    this.title = title;
    this.imageUrl = img;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    new Product(
      "A pillow",
      "https://th.bing.com/th/id/OIP.0GnNiIvrxcjFpGcejBgYBQAAAA?pid=ImgDet&rs=1",
      "A soft pillow!",
      19.99
    ),
    new Product(
      "iPhone",
      "https://o.aolcdn.com/images/dims?quality=100&image_uri=https:%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fbe8deaf69ebb2e866257646588bb5999%2F206681111%2FIPHONE.jpg&client=amp-blogside-v2&signature=2e825ca996fd736b3f74c9a36a7bb87ea07cfa4d",
      "Expensive iPhone with many features.",
      99.98
    )
  ],
  render() {
    // Get the element with the id "app"
    const renderHook = document.getElementById("app");

    // Check if the element exists before proceeding
    if (renderHook) {
      const prodList = document.createElement("ul");
      prodList.className = "product-list";

      for (const prod of this.products) {
        const prodEl = document.createElement("li");
        prodEl.className = "product-item";
        prodEl.innerHTML = `
          <div>
            <img src="${prod.imageUrl}" alt="${prod.title}">
            <div class="product-item__content">
              <h2>${prod.title}</h2>
              <h3>$${prod.price}</h3>
              <p>${prod.description}</p>
              <button>Add to Cart</button>
            </div>
          </div>
        `;
        prodList.appendChild(prodEl);
      }
      // Append the prodList to the "app" element if it exists
      renderHook.appendChild(prodList);
    } else {
      console.error('Element with id "app" not found.');
    }
  },
};

// Call the render function after the page is loaded
window.addEventListener("DOMContentLoaded", () => {
  productList.render();
});
