export const defineVar = (testObj) => {
  var stringConstructor = 'test'.constructor;
  var arrayConstructor = [].constructor;
  var objectConstructor = {}.constructor;

  function whatIsIt(object) {
    let resultString = '**UTIL** > Object is: ';
    if (object === null) {
      resultString += 'null';
    }
    if (object === undefined) {
      resultString += 'undefined';
    }
    if (object.constructor === stringConstructor) {
      resultString += 'String';
    }
    if (object.constructor === arrayConstructor) {
      resultString += 'Array';
    }
    if (object.constructor === objectConstructor) {
      resultString += 'Object';
    } else {
      resultString += "don't know";
    }
    return resultString;
  }

  alert(whatIsIt(testObj));
};
