'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var ordersCtrlStub = {
  index: 'ordersCtrl.index',
  show: 'ordersCtrl.show',
  create: 'ordersCtrl.create',
  update: 'ordersCtrl.update',
  destroy: 'ordersCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var ordersIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './orders.controller': ordersCtrlStub
});

describe('Orders API Router:', function() {

  it('should return an express router instance', function() {
    ordersIndex.should.equal(routerStub);
  });

  describe('GET /api/orderss', function() {

    it('should route to orders.controller.index', function() {
      routerStub.get
        .withArgs('/', 'ordersCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/orderss/:id', function() {

    it('should route to orders.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'ordersCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/orderss', function() {

    it('should route to orders.controller.create', function() {
      routerStub.post
        .withArgs('/', 'ordersCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/orderss/:id', function() {

    it('should route to orders.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'ordersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/orderss/:id', function() {

    it('should route to orders.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'ordersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/orderss/:id', function() {

    it('should route to orders.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'ordersCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
