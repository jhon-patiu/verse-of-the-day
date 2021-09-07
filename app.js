"use strict";

// selectors
const votd = document.getElementById("text");
const author = document.getElementById("author");
const quoteBox = document.getElementById("quote-box");
const changeBg = document.querySelector(".change-bg");
const quoteLeft = document.querySelector(".fa-quote-left");
const quoteRight = document.querySelector(".fa-quote-right");

// bible api url
const url = "http://quotes.rest/bible/vod.json";

// colors array for background
const colors = [
  "#DE3163",
  "#FFBF00",
  "#9FE2BF",
  "#FF7F50",
  "#CCCCFF",
  "#6495ED",
  "#40E0D0",
  "#800080",
  "#008080",
  "#808000",
  "#CD5C5C",
  "#FFA07A",
  "#FA8072",
  "#16A085",
  "#28B463",
  "#C39BD3",
  "#34495E",
];

// background imgs array

document.addEventListener("DOMContentLoaded", () => {
  // fetch Bible API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      votd.innerText = data.contents.verse;
      author.innerText = `${data.contents.book} ${data.contents.chapter} : ${data.contents.number}`;
    });

  // facebook share
  (function (d, s, id) {
    var js,
      fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
  })(document, "script", "facebook-jssdk");
});

changeBg.addEventListener("click", changeBackground);

function changeBackground() {
  let random = Math.floor(Math.random() * colors.length);
  console.log(random);
  document.body.style.background = colors[random];
  votd.style.color = colors[random];
  quoteLeft.style.color = colors[random];
  quoteRight.style.color = colors[random];
}
