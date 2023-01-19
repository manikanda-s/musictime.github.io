const audio = new Audio();
let instrumentId = 0;
let sounds = ["drum/drum", "piano/key0", "guitar/guitar", "violin/violin", "saxophone/saxo", "flute/flute", "cello/cello", "trumpet/trumpet"];
let keyId = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];  
let instrumentNames = ["drum", "piano", "guitar", "violin", "saxophone", "flute", "cello", "trumpet"]; 
let k;

instrumentNameActive(instrumentId);

function play(n){
    // audio.src = `/sounds/drum/drum${n}.mp3`;     // /sounds/drum/drum1.mp3
    // audio.src = `/sounds/piano/key0${n}.mp3`;    // /sounds/piano/key01.mp3
    audio.src = `./sounds/${sounds[instrumentId] + n}.mp3`;
    audio.currentTime = 0;
    audio.play();    
    k = keyId[n-1];
    document.getElementById(k).style.transform = "scale(0.95)"; 
    setTimeout(scaleNormal, 250); 
}


window.addEventListener("keydown", pnt);
function pnt(event){
    k = event.key;  
    let n = keyId.indexOf(event.key);
    play(n+1);
    document.getElementById(event.key).style.transform = "scale(0.95)"; 
    setTimeout(scaleNormal, 250); 
}

function scaleNormal(){
    document.getElementById(k).style.transform = "scale(1)";
}

function instrumentNameActive(n){
    document.getElementById(instrumentNames[n]).classList.add("fond");
    for (let i=0; i<instrumentNames.length; i++){
        if (n == i){
            continue;
        }
        document.getElementById(instrumentNames[i]).classList.remove("fond");
    }
}

function changeSound(n){
    instrumentId = n;
    instrumentNameActive(n);
}


function tell(){
    alert("Press 'Q'");
}
// setTimeout(tell, 5000);


var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
