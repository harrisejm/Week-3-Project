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

var test = [];

for (var c = 0; c < nestedArr[c].length; c++){
  for (var b = 0; b < nestedArr.length; b++) {
    if ( )
    test.push((nestedArr[b]).length);
  }
}



document.getElementById("test").innerHTML = test.length;
 document.getElementById("test1").innerHTML = test;
