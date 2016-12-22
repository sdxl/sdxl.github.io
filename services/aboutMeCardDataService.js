app.service("aboutMeCardDataService", function(){

	var cardData = {
		'en': {
			front:{
				text: "english",
				backgroundImageUrl: 'url("../assets/images/statueofliberty.jpg") left top / cover no-repeat'
			},
			back: {
				text:"Hi, thanks for visiting my site!\n"+
				"I'm currently a software engineer in San Francisco.\n" +
				"In addition to my Javascript expertise, I also have experience with iOS development.\n"+
				"Check back often as, I'll have more projects to show off as this site grows.\n"+
				"I'm fluent in French, English, Mandarin, Vietnamese and Cantonese and have studied Spanish and Japanese.\n" +
				"For fun, feel free to click around the surrounding panes for some multilingual awesomeness!",
				backgroundColor: "#C8CFC8",
			},
			initiallyFlipped: true
		},
		'zh':{
			front:{
				text: "chinese",
				backgroundImageUrl: 'url("../assets/images/greatwall.jpg") left top / cover no-repeat'
			},
			back: {
				text:"你好，谢谢来到这个网页!\n" + 
				"我是阮洪悦，一个住旧金山的软件工程师。看懂这部分的读者，大概也会英语，所以我会尽量介绍新的关于我的内容.\n" +
				"我是越南人，儿童的时候跟家人看了太多翻译成越语武侠电视剧，大学时期不得不找学中文的机会，完成小时侯看懂金庸先生名著 \“神雕侠侣\” 的梦想。\n"+
				"在耶鲁的时候，很好运能够在北京，台北两个城市留学总共近两年的时间，对我语言的发展有极大的帮助。这些天来，我在WalkMe工作日时用Angular，Node, 回家以后除了学外语以外，还用业余的时间编写iOS(Swift)的代码。\n"+
				"我好少有理由写中文，如果有什么饿瘪错字，什么语法的错误，请多多指点体谅",
				backgroundColor: "#C8CFC8"
			},
			initiallyFlipped: false
		},
		'vn':{
			front:{
				text: "vietnamese",
				backgroundImageUrl: 'url("../assets/images/huecastle.jpg") left top / cover no-repeat'
			},
			back: {
				text:"Cam on qui khach da toi website cua Hoang. Hoang la mot nguoi ky su phan mem lam viec tai San Francisco. " +
				"Tu khi nho o nha, moi ngay deu noi tieng viet nhung ma khong co hoi hoc viet, tu nhung nam dai hoc moi tu cam thay qua voi ly minh noi duoc ma doc va viet khong duoc, " +
				"nen ra thu vien tim sach hoc lay. O so di lam, Hoang viet bang ma voi"+
				"Javascript, Angular va Node ve nha rang tim gio hoc iOS va thiet ke app cho may iPhone cua Apple.",
				backgroundColor: "#C8CFC8"
			},
			initiallyFlipped: false
		},
		'fr':{
			front:{
				text: "french",
				backgroundImageUrl: 'url("../assets/images/eiffletower2.jpg") left top / cover no-repeat'
			},
			back: {
				text:"Bonjour!\n"+
				"Merci d'être venu ici, visiter mon site! Je m'appelle États-Unis quand j'étais très petit et, donc, je ne me souviens pas très grandes choses de la France." +
				"Effectivement, j'ai complètement oublié le français (on ne parlait que vietnamien à la maison) et c'est juste un petit peu avant l'université que j'ai " + 
				"commence à recupere mon français."+
				"Au boulot, à WalkMe ou j'écris de code en Javascript utilisant Angular et Node. À la maison, j'écris des app pour le iPhone avec Swift et XCode.",
				backgroundColor: "#C8CFC8"
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