angular
	.module('starter')
	.controller('StartController', StartController)
	function StartController($state, $timeout) {
		var vm = this;
		vm.image = "img/StartPage.jpg"
		$timeout(goToHome, 3000);
		function goToHome(){
			$state.go('home');
		}

	}