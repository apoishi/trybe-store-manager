const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const salesServices = require('../../../src/services/salesServices');
const salesControllers = require('../../../src/controllers/salesControllers');
const { salesList } = require('./mocks/salesControllers.mock');

describe('Unit Tests for sales controllers', function () {
  describe('Listing sales', function () {
    it('returns all sales', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(salesServices, 'findAll')
        .resolves({ type: null, message: salesList });

      await salesControllers.listSales(req, res);

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
        .stub(salesServices, 'findById')
        .resolves({ type: null, message: salesList[0] });

      await salesControllers.getSale(req, res);

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
        .stub(salesServices, 'findById')
        .resolves({ type: 'SALE_NOT_FOUND', message: 'Sale not found' });

      await salesControllers.getSale(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Sale not found' });
    });
  });
  afterEach(sinon.restore);
});