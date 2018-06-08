$(document).ready(function() {
  var outPut = function(numb){

    var outPutString = "";
    var numbArr = [];
    var nestedArr = [];
    //var outPutArr = [];

    if (isNaN(numb)) {
      // outPutArr.push("Please enter real numbers only");
      outPutString += "Please Enter REAL Numbers Only";
    } else if (numb < 0) {
      //  outPutArr.push("please enter positive numbers only");
      outPutString = "Please Enter POSITIVE Numbers Only";
    }


    for (var i = 0; i < numb; i++) {
      numbArr.push(i.toString());
    }
    for (var a = 0; a < numbArr.length; a++) {
      var singleNumb = numbArr[a];
      var singleNumbArr = singleNumb.split("");
      nestedArr.push(singleNumbArr);
    }
    for (var c = 0; c < nestedArr.length; c++){
      if (parseInt(nestedArr[c].join("").split(" ")) % 3 === 0 && parseInt(nestedArr[c].join("").split(" ")) !== 0) {
        //  outPutArr.push("I'm sorry, Dave. I'm afraid I can't do that.");
        outPutString += "I'm sorry, Dave. I'm afraid I can't do that." + "</br>"
      } else if (nestedArr[c].includes('1')) {
        //  outPutArr.push("boop");
        outPutString += "boop" + "</br>"
      } else if (nestedArr[c].includes('0')) {
        //   outPutArr.push("beep");
        outPutString += "beep" + "</br>"
      } else {
        // outPutArr.push(nestedArr[c].join(""));
        outPutString += nestedArr[c].join("") + "</br>"
      }
    }
    //$("p#result").text(test);

    //Used pure javaScript to output as a list
    document.getElementById("result").innerHTML = outPutString;
  }


  $("form#inputNumber").submit(function(event) {
    event.preventDefault();
    var numb = $("input#number").val().trim();

    outPutString = "";  // reset each time
    outPut(numb);

  });
});
