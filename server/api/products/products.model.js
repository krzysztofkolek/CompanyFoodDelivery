'use strict';

import mongoose from 'mongoose';

var ProductsSchema = new mongoose.Schema({
    name: String,
    retailer: { type: mongoose.Schema.Types.ObjectId, ref: 'retailers' },

});

export default mongoose.model('Products', ProductsSchema);
