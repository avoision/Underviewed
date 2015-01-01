angular
	.module('uv')
	.controller('NavController', NavController);

function NavController($scope, $location) {

	var vm = this;
	vm.checkActive = checkActive;

	function checkActive(myDirectory) {
		// console.log('function called');
		// This function gets called a lot. A LOT. Refactor, or ok?
		if (myDirectory === $location.path()) {
			return true;
		} else {
			return false;
		};		
	};

	activate();


	function activate() {
		// console.log('nav controller');
	};
};