class API {
  // Kurucu metot
  constructor() {
    this.options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "463cb6bdb3msh544272941ec8857p1bb2a9jsn24372257dfc0",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };
    this.baseURL = `https://shazam.p.rapidapi.com`;
  }

  // Popüler müzikleri alan fonksiyon
  async getPopular() {
    try {
      // Api'a istek at
      const response = await fetch(
        `${this.baseURL}/search?term=neffex`,
        this.options
      );

      // Gelen veriyi json formatından js nesnesine çevir
      const data = await response.json();

      // Api'dan gelen veriyi fonksiyon çağırıldığında geri dönder
      return data.tracks.hits.map((item) => item.track);
    } catch (error) {
      alert(`Hata: ${error}`);

      return [];
    }
  }

  // Aratılan müzikleri alan fonksiyon
  async getSearchMusic(query) {
    try {
      // Api'a istek at
      const response = await fetch(
        `${this.baseURL}/search?term=${query}`,
        this.options
      );

      // Api'dan gelen veriyi js nesnesine çevir
      const songs = await response.json();

      // Api'dan gelen veriyi fonksiyon çağırıldığında geri dönder
      return songs.tracks.hits.map((item) => item.track);
    } catch (error) {
      alert(`Hata: ${error}`);

      return [];
    }
  }
}

export default API;
