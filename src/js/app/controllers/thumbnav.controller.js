angular
	.module('uv')
	.controller('ThumbnavController', ThumbnavController);

function ThumbnavController(youtubeService, $scope) {
	var vm = this;

	vm.currentVideoSet = youtubeService.currentVideoSet;
	vm.retrieveVideoSet = retrieveVideoSet;
	vm.setCurrentVideo = setCurrentVideo;
	vm.empty = youtubeService.empty;

	$scope.$on('videoSetUpdated', function() {
		vm.currentVideoSet = youtubeService.currentVideoSet;
		vm.empty = youtubeService.empty;
	});

	function retrieveVideoSet() {
		youtubeService
			.retrieveVideoSet();
	};

	function setCurrentVideo(id) {
		youtubeService
			.setCurrentVideo(id);
	};

	activate();

	function activate() {
		// console.log('thumbnav controller');
	};
};