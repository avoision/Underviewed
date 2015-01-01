angular
	.module('uv')
	.controller('QuoteController', QuoteController);

function QuoteController(quoteService, youtubeService, $scope) {
	var vm = this;
	
	vm.quote = quoteService.quote;
	vm.author = quoteService.author;
	vm.url = quoteService.url;
	vm.getRandomQuote = quoteService.getRandomQuote;
	vm.empty = youtubeService.empty;
	vm.thumbsReady = false;

	$scope.$on('retrievingVideos', function() {
		vm.thumbsReady = false;
	})


	$scope.$on('videoSetUpdated', function() {
		vm.currentVideoSet = youtubeService.currentVideoSet;
		vm.empty = youtubeService.empty;
		if (vm.empty) {
			vm.thumbsReady = false;
			// Do nothing
		} else {
			determineVisibility(vm);
		};
	});	

	$scope.$on('quoteUpdated', function() {
		vm.quote = quoteService.quote;
		vm.author = quoteService.author;
		vm.url = quoteService.url;

		// console.log(vm.quote);
		// console.log(vm.author);
		// console.log(vm.url);
		// console.log('quote updated');
	});

	function determineVisibility(obj) {
		var thumbInterval = setInterval(checkThumbsLoaded, 100);

		function checkThumbsLoaded() {
			var totalThumbsShown = $('.thmbShow').length;
			var totalThumbs = youtubeService.currentVideoSet.length;

			// console.log(totalThumbsShown + ' / ' + totalThumbs);

			if (totalThumbsShown == totalThumbs) {
				obj.thumbsReady = true;
				obj.getRandomQuote();
				$scope.$apply();
				clearInterval(thumbInterval);
			};
		};
	};


	activate();

	function activate() {
		// console.log('quote controller');
	};
};