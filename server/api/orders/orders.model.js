'use strict';

import mongoose from 'mongoose';

var OrdersSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    emplyeesInOrder: [{type: mongoose.Schema.Types.ObjectId, ref: 'Employees' }],
    productsInOrder: [{type: mongoose.Schema.Types.ObjectId, ref: 'Products' }]    
});

export default mongoose.model('Orders', OrdersSchema);
