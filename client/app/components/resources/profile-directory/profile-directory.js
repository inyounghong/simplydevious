import angular from 'angular';
import uiRouter from 'angular-ui-router';
import profileDirectoryComponent from './profile-directory.component';
import profileDirectoryService from './profile-directory.service';
import importFontService from '../../../services/import-font.service';
import Tabs from './tabs/tabs';

let profileDirectoryModule = angular.module('profileDirectory', [
    uiRouter,
    Tabs,
])

.config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('profileDirectory', {
        url: '/resources/profile-directory',
        component: 'profileDirectory',
        // template: '<profile-directory></profile-directory>',
    });
})

.service('profileDirectoryService', profileDirectoryService)
.service('importFontService', importFontService)
.component('profileDirectory', profileDirectoryComponent)


.name;

export default profileDirectoryModule;
