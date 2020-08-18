$(document).ready(function(){
  $("form#Fortune_survey").submit(function(event){
    event.preventDefault();
   
   
   
    $("#lucky-responses").show();
    $("input:checkbox[name=lucky]:checked").each(function(){
      const LuckyMode = $(this).val();
      $('#work-responses').append(LuckyMode + "<br>");
    });


    $("#UnLucky-responses").show();
    $("input:checkbox[name=unlucky]:checked").each(function(){
      const unLuckyMode = $(this).val();
      $('#fun-responses').append(unLuckyMode + "<br>");
    });


    $('#Fortune_survey').hide();
  });
});