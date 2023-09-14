const shopArray = [
  {
    category: 'Something',
    productsList: [
      {
        name: 'asd',
        info: 'qwerty'
      },
      {
        name: 'asd1',
        info: 'qwerty1'
      },
      {
        name: 'asd2',
        info: 'qwerty2'
      }
    ]
  },
  {
    category: 'Something cool',
    productsList: [
      {
        name: 'zxc',
        info: 'asdfgh'
      },
      {
        name: 'zxc1',
        info: 'asdfgh1'
      },
      {
        name: 'zxc2',
        info: 'asdfgh2'
      }
    ]
  },
  {
    category: 'Somethin not cool',
    productsList: [
      {
        name: 'qwe',
        info: 'zxcvbn'
      },
      {
        name: 'qwe1',
        info: 'zxcvbn1'
      },
      {
        name: 'qwe2',
        info: 'zxcvbn2'
      }
    ]
  }
];

const categoryList = document.querySelector('.category-list');
const productList = document.querySelector('.product-list');
const productInfo = document.querySelector('.product-info');

renderCategories();

function renderCategories() {
  categoryList.innerHTML = '';
  productList.innerHTML = '';
  productInfo.innerHTML = '';
  shopArray.forEach((category) => {
    const li = document.createElement('li');
    li.textContent = category.category;
    li.addEventListener('click', () => renderProducts(category.productsList));
    categoryList.appendChild(li);
  });
}

function renderProducts(productsList) {
  productList.innerHTML = '';
  productInfo.innerHTML = '';
  productsList.forEach((product) => {
    const li = document.createElement('li');
    li.textContent = product.name;
    li.addEventListener('click', () => renderProductInfo(product));
    productList.appendChild(li);
  });
}

function renderProductInfo(product) {
  productInfo.innerHTML = '';
  const name = document.createElement('li');
  name.textContent = 'Name: ' + product.name;
  const info = document.createElement('li');
  info.textContent = 'Info: ' + product.info;
  const button = document.createElement('button');
  button.textContent = 'Press to buy';
  button.addEventListener('click', () => {
    alert('Product purchased');
    renderCategories();
  });
  productInfo.appendChild(name);
  productInfo.appendChild(info);
  productInfo.appendChild(button);
}
