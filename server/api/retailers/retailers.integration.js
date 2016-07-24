'use strict';

var app = require('../..');
import request from 'supertest';

var newRetailers;

describe('Retailers API:', function() {

  describe('GET /api/retailerss', function() {
    var retailerss;

    beforeEach(function(done) {
      request(app)
        .get('/api/retailerss')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          retailerss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      retailerss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/retailerss', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/retailerss')
        .send({
          name: 'New Retailers',
          info: 'This is the brand new retailers!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRetailers = res.body;
          done();
        });
    });

    it('should respond with the newly created retailers', function() {
      newRetailers.name.should.equal('New Retailers');
      newRetailers.info.should.equal('This is the brand new retailers!!!');
    });

  });

  describe('GET /api/retailerss/:id', function() {
    var retailers;

    beforeEach(function(done) {
      request(app)
        .get('/api/retailerss/' + newRetailers._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          retailers = res.body;
          done();
        });
    });

    afterEach(function() {
      retailers = {};
    });

    it('should respond with the requested retailers', function() {
      retailers.name.should.equal('New Retailers');
      retailers.info.should.equal('This is the brand new retailers!!!');
    });

  });

  describe('PUT /api/retailerss/:id', function() {
    var updatedRetailers;

    beforeEach(function(done) {
      request(app)
        .put('/api/retailerss/' + newRetailers._id)
        .send({
          name: 'Updated Retailers',
          info: 'This is the updated retailers!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRetailers = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRetailers = {};
    });

    it('should respond with the updated retailers', function() {
      updatedRetailers.name.should.equal('Updated Retailers');
      updatedRetailers.info.should.equal('This is the updated retailers!!!');
    });

  });

  describe('DELETE /api/retailerss/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/retailerss/' + newRetailers._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when retailers does not exist', function(done) {
      request(app)
        .delete('/api/retailerss/' + newRetailers._id)
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
