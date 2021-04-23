// //-- Check if there's no checked radio button
// if ($('#radio_button').is(':checked') === false ) {
//     //-- if none, Do something here    
// }

// // get it from your form or parent id
// if ($('#your_form').find('[name="radio_name"]').is(':checked') === false ) {
//     $('#your_form').find('[name="radio_name"]').filter('[value=' + checked_value + ']').prop('checked', true);
// }

$('document').ready(function() {
    var checked_value = 'checked';
      if($("#your_form").find('[name="radio_name"]').is(":checked") === false) {
          $("#your_form")
            .find('[name="radio_name"]')
            .filter("[value=" + checked_value + "]")
            .prop("checked", true);
            
        }
      }
    )