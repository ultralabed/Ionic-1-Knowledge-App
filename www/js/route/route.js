angular
	.module('starter')
	.config(ConfigCtrl)

	function ConfigCtrl($stateProvider, $urlRouterProvider) {
		$stateProvider

		// setup an abstract state for the tabs directive
		.state('start', {
			url: '/start',
			templateUrl: 'js/layout/StartPage.html',
			controller: 'StartController as start'
		})

		.state('home', {
			url: '/home',
			templateUrl: 'js/home/HomePage.html',
			controller: 'HomeController as home'
		})

		.state('friend', {
			url: '/friend',
			templateUrl: 'js/friend/FriendPage.html',
			controller: 'FriendController as friend'
		})

		.state('challenge', {
			url: '/challenge',
			templateUrl: 'js/Challenge/ChallengePage.html',
			controller: 'ChallengeController as challenge'
		})

		.state('skill', {
			url: '/skill',
			templateUrl: 'js/skill/skillPage.html',
			controller: 'SkillController as skill'
		})		

		 $urlRouterProvider.otherwise('/start');
	}