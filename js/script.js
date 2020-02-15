const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key') // array of divs with class query
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => {
    playNote(key);
    displayNoteLetter(key);
  })
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}





function displayNoteLetter () {
  document.getElementById("demo").innerHTML = note;
}



// print note on the screen

$(document).ready(function() {

var noteC = "C"
var noteDb = "Db"
var noteD = "D"
var noteEb = "Eb"
var noteE = "E"
var noteF = "F"
var noteGb = "Gb"
var noteG = "G"
var noteAb = "Ab"
var noteA = "A"
var noteBb = "Bb"
var noteB = "B"
var noteC = "C"

  $("#note-c").on("click", function() {
    var noteC = $("#demo").text("C");
  });

  // ...
  $("#note-d-flat").on("click", function() {
    document.getElementById("demo").innerHTML = noteDb;
  });

  $("#note-d").click(function() {
    $("#demo").text("D");
  });

  $("#note-e-flat").click(function() {
    $("#demo").text("Eb");
  });
  
  $("#note-e").click(function() {
    $("#demo").text("E");
  });

  $("#note-f").click(function() {
    $("#demo").text("F");
  });

  $("#note-g-flat").click(function() {
    $("#demo").text("Gb");
  });

  $("#note-g").click(function() {
    $("#demo").text("G");
  });

  $("#note-a-flat").click(function() {
    $("#demo").text("Ab");
  });


  $("#note-a").click(function() {
    $("#demo").text("A");
  });

  $("#note-b-flat").click(function() {
    $("#demo").text("Bb");
  });

  $("#note-b").click(function() {
    $("#demo").text("B");
  });

});