angular
	.module('starter')
	.controller('HomeController', HomeController)
	function HomeController($state, $scope, $ionicModal, $ionicSideMenuDelegate, $ionicSlideBoxDelegate ) {
		var vm = this;
		//vm.image = "/img/HomePage.jpg"
		
		vm.profileImage = "/img/profile.png";
		vm.friendImage = "/img/friend.png";
		vm.challengeImage = "/img/challenge.png";
		vm.bankImage = "/img/bank.png";
		vm.skillImage = "/img/skill.jpg";
		vm.userImage= "/img/userImage.jpg";
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

 	$ionicModal.fromTemplateUrl('js/home/ProfilePage.html', {
        scope: $scope,
        animation: 'slide-in-up'
      }).then(function(modal) {
        $scope.modal = modal;
      });

      $scope.openModal = function() {
        $scope.modal.show();
        // Important: This line is needed to update the current ion-slide's width
        // Try commenting this line, click the button and see what happens
        $ionicSlideBoxDelegate.update();
      };

      $scope.closeModal = function() {
        $scope.modal.hide();
      };

      // Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function() {
        $scope.modal.remove();
      });
      // Execute action on hide modal
      $scope.$on('modal.hide', function() {
        // Execute action
      });
      // Execute action on remove modal
      $scope.$on('modal.removed', function() {
        // Execute action
      });
      $scope.$on('modal.shown', function() {
        console.log('Modal is shown!');
      });

      // Call this functions if you need to manually control the slides
	}