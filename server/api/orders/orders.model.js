'use strict';

import mongoose from 'mongoose';

var OrdersSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Orders', OrdersSchema);
