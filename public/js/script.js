const funcs = {};
funcs.reverse = string => string.split('').reverse().join('');
funcs.thanks = () => "Thank you!";
funcs.onegai = () => "Onegai Shimasu!";
funcs.clear = () => "";

let main = function(){

  // SETUP
  let text = document.getElementById('words');
  let got = R.compose(funcs.reverse ,() => text.value)

  // OPERATIONS
  let thx = clicksE('thanks').mapE(funcs.thanks)
  let domo = clicksE('onegai').mapE(funcs.onegai)
  let reversed = clicksE('revrs').mapE(got)
  let cleared = clicksE('clear').mapE(funcs.clear)
  let simple = mergeE(thx, domo, reversed, cleared);

  // I/O
  simple.mapE(merged => text.value = merged);
}

window.onload = main;
