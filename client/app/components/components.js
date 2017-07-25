import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Resources from './resources/resources';

let componentModule = angular.module('app.components', [
    Home,
    About,
    Resources,
])

.name;

export default componentModule;
