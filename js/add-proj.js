var preventAjax =(function(){
//Прослушивание события
	var _setUpListeners = function(){
		$('form').on('submit', function(event) {
			event.preventDefault();
			var form = $(this);
			validation.validateForm(form);
		});	
	};
	var init = function(){

		_setUpListeners();
	};

	return{
		init:init,
		};

})();

preventAjax.init();





