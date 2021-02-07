
(function(window){
	var helloSpeaker ={};
	var speakWord = "Hello";
	helloSpeaker.speak= function(){
		console.log(speakWord+" " + names[i] );
	}

	window.helloSpeaker = helloSpeaker;
})(window);