angular
	.module('uv')
	.factory('socialService', socialService);

function socialService ($rootScope) {
	// ===========================
	// Vars
	// ===========================
	var	urlFB = '',
		urlTW = '',
		urlGP = '',
		urlRD = '',
		urlYT = '',
		urlLK = '';

	// ===========================
	// Service Object
	// ===========================
	var service = {
		urlFB: '',
		urlTW: '',
		urlGP: '',
		urlRD: '',
		urlYT: '',
		urlLK: '',
		getSocialURLs: getSocialURLs,
		openSocial: openSocial
	};

	// Public Functions
	function getSocialURLs(id) {
		// var sharePrefix = 'http://underviewed.com/#/videos/';
		var sharePrefix = 'http%3A%2F%2Funderviewed.com%2Fvideos%2F';
		
		// YouTube
		service.urlFB = 'http://www.facebook.com/sharer/sharer.php?u=' + sharePrefix + id;

		// Twitter
		service.urlTW = 'http://twitter.com/home?status=I%20discovered%20this%20totally%20random%20video:%20' + sharePrefix + id + '%20%23underviewed';

		// Google Plus
		service.urlGP = 'http://plus.google.com/share?url=' + sharePrefix + id;

		// Reddit
		service.urlRD = 'http://www.reddit.com/submit?url=' + sharePrefix + id + '&title=Underviewed%20Video:%20';

		// YouTube
		service.urlYT = 'http://www.youtube.com/watch?v=' + id;

		// Link
		service.urlLK = 'http://underviewed.com/videos/' + id;
		
		$rootScope.$broadcast('socialUpdated');
	};

	function openSocial(url) {
		// console.log('open social. url is: ' + url);
		window.open(url, '_blank');
	};


	return service;
};




// http://www.facebook.com/sharer/sharer.php?u=http://www.youtube.com/watch?v=S_-QwtJFSJs

// http://twitter.com/home?status=
// Back%20to%20School,%20Back%20to%20Wha?!!!%20First-day%20style%20never%20looked%20like%20this.%20Check%20it%20out.%20%23BackToWha%20http://www.youtube.com/watch?v=S_-QwtJFSJs

// http://plus.google.com/share?url=http://www.youtube.com/watch?v=S_-QwtJFSJs

// http://www.reddit.com/submit?url=http://stackoverflow.com/questions/24823114/post-to-reddit-via-url&title=Post%20to%20Reddit%20via%20URL

// https://www.youtube.com/watch?v=C2TJPDlhGXA