/*
* Closure - a function with an inner function that does not run fully if the inner function argument is not called upon.
*/

function showName(firstName){
  console.log(firstName);

  function buildName(lastName){
    return firstName + ' ' + lastName;
  }

  return buildName;
}

var nameBuilder = showName('David');

console.log(nameBuilder('Nine'));
console.log(nameBuilder('Smith'));
console.log(nameBuilder('9'));

/*
* Currying - a Closure that uses the additional functions to provide multiple parameters and calls
*/

    function add(number1){
      function addSecondNumber(number2){
        return number1 + number2;
      }
      return addSecondNumber;
    }

    var addFive = add(5);

    console.log(addFive(10));
    console.log(addFive(25));

      var addFive = add(8);

    console.log(addFive(10));
    console.log(addFive(25));

      var chainingAnswer = add(2)(3);

    console.log(chainingAnswer);
