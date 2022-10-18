const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/db/connection');

const productsModels = require('../../../src/models/productsModels');
const { productsList, newProduct } = require('./mocks/productsModels.mock');

  describe('Unit tests for products models', function () {
    describe('Listing products', function () {
      it('returns all products', async function () {
        sinon.stub(connection, 'execute').resolves([productsList]);
        const result = await productsModels.findAll();
        expect(result).to.be.deep.equal(productsList);
      });

      it('returns a product by id', async function () {
        sinon.stub(connection, 'execute').resolves([[productsList[0]]]);
        const result = await productsModels.findById(1);
        expect(result).to.be.deep.equal(productsList[0]);
      });
    });
    
    describe('Adding a new product', function () {
      it('returns a new product added successfully', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
        const result = await productsModels.insert(newProduct);
        expect(result).to.equal(4);
      });
    });
  afterEach(sinon.restore);
});