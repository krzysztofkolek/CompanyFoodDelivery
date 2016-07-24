'use strict';

import mongoose from 'mongoose';

var ProjectsSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Projects', ProjectsSchema);
