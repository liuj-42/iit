// $( function() {
//     $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
//     $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
//   } );
//   $( function() {
//     $( "#accordion" ).accordion();
//   } );

$(document).ready(function() {
  alert("does this work or something or bruh lik you usuaually do");
  $.ajax({
      type: "GET",
      url: "projects.json",
      dataType: "json",
      success: function(responseData, status){
        var output = "<ul>"; 
          $.each(responseData.MenuItem, function(i, item) {
         output += '<li>';
         output += '<a href="' + item.menuURL + '">';
         output += item.menuName + ": " + item.menuTopic + '</a>';
         output += '<br />' + item.menuDesc;
         output += '</a> </li>';
        });
      output += "</ul>";
      $('#ProjectOutput').html(output);
      }, error: function(msg) {
        // alert("????");
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });
});
