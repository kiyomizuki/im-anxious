/*
* Uses Lab 11 Code from Art 101 w/ Wes Modes
*/

$(document).ready(function(){
  $("#hideOne").click(function(){
    $("#mentalhealth").hide();
  });
  $("#showOne").click(function(){
    $("#mentalhealth").show();
  });
});

$(document).ready(function(){
  $("#hideTwo").click(function(){
    $("#anxietytips").hide();
  });
  $("#showTwo").click(function(){
    $("#anxietytips").show();
  });
});

$(document).ready(function(){
  $("#hideThree").click(function(){
    $("#depressiontips").hide();
  });
  $("#showThree").click(function(){
    $("#depressiontips").show();
  });
});

$(document).ready(function(){
  $("#hideFour").click(function(){
    $("#grounding").hide();
  });
  $("#showFour").click(function(){
    $("#grounding").show();
  });
});
