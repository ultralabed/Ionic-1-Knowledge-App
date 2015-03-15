angular
	.module('starter')
	.controller('HomeController', HomeController)
	function HomeController($state) {
		var vm = this;
		//vm.image = "/img/HomePage.jpg"
		
		vm.profileImage = "/img/profile.png";
		vm.friendImage = "/img/friend.png";
		vm.challengeImage = "/img/challenge.png";
		vm.bankImage = "/img/bank.png";
		vm.skillImage = "/img/skill.jpg";
		vm.profile = function() {
			console.log("profile clicked!!!")
		}

		vm.friend = function() {
			$state.go("friend")
			console.log("friend clicked!!!")
		}

		vm.challenge = function() {
			$state.go("challenge")
			console.log("challenge clicked!!!")
		}

		vm.bank = function() {
			console.log("bank clicked!!!")
		}
		
		vm.skill = function() {
			$state.go("skill")
			console.log("skill clicked!!!")
		}
	}