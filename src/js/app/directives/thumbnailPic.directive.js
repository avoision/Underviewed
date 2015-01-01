angular
	.module('uv')
	.directive('thumbnailPic', thumbnailPic);

function thumbnailPic() {
	var directive = {
		restrict: 'A',
		replace: true,
		template: [
			'<div data-toggle=\"modal\" data-target=\"#myModal\" class=\"col-lg-3 col-md-4 col-xs-6 thmb\" ng-click=\"thumbnav.setCurrentVideo( vid.id.videoId )\">',
			'<div class=\"thmbWrapper\">',
			'<img class=\"thmbHover\"src=\"img/playButton.png\" />',
			'<img class=\"thmbVid\" ng-src="{{ vid.snippet.thumbnails.medium.url }}" />',
			'</div>',
			'</div>'
		].join(''),
		link: function($scope, element, attrs) {
			element.find('.thmbVid')
				.bind('load', function() {
					element.addClass('thmbShow');
				});
				// .bind('error', function() {
				// 	console.log('error!!');
				// 	element.find('thmbVid').attr('src', '/img/error.png')
				// });
		}
	};
	


	return directive;
}