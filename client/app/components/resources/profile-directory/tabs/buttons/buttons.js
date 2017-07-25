import angular from 'angular';
import uiRouter from 'angular-ui-router';
import template from './buttons.html';
// import './popup.scss';

let buttonModule = angular.module('buttons', [
  uiRouter
])

.component('buttonsTab', {
    bindings: {
        j: "=",
    },
    template,
    controllerAs: 'vm',
})

.name;

export default buttonModule;
