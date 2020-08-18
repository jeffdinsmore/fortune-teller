
$(document).ready(function(){
  $("form#Fortune_survey").submit(function(event){
    let array = [];
    $("input:checkbox[name=lucky]:checked").each(function(){
      array.push(parseInt($(this).val()));
     });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      array.push(parseInt($(this).val()));
     });
    
    let sum = 0; 
    let oldSum;
    let newSum;

    array.forEach(function(numberToAdd) {
      oldSum = sum;
      sum = sum + numberToAdd;
      newSum = sum;

      console.log(answer);       

      if (answer > 0) {
        $('#lucky-responses').show();

      } else if (answer = 0) {
        $("#neutral-responses").show();

      } else {
        $('#UnLucky-responses').show();
      }   
    });
    event.preventDefault();
  });
});
      

