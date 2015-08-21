angular
	.module('uv')
	.factory('youtubeService', youtubeService);

function youtubeService ($http, $q, $rootScope, quoteService, socialService) {
	// ===========================
	// Vars
	// ===========================
	var	currentVideoSet = [ ],
		fullURL = '',
		fullDetailsURL = '',
		query = '',
		fileSource = '',
		prefix = 'https://www.googleapis.com/youtube/v3/',
		searchType = ''
		apikey = 'AIzaSyClCC8p1WSOHtE5cNEuWbiD2P4ncgQQuWA' ,
		type = 'video',
		maxResults = 20,
		videoDuration = 'short',
		searchPart = 'snippet',
		videosPart = 'statistics',
		searchFields = 'items(id(videoId)%2Csnippet(thumbnails(medium)))',
		videosFields = 'items(id%2Cstatistics(viewCount))',
		rarityStart = '',
		rarityDescription = '',
		currentConsolation = '',
		consolation = '';

	// ===========================
	// YouTube Search
	// ===========================
	var buildYTURL = function() {
		searchType = 'search';

		fullURL = prefix 
			+ searchType
			+ '?' 
			+ 'key=' + apikey
			+ '&type=' + type
			+ '&videoDuration=' + videoDuration
			+ '&q=' + query
			+ '&part=' + searchPart
			+ '&fields=' + searchFields
			+ '&maxResults=' + maxResults
			+ '&safeSearch=strict' // moderate, none, strict 
			+ '&order=' + 'date'; // viewCount or date
	};


	var setFileSource = function(text) {
		fileSource = text;
	};


	var randomVid = function() {

		// Generate random numeric filename
		var randomNumericFilename = function(totalDigits, max) {
			var largestNumber = '';

			if (max !== undefined) {
				largestNumber = max;
			} else {
				for (var i = 0; i < totalDigits; i++) {
					largestNumber += '9';
				};				
			}

			var	rNum = Math.ceil(Math.random() * largestNumber),
				rZeroes = totalDigits - rNum.toString().length,
				rZeroString = '';

			for (var i = 0; i < rZeroes; i++) {
				rZeroString += "0";
			};

			var randomFilename = rZeroString + rNum;
			return randomFilename.toString();
		};


		switch (Math.ceil(Math.random() * 25)) {
			case 1:
				// iPhone IMG_1234.MOV
				var randomVid = 'IMG_' + randomNumericFilename(4) + '.MOV';
				setFileSource('iPhone');
				break;
			case 2:
				// Canon MVI_1234.MOV
				var randomVid = 'MVI_' + randomNumericFilename(4) + '.MOV';
				setFileSource('Canon');
				break;
			case 3:
				// Canon MVI_1234.AVI			
				var randomVid = 'MVI_' + randomNumericFilename(4) + '.AVI';
				setFileSource('Canon');
				break;
			case 4: 
				// Samsung camera: 20131020_123140.mp4
				// var randomVid = "20021019_";

				// AND .mp4?
				var randomVid = generateRandomDate(2002) + '_';
				setFileSource('Samsung');
				break;
			case 5: 
				// Google camera: VID_20140702_192431.mp4
				var randomVid = 'VID_' + generateRandomDate(2010);
				setFileSource('Android');
				break;
			case 6:
				// Nikon DSC_1234.MOV
				var randomVid = 'DSC_' + randomNumericFilename(4) + '.MOV';
				setFileSource('Nikon');
				break;
			case 7: 
				// Unknown. Sony? 12345.MTS 
				// Must remain below 1000 in order to show results
				var randomVid = '00' + randomNumericFilename(3) + '.MTS';
				setFileSource('Sony');
			case 8:
				// Canon MVI_1234.MP4;
				var randomVid = 'MVI_' + randomNumericFilename(4) + '.MP4';
				setFileSource('Canon');
				break;
			case 9:
				// Samsung SAM_1234.MP4
				// Stay below 2000 for best results
				var randomVid = 'SAM_' + randomNumericFilename(4, 2000) + '.MP4';
				setFileSource('Samsung');
				break;
			case 10:
				// Go Pro GOPR1234.MP4
				// Stay below 2000 for best results
				var randomVid = 'GOPR' + randomNumericFilename(4, 2000) + '.MP4';
				setFileSource('GoPro');
				break;
			case 11:
			// Sony DSC12345.MTS
				var randomVid = 'DSC' + randomNumericFilename(5, 200) + '.MTS';
				setFileSource('Sony');
				break;
			case 12:
			// Sony MOV_1234.mp4
				var randomVid = 'MOV_' + randomNumericFilename(4, 1200) + '.mp4';
				setFileSource('Sony');
				break;
			case 13:
			// Sony 1234.mts
				var randomVid = '0' + randomNumericFilename(4, 1200) + '.mts';
				setFileSource('Sony');
				break;
			case 14:
			// Sony 1234.mts
				var randomVid = randomNumericFilename(4, 3000) + '.mts';
				setFileSource('Sony');
				break;
			case 15:
			// Nokia WP_20140504_14_22_41_Pro.mp4
				var randomVid = 'WP_' + generateRandomDate(2012) + '_';		
				setFileSource('Nokia');
				break;
			case 16:
			// Pentax IMGP1234.MOV
				var randomVid = 'IMG' + randomNumericFilename(4) + '.MOV';
				setFileSource('Pentax');
				break;
			case 17:
			// Mobius REC_1234.MOV
				var randomVid = 'REC' + randomNumericFilename(4, 40) + '.MOV';
				setFileSource('Mobius');
				break;
			case 18:
			// Nikon DSCN1234.MOV
				var randomVid = 'DSCN' + randomNumericFilename(4) + '.MOV';
				setFileSource('Nikon');
				break;
			case 19:
			// Nikon 013.mov
			// Maybe Skip?
				var randomVid = randomNumericFilename(4) + '.mov';
				setFileSource('Nikon');
				break;
			case 20:
			// LG CAM12345.mp4
				var randomVid = 'CAM' + randomNumericFilename(5, 2000) + '.MP4';
				setFileSource('LG');
				break;
			case 21:
			// Keychain Cam MINI1234.MOV
				var randomVid = 'MINI' + randomNumericFilename(4, 100) + '.MOV';
				setFileSource('Keychain Cam');
				break;
			case 22:
				// HTC VIDEO1234.MP4
				var randomVid = 'VIDEO' + randomNumericFilename(4, 4000) + '.MOV';
				setFileSource('HTC');
				break;			
			case 23:
				// Fujifilm DSCF1234.MOV
				var randomVid = 'DSCF' + randomNumericFilename(4) + '.MOV';
				setFileSource('Fujifilm');
				break;
			case 24:
				// Misc untitled.xxx
				var extArray = ['jpg', 'gif', 'swf', 'mov', 'avi', 'mpg', 'flv', 'mkv', 'webm', 'qt', 'mpeg', 'mp4', 'wmv', 'rm', 'asf', 'm4v', 'm2v', '3gp', '3g2', 'mxf'];

				var rnum = Math.ceil(Math.random() * extArray.length) - 1;
				var coinFlip = Math.ceil(Math.random() * 100);
				if ((coinFlip % 2) == 0) {
					var title = "untitled";
				} else {
					var title = "test";
				};

				var randomVid = title + '.' + extArray[rnum];
				
				if (rnum == 0) {
					setFileSource('JPG? WHY?');
				} else {
					setFileSource('Miscellaneous');
				};
				break;
			case 25:
				// QuickTime Movie 1.mov
				var rnum = Math.ceil(Math.random() * 1000);
				var randomVid = 'Movie ' + rnum + '.mov';
				setFileSource('QuickTime');
				break;
			default:
				// Go Pro GOPR1234.MP4
				// Stay below 2000 for best results
				var randomVid = 'GOPR' + randomNumericFilename(4, 2000) + '.MP4';
				setFileSource('GoPro');
				break;
		};
		
		return randomVid;
	};

	var generateRandomDate = function(startYear) {
		var today = new Date();
		var thisYear = today.getFullYear();

		var randomYear = Math.floor(Math.random() * ((thisYear - startYear) + 1) + startYear);
		var randomMonth = Math.floor(Math.random() * ((13 - 1) + 1) + 1);
		var totalDays = new Date(randomYear, randomMonth, 0).getDate();
		var randomDay = Math.floor(Math.random() * ((totalDays - 1) + 1) + 1);

		if (randomMonth < 10) {
			randomMonth = "0" + randomMonth;
		};

		if (randomDay < 10) {
			randomDay = "0" + randomDay;
		}

		if (randomMonth == 13) {
			randomMonth = 12;
		}

		// console.log('randomYear: ' + randomYear);
		// console.log('randomMonth: ' + randomMonth);
		// console.log('totalDays: ' + totalDays);
		// console.log('randomDay: ' + randomDay);

		return randomYear.toString() + randomMonth.toString() + randomDay.toString();
	};


	var generateQuery = function(queryInput) {
		query = randomVid();
	};

	// ===========================
	// Current Video + Details
	// ===========================
	var buildYTDetailsURL = function(id) {
		searchType = 'videos'

		fullDetailsURL = prefix
			+ searchType
			+ '?id=' + id
			+ '&key=' + apikey
			+ '&part=' + videosPart
			+ '&fields=' + videosFields;
	}

	function retrieveVideoDetails(id) {
		console.log('id: ' + id);

		buildYTDetailsURL(id);
		return $http.get(fullDetailsURL).then(
			function(response) {
				var responseData = response.data.items[0];
				setCurrentVideoDetails(responseData);			
			});
	};

	function setCurrentVideoDetails(data) {
		// console.log('my data:');
		// console.log(data);

		service.currentVideoID = data.id;
		service.currentVideoViews = data.statistics.viewCount;
		service.currentVideoURL = 'https://www.youtube.com/embed/' + data.id + '?autoplay=1&rel=0&showinfo=0';

		checkRarity(parseInt(data.statistics.viewCount));

		// console.log(service.currentVideoID);
		// console.log(service.currentVideoViews);

		// console.log(service.rarityStart);
		// console.log(service.rarityDescription);

		// console.log('===========================');

		$rootScope.$broadcast('currentVideoUpdated');
	};


	// ===========================
	// Rarity 
	// ===========================
	function checkRarity(viewNum) {
		if (viewNum === 0) {
			service.rarityStart = 'Unique!';
			service.rarityDescription = 'Wow - no one else has ever seen this video! Not even once!';
			service.modalClass="alert-success";
			return;
		}else if (viewNum === 1) {
			service.rarityStart = 'Singular!';
			service.rarityDescription = 'Wow, the only other person who\'s seen this is the person who recorded it!';
			service.modalClass="alert-success";
			return;
		} else if ((viewNum > 0) && (viewNum < 10)) {
			service.rarityStart = 'Very rare video!';
			service.rarityDescription = 'There are less than 10 views. Nice find!';
			service.modalClass="alert-success";
			return;
		} else if ((viewNum >= 10) && (viewNum < 20)) {
			service.rarityStart = 'Rare video!';
			service.rarityDescription = 'Less than 20 views. It could be anything.';
			service.modalClass="alert-info";
			return;
		} else if ((viewNum >= 20) && (viewNum < 50)) {
			service.rarityStart = 'Undiscovered video!';
			service.rarityDescription = 'This is the viral sweet spot, somewhere between 20 - 50 views.';
			service.modalClass="alert-info";
			return;
		} else if ((viewNum >= 50) && (viewNum < 100)) {
			service.rarityStart = 'Lesser known video.';
			service.rarityDescription = 'Quietly anonymous, but still under 100 views.';
			service.modalClass="alert-info";			
		} else if ((viewNum >= 100) && (viewNum < 200)) {
			service.rarityStart = 'On the cusp.';
			service.rarityDescription = 'Between 100 - 200 views. Looks like this may have been passed around in the family newsletter.';
			service.modalClass="alert-warning";
			return;
		} else if ((viewNum >= 200) && (viewNum < 300)) {
			service.rarityStart = 'Normal video.';
			service.rarityDescription = 'Between 200 - 300 views. A lot of people have seen this already, but perhaps it\'s worth sharing?';
			service.modalClass="alert-warning";
			return;
		} else if (viewNum >= 300) {
			service.rarityStart = 'Commonplace video.';
			service.rarityDescription = 'At over 300 views, this video has definitely been seen. But it\'s not viral... yet.';
			service.modalClass="alert-danger";
			return;
		}
	};

	// ===========================
	// Swing and a Miss // Consolation
	// ===========================
	var consolationList = [
		'Swing and a miss.',
		'It happens.', 
		'Don\'t stop believin\'.',
		'Eyes on the prize.',
		'You\'ll get there.',
		'Don\'t get discouraged.'
	],
		currentConsolation = Math.floor(Math.random() * consolationList.length);


	function retrieveConsolation() {
		service.consolation = consolationList[currentConsolation];
		currentConsolation ++;

		if (currentConsolation > (consolationList.length - 1)) {
			currentConsolation = 0;
		};
	};



	// ===========================
	// Service Object
	// ===========================
	var service = {
		currentVideoSet: null,
		retrieveVideoSet: retrieveVideoSet,
		setCurrentVideo: setCurrentVideo,
		clearCurrentVideo: clearCurrentVideo,
		currentVideoID: '',
		currentVideoURL: '',
		rarityStart: '',
		rarityDescription: '',
		modalClass: '',
		currentVideoViews: '',
		fileName: '',
		fileSource: '',
		consolation: consolation,
		empty: 'false'
	};


	// Public Functions
	function retrieveVideoSet() {
		generateQuery();
		service.fileName = query;
		service.fileSource = fileSource;
		buildYTURL();
		$rootScope.$broadcast('retrievingVideos');
		
		return $http.get(fullURL).then(
			function(response) {		
				service.currentVideoSet = response.data.items;

				if (response.data.items.length > 0) {
					service.empty = false;
				} else {
					service.empty = true;
					retrieveConsolation();
				};
				// console.log('retrieve video response');
				// console.log(response);
				// console.log(response.data.items.length);
				// console.log(service.empty);
				// console.log('---------');

				$rootScope.$broadcast('videoSetUpdated');
			});
	};

	function setCurrentVideo(id) {
		retrieveVideoDetails(id);
		socialService.getSocialURLs(id);
	};

	function clearCurrentVideo() {
		service.currentVideoURL = "";
		$rootScope.$broadcast('currentVideoUpdated');
	};

	return service;
};








