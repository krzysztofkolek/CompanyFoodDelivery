/**
 * Retailers model events
 */

'use strict';

import {EventEmitter} from 'events';
import Retailers from './retailers.model';
var RetailersEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
RetailersEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Retailers.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    RetailersEvents.emit(event + ':' + doc._id, doc);
    RetailersEvents.emit(event, doc);
  }
}

export default RetailersEvents;
