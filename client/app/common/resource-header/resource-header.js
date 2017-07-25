import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resourceHeaderComponent from './resource-header.component';

let resourceHeaderModule = angular.module('resourceHeader', [
    uiRouter
])

.component('resourceHeader', resourceHeaderComponent)

.name;

export default resourceHeaderModule;
