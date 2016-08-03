/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';

import Retailers from '../api/retailers/retailers.model';
import Projects from '../api/projects/projects.model';
import Orders from '../api/orders/orders.model';
import Products from '../api/products/products.model';

Thing.find({}).remove()
    .then(() => {
        Thing.create({
            name: 'Development Tools',
            info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
            'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
            'Stylus, Sass, and Less.'
        }, {
                name: 'Server and Client integration',
                info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
                'AngularJS, and Node.'
            }, {
                name: 'Smart Build System',
                info: 'Build system ignores `spec` files, allowing you to keep ' +
                'tests alongside code. Automatic injection of scripts and ' +
                'styles into your index.html'
            }, {
                name: 'Modular Structure',
                info: 'Best practice client and server structures allow for more ' +
                'code reusability and maximum scalability'
            }, {
                name: 'Optimized Build',
                info: 'Build process packs up your templates as a single JavaScript ' +
                'payload, minifies your scripts/css/images, and rewrites asset ' +
                'names for caching.'
            }, {
                name: 'Deployment Ready',
                info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
                'and openshift subgenerators'
            });
    });

var users = [
    new User({
    provider: 'local',
    name: 'Test User',
    email: 'test@example.com',
    password: 'test'
    }),
    new User({
        provider: 'local',
        name: 'Test User 1',
        email: 'test1@example.com',
        password: 'test'
    }),
    new User({
        provider: 'local',
        name: 'Test User2',
        email: 'test2@example.com',
        password: 'test'
    }), 
    new User({
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@example.com',
        password: 'admin'
    })];

var retailers = [
    new Retailers({name: 'MCDon@lds'})
];

User.find({}).remove()
    .then(() => {
        User.create(users)
            .then(() => {
                console.log('finished populating users');
            });
    });
    
Retailers.find({}).remove()
    .then(() => {
        Retailers.create(retailers)
            .then(() => {
                console.log('finished populating Retailers');
            });
    });
 
 var products = [new Products({
        name: 'big mac',
        retailer: retailers[0]
    }),
    new Products({
        name: 'mc royal',
        retailer: retailers[0]
    }),
    new Products({
        name: 'mc double',
        retailer: retailers[0]
    })];  

Products.find({}).remove()
    .then(() => {
        Products.create(products)
            .then(() => {
                console.log('finished populating Products');
            });
    });    

var emplyeesInOrderFirst = [];
emplyeesInOrderFirst.push(users[0]._id);
emplyeesInOrderFirst.push(users[1]._id);
var productsFirstInOrder = [];
productsFirstInOrder.push(products[0]._id); 

var emplyeesInOrderSecond = [];
emplyeesInOrderSecond.push(users[0]._id);
emplyeesInOrderSecond.push(users[1]._id);
var productsSecondInOrder = [];
productsSecondInOrder.push(products[1]._id); 
productsSecondInOrder.push(products[2]._id); 
var orders = [new Orders({
    name: 'First order',
    emplyeesInOrder: emplyeesInOrderFirst,
    productsInOrder: productsFirstInOrder
}),
new Orders({
    name: 'Second order',
    emplyeesInOrder: emplyeesInOrderSecond,
    productsInOrder: productsSecondInOrder
})];  
Orders.find({}).remove()
    .then(() => {
        Orders.create(orders)
            .then(() => {
                console.log('finished populating Orders');
            });
    });

var usersForBigProject = [];
usersForBigProject.push(users[0]._id);
usersForBigProject.push(users[1]._id);
var projects = [new Projects({
   name: 'big project',
   employeesInProject: usersForBigProject
})];
Projects.find({}).remove()
    .then(() => {
        Projects.create(projects)
            .then(() => {
                console.log('finished populating Projects');
            });
    });











