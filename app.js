'use strict'

const BasicCard = require('./BasicCard');
const ClozeCard = require('./ClozeCard');

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log("Basic FlashCard.....");
console.log("Front: " + firstPresident.front);
console.log("Back: " + firstPresident.back);
console.log("--------------------------------");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

console.log("Correct Cloze Card.......");

console.log("Cloze: " + firstPresidentCloze.cloze);
console.log("Partial: " + firstPresidentCloze.partial());
console.log("Full Text: " + firstPresidentCloze.fullText);
console.log("--------------------------------");

var brokenCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "Michelle");
console.log("Broken Cloze Card......");

// "George Washington"
console.log("Cloze: " + brokenCloze.cloze);
console.log("Partial: " + brokenCloze.partial());
console.log("Full Text: " + brokenCloze.fullText);

//console.log(firstPresidentCloze.deletion());