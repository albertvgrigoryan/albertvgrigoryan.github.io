// Algrapps JS actions/ by Albert V. Grigoryan, 2014/
//INITIAL
//Dynamic heights calculations.
dynamicheights();
//
//MOUSE/TOUCH actions on algrapp buttons.
//Mousedown.
$('.about').on('vmousedown',aboutmdown);
$('.screenshot').on('vmousedown',screenshotmdown);
$('.start').on('vmousedown',startmdown);
//
//RESIZE action
//Update dynamic heights.
$(window).resize(function(){
	dynamicheights();
	dynamicheightsupdate();
});
//GRAPHICS update
setgraphicsfolder();
