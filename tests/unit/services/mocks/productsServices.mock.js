const productsList = [
  {
    id: 1,
    name: 'Martelo do Thor'
  },
  {
    id: 2,
    name: 'Traje de encolhimento'
  },
  {
    id: 3,
    name: 'Escudo do Capitão América'
  },
];

const newProductResponse = {
  id: 1,
  name: 'ProdutoX'
}

const newProduct = {
  name: 'ProdutoX'
}

const updatedProduct = { id: 1, name: "Martelo do Batman" };
const invalidProductData = { id: 333, name: 'Homem Aranha' };

module.exports = {
  productsList,
  newProductResponse,
  newProduct,
  updatedProduct, 
  invalidProductData,
};