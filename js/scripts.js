$(document).ready(function() {

    // Running variable for inputs
    var computation = "";

    // On load display 0
    $("#display_text").html("0");

    $(":button").off();
    $(":button").click(function() {
        computation += $(this).val();
        console.log(computation);
    });
}); // end tag
