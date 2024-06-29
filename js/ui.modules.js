"strict mood"
import { getDetails } from "./details.modules.js";
import { response } from "./games.modules.js";
let detailsData = document.querySelector('#detailsData')
let details = document.querySelector('.details');
let games = document.querySelector('.games')
export function setActiveClass() {
  let links = document.querySelectorAll('.navbar-nav a');
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      for (let j = 0; j < links.length; j++) {
        links[j].classList.remove('active');
      }
      this.classList.add('active');
    })
  }
}
export function displayGames(response) {
  let cartona = ``
  // let id;
  for (let i = 0; i < response.length; i++) {
    // id=response[i].id
    cartona += `
    <div class="col">
    <div class="card bg-transparent" id="gameCard">
<div class="card-body">
    <figure>
        <img src=${response[i].thumbnail}  class="w-100" alt="game-image"/>
    </figure>
    <div class="d-flex justify-content-between text-white">
        <h3 class="h6 ">${response[i].title}</h3>
        <span class="badge text-bg-primary p-2">Free</span>
     </div>
     <p class="card-text small text-center opacity-50 text-white">
     ${response[i].short_description.split(" ").slice(0, 8)}
     </p>
</div>
<footer class="card-footer small hstack justify-content-between">
   
    <span class="badge badge-color">${response[i].genre}</span>
    <span class="badge badge-color">${response[i].platform}</span>

 </footer>
    </div>
</div>
    `
  }

  document.getElementById('gameData').innerHTML = cartona;
  showDetails()
}
function showDetails() {
  let cards = document.querySelectorAll('.col');
  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
      details.classList.remove('d-none')
      games.classList.add('d-none')
      getDetails(response[i].id)
    })
  }
  closeDetails()
}
function closeDetails() {
  let close = document.querySelector('#btnClose')
  //click button
  close.addEventListener('click', function () {
    details.classList.add('d-none')
    games.classList.remove('d-none')
detailsData.innerHTML=` 
<div class="loading">
            <span class="loader"></span>
           </div>
`

  })
  // click escape in keyboard
  document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape') {
      details.classList.add('d-none')
      games.classList.remove('d-none')
detailsData.innerHTML=` 
<div class="loading">
            <span class="loader"></span>
           </div>
`
    }
  })
}

export function displayDetails(responseDetailsData) {
  
  let box = ``;
  box = `
     <div class="col-md-4">
            <img src=${responseDetailsData.thumbnail} class="w-100" alt="game phota"/>
        </div>
        <div class="col-md-8">
            <h3>Title:${responseDetailsData.title}</h3>
            <p>
                category:
                <span class="badge text-bg-info">${responseDetailsData.genre}</span>
            </p>
             <p>
                platform:
                <span class="badge text-bg-info">${responseDetailsData.platform}</span>
            </p>
            <p>
                Status:
                <span class="badge text-bg-info">${responseDetailsData.status}</span>
            </p>
           
            <p class="small">
               ${responseDetailsData.description}
            </p>
            <button class=" btn btn-outline-warning "> <a class="text-white text-decoration-none" target="_blank" href=${responseDetailsData.game_url}>Show Game</a></button>
        </div>
    </div>
    `
  detailsData.innerHTML = box;
}