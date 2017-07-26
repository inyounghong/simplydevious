import angular from 'angular';
import uiRouter from 'angular-ui-router';
import widgetPreviewComponent from './widget-preview.component';

let widgetPreviewModule = angular.module('widgetPreview', [
    uiRouter
])

.component('widgetPreview', widgetPreviewComponent)

.name;

export default widgetPreviewModule;
