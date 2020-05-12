// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

//ask about element.classList??
// But instead we're going to implement it from scratch:
var pushElementsThatContainTheClass = function(className, element, elementsThatContainTheClass) {
  if(element.classList && element.classList.contains(className)) {
    elementsThatContainTheClass.push(element);
  }
  //iterate through the child nodes
  const childNodes = element.childNodes;
  for (var i = 0; i < element.childNodes.length; i++) {
    const child = childNodes[i];
    pushElementsThatContainTheClass(className, child, elementsThatContainTheClass);
  }
}

var getElementsByClassName = function(className) {
  // your code here
  //You should use document.body, element.childNod
  const result = [];
    //if it is, then we want to add to the array.
    pushElementsThatContainTheClass(className, document.body, result);
  return result;
};

