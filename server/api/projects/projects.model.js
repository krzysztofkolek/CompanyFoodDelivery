'use strict';

import mongoose from 'mongoose';

var ProjectsSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    employeesInProject: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Employees' }]
});

export default mongoose.model('Projects', ProjectsSchema);
