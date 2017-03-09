( function(angular) {
	angular
		.module('portfolioApp')
		.config(routes);

	function routes($stateProvider, $urlRouterProvider, $compileProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'partials/home.html',
				controller: 'homeCtrl',
				controllerAs: 'vm'
			})
			.state('portfolio', {
				url: '/portfolio',
				templateUrl: 'partials/gallery.html',
				controller: 'galleryCtrl',
				controllerAs: 'vm'
			})
			.state('tech', {
				url: '/tech',
				templateUrl: 'partials/tech.html',
				controller: 'techCtrl',
				controllerAs: 'vm'
			});

		$compileProvider.debugInfoEnabled(false);
	}

} )(angular);