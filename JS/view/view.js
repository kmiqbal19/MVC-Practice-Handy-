class View {
  searchButton = document.querySelector(".search-button");
  _data;
  _parentElement = document.querySelector("#main-body");
  getQuery() {
    return document.querySelector(".search-input").value;
  }
  addHandler(handler) {
    this.searchButton.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
  clear() {
    document.querySelector(".search-input").value = "";
  }
  generateMarkup(data) {
    this._data = data;
    const markup = this._data.map((data) => {
      return `<section class="results">
  <div class="results__id">
    <p>${data.id}</p>
  </div>
  <div class="results__title">
    <p>${data.title}</p>
  </div>
</section>`;
    });
    return markup.join("");
  }
  render(data) {
    const html = this.generateMarkup(data);
    return this._parentElement.insertAdjacentHTML("afterbegin", html);
  }
}
export default new View();
