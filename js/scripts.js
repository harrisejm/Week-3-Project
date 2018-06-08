var numb = 12;
//var stringLength = numb.toString().length;


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
var tests = [];

for (var c = 0; c < nestedArr.length; c++){
  if (nestedArr[c].includes('0')) {
    test.push("beep");
    tests += "beep" + "</br>"
  } else {
    test.push(nestedArr[c].join(""));
    tests += nestedArr[c].join("") + "</br>"
  }

  }


document.getElementById("test").innerHTML = test;
document.getElementById("test1").innerHTML = tests;
document.getElementById("test2").innerHTML = nestedArr;
