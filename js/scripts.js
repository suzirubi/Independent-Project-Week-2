$(document).ready(function(){
//move this function to business logic and assign var to function to call down here
  var userCareerTrack;



  var calculate = function(whatEnjoyWeek1Input, whatEnjoyWeek2Input, courseDesInput, workQuesInput, salaryQuesInput) {
    if (!whatEnjoyWeek1Input || !whatEnjoyWeek2Input || !courseDesInput || !workQuesInput || !salaryQuesInput) {
      alert("Please answer each question");
    }
    else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 5) {
      $("#userCareer").text("Your track is problaby front end");
      $("#userCareer").show();
    }
     else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 5) {
      $("#userCareer").text("Your track is problaby back end");
      $("#userCareer").show();
    }
     else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 10) {
      $("#userCareer").text("Looks like you are still trying to make up your mind!");
      $("#userCareer").show();
    }
     else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 12) {
      $("#userCareer").text("Looks like you are still trying to make up your mind, make sure and attend all the speaker sessions and network!");
      $("#userCareer").show();
    }
     else {
       (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 17 );
        $("#userCareer").text("Do more research, but we'd like to have a beer with you and talk about it!");
        $("#userCareer").show();
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



    calculate (whatEnjoyWeek1Input, whatEnjoyWeek2Input, courseDesInput, workQuesInput, salaryQuesInput);



    console.log(whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput);




  });

});
