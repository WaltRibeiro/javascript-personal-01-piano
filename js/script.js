/*
z  s  x  d  c  v  g  b  h  n  j  m
90 83 88 68 67 86 71 66 72 78 74 77
C  Db D  Eb E  F  Gb G  Ab A  Bb B  
a	65
b	66
c	67
d	68
e	69
f	70
g	71
h	72
i	73
j	74
k	75
l	76
m	77
n	78
o	79
p	80
q	81
r	82
s	83
t	84
u	85
v	86
w	87
x	88
y	89
z	90
*/


const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key') // array of divs with class query
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key => {
  key.addEventListener('click', () => {
    playNote(key);
    // displayNoteLetter(key);
  })
})

// key press down plays the note

document.addEventListener('keydown', event => {
  if (event.repeat) return
  const key = event.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

// this may be the set timeout for add event listener
function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}


// print note on the screen

$(document).ready(function() {

  // C note
  $("#note-c").on("click", function() {
    $("#demo").text("C note");
  });

  // Db note
  $("#note-d-flat").on("click", function() {
    $("#demo").text("Db note");
  });

  // D note
  $("#note-d").click(function() {
    $("#demo").text("D note");
  });

  // Eb note
  $("#note-e-flat").click(function() {
    $("#demo").text("Eb note");
  });

  // E note
  $("#note-e").click(function() {
    $("#demo").text("E note");
  });

  // F note
  $("#note-f").click(function() {
    $("#demo").text("F note");
  });

  // Gb note
  $("#note-g-flat").click(function() {
    $("#demo").text("Gb note");
  });

  // G note
  $("#note-g").click(function() {
    $("#demo").text("G note");
  });

  // Ab note
  $("#note-a-flat").click(function() {
    $("#demo").text("Ab note");
  });

  // A note
  $("#note-a").click(function() {
    $("#demo").text("A note");
  });

  // Bb note
  $("#note-b-flat").click(function() {
    $("#demo").text("Bb note");
  });

  // B note
  $("#note-b").click(function() {
    $("#demo").text("B note");
  });


  
  document.addEventListener("keydown", checkKeyPressed, false);

  function checkKeyPressed(event) {
    // C note
    if (event.keyCode === 90) {
      $("#demo").text("C note");
    } else if (event.keyCode === 83) {
        $("#demo").text("Db note");
    } else if (event.keyCode === 88) {
      $("#demo").text("D note");
    } else if (event.keyCode === 68) {
      $("#demo").text("Eb note");
    } else if (event.keyCode === 67) {
      $("#demo").text("E note");
    } else if (event.keyCode === 86) {
      $("#demo").text("F note");
    } else if (event.keyCode === 71) {
      $("#demo").text("Gb note");
    } else if (event.keyCode === 66) {
      $("#demo").text("G note");
    } else if (event.keyCode === 72) {
      $("#demo").text("Ab note");
    } else if (event.keyCode === 78) {
      $("#demo").text("A note");
    } else if (event.keyCode === 74) {
      $("#demo").text("Bb note");
    } else if (event.keyCode === 77) {
      $("#demo").text("B note");
    };

    

}});



var notesMaryLamb = ["e", "d", "c", "d", "e", "e", "e", "d", "d", "d", "e", "g", "g", "e", "d", "c", "d", "e", "e", "e", "e", "d", "d", "e", "d", "c", "c"];
var notesFrereJacques = ["c", "d", "e", "c", "c", "d", "e", "c", "e", "f", "g", "e", "f", "g"];
var notesNBC = ["c", "a", "f"];
var notesBrunoMars = ["a", "f", "g", "d", "c", "b", "g", "e", "c", "a", "c"]
var notesThreeBlindMice = ["e", "d", "c", "e", "d", "c", "g", "f", "e", "g", "f", "e", "d", "c"];
var indexOfArray = 0;

var theSong = "";

function song() {
  var noteDiv;
  if(theSong === "maryHadALittleLamb") {
    noteDiv = $("#note-" + notesMaryLamb[indexOfArray]);
  } else if (theSong === "frereJacques") {
    noteDiv = $("#note-" + notesFrereJacques[indexOfArray]);
  } else if (theSong === "nbcLogo") {
    noteDiv = $("#note-" + notesNBC[indexOfArray]);
  } else if (theSong === "brunoMarsUptownFunk") {
    noteDiv = $("#note-" + notesBrunoMars[indexOfArray]);
  } else if (theSong === "threeBlindMice") {
    noteDiv = $("#note-" + notesThreeBlindMice[indexOfArray]);
  }
  
  // var noteDiv = $("#note-" + notesMaryLamb[indexOfArray]);
  noteDiv.addClass("highlight")
};

$(document).on("click", ".highlight", function() {
  $(".highlight").removeClass("highlight");
  // console.log("working")
  indexOfArray++
  song()
});

console.log("----->", notesBrunoMars[notesBrunoMars.length - 1])

function songSetup(theSongButton) {
    theSong = theSongButton;
    indexOfArray = 0;
    $(".highlight").removeClass("highlight");
    song();
}

//   var noteDiv = $("#note-" + notesMaryLamb[indexOfArray]);
//   var noteDiv = $("#note-" + getElementById("#MaryLamb") + [indexOfArray]);



// Password checker for private work
var chosenWord = "art";


function checkPass() {
    var promptInput = prompt("Please enter the password to see more work");
    if (promptInput === chosenWord) {
        window.location.replace("http://linkedin.waltrib.com");
    } else if (promptInput != chosenWord) {
        alert("Incorrect password")
    } else {

    }
};

$("li").on("click", function() {
  $("li").removeClass("active font-weight-bold");
  $(this).addClass("active font-weight-bold");
});

// web midi

WebMidi.enable(function (err) {

  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  }
  
});




WebMidi.enable(function (err) {
  console.log(WebMidi.inputs);
  console.log(WebMidi.outputs);
});

var input = WebMidi.getInputByName("iRig Keys");

input.addListener('pitchbend', "all", function(e) {
    console.log("Pitch value: " + e.value);
});