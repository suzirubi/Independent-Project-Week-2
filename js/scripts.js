$(function() {
//copy this function below for letter form with id
  $("form#careerTrack").submit(function(event) {
    var wallInput = parseInt($("select#wall").val());
    var emailInput = parseInt($("select#email").val());
    var putinInput = parseInt($("select#putin").val());
//move this function to business logic and assign var to function to call down here
    if (!wallInput || !emailInput || !putinInput) {
      alert("Please answer each question");
    } else if (wallInput = 2) {
      alert("You should NOT vote");
    } else if (wallInput + emailInput + putinInput < 3) {
        alert("You should NOT vote");
    } else {
        alert("You should vote for Hillary");
      }


    event.preventDefault();
  });
});
