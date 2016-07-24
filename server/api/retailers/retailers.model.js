'use strict';

import mongoose from 'mongoose';

var RetailersSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Retailers', RetailersSchema);
