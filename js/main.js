const cards = document.querySelector(".cards");
const loading = document.querySelector(".loading");
const API_URL = "https://fakestoreapi.com/users";

async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => createCard(res))
    .catch((error) => console.log(error))
    .finally(() => {
      loading.style.display = "none";
    });
}
fetchData(API_URL);

function createCard(data) {
  console.log(data[0]);
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
     <button class = "btn-cart">Cart</button>
    </div>
    </div>
    `;
    fragment.appendChild(card);
  });
  cards.appendChild(fragment);
}

const setWish = async (id) => {
  let data = await fetch(`${API_URL}/${id}`);
  data
    .json()
    .then((res) => {
      let wishes = JSON.parse(localStorage.getItem("wishes")) || [];
      let index = wishes.findIndex((el) => el.id === +id);
      if (index < 0) {
        localStorage.setItem("wishes", JSON.stringify([...wishes, res]));
      }
    })
    .catch((error) => console.log(error));
};

cards.addEventListener("click", (e) => {
  let { name } = e.target;
  if (name === "user-wish") {
    let id = e.target.closest("[data-id]").dataset.id;
    setWish(id);
  }
});

const navbarCollection = document.querySelector(".a_text");
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", () => {
  navbarCollection.classList.toggle("show");
});
