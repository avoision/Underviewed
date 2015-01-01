angular
	.module('uv')
	.controller('ModalController', ModalController);

function ModalController($scope, $sce, youtubeService, socialService) {
	var vm = this;

	vm.currentVideoID = youtubeService.currentVideoID;
	vm.currentVideoViews = youtubeService.currentVideoViews;
	vm.currentVideoURL = youtubeService.currentVideoURL;
	vm.openSocial = socialService.openSocial;

	vm.rarityStart = youtubeService.rarityStart;
	vm.rarityDescription = youtubeService.rarityDescription;
	vm.modalClass = youtubeService.modalClass;

	vm.FB = socialService.urlFB;
	vm.TW = socialService.urlTW;
	vm.GP = socialService.urlGP;
	vm.RD = socialService.urlRD;
	vm.YT = socialService.urlYT;
	vm.LK = socialService.urlLK;

	vm.clearCurrentVideo = clearCurrentVideo;
	vm.escapeButton = escapeButton;

	$scope.$on('currentVideoUpdated', function() {
		vm.currentVideoID = youtubeService.currentVideoID;
		vm.currentVideoViews = youtubeService.currentVideoViews;
		vm.currentVideoURL = youtubeService.currentVideoURL;

		vm.rarityStart = youtubeService.rarityStart;
		vm.rarityDescription = youtubeService.rarityDescription;
		vm.modalClass = youtubeService.modalClass;

		angular.element(document.querySelector('#myModal')).modal('show');
	});

	$scope.$on('socialUpdated', function() {
		vm.FB = socialService.urlFB;
		vm.TW = socialService.urlTW;
		vm.GP = socialService.urlGP;
		vm.RD = socialService.urlRD;
		vm.YT = socialService.urlYT;
		vm.LK = socialService.urlLK;
	});

	function openSocial(url) {

		console.log('my url is: ' + url);

		socialService.openSocial(url);
	};


	function clearCurrentVideo() {
		vm.currentVideoURL = " ";
	};

	function escapeButton(e) {
		console.log('escape!');
		if (e.which === 27) {
			clearCurrentVideo();
		};
	};


	activate();

	function activate() {
		// console.log('modal controller');	
	};
};