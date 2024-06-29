"strict mood"
import { setActiveClass } from "./ui.modules.js";
import { getGames } from "./games.modules.js";

setActiveClass();

let links = document.querySelectorAll('.navbar-nav a');
for(let i = 0 ; i<links.length ; i++){
  links[i].addEventListener('click',function(){
    getGames(links[i].innerHTML)
  })
}
getGames()
document.addEventListener('keydown' , function(e){
  console.log(e.key);
})