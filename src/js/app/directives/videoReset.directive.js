angular
	.module('uv')
	.directive('videoReset', videoReset);

function videoReset() {
	var directive = {
		restrict: 'A'
	};

	return directive;
}