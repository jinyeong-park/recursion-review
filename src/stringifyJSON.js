// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //test for strings
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  //array
  if (Array.isArray(obj)) {
    var array = [];
    for (let i = 0; i < obj.length; i++) {
      array.push(stringifyJSON(obj[i]))
    }
    return "" + '[' + array + ']';
  }
  //object
  if (typeof obj === "object") {
    if (obj === null) {
      return "null";
    }
    let results = [];
    for (let key in obj) {
      if(typeof obj[key] === "function" || typeof obj[key] === "undefined") {
        return "{}";
      }
      results.push(`${stringifyJSON(key)}:${stringifyJSON(obj[key])}`);
    }
    results.join(',')
    return "" + '{' + results + '}';
  }
  //others (number, boolean ...)
  return "" + obj;
};
