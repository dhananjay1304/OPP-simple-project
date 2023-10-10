const productList = {
  products: [
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
        "https://th.bing.com/th/id/OIP.pI_mcb2vSdHcQzHBretQLAHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7",
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
