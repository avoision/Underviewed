angular
	.module('uv')
	.controller('HeaderController', HeaderController);

function HeaderController(youtubeService, $scope) {
	var vm = this;
	vm.fileName = youtubeService.fileName;
	vm.fileSource = youtubeService.fileSource;
	vm.retrieveVideoSet = retrieveVideoSet;
	vm.title = '';

	$scope.$on('videoSetUpdated', function() {
		vm.fileName = youtubeService.fileName;
		vm.fileSource = youtubeService.fileSource;
	});

	function retrieveVideoSet() {
		youtubeService
			.retrieveVideoSet();		
	};

	activate();


	function activate() {
		vm.title = '';
		// console.log('header controller');
	};
};