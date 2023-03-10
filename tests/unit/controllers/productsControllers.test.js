const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/productsService');
const productsController = require('../../../src/controllers/productsController');
const { productsList, newProduct, newProductResponse, dataToUpdate, updatedProduct } = require('./mocks/productsControllers.mock');

describe('Unit Tests for products controller', function () {
  describe('Listing products', function () {
    it('returns all products', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findAll')
        .resolves({ type: null, message: productsList });

      await productsController.listProducts(req, res);

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
        .stub(productsService, 'findById')
        .resolves({ type: null, message: productsList[0]});

      await productsController.getProduct(req, res);

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
        .stub(productsService, 'findById')
        .resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

      await productsController.getProduct(req, res);

      expect(res.status).to.have.been.calledWith(404);
      expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
    });
  });

  describe('Adding a new product', function () {
    it('returns a new product added successfully', async function () {
      const res = {};
      const req = newProduct;

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "createProduct")
        .resolves({ type: null, message: newProductResponse });

      await productsController.createProduct(req, res);

      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(newProductResponse);
    });
  });

  describe('Updating a product', function () {
    it('returns a product updated by id', async function () {
      const res = {};
      const req = {
        body: { ...dataToUpdate },
        params: { id: 1 },
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'updateProduct')
        .resolves({ type: null, message: updatedProduct });

      await productsController.updateProduct(req, res);

      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(updatedProduct);
    });
  });

  describe('Removing products', function () {
    it('should remove a product', async function () {
      const res = {};
      const req = { params: { id: 1 } };

      res.status = sinon.stub().returns(res);
      res.end = sinon.stub().returns();
      sinon.stub(productsService, "removeProduct").resolves({ type: null });

      await productsController.removeProduct(req, res);

      expect(res.status).to.have.been.calledWith(204);
    });
  });

  afterEach(sinon.restore);
});
