angular
	.module('uv')
	.directive('videoSearchTerm', videoSearchTerm);

function videoSearchTerm() {
	var directive = {
		restrict: 'A',
		replace: true,
		template: [
		    '<div class=\"videoSearchTerm\" ng-hide=\"header.fileName == \'\'\">',
		    '<span class=\"videoFileSource\">{{ header.fileSource }} </span>',
		    '<span class=\"videoFileName\">{{ header.fileName }}</span>',		    
		    '{{ header.title }}',
		    '</div>'
		].join('')
	};

	return directive;
}