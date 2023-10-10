class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;
}
 
console.log(new Product());

const productList = {
  products: [
    // new product(),
    {
      title: "A pillow",
      imageUrl:
        "https://th.bing.com/th/id/OIP.0GnNiIvrxcjFpGcejBgYBQAAAA?pid=ImgDet&rs=1",
      price: 19.99,
      description: "A soft pillow!",
    },
    {
      title: "iPhone",
      imageUrl:
        "https://o.aolcdn.com/images/dims?quality=100&image_uri=https:%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fbe8deaf69ebb2e866257646588bb5999%2F206681111%2FIPHONE.jpg&client=amp-blogside-v2&signature=2e825ca996fd736b3f74c9a36a7bb87ea07cfa4d",
      price: 99.98,
      description: "Expensive iPhone with many features.",
    },
  ],
  render() {
    // Get the element with the id "app"
    const renderHook = document.getElementById('app');

    // Check if the element exists before proceeding
    if (renderHook) {
      const prodList = document.createElement('ul');
      prodList.className = 'product-list';

      for (const prod of this.products) {
        const prodEl = document.createElement('li');
        prodEl.className = 'product-item';
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
window.addEventListener('DOMContentLoaded', () => {
  productList.render();
});
