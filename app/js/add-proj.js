var preventAjax =(function(){

//Прослушивание события
	var _setUpListeners = function(){
		$('form').on('submit', function(event) {
			event.preventDefault();
			var form = $(this);
			if( validation.validateForm(form) ){
				this.submit();
			}
		});	
	};
	var init = function(){

		_setUpListeners();
	};

	return{
		init:init,
		};

})();

$(document).ready(function() {
	if($('form').length){
		preventAjax.init();
	}
});







