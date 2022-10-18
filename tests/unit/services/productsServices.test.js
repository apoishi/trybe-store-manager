const { expect } = require('chai');
const sinon = require('sinon');

const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices')
const { productsList, newProduct, newProductResponse } = require('./mocks/productsServices.mock');

describe('Unit tests for products services', function () {
  describe('Listing products', function () {
    it('returns all products', async function () {
      sinon.stub(productsModels, 'findAll').resolves(productsList);

      const result = await productsServices.findAll();

      expect(result.message).to.deep.equal(productsList);
    });

    it('returns a product by id ', async function () {
      sinon.stub(productsModels, 'findById').resolves(productsList[0]);

      const result = await productsServices.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(productsList[0]);
    });

    it('returns an error if the product does not exist', async function () {
      sinon.stub(productsModels, 'findById').resolves(undefined);

      const result = await productsServices.findById(1);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });
  });

  describe('Adding a new product', function () {
    it('returns a new product added successfully', async function () {
      sinon.stub(productsModels, 'insert').resolves([{ insertId: 1 }]);
      sinon.stub(productsModels, 'findById').resolves(newProductResponse);

      const result = await productsServices.createProduct(newProduct);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(newProductResponse);
    });
  });
  afterEach(sinon.restore);
});
  
