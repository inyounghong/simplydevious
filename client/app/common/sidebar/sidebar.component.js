import template from './sidebar.html';
import controller from './sidebar.controller';
// import './sidebar.scss';

const sidebarComponent = {
    bindings: {
        tabs: '=',
        j: '=',
    },
    template,
    controller: controller,
    controllerAs: 'vm',
};

export default sidebarComponent;
