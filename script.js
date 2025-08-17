const makeChange = (c) => {
  // your name here
	 //  const literal = [
  //   ['q', 0.25],
  //   ['d', 0.10],
  //   ['n', 0.05],
  //   ['p', 0.01]
  // ];

  // const ans = {
  //   q: 0,
  //   d: 0,
  //   n: 0,
  //   p: 0
  // };

  // for (const [name, value] of literal) {
  //   while (cents >= value) {
  //     ans[name]++;
  //     cents = parseFloat((cents - value).toFixed(2)); // Fix floating-point precision
  //   }
  // }

	const change = {
    q: 0, // quarters
    d: 0, // dimes
    n: 0, // nickels
    p: 0  // pennies
  };

  change.q = Math.floor(amount / 25);
  amount %= 25;

  change.d = Math.floor(amount / 10);
  amount %= 10;

  change.n = Math.floor(amount / 5);
  amount %= 5;

  change.p = amount;

  return change;

  return ans;
};

// Do not the change the code below
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));
