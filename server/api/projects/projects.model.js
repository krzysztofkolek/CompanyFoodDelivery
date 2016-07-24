'use strict';

import mongoose from 'mongoose';

var ProjectsSchema = new mongoose.Schema({
    name: String,
    employeesInProject: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

export default mongoose.model('Projects', ProjectsSchema);
