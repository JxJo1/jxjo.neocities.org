const playlist = [
  ["https://files.catbox.moe/ncc7uk.mp3", "Spectator Channel (Spectate) - Super Bomb Survival"],
  ["https://files.catbox.moe/b10c15.mp3", "Ocean - Pilotredsun"],
  ["https://files.catbox.moe/b1mgr9.mp3", "Warsaw - Pilotredsun"]
];

function playMusic() {
  let randomArray = playlist[Math.floor(Math.random() * playlist.length)];
  let musictag = document.getElementById("musictag");

  console.log(randomArray[Math.floor(Math.random() * randomArray.length)]);
};
document.addEventListener("click", playMusic);
