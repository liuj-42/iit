// $(document).ready(function() {
//     // if (option==1) {	 
//     //     $.ajax({
//     //       type: "GET",
//     //          url: "lab9jsontemplate.json",
//     //       dataType: "json",
//     //       success: function(responseData, status){
//     //           var output = "<ul>";  
//     //         $(responseData).find("item").each(function() {
//     //              output += '<li><a href="' + $(this).find("link").text() + '" target="_blank">';
//     //           output += $(this).find("title").text();
//     //           output += '</a></li>';
//     //           output += "<div id='date'>" + $(this).find("pubDate").text() + "</div><br />";
//     //         });
//     //         output += "</ul>";
//     //         $('#nytOutput').html(output);
//     //       }, error: function(msg) {
//     //         // there was a problem
//     //         alert("There was a problem: " + msg.status + " " + msg.statusText);
//     //       }
//     //     });  
//     //   } 
//     //   else { // OR - option 2
//         //    $.ajax({
//         //       type: "GET",
//         //   url: "lab9jsontemplate.json",
//         //   dataType: "json",
//         //   success: function(responseData, status){
//         //       var output = "<ul>"; 
//         //                   //alert("Good: " + responseData.status + " " + responseData.title); 
//         //       $(responseData).find("item").each(function() {
//         //       $("#labOutput").append(
//         //         "<li><a href= '" +$(this).find("menuURL").text() + ">" +
//         //         $(this).find("menuName").text()+"</a><br />" +
//         //         "<font class = 'smaller'>" + $(this).find("menuDesc").text() + "</font><br /></li>" );
//         //     //   $("#nytOutput").append(
//         //     //     "<li><a href='" +$(this).find("link").text() + "' target='_blank'>" +
//         //     //     $(this).find("title").text()+"</a><br />" +
//         //     //     "<font class='smaller'>" + $(this).find("pubDate").text() + "</font><br /></li>" );
//         //     });
//         //       output += "</ul><br /><br >";
//         //   }, error: function(msg) {
//         //                 // there was a problem
//         //     alert("There was a problem: " + msg.status + " " + msg.statusText);
//         //   }
//         // });
//     //   };
//   	$.ajax({
//     	type: "GET",
//     	url: "lab9jsontemplate.json",
//     	dataType: "json",
      
//    		// success: function(responseData, status){
//       //   alert("bruh?");
//     	//   var output = "<ul>"; 
//       // 	$.each(responseData.menuItem, function() {
          
//       //   	  $("#labOutput").append(
//       //         "<li><a href = '" + this.menuURL + ">" + 
//       //         this.menuName + "</a><br />" +
//       //         "<font class = 'smaller'>" + this.menuDesc + "</font><br /></li>" );
//       // 	});
//       // 	output += "</ul>";
//     	// },

//       success: function(responseData, status){
//         alert("bruh?")
//         var output = "<ul>";  
//         // alert(output);
//         $.each(responseData.menuItem, function(i, item) {
//           alert("?????");
//          output += '<li><div>';
//          output += '<a href="' + item.menuURL + '">';
//          output += item.menuName + ": " + item.menuDesc;
//          output += '</a> </div> </li>';

//         //  output += '<li><a href="' + item.menuURL + '>';
//         //  output += item.menuName + '</a><br />'; 
//         //  output += '<font class = "smaller">' + item.menuDesc + '</font><br /></li>'
//         //  output += '<img title="' + item.title + '" src="' + item.media.m;
//         //  output += '" alt="'; 
//         //  output += item.title + '" />';
//         //  output += '</a></li>';
//        });
//        output += "</ul>";
//        $('#labOutput').html(output);
//      },
      
//       error: function(msg) {
//       	// there was a problem
//       	alert("There was a problem: " + msg.status + " " + msg.statusText);
//     	}
//   	});	
// });

$(document).ready(function() {
  $.ajax({
      type: "GET",
      url: "lab9jsontemplate.json",
      dataType: "json",
      success: function(responseData, status){
        var output = "<ul>"; 
          $.each(responseData.menuItem, function(i, item) {
         output += '<li>';
         output += '<a href="' + item.menuURL + '">';
         output += item.menuName + ": " + item.menuHeader;
         output += '</a> </li>';
        });
      output += "</ul>";
      $('#ProjectOutput').html(output);
      }, error: function(msg) {
                    // there was a problem
        alert("There was a problem: " + msg.status + " " + msg.statusText);
      }
  });

});