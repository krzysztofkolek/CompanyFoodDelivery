'use strict';

(function () {
    class OrdersComponent {
        constructor($http, $scope, socket) {
            this.apiUrl = '/api/orderss/';

            this.$http = $http;
            this.socket = socket;

            this.orders = [];

            $scope.$on('$destroy', function () {
                socket.unsyncUpdates('orders')
            });
        }
        
        $onInit() {
            this.$http.get(this.apiUrl)
                .then(response => {
                   this.orders = response.data;
                   this.socket.syncUpdates(this.apiUrl, this.orders);
                });
        }
        
        addOrder() {
            if(this.newOrder) {
                this.$http.post(this.apiUrl, {
                    
                });
                this.newOrder = '';
            }
        }

        deleteOrder(order) {
            this.$http.delete(this.apiUrl + order._id);
        }
    }

    angular.module('companyFoodDeliveryApp')
        .component('orders', {
            templateUrl: 'app/orders/orders.html',
            controller: OrdersComponent,
            controllerAs: 'ordersCtrl'
        });

})();
