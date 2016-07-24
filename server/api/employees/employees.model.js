'use strict';

import mongoose from 'mongoose';

var EmployeesSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    surname: String,
    hireDate: Date,
    active: Boolean,
    projectAssigned: [{ type: Number, ref: 'Projects' }]
});

export default mongoose.model('Employees', EmployeesSchema);
