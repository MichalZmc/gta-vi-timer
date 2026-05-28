let currentLang = localStorage.getItem('gta6_lang') || 'pl';

function updateCountdown() {
  const endDate = new Date("2026-11-19T00:00:00");
  const now = new Date();
  const diff = endDate - now;

  const mainHeader = document.getElementById("main-title");
  const releaseDateBox = document.getElementById("release-date-box");
  const comingSoonDivider = document.getElementById("coming-soon-divider");
  const preorderBadge = document.getElementById("preorder-badge");

  if (diff <= 0) {
    if (releaseDateBox) releaseDateBox.style.display = "none";
    if (comingSoonDivider) comingSoonDivider.style.display = "none";
    if (preorderBadge) preorderBadge.style.display = "none";
    
    if (currentLang === 'pl') {
      if (mainHeader) mainHeader.innerText = "GRAND THEFT AUTO VI JUŻ DOSTĘPNE!";
    } else {
      if (mainHeader) mainHeader.innerText = "GRAND THEFT AUTO VI IS NOW AVAILABLE!";
    }

    if (!document.getElementById("buy-container")) {
      const text = currentLang === 'pl' 
        ? "Wejdź do <span class='vice-title'>Vice City</span> już dziś i rozpocznij nową przygodę z <span class='gta-title'>Grand Theft Auto</span>." 
        : "Enter <span class='vice-title'>Vice City</span> today and begin your new adventure with <span class='gta-title'>Grand Theft Auto</span>.";
      const btnText = currentLang === 'pl' ? "Kup teraz" : "Buy now";

      document.getElementById("countdown").innerHTML = `
        <div id="buy-container" class="buy-now-container">
          <p id="buy-text">${text}</p>
          <a href="https://www.rockstargames.com/VI" target="_blank" class="buy-now-link">
            <button class="buy-now-btn" id="buy-btn-text">${btnText}</button>
          </a>
        </div>
      `;
    }
    return;
  }

  if (mainHeader) {
    mainHeader.innerText = mainHeader.getAttribute(`data-${currentLang}`);
  }

  document.querySelectorAll('#release-date-box .label-small, #release-date-box .date-text').forEach(el => {
    const translatedText = el.getAttribute(`data-${currentLang}`);
    if (translatedText) el.innerText = translatedText;
  });

  document.querySelectorAll('#coming-soon-divider .divider-text').forEach(el => {
    const translatedText = el.getAttribute(`data-${currentLang}`);
    if (translatedText) el.innerText = translatedText;
  });

  document.querySelectorAll('#preorder-badge .preorder-text').forEach(el => {
    const translatedText = el.getAttribute(`data-${currentLang}`);
    if (translatedText) el.innerText = translatedText;
  });

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  document.querySelectorAll('#countdown .label, #msln-sign .default-text').forEach(el => {
    const translatedText = el.getAttribute(`data-${currentLang}`);
    if (translatedText) el.innerText = translatedText;
  });

  document.querySelectorAll('#countdown .label, #msln-sign .default-text, .author-disclaimer').forEach(el => {
    const translatedText = el.getAttribute(`data-${currentLang}`);
    if (translatedText) el.innerText = translatedText;
  });
}

function toggleLangDropdown(event) {
  event.stopPropagation();
  const dropdown = document.querySelector(".lang-dropdown");
  dropdown.classList.toggle("open");
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('gta6_lang', lang);
  document.getElementById('active-lang').innerHTML = `${lang.toUpperCase()} <span class="lang-arrow">▾</span>`;
  
  const buyText = document.getElementById('buy-text');
  const buyBtnText = document.getElementById('buy-btn-text');
  if (buyText && buyBtnText) {
    buyText.innerHTML = lang === 'pl' 
      ? "Wejdź do <span class='vice-title'>Vice City</span> już dziś i rozpocznij nową przygodę z <span class='gta-title'>Grand Theft Auto</span>." 
      : "Enter <span class='vice-title'>Vice City</span> today and begin your new adventure with <span class='gta-title'>Grand Theft Auto</span>.";
    buyBtnText.innerText = lang === 'pl' ? "Kup teraz" : "Buy now";
  }

  updateCountdown();
  document.querySelector(".lang-dropdown").classList.remove("open");
}

