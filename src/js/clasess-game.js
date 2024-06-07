import imgGame from '../img/goblin.png'
const fields = document.querySelectorAll(".fields");
const img = document.createElement("img");


let number = 0; 

img.src = imgGame;
fields[number].append(img);


export class gameClass {
    constructor() {
        this.dead = document.getElementById('dead');
        this.lost = document.getElementById("lost");
        //let counterLost = +this.lost.textContent;
    }
    init() {
      fields.forEach((el) => el.addEventListener("click", function() {
        let imgGoblin = document.querySelector("img");
        let counterDead = this.dead.textContent;
        if(el.contains(imgGoblin)) {
         counterDead++;
         this.dead.textContent = counterDead;
          console.log("картинка есть");
        } else {
          console.log("картинка нет");
        }
      }))
    }
}





























