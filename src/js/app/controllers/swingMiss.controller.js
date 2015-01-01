angular
	.module('uv')
	.controller('SwingMissController', SwingMissController);

function SwingMissController(youtubeService, $scope) {
	var vm = this;

	vm.retrieveVideoSet = retrieveVideoSet;
	vm.consolation = '';

	$scope.$on('videoSetUpdated', function() {
		vm.consolation = youtubeService.consolation;
	});

	function retrieveVideoSet() {
		youtubeService
			.retrieveVideoSet();
	};

	activate();

	function activate() {
		// console.log('swing miss controller');
	};
};