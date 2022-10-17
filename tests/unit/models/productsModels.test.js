const { expect } = require('chai');
const sinon = require('sinon');
const productsModels = require('../../../src/models/productsModels');
const connection = require('../../../src/models/db/connection');
const { products } = require('./mocks/productsModels.mock');

  describe('Unit tests for products models', function () {
    afterEach(sinon.restore);

    it('shows all products', async function () {
      sinon.stub(connection, 'execute').resolves([products]);
      const result = await productsModels.findAll();
      expect(result).to.be.deep.equal(products);
    });

    it('shows the product id', async function () {
     sinon.stub(connection, 'execute').resolves([[products[0]]]);
     const result = await productsModels.findById(1);
      expect(result).to.be.deep.equal(products[0]);
    });
  });
