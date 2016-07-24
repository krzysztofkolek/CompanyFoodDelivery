'use strict';

import mongoose from 'mongoose';

var EmployeesSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

export default mongoose.model('Employees', EmployeesSchema);
