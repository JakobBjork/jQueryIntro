//exempel 1
$(document).ready(function(){
    $("#buttonHide").click(function(){
      $("#textToHide").hide();
      $("#buttonShow").show();
      $("#buttonHide").hide();
    });
  });
  
  $(document).ready(function(){
    $("#buttonShow").click(function(){
      $("#textToHide").show();
      $("#buttonShow").hide();
      $("#buttonHide").show();
    });
  });
  
  
  //exempel 2
  $(document).ready(function(){
    $("#textToHover").mouseenter(function(){
      $("#textToHover").css("color", "red");
      $("#textToHover").css("font-size", "50px");
    });
  });
  
  $(document).ready(function(){
    $("#textToHover").mouseleave(function(){
      $("#textToHover").css("color", "black");
      $("#textToHover").css("font-size", "31px");
    });
  });
  
  //exempel 3
  $(document).ready(function(){
    $("#barToSlide").click(function(){
      $("#slidingPanel").slideToggle("slow");
    });
  });
  
  //exempel 4
  $(document).ready(function(){
    $("#buttonGoRight").click(function(){
      $("#buttonGoRight").hide();
      $("#buttonGoLeft").show();
      $("#animatedBox").animate({left: '75px'});
    });
  });
  
  $(document).ready(function(){
    $("#buttonGoLeft").click(function(){
      $("#buttonGoLeft").hide();
      $("#buttonGoRight").show();
      $("#animatedBox").animate({left: '15px'});
    });
  });
  
  //exempel 5
  $(document).ready(function(){
    $("#buttonFade").click(function(){
      $("#fadeBoxFast").fadeToggle("fast");
      $("#fadeBoxNormal").fadeToggle();
      $("#fadeBoxSlow").fadeToggle("slow");
    });
  });