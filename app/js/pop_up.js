var popUp = (function(){

	var _popUpOpen = function(){

		var bPopup = $('#add-proj').bPopup({
			follow: [false, false],
			speed: 650,
            transition: 'slideIn',
	    	transitionClose: 'slideBack',
	    	onCLose: function(){
	    		$(this).find('.add-proj-form').trigger('reset');
	    		$(this).find('input,textarea').trigger('hideTooltip');
	    	}
	    });
	};

	var _popUpCLose = function(){
		var bPopup = $('#add-proj').bPopup({
			speed: 650,
			transitionClose: 'slideBack'
		});

		$('.add-proj-form').trigger('reset')
    	.find('.filename').removeClass('filename_loaded').text('Загрузите изображение');

   		bPopup.close();
	};

	var _setUpListeners = function(){
		$('#popup-button').on('click', _popUpOpen);
		$('.close-button').on('click', _popUpCLose);
	};

	var init = function(){
		_setUpListeners();
	};

	return {
		init : init
	};
})();


$(document).ready(function() {

	if($('#add-proj').length){
		popUp.init();
	}	
	
});