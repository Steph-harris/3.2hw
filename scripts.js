function stringFinder (){
  usrAnsw = document.getElementById("usrInput").value; 
  isAString = parseInt(usrAnsw);
  if (isNaN(isAString)){
    alert("that's a string!")
  } else {
    alert("nope, that's a " + typeof isAString)
  }
};
//
function smallNum (firstn, secondn){
  firstn = prompt("pick a number 1-99");
  secondn = Math.random() * 100;
  if (firstn < secondn){
    console.log(firstn)
    document.write ("My number is " + secondn + ", Your number is smaller:" + firstn);
  } else {
    console.log(secondn)
    document.write ("My number is " + secondn + ", My number is smaller than yours:" + firstn);
  }
};

//Adds n number of strings together
function concatStr (){
  addStr = document.getElementById("mix").value || []; 
  // var allT = addStr.join('')
  // console.log(allT);
  alert(addStr.join(''));
}
