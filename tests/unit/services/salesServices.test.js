const { expect } = require('chai');
const sinon = require('sinon');

const salesModel = require('../../../src/models/salesModel');
const salesService = require('../../../src/services/salesService')
const { salesList } = require('./mocks/salesServices.mock');

describe('Unit tests for sales service', function () {
  describe('Listing sales', function () {
    it('returns all sales', async function () {
      sinon.stub(salesModel, 'findAll').resolves(salesList);

      const result = await salesService.findAll();

      expect(result.message).to.deep.equal(salesList);
    });

    it('returns a sale by id ', async function () {
      sinon.stub(salesModel, 'findById').resolves(salesList);

      const result = await salesService.findById(1);

      expect(result.type).to.equal(null);
      expect(result.message).to.deep.equal(salesList);
    });

    it('returns an error if the sale does not exist', async function () {
      sinon.stub(salesModel, 'findById').resolves(undefined);

      const result = await salesService.findById(1);

      expect(result.type).to.equal('SALE_NOT_FOUND');
      expect(result.message).to.equal('Sale not found');
    });
  });
  afterEach(sinon.restore);
});
