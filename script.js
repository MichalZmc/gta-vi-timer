function updateCountdown() {
    const endDate = new Date("2026-11-19T00:00:00");
    const now = new Date();
    const diff = endDate - now;
  
    if (diff <= 0) {
      document.getElementById("countdown").innerHTML = "<h2>Już nadszedł ten dzień!</h2>";
      clearInterval(interval);
      return;
    }
  
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
  
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
  
  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
  
  const images = [
  'images/Lucia_Caminos_04.jpg',
  'images/Jason_Duval_05.jpg',
  'images/Jason_and_Lucia_01_landscape.jpg',
  'images/Jason_and_Lucia_02_landscape.jpg',
  'images/Jason_and_Lucia_Motel_landscape.jpg',
  'images/Leonida_Keys_01.jpg',
  'images/Port_Gellhorn_02.jpg',
  'images/Vice_City_01.jpg',
  'images/Vice_City_02.jpg',
  'images/Vice_City_03.jpg',
  'images/Vice_City_04.jpg',
  'images/Vice_City_05.jpg',
  'images/Vice_City_06.jpg',
  'images/Vice_City_07.jpg',
  'images/Vice_City_08.jpg',
  'images/Vice_City_09.jpg'
];

let previousIndex = -1;
let bg1 = document.getElementById('background1');
let bg2 = document.getElementById('background2');
let showingBg1 = true;

function getRandomIndex(exclude) {
  let index;
  do {
    index = Math.floor(Math.random() * images.length);
  } while (index === exclude);
  return index;
}

// Pierwsze losowanie
let currentIndex = getRandomIndex(-1);
bg1.style.backgroundImage = `url('${images[currentIndex]}')`;
bg1.classList.add('fade-active');
previousIndex = currentIndex;

function changeBackground() {
  currentIndex = getRandomIndex(previousIndex);
  previousIndex = currentIndex;

  const nextImage = images[currentIndex];
  const activeBg = showingBg1 ? bg2 : bg1;
  const passiveBg = showingBg1 ? bg1 : bg2;

  activeBg.style.backgroundImage = `url('${nextImage}')`;
  activeBg.classList.add('fade-active');
  passiveBg.classList.remove('fade-active');

  showingBg1 = !showingBg1;
}

function openModal(videoUrl) {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('trailerFrame');
  frame.src = videoUrl + "?autoplay=1";
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('trailerFrame');
  frame.src = "";
  modal.style.display = "none";
}

const trailerModal = document.getElementById('trailer-modal');
const trailerVideo = document.getElementById('trailer-video');
const trailerClose = document.getElementById('trailer-close');

function showTrailer(url) {
  trailerVideo.src = url;
  trailerModal.classList.add('show');
}

function closeTrailer() {
  trailerModal.classList.remove('show');
  setTimeout(() => {
    trailerVideo.src = ""; // wyczyść źródło po ukryciu
  }, 400); // dopasowane do CSS transition
}

trailerClose.addEventListener('click', closeTrailer);

setInterval(changeBackground, 10000);