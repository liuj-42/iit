$( function() {
    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );
$(document).ready(function() {
    $('#hideLinks').click(function(e){
        $('.toggle').hide('medium');
    });
    $('#showLinks').click(function(e){
        $('.toggle').show('medium');
    });
});