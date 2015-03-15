angular
	.module('starter')
	.controller('SkillController', SkillController)
	function SkillController($state) {
		var vm = this;
		vm.contents = [
			{title:"反應力", icon: "ion-ios-albums", detail: {descrpt: "回合得分增加＋", gain: "5%"}},
			{title:"投資", icon: "ion-ios-filing", detail: {descrpt: "銀行金幣上限＋", gain: "100%"}},
			{title:"挑寡", icon: "ion-social-freebsd-devil", detail: {descrpt: "對話選項＋", gain: "3%"}},
			{title:"觀察力", icon: "ion-social-octocat", detail: {descrpt: "比賽經驗值增加＋", gain: "5%"}},
			{title:"集中力", icon: "ion-ios-flame", detail: {descrpt: "比賽獎金增加＋", gain: "5%"}}
			// {title:"毅力", icon: ""},
			// {title:"理財", icon: ""},
			// {title:"士氣", icon: ""}
		];

	}