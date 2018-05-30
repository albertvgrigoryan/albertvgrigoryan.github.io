// Algrapps JS actions support/ by Albert V. Grigoryan, 2014/
//BUTTON ACTIVE AND DYNAMIC HEIGHT PROPERTIES
//Defining arrays.
var graphicsfolder='graphics_s' //Initially sets main graphics folder to the DPI=1 view.
var aboutactive=[];
var screenshotactive=[];
var infoboardgenheight=[];
var screenshotcontheight=[];
//
var algrappname=[];//Needs to be updated with every new app.
algrappname.push('typearmenian');
algrappname.push('rotaryphone');

//Assigning values initially.
$('.appcont').each(function(index, element) {
		aboutactive.push(0);
    	screenshotactive.push(0);
		infoboardgenheight.push(2);
		screenshotcontheight.push(2);
});
//Dynamic heights calculation.
function dynamicheights(){
	$('.appcont').each(function(index, element) {
		var infoheight=0;
		$(this).find('.infoboardgen').children('p').each(function(index, element) {//the requried height for general info to be visible.
			infoheight+=$(element).height()+16;//the padding value is added.
    	});
		screenshotcontheight[index]=Math.min($('body').width(),320);
		infoboardgenheight[index]=infoheight;
	});
};
//Dynamic heights update.
function dynamicheightsupdate(){//dynamically changes height of active infoboards, when resized.
	$('.appcont').each(function(index, element) {
		if(aboutactive[index]==1){
		$(this).find('.infoboardgen').height(infoboardgenheight[index]);
		};
		if(screenshotactive[index]==1){
        $(this).find('.screenshotcont').height(screenshotcontheight[index]);
		};
    });
}
//Dynamic graphics amendments.
function setgraphicsfolder(){//sets new value for "graphicsfolder" global variable, if "window.devicePixelRation" returned value is greater than 1.
	if (window.devicePixelRatio>1 && window.devicePixelRatio<=1.5){//medium dpr; e.g. sony xperia sola, etc.
		graphicsfolder='graphics_m';
		$('img').each(function(index, element) {
            var currsrc=$(element).attr('src');
			$(element).attr('src',currsrc.replace('graphics_s','graphics_m'));
        });	
	}
	else if (window.devicePixelRatio>1.5){//higher dpr; e.g. retina displays, etc.
		graphicsfolder='graphics_l';
		$('img').each(function(index, element) {
            var currsrc=$(element).attr('src');
			$(element).attr('src',currsrc.replace('graphics_s','graphics_l'));
        });
	};
};
//MOUSEDOWN ON BUTTONS.
//about
function aboutmdown() {
	var theappnum=$(this).parents('.appcont').attr('id').slice(7);
	function animatedshow(){
		$('#algrapp'+theappnum).find('.infoboardgen').animate({height:infoboardgenheight[theappnum]},800,'easeInSine');
	};
	if (aboutactive[theappnum]==0){
		$(this).children('img').attr('src',graphicsfolder+'/algrapp'+theappnum+'/button_about_1.png');
		if (screenshotactive[theappnum]==1){
			$('#algrapp'+theappnum).find('.screenshot').children('img').attr('src',graphicsfolder+'/algrapp'+theappnum+'/button_screenshot_0.png');
			$('#algrapp'+theappnum).find('.screenshotcont').animate({height:"2px"},800,'easeOutSine',animatedshow);
			screenshotactive[theappnum]=0;
		}
		else {
			animatedshow();
		};
		aboutactive[theappnum]=1;
	}
	else {
		$(this).children('img').attr('src',graphicsfolder+'/algrapp'+theappnum+'/button_about_0.png');
		$('#algrapp'+theappnum).find('.infoboardgen').animate({height:'2px'},800,'easeOutSine');
		aboutactive[theappnum]=0;
	};
	
};
//screenshot
function screenshotmdown() {
	var theappnum=$(this).parents('.appcont').attr('id').slice(7);
	function animatedshow(){
		$('#algrapp'+theappnum).find('.screenshotcont').animate({height:screenshotcontheight[theappnum]},800,'easeInSine');
	};
	if (screenshotactive[theappnum]==0){
		$(this).children('img').attr('src',graphicsfolder+'/algrapp'+theappnum+'/button_screenshot_1.png');
		if(aboutactive[theappnum]==1){
			$('#algrapp'+theappnum).find('.about').children('img').attr('src',graphicsfolder+'/algrapp'+theappnum+'/button_about_0.png');
			$('#algrapp'+theappnum).find('.infoboardgen').animate({height:"2px"},800,'easeOutSine',animatedshow);
			aboutactive[theappnum]=0;
		}
		else {
			animatedshow();
		};
		screenshotactive[theappnum]=1;
	}
	else {
		$(this).children('img').attr('src',graphicsfolder+'/algrapp'+theappnum+'/button_screenshot_0.png');
		$('#algrapp'+theappnum).find('.screenshotcont').animate({height:"2px"},800,'easeOutSine');
		screenshotactive[theappnum]=0;
	};
};
//start
function startmdown() {
	var theappnum=$(this).parents('.appcont').attr('id').slice(7);
	window.open(algrappname[theappnum]+'/index.html');
};
//