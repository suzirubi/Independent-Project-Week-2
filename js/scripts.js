$(document).ready(function() {

// business logic



  var calculate = function(whatEnjoyWeek1Input, whatEnjoyWeek2Input, courseDesInput, workQuesInput, salaryQuesInput) {

    if (!whatEnjoyWeek1Input || !whatEnjoyWeek2Input || !courseDesInput || !workQuesInput || !salaryQuesInput) {
      alert("Please answer each question");
    }
    else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 5) {
      $(".careerTrackBlock").show();  
      $("#userCareerFront").text("Your track is problaby front end: CSS/Design.");
      $("#userCareerFront").show();
      $("#userCareerPHP").hide();
      $("#userCareerRuby").hide();
      $("#userCareer").hide();
    }
     else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 10) {
      $(".careerTrackBlock").show();
      $("#userCareerPHP").text("Your track is problaby back end, leaning towards data-driven sites. Try PHP/Drupal");
      $("#userCareerPHP").show();
      $("#userCareerFront").hide();
      $("#userCareerRuby").hide();
      $("#userCareer").hide();
    }
     else if (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 12) {
      $(".careerTrackBlock").show();
      $("#userCareerRuby").text("You are probably back end, leaning towards Ruby/Rails");
      $("#userCareerRuby").show();
      $("#userCareerFront").hide();
      $("#userCareerPHP").hide();
      $("#userCareer").hide();

    }
     else {
       (whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput <= 17 );
       $(".careerTrackBlock").show();
       $("#userCareer").text("Looks like you are still trying to make up your mind");
       $("#userCareer").show();
       $("#userCareerRuby").hide();
       $("#userCareerFront").hide();
       $("#userCareerPHP").hide();
    }

    console.log(whatEnjoyWeek1Input + whatEnjoyWeek2Input + courseDesInput + workQuesInput + salaryQuesInput);

  }

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




//Begin form submit code for career track survey
  $("form#careerTrack").submit(function(event) {
    event.preventDefault();
    var whatEnjoyWeek1Input = parseInt($("select#whatEnjoyWeek1").val());
    var whatEnjoyWeek2Input = parseInt($("select#whatEnjoyWeek2").val());
    var courseDesInput = parseInt($("select#courseDes").val());
    var workQuesInput = parseInt($("select#workQues").val());
    var salaryQuesInput = parseInt($("select#salaryQues").val());


    calculate (whatEnjoyWeek1Input, whatEnjoyWeek2Input, courseDesInput, workQuesInput, salaryQuesInput);




  });



//Begin form submit code for letter to fellow student

  $("form#letter").submit(function(event) {
    event.preventDefault();

    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var streetInput = $("input#street").val();
    var cityInput = $("input#city").val();
    var stateInput = $("select#state").val();
    var zipInput = $("input#zip").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".street").text(streetInput);
    $(".city").text(cityInput);
    $(".state").text(stateInput);
    $(".zip").text(zipInput);

    console.log(firstNameInput, lastNameInput, streetInput, cityInput, stateInput, zipInput);

    if (!firstNameInput || !lastNameInput || !streetInput || !cityInput || !stateInput || !zipInput) {
      alert("Pleased fill in all fields.");
    }

    $("#letterDisplay").show();


  });



});
