'use strict';

import mongoose from 'mongoose';

var RetailersSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Orders' }]
});

export default mongoose.model('Retailers', RetailersSchema);
