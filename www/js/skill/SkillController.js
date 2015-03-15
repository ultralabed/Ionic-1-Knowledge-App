angular
	.module('starter')
	.controller('SkillController', SkillController)
	function SkillController($state) {
		var vm = this;
		vm.contents = [
			{title:"反應力", icon: "ion-ios-albums"},
			{title:"投資", icon: "ion-ios-filing"},
			{title:"挑寡", icon: "ion-social-freebsd-devil"},
			{title:"觀察力", icon: "ion-social-octocat"},
			{title:"集中力", icon: "ion-ios-flame"}
			// {title:"毅力", icon: ""},
			// {title:"理財", icon: ""},
			// {title:"士氣", icon: ""}
		];

	}