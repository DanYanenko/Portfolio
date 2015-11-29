var validation = (function() {


	var init = function(){

		_setUpListeners();
	};

	var _setUpListeners=function(){
	
		$('form').on('keydown', '.has-error', _removeError);
		$('.add-file-button').on('change', _removeFileError);
		$('form').on('reset', _clearForm);
	};

	var _removeError=function(){
		
		$(this).removeClass('has-error');
	 };

	var _removeFileError=function(){
		$(this).siblings().removeClass('has-error').trigger('hideTooltip').addClass('filename_loaded');
	};

	var _clearForm = function() {
	 	
	 	var form = $(this);

	 	form.find('input,textarea, .filename').trigger('hideTooltip');
	 	form.find('.has-error')
	 	.add('.filename').removeClass('has-error');	

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
				event: 'keydown change hideTooltip'
			},

			position : position,

			style: {
				classes: 'qtip-rounded qtip-red'
			}

			}).trigger('show');
	};

	//Отображение тултипа
	var validateForm = function (form) {

		var thisForm = $(form),
			elements = thisForm.find('input, textarea').not('input[type="file"],input[type="submit"]'),
			fileName = thisForm.find('.add-file-button'),
			fileNameLabel = thisForm.find('.filename'),
			fileNameLabelPos = fileNameLabel.attr('qtip-position'),
			valid = true;
			
		

		if( fileName.length && (fileName.val().length ===0) ){
			
				_createQtip( fileNameLabel, fileNameLabelPos);
				fileNameLabel.addClass('has-error');
				valid = false;		
		}

		

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


$(document).ready(function() {
	if($('form').length){
		validation.init();
	}	
});




