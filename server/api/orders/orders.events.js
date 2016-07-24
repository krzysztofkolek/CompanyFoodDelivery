/**
 * Orders model events
 */

'use strict';

import {EventEmitter} from 'events';
import Orders from './orders.model';
var OrdersEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
OrdersEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Orders.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    OrdersEvents.emit(event + ':' + doc._id, doc);
    OrdersEvents.emit(event, doc);
  }
}

export default OrdersEvents;
