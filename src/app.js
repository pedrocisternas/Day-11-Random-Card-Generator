/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let n = document.querySelector(".number");
  var symbols = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  var symbol = symbols[Math.floor(Math.random() * 12)];
  n.innerHTML = symbol;
  let ti = document.querySelector(".top-icon");
  var suits = ["&#9824", "&#9827", "&#9829", "&#9830"];
  let suit = suits[Math.floor(Math.random() * 4)];
  ti.innerHTML = suit;
  let bi = document.querySelector(".bottom-icon");
  bi.innerHTML = suit;
  if (suit == "&#9829" || suit == "&#9830")
    document.querySelector(".card").style.color = "red";
};
