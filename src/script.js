const btn = document.querySelector(".theme-controller");
const html = document.querySelector("html");
const cards = document.querySelector(".cards");
const loader = document.querySelector(".loader");

btn.addEventListener("click", () => {
  if (html.dataset.theme === "dark") {
    html.dataset.theme = "light";
  } else {
    html.dataset.theme = "dark";
  }
});

const USER_API = "https://dummyjson.com/products";

async function getProducts(api) {
  let response = await fetch(api);
  response
    .json()
    .then((res) => createCard(res.products))
    .catch((err) => err)
    .finally(() => {
      loader.style.display = "flex";
    });
}

getProducts(USER_API);

function createCard(products) {
  products.forEach((e) => {
    let card = document.createElement("div");
    card.classList.add("card", "bg-base-100", "w-96", "shadow-xl");
    card.innerHTML = ` <figure class = "cursor-pointer w-30">
    <img src="${e.images[0]}" alt="" class = "">
  </figure>
  <div class="card-body">
    <h2 class="card-title">
     ${e.title}
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p>${e.description}</p>
    <div class="card-actions justify-end align-top ">
      <div class="badge badge-outline">${e.category}</div>
      <div class="badge badge-outline">${e.brand}</div>


      <div class="dropdown dropdown-end">
      <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
        <div class="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
    </div>
    </div>
  </div>`;
    cards.appendChild(card);
  });
}
