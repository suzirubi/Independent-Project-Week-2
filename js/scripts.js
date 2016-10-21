$(document).ready(function(){
//move this function to business logic and assign var to function to call down here
  var userCareerTrack;



  var calculate = function(whatEnjoyWeek1Input, whatEnjoyWeek2Input, courseDesInput, workQuesInput, salaryQuesInput) {


if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 5) {

$("#userCareerTrack").text("Your track is problaby back end");

    } else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput > 5) {
      $("#userCareerTrack").text("Your track is problaby back end");
    } else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput >= 10) {
      $("#userCareerTrack").text("Still deciding");

    } else {
      $("#userCareerTrack").text("Do more research, but we'd have a beer with you and talk about it!");
      }
  }



//copy this function below for letter form with id
  $("form#careerTrack").submit(function(event) {
        event.preventDefault();
    var whatEnjoyWeek1Input = parseInt($("select#whatEnjoyWeek1").val());
    var whatEnjoyWeek2Input = parseInt($("select#whatEnjoyWeek2").val());
    var courseDesInput = parseInt($("select#courseDes").val());
    var workQuesInput = parseInt($("select#workQues").val());
    var salaryQuesInput = parseInt($("select#salaryQues").val());



    calculate (userCareerTrack);
    alert(userCareerTrack);
    console.log(whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput);




  });

});
