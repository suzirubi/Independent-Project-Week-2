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



//Begin form submit code for career track survey
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

//Begin form submit code for letter to fellow student

  $("#letter form").submit(function(event) {
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("input#state").val();
    var zipInput = $("input#zip").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);
    console.log();
    $("#letterDisplay").show();

    event.preventDefault();
  });

var now = new Date();
var months = new Array('January','February','March','April','May','June','July','August','September','October','November','December');
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();
function fourdigits(number) {
    return (number < 1000) ? number + 1900 : number;
  }
today =  months[now.getMonth()] + " " +
         date + ", " +
         (fourdigits(now.getYear())) ;
document.getElementById("date").innerHTML = today;



});
