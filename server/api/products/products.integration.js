'use strict';

var app = require('../..');
import request from 'supertest';

var newProducts;

describe('Products API:', function() {

  describe('GET /api/productss', function() {
    var productss;

    beforeEach(function(done) {
      request(app)
        .get('/api/productss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          productss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      productss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/productss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/productss')
        .send({
          name: 'New Products',
          info: 'This is the brand new products!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newProducts = res.body;
          done();
        });
    });

    it('should respond with the newly created products', function() {
      newProducts.name.should.equal('New Products');
      newProducts.info.should.equal('This is the brand new products!!!');
    });

  });

  describe('GET /api/productss/:id', function() {
    var products;

    beforeEach(function(done) {
      request(app)
        .get('/api/productss/' + newProducts._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          products = res.body;
          done();
        });
    });

    afterEach(function() {
      products = {};
    });

    it('should respond with the requested products', function() {
      products.name.should.equal('New Products');
      products.info.should.equal('This is the brand new products!!!');
    });

  });

  describe('PUT /api/productss/:id', function() {
    var updatedProducts;

    beforeEach(function(done) {
      request(app)
        .put('/api/productss/' + newProducts._id)
        .send({
          name: 'Updated Products',
          info: 'This is the updated products!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedProducts = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProducts = {};
    });

    it('should respond with the updated products', function() {
      updatedProducts.name.should.equal('Updated Products');
      updatedProducts.info.should.equal('This is the updated products!!!');
    });

  });

  describe('DELETE /api/productss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/productss/' + newProducts._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when products does not exist', function(done) {
      request(app)
        .delete('/api/productss/' + newProducts._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
