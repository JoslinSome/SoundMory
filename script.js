//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
var pattern=[0,0,0,0,0,0,0,0,0];
var chances=3;
var progress = 0; 
var guessCounter = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var time;
var chosenCount=0;
var btnClickCount=0;
var percentage=0
var seconds;
var progBar=document.getElementById("progText");
var audio = new Audio('https://cdn.glitch.com/4319f091-1f99-4fcd-aa92-93e2e5618955%2FclockSound.mp3?v=1616553189122')

function startGame(){
  //initialize game variables
  progress = 0;
  chances=3;
  gamePlaying = true;
  createPattern()
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  document.getElementById("chances").classList.remove("hidden");
  playClueSequence()

}

function stopGame(){
  gamePlaying=false;
  audio.pause();
  document.getElementById("Notif").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("chances").classList.add("hidden");
  progBar.style.display = "none";
  clearInterval(time);

}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
  document.getElementById("progText").style.display = "none";
  progBar.style.display = "none";

}
function winGame(){
  stopGame();
  alert("Congratuations, you win!");
}
//Creates random pattern values
function createPattern(){
  for(let i=0; i<pattern.length; i++)
    {
      pattern[i]=Math.floor(Math.random()*6+1);
    }
}
function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}
function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }``

  // add game logic here
  // correct guess logic
  if(btn==pattern[guessCounter])
    {
      if(guessCounter== progress && guessCounter!=pattern.length-1)
        {
          progress++;
          if(progress>2 && progress%2 ==0) // speed up every 2 incrementations of progress
            {
              clueHoldTime= clueHoldTime-200;   
            }
          // reset initial condtions
          clearInterval(time);
          audio.pause();
          progBar.style.display = "none";
          progBar.style.width="0px";
          document.getElementById("Notif").classList.add("hidden");
          playClueSequence();

        }
      else{
        
        guessCounter++;
        if(guessCounter==pattern.length)
          {
            winGame()
          }
      }
                  
    }
  // incorrect answer logic
  else{
    chances--;
    if(chances!=0)
    {
      //reset initial conditions
      audio.pause();
      audio.currentTime = 0
      document.getElementById("Notif").classList.add("hidden");
      alert("Wrong answer. Replaying clue")      
      clearInterval(time);    
      progBar.style.display = "none";
      progBar.style.width="0px";
    }
    document.getElementById("chances").textContent= chances+" attempts left";

    if(chances==0)
    {
      loseGame()
    }
    else
    {
      playClueSequence()
    }
  }
    
}
function playClueSequence(){
  guessCounter = 0
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
    chosenCount=0;
  }
  
}
// timer for progressbar logic
function startTimer(duration) {
    var timer = duration, seconds;
     time=setInterval(function () {
        
       seconds = parseInt(timer % 11, 10);      

        if(seconds==0)
          {
            clearInterval(time);
            loseGame(); 
          }

        if (--timer == 0) {
                      
        }
    }, 1000);
}


function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
  
}
// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 200.2,
  6: 150.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone(btn) 
     
  },len)
  
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(btn){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
   
   if(pattern[progress]==btn && chosenCount==progress)
    {
        progBar.style.display = "block";
        startTimer(1000);
        audio.currentTime=0
        audio.play();
        document.getElementById("Notif").classList.remove("hidden");

    }
  chosenCount++;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)