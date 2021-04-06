$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );
$(document).ready(function() {
    $('#hideLinks').click(function(e){
        if ($('.toggle').is(':visible')) {
            $('.toggle').hide('medium');
        } else {
            $('#hideLinks').effect("shake");
        }
    });
    $('#showLinks').click(function(e){
        if (!$('.toggle').is(':visible')) {
            $('.toggle').show('medium');
        } else {
            $('#showLinks').effect("shake");
        }
        
    });
});