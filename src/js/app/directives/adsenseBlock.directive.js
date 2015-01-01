angular
	.module('uv')
	.directive('adsenseBlock', adsenseBlock);

function adsenseBlock() {
	var directive = {
		restrict: 'A',
		translcude: true,
		replace: true,
		template: '<div ng-translcude></div>'
	};
	


	return directive;
}