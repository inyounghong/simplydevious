import template from './widget-preview.html';
// import './resource-header.scss';

let widgetPreviewComponent = {
    bindings: {
        info: '='
    },
    template,
    controllerAs: 'vm',
};

export default widgetPreviewComponent;

// ['$scope', function ($scope) {
//
//             $scope.trustAsHtml = function(string) {
//                 return $sce.trustAsHtml(string);
//             }
//
//             $scope.getCode = function() {
//                 $("#popup").fadeIn(100);
//             }
//         }]
