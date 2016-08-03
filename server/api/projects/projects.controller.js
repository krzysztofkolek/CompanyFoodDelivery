/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/projectss              ->  index
 * POST    /api/projectss              ->  create
 * GET     /api/projectss/:id          ->  show
 * PUT     /api/projectss/:id          ->  update
 * DELETE  /api/projectss/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Projects from './projects.model';

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

// Gets a list of Projectss
export function index(req, res) {
  return Projects.aggregate([
        { "$unwind" : "$employeesInProject" },
        {
            "$lookup" : {
               "from": "users",
               "localField": "employeesInProject",
               "foreignField": "_id",
               "as": "employeesInProject"
            }
        },
        { "$group" : {
            _id :"$_id",
            name: { $first: "$name"},
            employeesInProject: { $push: "$employeesInProject" } 
            }
        },
        { "$sort": {"name" : 1} }
    ])
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Projects from the DB
export function show(req, res) {
  return Projects.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Projects in the DB
export function create(req, res) {
  return Projects.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Projects in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Projects.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Projects from the DB
export function destroy(req, res) {
  return Projects.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
