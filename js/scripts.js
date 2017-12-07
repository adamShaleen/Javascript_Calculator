$(document).ready(function() {

    $("#why").hide();

    $("#display_text").html("0");
    var computation = [];

    $("#boom").click(function() {
        $("#outer_calculator").hide();
        $("#why").show();
    });

    $("#clear").click(function() {
        computation = [];
        $("#display_text").html("0");
    });

    $(":button").click(function() {
        var pressedButton = $(this).val();
        if (pressedButton !== "=" && pressedButton !== "boom" && pressedButton !== "clear") {
            computation.push($(this).val());
            $("#display_text").html(computation);
        }
    });

    $("#equals").click(function() {
        var output = eval(computation.join(""));
        computation = [output];
        $("#display_text").html(output);
    });

});
