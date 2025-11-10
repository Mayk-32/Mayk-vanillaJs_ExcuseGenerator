import "bootstrap";
import "./style.css";


window.onload = function() {
  let who = ['The cat', 'My cousin', 'The mailman', 'My bird', 'my younger brother'];
  let action = ['puked', 'peed', 'threw away', 'broke' , 'hid'];
  let what = ['my homework', 'my phone', 'my computer', 'the car', 'the weather'];
  let when = ['during the class', 'when I was sleeping', 'while I was at work', 'during my lunch', 'while I was praying'];

  const randomWho = who[Math.floor(Math.random() * who.length)];
  const randomAction = action[Math.floor(Math.random() * action.length)];
  const randomWhat = what[Math.floor(Math.random() * what.length)];
  const randomWhen = when[Math.floor(Math.random() * when.length)];

  const excuses = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`
     
  document.getElementById("Excuses").innerHTML = excuses;
    
  console.log("Excuses");  
  return "let who", "let action", "let what", "let when";
  
};
  
