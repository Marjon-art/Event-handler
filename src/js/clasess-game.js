import imgGame from '../img/goblin.png'




export class gameClass {
    constructor() {
        this.dead = document.getElementById('dead');
        this.lost = document.getElementById("lost");
        this.fields = document.querySelectorAll(".fields");
        this.number = 0; 
       }
    init() {
     fields.forEach((el) => el.addEventListener("click", () => {
      img.src = imgGame;
      fields[this.number].append(img);
       if(el.contains(imgGame)) {
          this.dead.textContent++;
        } else {
          this.lost.textContent++;
          if(this.dead === 10) {
            alert("Вы победили");
            this.dead = 0;
            this.lost = 0;
          }
          if(this.lost === 5) {
            alert("Вы проиграли");
            this.dead = 0;
            this.lost = 0;

          }
        }
      }))
    }
    start() {
      function getRandom(max) {
        let randomA = Math.floor(Math.random() * max);
        while (randomA === this.number) {
          randomA = Math.floor(Math.random() * max);
              } 
              this.number = randomA; 
              return this.number; 
            
            } 
            getRandom(16);
            fields[this.number].append(img);  
    }
}






























