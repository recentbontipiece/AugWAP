window.onload = function () {

    const array = [1,3,5,3,3,0,5];
    const warray =["John","Styves","Doe"];
    sum(array);
    multiply(array);
    reverseArray(array);
    filterLongWords (warray,3);
}


function sum(array){
  'use strict'
  const  sumVal = array.reduce(function (preveval,elem,i,array) {
     return preveval + elem;
  })
  console.log("Call sum " +sumVal)

}

function multiply(array) {
    'use strict'

    const  mul = array.filter(function (elem,i,array) {
        return elem !=0;
    }).reduce(function (prev,element,i) {
        return prev * element;
    })
    console.log("Mul sum " +mul)
}


function reverseArray(array) {
   const reverse = array.map(function iterateItems(item) {
       return item;
   }).reverse();
   console.log("Reverse Array " +reverse);

}


function  filterLongWords (array,big) {
    const  newArray = array.filter(newArray=>newArray.length > big);
    console.log("Reverse Word of Array " + newArray);
}