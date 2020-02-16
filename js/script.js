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

  $("#note-c").on("click", function() {
    $("#demo").text("C");
  });

  // ...
  $("#note-d-flat").on("click", function() {
    $("#demo").text("Db");
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


// var notesThreeBlindMice = [e, d, c, e, d, c, g, f, f, e, g, f, f, e];
// console.log(notesThreeBlindMice[3])

// function songFunction() {
//       var notesThreeBlindMice = [e, d, c, e, d, c, g, f, f, e, g, f, f, e];
//       var tmbID = document.getElementById("tbmButton");
      
//       document.getElementById("note-c").classList.add('highlightNote');

// // after song is chosen, the first key (e) turns red
//   document.getElementById("note-" + notesThreeBlindMice[i]).addEventListener("click", function(){ 

// }); 

for (i = 0; i < notesThreeBlindMice.length; i++) {
    notesThreeBlindMice[i]
    }


function songFunction() {

  var notesNBC = [c, a, f];
    var notesThreeBlindMice = [e, d, c, e, d, c, g, f, f, e, g, f, f, e];
    var notesFrereJacques = [c, d, e, c, c, d, e, c, e, f, g, e, f, g];

    document.getElementById("note-e").classList.remove("white");
    document.getElementById("note-e").classList.add("highlight");

    $("#note-" + notesThreeBlindMice[1]).click(function () {
        document.getElementById("note-d").classList.remove("white");
        document.getElementById("note-d").classList.add("highlight");
    });

}; 


// if player hits red key, then the loop highlights the next note

// if the wrong key is played, the key does not move forward

//     a.addEventListener("click", function () { goToNextQuestion(a.innerText); });

      // for (i = 0; i < notesThreeBlindMice.length; i++) {
      //   notesThreeBlindMice[i]
      // }

