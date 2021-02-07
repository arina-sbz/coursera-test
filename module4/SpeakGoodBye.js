
(function(window){
	var byeSpeaker ={};
	var speakWord = "Good Bye";
	byeSpeaker.speak= function(){
		console.log(speakWord+" " + names[i]);
	}

	window.byeSpeaker = byeSpeaker;
})(window);