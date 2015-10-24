$(document).ready(function() {
	


	$('#popup-button').on('click', function(event) {

		
		var bPopup=$('#add-proj').bPopup({
			follow: [false, false],
			speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack',
	    	onCLose: function(){
	    		$(this).find('.add-proj-form').trigger("reset");
	    		$(this).find('input,textarea').trigger('hideTooltip');
	    	}
		});
		
		$('.close-button').on('click',  function() {
			bPopup.close();
		});
	});


});