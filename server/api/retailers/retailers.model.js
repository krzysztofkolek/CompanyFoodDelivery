'use strict';

import mongoose from 'mongoose';

var RetailersSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Retailers', RetailersSchema);
