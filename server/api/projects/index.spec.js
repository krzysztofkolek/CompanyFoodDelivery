'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var projectsCtrlStub = {
  index: 'projectsCtrl.index',
  show: 'projectsCtrl.show',
  create: 'projectsCtrl.create',
  update: 'projectsCtrl.update',
  destroy: 'projectsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var projectsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './projects.controller': projectsCtrlStub
});

describe('Projects API Router:', function() {

  it('should return an express router instance', function() {
    projectsIndex.should.equal(routerStub);
  });

  describe('GET /api/projectss', function() {

    it('should route to projects.controller.index', function() {
      routerStub.get
        .withArgs('/', 'projectsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/projectss/:id', function() {

    it('should route to projects.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'projectsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/projectss', function() {

    it('should route to projects.controller.create', function() {
      routerStub.post
        .withArgs('/', 'projectsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/projectss/:id', function() {

    it('should route to projects.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'projectsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/projectss/:id', function() {

    it('should route to projects.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'projectsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/projectss/:id', function() {

    it('should route to projects.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'projectsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
