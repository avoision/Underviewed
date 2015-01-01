angular.module('uv', ['ngRoute', 'ngAnimate'])
	.config(function ($sceDelegateProvider, $locationProvider, $routeProvider) {
		$sceDelegateProvider.resourceUrlWhitelist([
        	'self',
        	'https://www.youtube.com/embed/**'
    	]);

        $locationProvider
            .html5Mode(true);

    	$routeProvider
            .when('/', {
                templateUrl: '/views/videoMain.html',
                resolve: {
                    clearVideo : function($route, youtubeService) {
                        youtubeService.clearCurrentVideo();
                        // youtubeService.retrieveVideoSet();
                    }
                }
            })

            // Videos Page
            .when('/about/', {
                templateUrl: '/views/about.html'
            })

    		.when('/videos/:videoId/', {
                templateUrl: '/views/videoMain.html',
                resolve: {
                    startup : function($route, youtubeService) {
                        youtubeService.retrieveVideoSet();
                    },                    
                    getVideo : function($route, youtubeService) {
                        var vidId = $route.current.params.videoId;
                        youtubeService.setCurrentVideo(vidId);                      
                    }
                }
    		})

            .otherwise({ redirectTo: '/' });
    })

    .run(function($route, youtubeService) {
        youtubeService.clearCurrentVideo();
        youtubeService.retrieveVideoSet();
    });