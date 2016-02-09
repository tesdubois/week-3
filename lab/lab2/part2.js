var newArray = [];

var pushGreaterThan10 = function(data) {
  if (data > 10) {
    console.log('greater than 10');
    newArray.push(data);
  }
};

var filterOutLessThan10 = function(arr) {
  _.each(arr, pushGreaterThan10);
  console.log(newArray);
};
var arr = [100, 2, 17, 1];
filterOutLessThan10(arr);
// var filterOutLessThan10 = function(arr) {
//   var newArray = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//           console.log(i, arr[i]);
//           newArray.push(arr[i]);
//         }
//   }
//   console.log(newArray);
// };
// filterOutLessThan10([100, 3, 17, 1]);
// myData = [100, 3, 17, 1];
// var greaterThan10 = function(myData) {
//   _.each(myData > 10);
//   console.log(myData);
// };
// console.log(_.each(myData, greaterThan10));
// console.log(_.filter(myData, greaterThan10));

/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task
var filterData = function() {
  for (var i = 0; i <= data.length; i++) {
   manyBikesArr = [];
   if (data[i][3] > 20) {
      manyBikesArr.push(data[i]);
     }
  }
}
*
var myData = [92, 10, 2, 5, 200];

var consoleLog = function(value, key, list) {
  console.log(value);
};

_.each(myData, consoleLog);

/*
Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */
