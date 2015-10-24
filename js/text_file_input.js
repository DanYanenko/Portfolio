$(document).ready(function() {



$('.add-button').on('change', function() {
  
  $this=$(this);
  var
    val=$this.val().replace("C:\\fakepath\\",'');
    lbl = $this.closest('.label-add-button').find( ".filename" );

    lbl.text(val);
});

});
    



