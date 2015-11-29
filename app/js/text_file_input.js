var changeFakePath = (function(){

	var _changePath = function(){

		var
			$this=$(this), 
			val=$this.val().replace("C:\\fakepath\\",''),
			lbl = $this.closest('.label-add-file-button').find( ".filename" );

		lbl.text(val);
	};

	var _setUpListeners = function(){
		$('.add-file-button').on('change', _changePath);
	};

	var init = function(){
		_setUpListeners();	
	};

	return {
		init : init
	};

})();

$(document).ready(function() {  	
	if($('input[type="file"]').length){
		changeFakePath.init();
	}
});
    



