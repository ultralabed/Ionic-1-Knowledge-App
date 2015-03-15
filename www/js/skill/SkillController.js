angular
	.module('starter')
	.controller('SkillController', SkillController)
	function SkillController($state) {
		var vm = this;
		vm.contents = [
			{title:"投資"},
			{title:"挑寡"},
			{title:"觀察力"},
			{title:"集中力"},
			{title:"毅力"},
			{title:"理財"},
			{title:"士氣"}
		];

	}