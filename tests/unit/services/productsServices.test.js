const { expect } = require('chai');
const sinon = require('sinon');

const productsModel = require('../../../src/models/productsModel');
const productsService = require('../../../src/services/productsService')
const { productsList, newProduct, newProductResponse, updatedProduct, invalidProductData} = require('./mocks/productsServices.mock');

describe('Unit tests for products service', function () {
  describe('Listing products', function () {
    it('returns all products', async function () {
      sinon.stub(productsModel, 'findAll').resolves(productsList);

      const result = await productsService.findAll();

      expect(result.message).to.deep.equal(productsList);
    });

    it('returns a product by id ', async function () {
      sinon.stub(productsModel, 'findById').resolves(productsList[0]);

      const result = await productsService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(productsList[0]);
    });

    it('returns an error if the product id does not exist', async function () {
      sinon.stub(productsModel, 'findById').resolves(undefined);

      const result = await productsService.findById(1);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });
  });

  describe('Adding a new product', function () {
    it('returns a new product added successfully', async function () {
      sinon.stub(productsModel, 'insert').resolves([{ insertId: 1 }]);
      sinon.stub(productsModel, 'findById').resolves(newProductResponse);

      const result = await productsService.createProduct(newProduct);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(newProductResponse);
    });
  });

  describe('Updating a product', function () {
    it('returns a product updated by id', async function () {
      sinon.stub(productsModel, 'updateById').resolves({ affectedRows: 1 });
      sinon.stub(productsModel, 'findById').resolves(productsList[0]);

      const result = await productsService.updateProduct(updatedProduct);
      expect(result.type).to.equal(null);
      expect(result.message).to.equal(updatedProduct);
    });

    it('returns an error if the product does not exist', async function () {
      sinon.stub(productsModel, 'updateById').resolves(undefined);
      sinon.stub(productsModel, 'findById').resolves(undefined);

      const result = await productsService.updateProduct(invalidProductData);
      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });
  });

  describe('Removing products', function () {
    it('should remove a product', async function () {
      sinon.stub(productsModel, "remove").resolves({ affectedRows: 1 });
      sinon.stub(productsModel, "findById").resolves(productsList[0]);

      const result = await productsService.removeProduct(productsList[0].id);
      expect(result.type).to.equal(null);
    });
  });

  afterEach(sinon.restore);
});
