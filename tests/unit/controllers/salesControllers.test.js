const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesService = require('../../../src/services/salesService');
const salesController = require('../../../src/controllers/salesController');
const { salesList } = require('./mocks/salesControllers.mock');

describe('Unit Tests for sales controller', function () {
  describe('Listing sales', function () {
    it('returns all sales', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'findAll')
        .resolves({ type: null, message: salesList });

      await salesController.listSales(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesList);
    });

    it('returns a sale by id', async function () {
      const res = {};
      const req = {
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'findById')
        .resolves({ type: null, message: salesList[0] });

      await salesController.getSale(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(salesList[0]);
    });

    it('returns an error if the sale does not exist', async function () {
      const res = {};
      const req = {
        params: { id: 4 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesService, 'findById')
        .resolves({ type: 'SALE_NOT_FOUND', message: 'Sale not found' });

      await salesController.getSale(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });
  });
  afterEach(sinon.restore);
});
