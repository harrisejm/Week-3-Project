var numb = 10;
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

for (var b = 0; b < nestedArr


 document.getElementById("test").innerHTML = nestedArr[10];
