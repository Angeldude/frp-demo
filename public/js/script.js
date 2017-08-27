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

window.onload = main;
