"use strict";

// selectors
const votd = document.getElementById("text");
const author = document.getElementById("author");

// bible api url
const url = "http://quotes.rest/bible/vod.json";

document.addEventListener("DOMContentLoaded", () => {
  // fetch Bible API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      votd.innerText = data.contents.verse;
      author.innerText = `${data.contents.book} ${data.contents.chapter} : ${data.contents.number}`;
      console.log(data);
    });
});
