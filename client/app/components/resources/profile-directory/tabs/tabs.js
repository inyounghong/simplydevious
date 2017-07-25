import angular from 'angular';
import ButtonsTab from './buttons/buttons';
// import ColorsTab from './colors';
// import DirectoryTab from './directory';
// import StatusTab from './status';

let tabModule = angular.module('tabs', [
    ButtonsTab,
    // ColorsTab,
    // DirectoryTab,
    // StatusTab,
])

.name;

export default tabModule;
