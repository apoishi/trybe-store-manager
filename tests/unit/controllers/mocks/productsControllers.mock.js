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
const dataToUpdate = { name: "Martelo do Batman" };

module.exports = {
  productsList,
  newProductResponse,
  newProduct,
  dataToUpdate,
  updatedProduct,
};