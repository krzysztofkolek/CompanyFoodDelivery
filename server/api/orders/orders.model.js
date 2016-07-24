'use strict';

import mongoose from 'mongoose';

var OrdersSchema = new mongoose.Schema({
    name: String,
    emplyeesInOrder: [{type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }],
    productsInOrder: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products' }]    
});

export default mongoose.model('Orders', OrdersSchema);
