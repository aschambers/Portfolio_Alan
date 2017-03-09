( function(angular) {
	angular
		.module('portfolioApp')
		.controller('techCtrl', techCtrl);

	function techCtrl($scope) {
		var vm = this;

		vm.setRepo = setRepo;
		vm.currentRepo = '';

		function setRepo(box) {
			if (box === vm.currentRepo) {
				vm.currentRepo = '';
			}
			else {
				vm.currentRepo = box;
			}
		}
	}
} )(angular);