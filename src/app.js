/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#text").innerHTML = `<p>${excuses()}</p>`;
};

function excuses() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let generateWho = Math.floor(Math.random() * who.length);
  let generateAction = Math.floor(Math.random() * action.length);
  let generateWhat = Math.floor(Math.random() * what.length);
  let generateWhen = Math.floor(Math.random() * when.length);

  return `${who[generateWho]} ${action[generateAction]} ${what[generateWhat]} ${when[generateWhen]}`;
}
console.log(excuses());
