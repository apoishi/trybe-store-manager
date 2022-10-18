const { expect } = require('chai');
const sinon = require('sinon');

const salesModels = require('../../../src/models/salesModels');
const salesServices = require('../../../src/services/salesServices')
const { salesList } = require('./mocks/salesServices.mock');

describe('Unit tests for sales services', function () {
  describe('Listing sales', function () {
    it('returns all sales', async function () {
      sinon.stub(salesModels, 'findAll').resolves(salesList);

      const result = await salesServices.findAll();

      expect(result.message).to.deep.equal(salesList);
    });

    it('returns a sale by id ', async function () {
      sinon.stub(salesModels, 'findById').resolves(salesList);

      const result = await salesServices.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(salesList);
    });

    it('returns an error if the sale does not exist', async function () {
      sinon.stub(salesModels, 'findById').resolves(undefined);

      const result = await salesServices.findById(1);

      expect(result.type).to.equal('SALE_NOT_FOUND');
      expect(result.message).to.equal('Sale not found');
    });
  });
  afterEach(sinon.restore);
});