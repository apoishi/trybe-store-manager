const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/db/connection');

const salesModel = require('../../../src/models/salesModel');
const { salesList, sale } = require('./mocks/salesModels.mock');

describe('Unit tests for sales model', function () {
  describe('Listing sales', function () {
    it('returns all sales', async function () {
      sinon.stub(connection, 'execute').resolves([salesList]);
      const result = await salesModel.findAll();
      expect(result).to.be.deep.equal(salesList);
    });

    it('returns a sale by id', async function () {
      sinon.stub(connection, 'execute').resolves([sale]);
      const result = await salesModel.findById(1);
      expect(result).to.be.deep.equal(sale);
    });
  });
  describe('Removing sales', function () {
  it('should remove a sale', async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);

    const result = await salesModel.remove(salesList[0].saleId);
    expect(result).to.deep.equal({ affectedRows: 1 });
  });
});
  afterEach(sinon.restore);
});