window.addEventListener("click", () => {
  const dropdown = document.querySelector(".lang-dropdown");
  if (dropdown && dropdown.classList.contains("open")) {
    dropdown.classList.remove("open");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('active-lang').innerHTML = `${currentLang.toUpperCase()} <span class="lang-arrow">▾</span>`;
  updateCountdown();
});

updateCountdown();
setInterval(updateCountdown, 1000);

const images = [
  'images/Artwork/Boobie_Ike_landscape.webp', 'images/Artwork/Brian_Heder_landscape.webp', 'images/Artwork/Cal_Hampton_landscape.webp',
  'images/Artwork/DreQuan_Priest_landscape.webp', 'images/Artwork/Jason_and_Lucia_01_landscape.webp', 'images/Artwork/Jason_and_Lucia_02_landscape.webp',
  'images/Artwork/Jason_and_Lucia_Motel_landscape.webp', 'images/Artwork/Raul_Bautista_landscape.webp', 'images/Artwork/Real_Dimez_landscape.webp',

  'images/People/Boobie Ike/Boobie_Ike_01.webp', 'images/People/Boobie Ike/Boobie_Ike_02.webp', 'images/People/Boobie Ike/Boobie_Ike_03.webp',
  'images/People/Boobie Ike/Boobie_Ike_04.webp',
  'images/People/Brian Heder/Brian_Heder_01.webp', 'images/People/Brian Heder/Brian_Heder_02.webp', 'images/People/Brian Heder/Brian_Heder_03.webp',
  'images/People/Brian Heder/Brian_Heder_04.webp',
  'images/People/Cal Hampton/Cal_Hampton_01.webp', 'images/People/Cal Hampton/Cal_Hampton_02.webp', 'images/People/Cal Hampton/Cal_Hampton_03.webp',
  'images/People/Cal Hampton/Cal_Hampton_04.webp',
  'images/People/DreQuan Priest/DreQuan_Priest_01.webp', 'images/People/DreQuan Priest/DreQuan_Priest_02.webp', 'images/People/DreQuan Priest/DreQuan_Priest_03.webp',
  'images/People/DreQuan Priest/DreQuan_Priest_04.webp',
  'images/People/Jason Duval/Jason_Duval_01.webp', 'images/People/Jason Duval/Jason_Duval_02.webp', 'images/People/Jason Duval/Jason_Duval_03.webp',
  'images/People/Jason Duval/Jason_Duval_04.webp', 'images/People/Jason Duval/Jason_Duval_05.webp', 'images/People/Jason Duval/Jason_Duval_06.webp',
  'images/People/Lucia Caminos/Lucia_Caminos_01.webp', 'images/People/Lucia Caminos/Lucia_Caminos_02.webp', 'images/People/Lucia Caminos/Lucia_Caminos_03.webp',
  'images/People/Lucia Caminos/Lucia_Caminos_04.webp', 'images/People/Lucia Caminos/Lucia_Caminos_05.webp', 'images/People/Lucia Caminos/Lucia_Caminos_06.webp',
  'images/People/Raul Bautista/Raul_Bautista_01.webp', 'images/People/Raul Bautista/Raul_Bautista_02.webp', 'images/People/Raul Bautista/Raul_Bautista_03.webp',
  'images/People/Raul Bautista/Raul_Bautista_04.webp',
  'images/People/Real Dimez/Real_Dimez_01.webp', 'images/People/Real Dimez/Real_Dimez_02.webp', 'images/People/Real Dimez/Real_Dimez_03.webp',
  'images/People/Real Dimez/Real_Dimez_04.webp',

  'images/Places/Ambrosia/Ambrosia_01.webp', 'images/Places/Ambrosia/Ambrosia_02.webp', 'images/Places/Ambrosia/Ambrosia_03.webp',
  'images/Places/Ambrosia/Ambrosia_04.webp', 'images/Places/Ambrosia/Ambrosia_05.webp',
  'images/Places/Grassrivers/Grassrivers_01.webp', 'images/Places/Grassrivers/Grassrivers_02.webp', 'images/Places/Grassrivers/Grassrivers_03.webp',
  'images/Places/Grassrivers/Grassrivers_04.webp',
  'images/Places/Leonida Keys/Leonida_Keys_01.webp', 'images/Places/Leonida Keys/Leonida_Keys_02.webp', 'images/Places/Leonida Keys/Leonida_Keys_03.webp',
  'images/Places/Leonida Keys/Leonida_Keys_04.webp', 'images/Places/Leonida Keys/Leonida_Keys_05.webp',
  'images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_01.webp', 'images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_02.webp', 'images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_03.webp',
  'images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_04.webp', 'images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_05.webp', 'images/Places/Mount Kalaga National Park/Mount_Kalaga_National_Park_06.webp',
  'images/Places/Port Gellhorn/Port_Gellhorn_01.webp', 'images/Places/Port Gellhorn/Port_Gellhorn_02.webp', 'images/Places/Port Gellhorn/Port_Gellhorn_03.webp',
  'images/Places/Port Gellhorn/Port_Gellhorn_04.webp', 'images/Places/Port Gellhorn/Port_Gellhorn_05.webp',
  'images/Places/Vice City/Vice_City_01.webp', 'images/Places/Vice City/Vice_City_02.webp', 'images/Places/Vice City/Vice_City_03.webp',
  'images/Places/Vice City/Vice_City_04.webp', 'images/Places/Vice City/Vice_City_05.webp', 'images/Places/Vice City/Vice_City_06.webp'
];

let bg1 = document.getElementById('background1');
let bg2 = document.getElementById('background2');
let showingBg1 = true;
let availableImages = [];

function getNextImage() {
  if (availableImages.length === 0) {
    availableImages = [...images];
  }
  const randomIndex = Math.floor(Math.random() * availableImages.length);
  const selectedImage = availableImages.splice(randomIndex, 1)[0];
  return selectedImage;
}

let currentImage = getNextImage();
if (bg1) {
  bg1.style.backgroundImage = `url('${currentImage}')`;
  bg1.classList.add('fade-active');
}

function changeBackground() {
  const nextImage = getNextImage();
  const activeBg = showingBg1 ? bg2 : bg1;
  const passiveBg = showingBg1 ? bg1 : bg2;

  if (activeBg && passiveBg) {
    activeBg.style.backgroundImage = `url('${nextImage}')`;
    activeBg.classList.add('fade-active');
    passiveBg.classList.remove('fade-active');
  }
  showingBg1 = !showingBg1;
}

setInterval(changeBackground, 10000);

function openModal(videoUrl) {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('trailerFrame');
  if (frame && modal) {
    frame.src = videoUrl + "?autoplay=1";
    modal.style.display = "flex";
  }
}

function closeModal() {
  const modal = document.getElementById('videoModal');
  const frame = document.getElementById('trailerFrame');
  if (frame && modal) {
    frame.src = "";
    modal.style.display = "none";
  }
}

const trailerModal = document.getElementById('trailer-modal');
const trailerVideo = document.getElementById('trailer-video');
const trailerClose = document.getElementById('trailer-close');

function showTrailer(url) {
  if (trailerVideo && trailerModal) {
    trailerVideo.src = url;
    trailerModal.classList.add('show');
  }
}

function closeTrailer() {
  if (trailerModal && trailerVideo) {
    trailerModal.classList.remove('show');
    setTimeout(() => {
      trailerVideo.src = "";
    }, 400);
  }
}

if (trailerClose) {
  trailerClose.addEventListener('click', closeTrailer);
}

const videoModal = document.getElementById('videoModal');

if (videoModal) {
  videoModal.addEventListener('click', (event) => {
    if (event.target === videoModal) {
      closeModal();
    }
  });
}

if (trailerModal) {
  trailerModal.addEventListener('click', (event) => {
    if (event.target === trailerModal) {
      closeTrailer();
    }
  });
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (videoModal && videoModal.style.display === "flex") {
      closeModal();
    }
    if (trailerModal && trailerModal.classList.contains('show')) {
      closeTrailer();
    }
  }
});

