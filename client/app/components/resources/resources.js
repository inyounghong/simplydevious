import angular from 'angular';
import ProfileDirectory from './profile-directory/profile-directory';
import Tabs from './profile-directory/tabs/tabs';

let resourceModule = angular.module('resources', [
    ProfileDirectory,
    Tabs,
])

.name;

export default resourceModule;
