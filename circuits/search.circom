include "comparators.circom";

//function countl(array) {
//  var i = 0;
//  while (array[]) {
//    i++;
//  }
//  var l = i + 1;
//  return l;
//}

template Search(char) {
  signal private input message;



  var l = countl(message);

  signal match[l];

  signal output matchCount;
  var mC = 0;

  component ise[l];

  for (var i = 0; i<l; i++) {
    ise[i] = IsEqual();

    ise[i].in[0] <== char;
    ise[i].in[1] <== message[i];

    match[i] <-- ise[i].out;
    mC += match[i];
  }

  matchCount <== mC;

  component isz = IsZero();
  isz.in <== matchCount
  isz.out === 0;

}

component main = Search(66);

// trying out to see if l can be determined separately
