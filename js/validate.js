var validation = (function() {


	var init = function(){

		_setUpListeners();
	};

	var _setUpListeners=function(){
	
		$('form').on('keydown', '.has-error', _removeError);
		$('form').on('reset', _clearForm);
	};

	var _removeError=function(){
		
		$(this).removeClass('has-error');
	 };

	 var _clearForm = function() {
	 	
	 	var form = $(this);

	 	form.find('input,textarea').trigger('hideTooltip');
	 	form.find('.has-error').removeClass('has-error');
	 	
	};	
	// создание тултипа
		var _createQtip = function(_element, position){
				//позиция тултипа
				if (position === 'right'){
					position = {
						my: 'left center',
						at: 'right center'
					};
				}
				 else if(position === 'left') {
				 		position = {
				 			my: 'right center',
							at: 'left center',
							
						};
					}		

		_element.qtip({
		content: function(){

				return $(this).attr('qtip-content');
		},
		show: {
			event: 'show'
		},
		hide: {
			event: 'keydown hideTooltip'
		},
		position : position,
		style: {
			classes: 'qtip-rounded qtip-red'
		}
	}).trigger('show');

	};

	//Отображение тултипа
	var validateForm = function (form) {

		
		var elements =$(form).find('input, textarea').not('input[type="file"],input[type="file"],input[type="submit"]'),
		valid = true;
		$.each(elements, function(index, val) {
			
		var 
			value = $(val).val(),

			element = $(val),
			pos = $(val).attr('qtip-position');

			
		if (value.length === 0){
			element.addClass('has-error');
			_createQtip(element, pos);
			valid  = false;
			}
		});
	
	return valid;
	};
	


	//публичные методы модуля
	return {
		init:init,
		validateForm: validateForm

	};

})();

validation.init();



