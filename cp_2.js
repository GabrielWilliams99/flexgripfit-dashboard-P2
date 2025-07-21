const flexProducts = [
  {
    name: 'Adjustable Dumbbells',
    price: 12999,
    img: 'https://placehold.co/600x400?text=Adjustable+Dumbbells'
  },
  {
    name: 'FlexGrip Resistance Bands',
    price: 1999,
    img: 'https://placehold.co/600x400?text=Resistance+Bands'
  },
  {
    name: 'Premium Yoga Mat',
    price: 3499,
    img: 'https://placehold.co/600x400?text=Yoga+Mat'
  },
  {
    name: 'Weighted Jump Rope',
    price: 2499,
    img: 'https://placehold.co/600x400?text=Jump+Rope'
  },
  {
    name: 'Push-Up Bars',
    price: 2999,
    img: 'https://placehold.co/600x400?text=Push-Up+Bars'
  }
];

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

displayProducts(flexProducts);