const scrollContainer = document.querySelector('.scroll-container');
const scrollArrow = document.getElementById('scrollArrow');

if (scrollContainer && scrollArrow) {
  scrollContainer.addEventListener('scroll', () => {
    const scrollTop = scrollContainer.scrollTop;
    const scrollHeight = scrollContainer.scrollHeight;
    const clientHeight = scrollContainer.clientHeight;
    const maxScroll = scrollHeight - clientHeight;
    const fadeZone = clientHeight; 
    let opacity = 1;
    
    if (maxScroll - scrollTop <= fadeZone) {
      opacity = (maxScroll - scrollTop) / fadeZone;
    }

    if (opacity < 0) opacity = 0;
    if (opacity > 1) opacity = 1;

    scrollArrow.style.opacity = opacity;
    if (opacity === 0) {
      scrollArrow.style.visibility = 'hidden';
    } else {
      scrollArrow.style.visibility = 'visible';
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const trailerCards = document.querySelectorAll('.trailer-card');
  
  trailerCards.forEach(card => {
    const videoId = card.getAttribute('data-video-id');
    const wrapper = card.querySelector('.thumbnail-wrapper');
    
    if (videoId && wrapper) {
      wrapper.style.backgroundImage = `url('https://img.youtube.com/vi/${videoId}/hqdefault.jpg')`;
    }
    
    card.addEventListener('click', () => {
      const embedUrl = `https://www.youtube.com/embed/${videoId}?disablekb=1&rel=0&enablejsapi=1&autoplay=1&playsinline=1&modestbranding=1`;
      showTrailer(embedUrl);
    });
  });
});

function openAuthorModal() {
  const modal = document.getElementById('authorModal');
  if (modal) {
    modal.classList.remove('author-closing');
    modal.style.display = 'flex';
  }
}

function closeAuthorModal(event) {
  const modal = document.getElementById('authorModal');
  if (!modal) return;

  const isCloseClick = event && (event.target.id === 'authorModal' || event.target.classList.contains('author-close') || event.target.tagName === 'SPAN');
  
  if (!event || isCloseClick) {
    modal.classList.add('author-closing');
    
    setTimeout(() => {
      modal.style.display = 'none';
      modal.classList.remove('author-closing');
    }, 300);
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const authorModal = document.getElementById('authorModal');
    if (authorModal && authorModal.style.display === "flex" && !authorModal.classList.contains('author-closing')) {
      closeAuthorModal();
    }
  }
});