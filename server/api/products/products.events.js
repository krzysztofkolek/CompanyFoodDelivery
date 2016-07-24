/**
 * Products model events
 */

'use strict';

import {EventEmitter} from 'events';
import Products from './products.model';
var ProductsEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ProductsEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Products.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    ProductsEvents.emit(event + ':' + doc._id, doc);
    ProductsEvents.emit(event, doc);
  }
}

export default ProductsEvents;
