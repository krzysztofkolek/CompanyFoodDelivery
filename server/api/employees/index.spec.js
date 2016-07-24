'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var employeesCtrlStub = {
  index: 'employeesCtrl.index',
  show: 'employeesCtrl.show',
  create: 'employeesCtrl.create',
  update: 'employeesCtrl.update',
  destroy: 'employeesCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var employeesIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './employees.controller': employeesCtrlStub
});

describe('Employees API Router:', function() {

  it('should return an express router instance', function() {
    employeesIndex.should.equal(routerStub);
  });

  describe('GET /api/employeess', function() {

    it('should route to employees.controller.index', function() {
      routerStub.get
        .withArgs('/', 'employeesCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/employeess/:id', function() {

    it('should route to employees.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'employeesCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/employeess', function() {

    it('should route to employees.controller.create', function() {
      routerStub.post
        .withArgs('/', 'employeesCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/employeess/:id', function() {

    it('should route to employees.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'employeesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/employeess/:id', function() {

    it('should route to employees.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'employeesCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/employeess/:id', function() {

    it('should route to employees.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'employeesCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
