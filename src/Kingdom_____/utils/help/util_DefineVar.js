export const defineVar = (testObj) => {
  var stringConstructor = 'test'.constructor;
  var arrayConstructor = [].constructor;
  var objectConstructor = {}.constructor;

  function whatIsIt(object) {
    if (object === null) {
      return 'null';
    }
    if (object === undefined) {
      return 'undefined';
    }
    if (object.constructor === stringConstructor) {
      return 'String';
    }
    if (object.constructor === arrayConstructor) {
      return 'Array';
    }
    if (object.constructor === objectConstructor) {
      return 'Object';
    }
    {
      return "don't know";
    }
  }

  alert(whatIsIt(testObj));
  console.log('**UTIL** > Object is: ' + whatIsIt(testObj));
};
