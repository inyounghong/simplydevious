import angular from 'angular';
import uiRouter from 'angular-ui-router';
import popupComponent from './popup.component';

let popupModule = angular.module('popup', [
  uiRouter
])

.component('popup', popupComponent)

.name;

export default popupModule;
