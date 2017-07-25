import angular from 'angular';
import Navbar from './navbar/navbar';
import Popup from './popup/popup';
import ResourceHeader from './resource-header/resource-header';
import Sidebar from './sidebar/sidebar';

let commonModule = angular.module('app.common', [
    Navbar,
    Popup,
    ResourceHeader,
    Sidebar
])

.name;

export default commonModule;
