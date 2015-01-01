angular
	.module('uv')
	.controller('AlertController', AlertController);

function AlertController() {
	var vm = this;
	// vm.fileName = youtubeService.fileName;
	// vm.fileSource = youtubeService.fileSource;
	vm.showAlert = true;
	vm.setAlertLS = setAlertLS;

	function setAlertLS() {
		localStorage.setItem('closedAlert', 'yes');
	};

	activate();

	function activate() {
		// If Local Storage shows that the user has closed the alert button previously...
		if (localStorage.getItem('closedAlert') != null) {
			vm.showAlert = false;
		} else {
			vm.showAlert = true;
		};		
	};
};