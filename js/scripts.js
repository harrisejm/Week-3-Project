$(document).ready(function() {
  $("form#inputNumber").submit(function(event) {
    event.preventDefault();


  var numb = parseInt($("input#number").val());
  var numbArr = [];

  for (var i = 0; i < numb+1; i++) {
    numbArr.push(i.toString());
  }

  var nestedArr = [];

  for (var a = 0; a < numbArr.length; a++) {
    var singleNumb = numbArr[a];
    var singleNumbArr = singleNumb.split("");
    nestedArr.push(singleNumbArr);
  }

  var test = [];
  var tests = "";

  for (var c = 0; c < nestedArr.length; c++){

   if (parseInt(nestedArr[c]) % 3 === 0 && parseInt(nestedArr[c]) !== 0) {
      test.push("sorry");
      tests += "sorry" + "</br>"
   } else if (nestedArr[c].includes('1')) {
      test.push("boop");
      tests += "boop" + "</br>"

   } else if (nestedArr[c].includes('0')) {
      test.push("beep");
      tests += "beep" + "</br>"
    } else {
      test.push(nestedArr[c].join(""));
      tests += nestedArr[c].join("") + "</br>"
    }
   }


  $("p#result").text(test);


});
});
