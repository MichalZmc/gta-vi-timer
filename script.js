let currentLang = localStorage.getItem('gta6_lang') || 'pl';

function updateCountdown() {
  const endDate = new Date("2026-11-19T00:00:00");
  const now = new Date();
  const diff = endDate - now;

  const mainHeader = document.getElementById("main-title");
  const releaseDateBox = document.getElementById("release-date-box");
  const comingSoonDivider = document.getElementById("coming-soon-divider");
  const preorderBadge = document.getElementById("preorder-badge");
  const preorderSection = document.getElementById("preorder-section");
  const countdownDiv = document.getElementById("countdown");

  if (mainHeader) {
    mainHeader.innerText = mainHeader.getAttribute(`data-${currentLang}`);
  }

  document.querySelectorAll('[data-pl]').forEach(el => {
    const translatedText = el.getAttribute(`data-${currentLang}`);
    if (translatedText) {
        if (!el.classList.contains('lang-dropbtn')) {
            el.innerText = translatedText;
        }
    }
  });

  if (diff <= 0) {
    if (releaseDateBox) releaseDateBox.style.display = "none";
    if (comingSoonDivider) comingSoonDivider.style.display = "none";
    if (preorderBadge) preorderBadge.style.display = "none";
    if (preorderSection) preorderSection.style.display = "none";

    document.body.classList.add("released");

    const translations = {
      en: {
        title: "GRAND THEFT AUTO VI NOW AVAILABLE!",
        description: "Grand Theft Auto VI is now available. Enter a world full of action, opportunities, and unforgettable adventures.",
        button: "BUY NOW"
      },
      pl: {
        title: "GRAND THEFT AUTO VI JUŻ DOSTĘPNE!",
        description: "Grand Theft Auto VI jest już dostępne. Wejdź do świata pełnego akcji, możliwości i niezapomnianych przygód.",
        button: "KUP TERAZ"
      }
    };

    const t = translations[currentLang] || translations.pl;

    if (mainHeader) {
      mainHeader.innerText = t.title;
    }

    if (countdownDiv) {
      countdownDiv.innerHTML = `
        <div id="premium-buy-section" class="official-premium-card">
          <div class="glow-layer"></div>
          <img src="images/Cover_art/Official_Cover_Art_square.webp" alt="GTA VI Cover" class="cover-art">
          <div class="preorder-info">
            <h3 style="margin-bottom: 10px;">Grand Theft Auto VI</h3>
            <p style="margin-bottom: 20px;">${t.description}</p>
            <a href="https://www.rockstargames.com/VI" class="premium-buy-btn">${t.button}</a>
          </div>
        </div>
      `;
    }
  } else {
    document.body.classList.remove("released");

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
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
  'images/Artwork/Jason_and_Lucia_03_landscape.webp', 'images/Artwork/Jason_and_Lucia_Motel_landscape.webp', 'images/Artwork/Raul_Bautista_landscape.webp',
  'images/Artwork/Real_Dimez_landscape.webp',

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
  'images/Places/Vice City/Vice_City_04.webp', 'images/Places/Vice City/Vice_City_05.webp', 'images/Places/Vice City/Vice_City_06.webp',

  'images/Ultimate_Edition/ULTIMATE_EDITION_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_ELECTRIC_FANG_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_ELECTRIC_FANG_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_ELECTRIC_FANG_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_ELECTRIC_FANG_04.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_GOODTIME_GEAR_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_GROTTI_CHEETAH_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_GROTTI_CHEETAH_02.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_GROTTI_CHEETAH_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_GROTTI_CHEETAH_04.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_HAWK_AND_LITTLE_MORGAN_REVOLVERS_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_HAWK_AND_LITTLE_MORGAN_REVOLVERS_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_ONE_EYED_WILLIE_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_ONE_EYED_WILLIE_02.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_ONE_EYED_WILLIE_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_PTT_STORE_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_RIDEOUT_CUSTOMS_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_RIDEOUT_CUSTOMS_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_RIDEOUT_CUSTOMS_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SAFEHOUSE_VEHICLES_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SARAS_SALON_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_SARAS_SALON_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SARAS_SALON_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SQUALO_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_SQUALO_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SQUALO_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_SQUALO_04.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_STOCK_305_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_STOCK_305_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_STOCK_305_03.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_STOCK_305_04.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VAPID_BUGGY_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VAPID_BUGGY_02.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_VAPID_BUGGY_03.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VAPID_BUGGY_04.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VAPID_GANADO_RETRO_BUILD_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_VICE_CITY_STYLE_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VICE_CITY_STYLE_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VICE_CITY_STYLE_03.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_VICE_CITY_STYLE_04.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_VICE_CITY_STYLE_05.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_WEAPON_VARIANTS_01.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_01.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_02.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_03.webp', 
  'images/Ultimate_Edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_04.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_05.webp', 'images/Ultimate_Edition/ULTIMATE_EDITION_WYMAN_CAR_COLLECTION_06.webp', 

  'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_01.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_02.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_01.webp', 
  'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_02.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_03.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_04.webp', 
  'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_EXCLUSIVE_LOOKS_05.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_01.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_02.webp', 
  'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_03.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_PACK_VAPID_STANIER_04.webp', 'images/Vintege_Vice_City/VINTAGE_VICE_CITY_WEAPON_PATTERN_01.webp'
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

const grid = document.querySelector('.preorder-grid');
const indicators = document.querySelectorAll('.indicator');

if (grid) {
  grid.addEventListener('scroll', () => {
    const scrollLeft = grid.scrollLeft;
    const cardWidth = grid.offsetWidth * 0.9;
    const index = Math.round(scrollLeft / cardWidth);

    indicators.forEach((ind, i) => {
      if (i === index) {
        ind.classList.add('active');
      } else {
        ind.classList.remove('active');
      }
    });
  });
}