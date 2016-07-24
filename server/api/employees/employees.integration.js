'use strict';

var app = require('../..');
import request from 'supertest';

var newEmployees;

describe('Employees API:', function() {

  describe('GET /api/employeess', function() {
    var employeess;

    beforeEach(function(done) {
      request(app)
        .get('/api/employeess')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          employeess = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      employeess.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/employeess', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/employeess')
        .send({
          name: 'New Employees',
          info: 'This is the brand new employees!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEmployees = res.body;
          done();
        });
    });

    it('should respond with the newly created employees', function() {
      newEmployees.name.should.equal('New Employees');
      newEmployees.info.should.equal('This is the brand new employees!!!');
    });

  });

  describe('GET /api/employeess/:id', function() {
    var employees;

    beforeEach(function(done) {
      request(app)
        .get('/api/employeess/' + newEmployees._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          employees = res.body;
          done();
        });
    });

    afterEach(function() {
      employees = {};
    });

    it('should respond with the requested employees', function() {
      employees.name.should.equal('New Employees');
      employees.info.should.equal('This is the brand new employees!!!');
    });

  });

  describe('PUT /api/employeess/:id', function() {
    var updatedEmployees;

    beforeEach(function(done) {
      request(app)
        .put('/api/employeess/' + newEmployees._id)
        .send({
          name: 'Updated Employees',
          info: 'This is the updated employees!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEmployees = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEmployees = {};
    });

    it('should respond with the updated employees', function() {
      updatedEmployees.name.should.equal('Updated Employees');
      updatedEmployees.info.should.equal('This is the updated employees!!!');
    });

  });

  describe('DELETE /api/employeess/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/employeess/' + newEmployees._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when employees does not exist', function(done) {
      request(app)
        .delete('/api/employeess/' + newEmployees._id)
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
