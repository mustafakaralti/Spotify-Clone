class UI {
  // Kurucu metot
  constructor() {
    // Html'deki elemanlara eriş
    this.musicList = document.querySelector("#music-list");
    this.form = document.querySelector("form");
    this.sectionTitle = document.querySelector("#section-title");
    this.player = document.querySelector(".player");
  }

  // Api'dan gelen veriler ile arayüzü renderlayan fonksiyon
  renderCards(songs) {
    // Arayüzü sıfırla
    this.musicList.innerHTML = "";

    // Dışarıdan verilen şarkı verisinin içerisindeki her eleman için bir Html oluştur

    songs.forEach((song) => {
      // Bir tane card elemanı oluştur
      const card = document.createElement("div");

      // Oluşturulan card elemanına class ata
      card.className = "card";

      // * Card elemanına şarkıya ait resim,title,şarkıcı veya grup adı,mp3 bilgilerini ata
      card.dataset.title = song.title;
      card.dataset.subtitle = song.subtitle;
      card.dataset.image = song.images.coverarthq;
      card.dataset.mp3 = song.hub.actions[1].uri;

      // Oluşturulan,class atanan elemanın Html'ini belirle
      card.innerHTML = `              <figure>
                <img
                  src="${song.images.coverarthq}"
                  alt="card-image"
                />
                <div class="play">
                  <i class="bi bi-play-fill"></i>
                </div>
              </figure>

              <div class="card-info">
                <h4>${song.title}</h4>
                <h4>${song.subtitle}</h4>
              </div>`;

      // Oluşturulan,class atanan,Html içeriği belirlenen elemanı arayüze ekle
      this.musicList.appendChild(card);
    });
  }

  // Loader render eden fonksiyon
  renderLoader() {
    this.musicList.innerHTML = `
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`;
  }

  // Player kısmını dinamik şekilde renderlayan fonksiyon
  renderPlayer(data) {
    // Arayüzdeki player kısmını dinamik şekilde renderla
    this.player.innerHTML = ` <div class="info">
        <img
          src="${data.image}"
          alt="music-image"
          id="music-image"
        />
        <div>
          <h5 id="music-title">${data.title}</h5>
          <p id="artist-title">${data.subtitle}</p>
        </div>
      </div>
   
      <audio
        src="${data.mp3}"
        id="music-sound"
        controls
        autoplay
      ></audio>

  
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`;

    // Audio elemanına eriş
    const audioElement = document.querySelector("#music-sound");

    // Audio elemanın oynatılma ve durdurulma olaylarını takip et
    audioElement.addEventListener("play", () => {
      // Animasyon eklenecek elemana eriş
      const image = document.querySelector("#music-image");

      // Erişilen resim'e animasyon ekle-çıkar
      image.classList.add("animate");
    });
    audioElement.addEventListener("pause", () => {
      // Animasyon eklenecek elemana eriş
      const image = document.querySelector("#music-image");

      // Erişilen resim'e animasyon ekle-çıkar
      image.classList.remove("animate");
    });
  }
}

export default UI;
