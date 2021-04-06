/* eslint-disable no-undef */
/* Lab 6 JavaScript File  */

// this is the block that allows code to execute only after the DOM
// is fully loaded:
$(document).ready(function() {

   // example event handler:
   $('#labButton').click(function() {
      alert('You\'ve clicked the lab button');
   });

   // Problem 1: When the user clicks on the <h1>,
   //change the 'your name' to your own name (ie Joe Smith) 
   //change the text to be your name in small caps
   //change the color to be blue
   // (note that there is already a class defined for the area where your name should go)
   $('h1').click(function(e) {
      $(this).css('color', 'blue');                //changes the color of all of the header to blue
      $(this).css('font-variant', 'small-caps');   //changes the text to small caps
      $('em').text("James Liu");                   //changes the text under the h1 tag that is within the em tag to my name
    }); 



   // Problem 2: Make the "lorem ipsum" paragraphs 
   //   vanish over a 6/10 sec duration when a user clicks "Hide text"; 
   //   make it appear within a 1 second duration when a user clicks "Show text":

   $('#hideText').click(function(e) {              //when the hidetext button is clicked all elements with the class 'toggle' are faded out
      $('.toggle').fadeOut(6000);                  //with duration 6 seconds
   });
   $('#showText').click(function(e) {              //when the showtext button is click all elements with the class 'toggle' are faded in
      $('.toggle').fadeIn(1000);                   //with duration 1 second
   })

   // Problem 3: When a normal list item is clicked, make it turn red using addClass.
   //            When a red list item is clicked change it back
   // (Note that there already is a css style named ".red" in lab7.css.)
   $('li').click(function(e) {
      if ($(this).hasClass('red')) {               //checks to see if the current element already has the class 'red' on it or not
         $(this).removeClass('red');               //if it does it will remove the class
      } else {
         $(this).addClass('red');                  //otherwise it will add it
      }
   })



   // Problem 4: lookup jquery toggle() and use this code on the "Toggle Text"
   // link to show/hide the text:
   
   $('#toggleText').click(function(e) {            //toggles the lorum ipsum text using .toggle
      $('.toggle').toggle('slow');
   })

   /* When you are done:
     Post this lab to your iit website,
     link it from your projects page,
     and put a *working* hyperlink to your projects
     page in the readme file.
 */
});
