applauseEl = document.querySelector(".applause");
soundApplauseEl = document.querySelector(".sound-applause");
booEl = document.querySelector(".boo");
soundBooEl = document.querySelector(".sound-boo");
gaspEl = document.querySelector(".gasp");
soundGaspEl = document.querySelector(".sound-gasp");
tadaEl = document.querySelector(".tada");
soundTadaEl = document.querySelector(".sound-tada");
victoryEl = document.querySelector(".victory");
soundVictoryEl = document.querySelector(".sound-victory");
wrongEl = document.querySelector(".wrong");
soundWrongEl = document.querySelector(".sound-wrong");

applauseEl.addEventListener("click", (e) => {
  stopAllSounds();
  soundApplauseEl.play();
});
booEl.addEventListener("click", (e) => {
  stopAllSounds();
  soundBooEl.play();
});
gaspEl.addEventListener("click", (e) => {
  stopAllSounds();
  soundGaspEl.play();
});
tadaEl.addEventListener("click", (e) => {
  stopAllSounds();
  soundTadaEl.play();
});
victoryEl.addEventListener("click", (e) => {
  stopAllSounds();
  soundVictoryEl.play();
});
wrongEl.addEventListener("click", (e) => {
  stopAllSounds();
  soundWrongEl.play();
});

function stopAllSounds() {
  soundApplauseEl.pause();
  soundApplauseEl.currentTime = 0;
  soundBooEl.pause();
  soundBooEl.currentTime = 0;
  soundGaspEl.pause();
  soundGaspEl.currentTime = 0;
  soundTadaEl.pause();
  soundTadaEl.currentTime = 0;
  soundVictoryEl.pause();
  soundVictoryEl.currentTime = 0;
  soundWrongEl.pause();
  soundWrongEl.currentTime = 0;
}
