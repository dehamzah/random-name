var LOOP_TIMES = 100; // How much times will iterate
var DELAY = 100; // default delay time
var DELAY_MULTIPLIER = 5; // delay multiplier for last item
var LAST_ITEM = 13; // last number to add more delay
var AUDIO_TICK = new Audio('assets/audio/pick_1.mp3');
var AUDIO_FINISH = new Audio('assets/audio/kids-hooray.mp3');

var INDEX_START = 0;

function start() {
	_hideElement("btn");
	loop();	
}

function loop() {
	var delay = DELAY;
	if (INDEX_START > LOOP_TIMES - LAST_ITEM) {
		delay = DELAY * DELAY_MULTIPLIER;
		DELAY_MULTIPLIER++;
	}
	console.log('delay', delay)
	setTimeout(function() {
		var picked = NAMES[Math.floor(Math.random() * NAMES.length)]
		console.log(picked);
		_setName(picked);
		AUDIO_TICK.play();
		INDEX_START++;
		if (INDEX_START < LOOP_TIMES) {
			loop();
		}

		if (INDEX_START == LOOP_TIMES) {
			AUDIO_FINISH.play();
			_addClass(".primary-text", "animated infinite tada");
		}
	}, delay);
}

function _setName(name) {
	var targetDom = document.getElementById("target");
	targetDom.innerHTML = name;
}

function _hideElement(id) {
	var el = document.getElementById(id);
	el.style.display = 'none';
}

function _showElement(id) {
	var el = document.getElementById(id);
	el.style.display = 'inline-block';
}

function _addClass(targetEl, classes) {
	var el = document.querySelector(targetEl);
	el.className += " " + classes; 
}



