import API from "./api.js";
import UI from "./ui.js";

// Oluşturulan class'ların örneğini al
const api = new API();
const ui = new UI();

// ! Sayfa yüklendiğinde api isteği at
document.addEventListener("DOMContentLoaded", async () => {
  // Loader'ı render et
  ui.renderLoader();
  //     Api isteği at
  const songs = await api.getPopular();

  ui.renderCards(songs);
});

// ! Formun gönderilmesini izle
ui.form.addEventListener("submit", async (e) => {
  // Sayfa yenilenmesini engelle
  e.preventDefault();

  // Input içerisindeki değere eriş ve içerisindeki boşlukları kaldır
  const query = e.target[0].value.trim();

  // Eğer query değeri yoksa uyarı ver
  if (!query) {
    alert("Lütfen geçerli bir arama işlemi gerçekleştiriniz!!");

    return; // Fonksiyonu durdur
  }

  // Loader render et
  ui.renderLoader();

  // Arama sonucunda title'ı güncelle
  ui.sectionTitle.textContent = `${query} için sonuçlar`;

  // Aratılan kelime ile api isteği at
  const songs = await api.getSearchMusic(query);

  // Api'dan gelen veri ile arayüzü renderla

  ui.renderCards(songs);
});

//! musicList kısmındaki tıklanmaları izle

ui.musicList.addEventListener("click", (e) => {
  // play ikonuna tıklandı mı ?
  if (e.target.className == "play") {
    // console.log(e.target.parentElement.parentElement);
    // Tıklanılan elemanın kapsayıcısı olan card elemanına eriş
    const card = e.target.closest(".card");

    // Card'a atanan data özelliklerine eriş
    const songData = card.dataset;

    // Player kısmını render et
    ui.renderPlayer(songData);
  }
});
