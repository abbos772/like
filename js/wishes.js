const cards = document.querySelector(".cards");
const API_URL = "https://fakestoreapi.com/users";

let wishes = JSON.parse(localStorage.getItem("wishes"));
console.log(wishes);

function createCard(data) {
  let fragment = document.createDocumentFragment();
  data.forEach((user) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div data-id=${user.id}>
      <div class = "id">
      <h3>${user.id}</h3>
      </div>
       <div class = "user"></div>
      <div class = "names">
      <h2>${user.name.firstname}</h2>
      <h2>${user.name.lastname}</h2>
      </div>
      <div class = "email">
      <h3>${user.phone}</h3>
      <h3>${user.email}</h3>
      <h3>${user.address.city}</h3>
      </div>
      <div class = "wishes">
       <button name = "user-wish" class = "btn-like">Like</button>
       <button class = "btn-cart"><a href="/index.html">Back</a></button>
      </div>
      </div>
      `;
    fragment.appendChild(card);
  });
  cards.appendChild(fragment);
}
createCard(wishes);
