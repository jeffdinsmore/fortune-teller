
$(document).ready(function(){
  $("form#Fortune_survey").submit(function(event){
    let array = [];
    $("input:checkbox[name=lucky]:checked").each(function(){
      array.push(parseInt($(this).val()));
     });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      array.push(parseInt($(this).val()));
     });
     console.log(array);

    let sum = 0;
    let oldSum;
    let newSum; 
    array.forEach(function(numberToAdd) {
      oldSum = sum;
      sum = sum + numberToAdd;
      newSum = sum;
       

      if (sum > 0) {
        $('#lucky-responses').show();

      } else if (sum = 0) {
        $("#neutral-responses").show();

      } else {
        $('#UnLucky-responses').show();
      }   
    });
    event.preventDefault();
  });
});
      

