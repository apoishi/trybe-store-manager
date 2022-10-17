const { expect } = require('chai');
const sinon = require('sinon');
const productsModels = require('../../../src/models/productsModels');
const productsServices = require('../../../src/services/productsServices')
const { productsList, invalidValue } = require('./mocks/productsServices.mock');

describe('Unit tests for products services', function () {
    it('returns the products list with success', async function () {
      sinon.stub(productsModels, 'findAll').resolves(productsList);

      const result = await productsServices.findAll();

      expect(result.message).to.deep.equal(productsList);
    });


    it('returns a product if the id exists ', async function () {
      sinon.stub(productsModels, 'findById').resolves(productsList[0]);

      const result = await productsServices.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(productsList[0]);
    });

    it('returns an error if the product does not exist', async function () {
      sinon.stub(productsModels, 'findById').resolves(undefined);

      const result = await productsServices.findById(invalidValue);

      expect(result.type).to.equal('PRODUCT_NOT_FOUND');
      expect(result.message).to.equal('Product not found');
    });

    afterEach(sinon.restore);
  });
