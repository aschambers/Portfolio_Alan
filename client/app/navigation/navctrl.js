( function(angular) {
	angular
		.module('portfolioApp')
		.controller('navCtrl', navCtrl);

	function navCtrl($rootScope, $scope, $location) {
		var vm = this;

		vm.currentUrl = currentUrl;
		vm.showLinks = showLinks;
		vm.mobileScreen = false;
		vm.openMenu = false;

		// Autoscroll to top on stateChange
		$rootScope.$on('$stateChangeSuccess', function() {
		   document.body.scrollTop = document.documentElement.scrollTop = 0;
		});

		// Function implementations
		function currentUrl(urlLocation) {
			return urlLocation === $location.url();
		}

		function showLinks() {
			if (vm.mobileScreen === true && vm.openMenu === true) {
				vm.mobileScreen = false;
				vm.openMenu = false;
			} else {
				vm.openMenu = true;
				vm.mobileScreen = true;
			}
		}
	}

} )(angular);