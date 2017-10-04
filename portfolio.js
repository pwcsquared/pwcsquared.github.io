$(document).ready(function(){
	$(".navBtn").on('click', function (e) {
		var navTo = $(this).attr("href");
		e.preventDefault();
		
		$('html, body').animate({
			scrollTop: $(navTo).offset().top
		}, 500);


		//change focus to first link inside navTo div if keyboard was used
		if(e.originalEvent.screenX === 0 && e.originalEvent.screenY === 0){
			//click was triggered by pressing enter on focused element
			if($(navTo).find("a")[0]){
				$(navTo).find("a")[0].focus();
			}
		}
	});
});
