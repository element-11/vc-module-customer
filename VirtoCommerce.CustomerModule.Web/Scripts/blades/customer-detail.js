﻿angular.module('virtoCommerce.customerModule')
.controller('virtoCommerce.customerModule.customerDetailController', ['$scope', 'virtoCommerce.customerModule.organizations', 'virtoCommerce.coreModule.common.countries', function ($scope, organizations, countries) {
    var blade = $scope.blade;

    if (blade.isNew) {
        blade.title = 'customer.blades.contact-detail.title-new';
        blade.currentEntity = angular.extend({
            organizations: []
        }, blade.currentEntity);

        if (blade.parentBlade.currentEntity.id) {
            blade.currentEntity.organizations.push(blade.parentBlade.currentEntity.id);
        }

        blade.fillDynamicProperties();
    } else {
        blade.title = blade.currentEntity.name;
        blade.subtitle = 'customer.blades.contact-detail.subtitle';
    }

    // datepicker
    $scope.datepickers = {}
    $scope.today = new Date();

    $scope.open = function ($event, which) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.datepickers[which] = true;
    };

    $scope.dateOptions = {
        'year-format': "'yyyy'",
        'starting-day': 1
    };

    $scope.organizations = organizations.query();
    $scope.timeZones = countries.getTimeZones();
}]);