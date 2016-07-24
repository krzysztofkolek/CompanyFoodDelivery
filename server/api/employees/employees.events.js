/**
 * Employees model events
 */

'use strict';

import {EventEmitter} from 'events';
import Employees from './employees.model';
var EmployeesEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
EmployeesEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Employees.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    EmployeesEvents.emit(event + ':' + doc._id, doc);
    EmployeesEvents.emit(event, doc);
  }
}

export default EmployeesEvents;
