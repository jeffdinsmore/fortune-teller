
const add = function(number1, number2) {
  return number1 + number2;
};

const groupLlu = parseInt($("#lucky").val());
const groupUnLucky = parseInt($("#unlucky").val());

let array = [];
let sum = 0;
let oldSum;
let newSum;
array.forEach(function(numberToAdd) {
  debugger;
  oldSum = sum;
  sum = sum + numberToAdd;
  newSum = sum;
  if sum > 0 
    return true
});

$(document).ready(function(){
  $("form#Fortune_survey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=lucky]:checked").each(function(){
      let array = $(parseInt(this).val());
      







    $("#lucky-responses").show();
    $("input:checkbox[name=lucky]:checked").each(function(){
      let array = $(parseInt(this).val());
      $('#lucky-responses').show();
    });

   
    $("input:checkbox[name=unlucky]:checked").each(function(){
      let array = $(parseInt(this).val());
      $('#UnLucky-responses').show();
    });

    $('#Fortune_survey').hide();
  });
});

const array = [0,1,2,3,4,5];
let sum = 0;
let oldSum;
let newSum;
array.forEach(function(numberToAdd) {
  debugger;
  oldSum = sum;
  sum = sum + numberToAdd;
  newSum = sum;
});

// const sequence = ["X", "A", "Y", "M", "D"];
// const pattern1 = "A";
// const pattern2 = "Z";
// function dnaPatternDetector(dnaSequence, pattern) {
//   for (let i = 0; i < dnaSequence.length; i +=1) {
//     if (dnaSequence[i] === pattern) {
//       return true;
//     };
//     console.log("Looped!");
//   }
//   return false;
// }

// dnaPatternDetector(sequence, pattern1);