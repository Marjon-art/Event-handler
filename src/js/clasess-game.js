import imgGame from '../img/goblin.png'
const fields = document.querySelectorAll(".fields");
const img = document.createElement("img");
const imgGoblin = document.querySelector(".imgGoblin");


let number = 0; 

img.src = imgGame;
fields[number].append(img);


export class gameClass {
    constructor() {
        this.dead = document.getElementById('dead');
        this.lost = document.getElementById("lost");
    }
    init() {
      fields.forEach((el) => el.addEventListener("click", function() {
        if(el.contains(imgGoblin)) {
          fields[number].append(img);
        }
      }))
    }
  
}





























