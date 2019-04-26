function nbits(a) {
  var n = 1;
  var r = 0;
  while (n-1<a) {
    r++;
    n *= 2;
  }
  return r;
}

template BinSum(n, ops) {
  var nout = nbits((2**n)*ops);
  signal input in[ops][n];
  signal output out[nout];

  var lin = 0;
  var lout = 0;

  var k;
  var j;

  for (k=0; k<n; k++) {
    for (j=0; j<ops; j++) {
      lin += in[j][k] * 2**k;
    }
  }

  for (k=0; k<nout; k++) {
    out[k] <-- (lin >> k) & 1;

    // Ensure out is binary
    out[k] * (out[k] - 1) === 0;

    lout += out[k] * 2**k;
  }

  //Ensure the sum

  lin === lout;
}
