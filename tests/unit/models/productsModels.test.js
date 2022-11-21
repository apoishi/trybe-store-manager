const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/db/connection');

const productsModel = require('../../../src/models/productsModel');
const { productsList, newProduct, productsUpdated } = require('./mocks/productsModels.mock');

  describe('Unit tests for products model', function () {
    describe('Listing products', function () {
      it('returns all products', async function () {
        sinon.stub(connection, 'execute').resolves([productsList]);
        const result = await productsModel.findAll();
        expect(result).to.be.deep.equal(productsList);
      });

      it('returns a product by id', async function () {
        sinon.stub(connection, 'execute').resolves([[productsList[0]]]);
        const result = await productsModel.findById(1);
        expect(result).to.be.deep.equal(productsList[0]);
      });
    });

    describe('Adding a new product', function () {
      it('returns a new product added successfully', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 4 }]);
        const result = await productsModel.insert(newProduct);
        expect(result).to.equal(4);
      });
    });

    describe('Updating a product', function () {
      it('returns a product updated by id', async function () {
        sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
        const result = await productsModel.updateById(productsUpdated);
        expect(result).to.be.deep.equal({ affectedRows: 1 });
      });
    });
    describe('Removing products', function () {
    it('should remove a product', async function () {
      sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);

      const result = await productsModel.remove(productsList[0].id);
      expect(result).to.deep.equal({ affectedRows: 1 });
      });
    });
  afterEach(sinon.restore);
});
