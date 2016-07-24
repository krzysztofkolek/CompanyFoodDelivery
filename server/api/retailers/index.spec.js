'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var retailersCtrlStub = {
  index: 'retailersCtrl.index',
  show: 'retailersCtrl.show',
  create: 'retailersCtrl.create',
  update: 'retailersCtrl.update',
  destroy: 'retailersCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var retailersIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './retailers.controller': retailersCtrlStub
});

describe('Retailers API Router:', function() {

  it('should return an express router instance', function() {
    retailersIndex.should.equal(routerStub);
  });

  describe('GET /api/retailerss', function() {

    it('should route to retailers.controller.index', function() {
      routerStub.get
        .withArgs('/', 'retailersCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/retailerss/:id', function() {

    it('should route to retailers.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'retailersCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/retailerss', function() {

    it('should route to retailers.controller.create', function() {
      routerStub.post
        .withArgs('/', 'retailersCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/retailerss/:id', function() {

    it('should route to retailers.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'retailersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/retailerss/:id', function() {

    it('should route to retailers.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'retailersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/retailerss/:id', function() {

    it('should route to retailers.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'retailersCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
