$(document).ready(function() {
    console.log('text_file_input.js in window!')
});

$(function(){
    var wrapper = $('.label-add-button'),
        inp = wrapper.find( ".add-button" ),
        lbl = wrapper.find( ".filename" );

	inp.change(function(){
        var file_name;
        file_name = inp.val().replace( "C:\\fakepath\\", '' );
        lbl.text( file_name );
}).change();


});
