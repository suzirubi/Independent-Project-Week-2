$(function() {
//copy this function below for letter form with id
  $("form#careerTrack").submit(function(event) {
    var whatEnjoyWeek1Input = parseInt($("select#whatEnjoyWeek1").val());
    var whatEnjoyWeek2Input = parseInt($("select#whatEnjoyWeek2").val());
    var coursDesInput = parseInt($("select#coursDes").val());
    var workQuesInput = parseInt($("select#workQues").val());
    var salaryQuesInput = parseInt($("select#salaryQues").val());

//move this function to business logic and assign var to function to call down here
    if (!whatEnjoyWeek1Input || !whatEnjoyWeek2Input || !coursDesInput || !workQuesInput || !salaryQuesInput) {
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
