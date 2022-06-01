$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const userInput = $("input#username").val();

    $(".username").text(userInput);

    $("#letter").show();
  });
});