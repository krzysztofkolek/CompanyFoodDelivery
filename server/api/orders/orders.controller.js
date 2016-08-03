/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/orderss              ->  index
 * POST    /api/orderss              ->  create
 * GET     /api/orderss/:id          ->  show
 * PUT     /api/orderss/:id          ->  update
 * DELETE  /api/orderss/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Orders from './orders.model';
import mongoose from 'mongoose';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Orderss
export function index(req, res) {
    return Orders.aggregate([
        { "$unwind": "$emplyeesInOrder" },
        { "$lookup": {
            "from": "users",
            "localField": "emplyeesInOrder",
            "foreignField": "_id",
            "as": "emplyeesInOrder"
        }},
        { "$group" : {
            _id :"$_id",
            name: { $first: "$name"},
            emplyeesInOrder: { $push: "$emplyeesInOrder" },
            productsInOrder: { $first: "$productsInOrder"}
            }
        },
        { "$unwind": "$productsInOrder" },
        { "$lookup": {
            "from": "products",
            "localField": "productsInOrder",
            "foreignField": "_id",
            "as": "productsInOrder"
        }},
        { "$group" : {
            _id :"$_id",
            name: { $first: "$name"},
            emplyeesInOrder: { $first: "$emplyeesInOrder" },
            productsInOrder: { $push: "$productsInOrder"}
            }
        },
        { "$sort": {"name" : 1} }
    ])
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Orders from the DB
export function show(req, res) {
  return Orders.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Orders in the DB
export function create(req, res) {
  return Orders.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Orders in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Orders.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Orders from the DB
export function destroy(req, res) {
  return Orders.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
