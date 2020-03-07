
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',']


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
console.log(event.key) // return "s"
  const key = event.key
  const blackKeyIndex = BLACK_KEYS.indexOf(key) // "s" becomes "[0]"
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)


  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]) // document.querySelectorAll('.key.black')[0]
  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])

})

// the set timeout might go here
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

  // C-3 note
  $("#note-c-3").on("click", function() {
    $("#demo").text("C note");
  });

  // Db-3 note
  $("#note-d-flat-3").on("click", function() {
    $("#demo").text("Db note");
  });

  // D-3 note
  $("#note-d-3").click(function() {
    $("#demo").text("D note");
  });

  // Eb-3 note
  $("#note-e-flat-3").click(function() {
    $("#demo").text("Eb note");
  });

  // E-3 note
  $("#note-e-3").click(function() {
    $("#demo").text("E note");
  });

  // F-3 note
  $("#note-f-3").click(function() {
    $("#demo").text("F note");
  });

  // Gb-3 note
  $("#note-g-flat-3").click(function() {
    $("#demo").text("Gb note");
  });

  // G-3 note
  $("#note-g-3").click(function() {
    $("#demo").text("G note");
  });

  // Ab-3 note
  $("#note-a-flat-3").click(function() {
    $("#demo").text("Ab note");
  });

  // A-3 note
  $("#note-a-3").click(function() {
    $("#demo").text("A note");
  });

  // Bb-3 note
  $("#note-b-flat-3").click(function() {
    $("#demo").text("Bb note");
  });

  // B-3 note
  $("#note-b-3").click(function() {
    $("#demo").text("B note");
  });

    // C-4 note
    $("#note-c-4").click(function() {
      $("#demo").text("C note");
    });


  
  document.addEventListener("keydown", checkKeyPressed, false);

  function checkKeyPressed(event) {
    // C note
    if (event.keyCode === 90) {
      $("#demo").text("C note");
      theSong = theSongButton;
      indexOfArray = 0;
      $(".highlight").removeClass("highlight");
      song();
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
    } else if (event.keyCode === 188) {
      $("#demo").text("C note");
    };
  }
});


var notesMaryLamb       = ["e-3", "d-3", "c-3", "d-3", "e-3", "e-3", "e-3", "d-3", "d-3", "d-3", "e-3", "g-3", "g-3", "e-3", "d-3", "c-3", "d-3", "e-3", "e-3", "e-3", "e-3", "d-3", "d-3", "e-3", "d-3", "c-3", "c-3"];
var notesFrereJacques   = ["c-3", "d-3", "e-3", "c-3", "c-3", "d-3", "e-3", "c-3", "e-3", "f-3", "g-3", "e-3", "f-3", "g-3"];
var notesNBC            = ["c-3", "a-3", "f-3"];
var notesBrunoMars      = ["a-3", "f-3", "g-3", "d-3", "c-3", "b-3", "g-3", "e-3", "c-3", "a-3", "c-3"]
var notesThreeBlindMice = ["e-3", "d-3", "c-3", "e-3", "d-3", "c-3", "g-3", "f-3", "e-3", "g-3", "f-3", "e-3", "d-3", "c-3"];
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

// $(document).on("keypress", ".highlight", function() {
//   $(".highlight").removeClass("highlight");
//   // console.log("working")
//   indexOfArray++
//   song()
// });

console.log("----->", notesBrunoMars[notesBrunoMars.length - 1])

function songWatch() {
var notesMaryLamb       = ["e-3", "d-3", "c-3", "d-3", "e-3", "e-3", "e-3", "d-3", "d-3", "d-3", "e-3", "g-3", "g-3", "e-3", "d-3", "c-3", "d-3", "e-3", "e-3", "e-3", "e-3", "d-3", "d-3", "e-3", "d-3", "c-3", "c-3"];
var index = 0;
setInterval(function() {
  $(".highlight").removeClass("highlight");
  console.log(notesMaryLamb[index++ % notesMaryLamb.length]);
  var element = document.getElementById("note-" + notesMaryLamb[index++ % notesMaryLamb.length]);
      element.classList.add("highlight");
}, 100)
};
// function songWatch() {
//   var notesMaryLamb       = ["e-3", "d-3", "c-3", "d-3", "e-3", "e-3", "e-3", "d-3", "d-3", "d-3", "e-3", "g-3", "g-3", "e-3", "d-3", "c-3", "d-3", "e-3", "e-3", "e-3", "e-3", "d-3", "d-3", "e-3", "d-3", "c-3", "c-3"];
//   for (i = 0; i < notesMaryLamb.length; i++) {
//     $(".highlight").removeClass("highlight");
//     var element = document.getElementById("note-" + notesMaryLamb[i]);
//     element.classList.add("highlight");

//     setTimeout(songWatch, 1000);
//   }
// };






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

  input = WebMidi.inputs[0];

  input.addListener('noteon', "all",
  
  function (event) {
  console.log((event.note.name + "-" + event.note.octave).toLowerCase());

  $("#demo").text(event.note.name + " note");

  if ((event.note.name + "-" + event.note.octave).toLowerCase() === "c-3") {
  playNote(whiteKeys[0])
  } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "c#-3") {
    playNote(blackKeys[0])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "d-3") {
    playNote(whiteKeys[1])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "d#-3") {
    playNote(blackKeys[1])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "e-3") {
    playNote(whiteKeys[2])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "f-3") {
    playNote(whiteKeys[3])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "f#-3") {
    playNote(blackKeys[2])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "g-3") {
    playNote(whiteKeys[4])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "g#-3") {
    playNote(blackKeys[3])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "a-3") {
    playNote(whiteKeys[5])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "a#-3") {
    playNote(blackKeys[4])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "b-3") {
    playNote(whiteKeys[6])
    } else if ((event.note.name + "-" + event.note.octave).toLowerCase() === "c-4") {
    playNote(whiteKeys[7])
    }







  });

  }

});

