import template from './profile-directory.html';
import controller from './profile-directory.controller';
import './profile-directory.scss';

let profileDirectoryComponent = {
    restrict: 'E',
    scope: {},
    template,
    controller: ['$scope', 'profileDirectoryService', 'importFontService', controller],
    controllerAs: 'vm',
};

export default profileDirectoryComponent;
