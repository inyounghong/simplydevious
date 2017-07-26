import angular from 'angular';
import Navbar from './navbar/navbar';
import Popup from './popup/popup';
import ResourceHeader from './resource-header/resource-header';
import Sidebar from './sidebar/sidebar';
import WidgetPreview from './widget-preview/widget-preview';

let commonModule = angular.module('app.common', [
    Navbar,
    Popup,
    ResourceHeader,
    Sidebar,
    WidgetPreview,
])

.name;

export default commonModule;
