app.service("aboutMeCardDataService", function(){

	var cardData = {
		'en': {
			front: {
				text:"Hi, thanks for visiting my site!\n"+
				"I'm currently a software engineer in San Francisco.\n" +
				"In addition to my Javascript expertise, I also have experience with iOS development.\n"+
				"Check back often as, I'll have more projects to show off as this site and the projects get built out.\n"+
				"I'm fluent in French, English, Mandarin, Vietnamese and Cantonese and have studied Spanish and Japanese.\n" +
				"For fun, feel free to click around the surrounding panes for some multinlingual awesomeness!",
				backgroundImageUrl: 'url("../assets/images/statueofliberty.jpg") left top / cover no-repeat'
			},
			back:{
				text: "english",
				backgroundColor: "grey",
			},
			initiallyFlipped: true
		},
		'zh':{
			front: {
				text:"chineseText",
				backgroundImageUrl: 'url("../assets/images/greatwall.jpg") left top / cover no-repeat'
			},
			back:{
				text: "chinese",
				backgroundColor: "grey"
			},
			initiallyFlipped: false
		},
		'vn':{
			front: {
				text:"vietText",
				backgroundImageUrl: 'url("../assets/images/huecastle.jpg") left top / cover no-repeat'
			},
			back:{
				text: "vietnamese",
				backgroundColor: "grey"
			},
			initiallyFlipped: false
		},
		'fr':{
			front: {
				text:"frenchText",
				backgroundImageUrl: 'url("../assets/images/eiffletower2.jpg") left top / cover no-repeat'
			},
			back:{
				text: "french",
				backgroundColor: "grey"
			},
			initiallyFlipped: false
		}
	}

	var getCardVersion = function(lang){
		return cardData[lang];
	};

	return{
		getCardVersion: getCardVersion
	}
})