const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsServices = require('../../../src/services/productsServices');
const productsControllers = require('../../../src/controllers/productsControllers');
const { productsList } = require('./mocks/productsControllers.mock');

describe('Unit Tests for products controllers', function () {
  it('returns all products', async function () {
    const res = {};
    const req = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findAll')
      .resolves({ type: null, message: productsList });

    await productsControllers.listProducts(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsList);
  });

  it('returns a product by id', async function () {
    const res = {};
    const req = {
      params: { id: 1 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: null, message: productsList[0]});

    await productsControllers.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsList[0]);
  });

  it('returns an error if the product does not exist', async function () {
    const res = {};
    const req = {
      params: { id: 4 },
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon
      .stub(productsServices, 'findById')
      .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    await productsControllers.getProduct(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });
  afterEach(sinon.restore);
});
