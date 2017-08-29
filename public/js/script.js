let main = function() {
  // SETUP
  let text = document.getElementById('words');
  let reversed = str => str.split('').reverse().join('')

  let functions = [
    R.compose(reversed, () => text.value),
    () => "Thank you!",
    () => "Goodbye!",
    () => "Onegai Shimasu!",
    () => "",
    () => "hello?!"
  ]
  // OPERATIONS
  let clickEvents = R.map(clicksE, ['reverse', 'thanks', 'goodbye', 'onegai', 'clear', 'hello'])

  let buttonEvents = R.map(x => x[0].mapE(x[1]), R.zip(clickEvents, functions))

  let singleEventStream = R.map(mergeE, buttonEvents)

  // I/O
  singleEventStream.forEach(u => {
    u.mapE(merged => text.value = merged)
  })
}

let anotherMain = function(){
  //SETUP
  let words = ['sel1', 'sel2', 'sel3']
  // let ideas = R.map(extractIdB, words)
  // let clicks = R.map(clicksE, words)
  // let clicks = R.map(clicksE, words)
  // // let jitter = R.map(snapshotE, clicks)
  // let one = clicksE('sel1').mapE(x => extractIdB('sel1'))
  // let test = extractIdB('sel1')
  // let two = clicksE('sel2').mapE(x => extractIdB('sel2'))
  // let three = clicksE('sel3').mapE(x => extractIdB('sel3'))
  let one = clicksE('sel1').mapE(() => 'red')
  // let merged = mergeE(one, two, three)
  // merged.mapE(onColors)

  one.mapE(console.log);
};

function onColors(obj){
  obj.last.style.color = 'red';
};

let start = function(){
  main();
  anotherMain();
}

window.onload = start;
