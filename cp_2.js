function fetchProductsThen() {
  fetch('https://www.course-api.com/javascript-store-products')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.error('Fetch error (then):', error);
    });
}

async function fetchProductsAsync() {
  try {
    const response = await fetch('https://www.course-api.com/javascript-store-products');
    const data = await response.json();
    displayProducts(data.slice(0, 5).map((p) => ({
      name: p.fields.name,
      price: p.fields.price,
      img: p.fields.image[0].url
    })));
  } catch (error) {
    handleError(error);
  }
}

function displayProducts(products) {
  const container = document.getElementById('product-container');
  container.innerHTML = '';

  products.forEach((product) => {
    const { name, price, img } = product;

    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
      <img src="${img}" alt="${name}" />
      <h2>${name}</h2>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

function handleError(error) {
  console.error('An error occurred:', error.message);
}

fetchProductsThen();
fetchProductsAsync();
