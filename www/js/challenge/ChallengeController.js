angular
	.module('starter')
	.controller('ChallengeController', ChallengeController)
	function ChallengeController($state) {
		var vm = this;
		vm.contents= [
		{title: "台北", entFeed: "25", round : "4", time : "10", src: ""},
		{title: "京都", entFeed: "100", round : "5", time : "10", src: ""},
		{title: "巴黎", entFeed: "400", round : "5", time : "8", src: ""},
		{title: "曼谷", entFeed: "1500", round : "5", time : "5", src: ""},
		{title: "柏林", entFeed: "5000", round : "6", time : "10", src: ""},
		{title: "上海", entFeed: "20000", round : "6", time : "8", src: ""},
		{title: "東京", entFeed: "80000", round : "6", time : "5", src: ""},
		];
	}