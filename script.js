const makeChange = (c) => {
  // your name here
	  const literal = [
    ['q', 0.25],
    ['d', 0.10],
    ['n', 0.05],
    ['p', 0.01]
  ];

  const ans = {
    q: 0,
    d: 0,
    n: 0,
    p: 0
  };

  for (const [name, value] of literal) {
    while (cents >= value) {
      ans[name]++;
      cents = parseFloat((cents - value).toFixed(2)); // Fix floating-point precision
    }
  }

  return ans;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
