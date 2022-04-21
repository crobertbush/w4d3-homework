//step 3

var myArray = [ [1, 2], [3, 4], [5, 6], [7, 8], [9, 10] ];
  
//step 4

function logThisArray() {    
  for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < myArray[i].length; j++) {
      console.log(myArray[i][j]);
    }
  }
}
console.log(logThisArray());

//step 5

function myFunction(numb1, numb2) {
    if (numb1 > numb2) {
        return (numb1);
    } else {
        return (numb2);
    }
}
console.log(myFunction(10,20));

//step 6

function compareMyValues(val1, val2) {
    if (val1 === val2) {
        console.log("Congratulations! Your arguments of " + val1 + " and " + val2 + " are both equal in value and type!")
    } else {
        console.log("I hate to be the one to tell you this... but your arguments of " + val1 + " and " + val2 + " are not equal in both value and type...")
    }
}
console.log(compareMyValues("String", "String"));
console.log(compareMyValues("String", 7));





