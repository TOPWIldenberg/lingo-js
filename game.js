var random=Math.floor( Math.random() * 479);
console.log(random);
var answer = words[random];
console.log(answer);
var answerArray= answer.split('')
var currentRow= 0;
var correctLetters = 0;
var correctAnswer = false;

 function setFirstLetter(){
   if(correctAnswer === true) return;
    document.getElementById("letter"+currentRow+"_0").value = answerArray[0];
    document.getElementById("letter"+currentRow+"_0").style.backgroundColor = "red";
   if(currentRow !== 0){
     for(var i = 0; i < 5; i++){
    if(document.getElementById("letter" + (currentRow - 1) + "_" + i).value == answerArray[i]){
      var input = document.getElementById("letter" + (currentRow - 1) + "_" + i);
        document.getElementById("letter" + currentRow + "_" + i).style.backgroundColor = "red";
       document.getElementById("letter" + currentRow + "_" + i).value = input.value;
    }
   }
  }
 }

 for (var k = 1; k < 5; k++) {
   for (var i = 0; i < 5; i++) {
     document.getElementById("letter" + k + "_" + i).disabled = false;

     }
 }
setFirstLetter();

 function check(){

   correctLetters = 0;
   for(var i = 0; i < 5; i++){
     var input = document.getElementById("letter" + currentRow + "_" + i);

     if (answerArray.includes(input.value)) {
       input.style.backgroundColor = 'yellow';
     }
     if (input.value == answerArray[i]) {
        input.style.backgroundColor = "red";
        correctLetters++

        console.log(correctAnswer)
        console.log(correctLetters)
      }
if (i === 4){
  for (var a = 0; a < 5; a++) {
    document.getElementById("letter" + currentRow + "_" + a).disabled = true
    }
  }
}

   currentRow++;
   if(correctLetters === 5){
     setTimeout(function () {
       alert("Je hebt het woord geraden!");
         window.location.reload();
       }, 500);
     }
     else{
     setFirstLetter();
   }
}
