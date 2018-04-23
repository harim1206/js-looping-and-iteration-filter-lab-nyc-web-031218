// Code your solution in this file
// [1, 2, 3, 4, 5].filter(function (num) { return num > 3; });

function findMatching(array, name){
  return array.filter(function(element){ return element.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(array, name){
  return array.filter(function(element){ return element.toLowerCase()[0] === name.toLowerCase()[0]});
}

function matchName(array, name){
  return array.filter(function(element){ return element['name'].toLowerCase() === name.toLowerCase()});
}
