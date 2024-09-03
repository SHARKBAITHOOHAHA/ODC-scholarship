const bullet = document.querySelector(".chiekcenContainer");
const rocket = document.querySelector(".rocket");
const chickenContainer = document.querySelector(".chickenContainer");

for (let i = 0; i < 60; i++) {
    let chicken = document.createElement("img");
    chicken.src= "./Images/Chicken.png"
    chicken.classList.add("chicken");
    chickenContainer.appendChild(chicken);
}

let posX = 0;
let posY = 0;
window.addEventListener("keydown", (e) => {
    if (e.code === " ") {
        let bullet = document.createElement('img')
        bullet.classList.add('bullet')
        bullet.src='./Images/Bullet.png'
        rocket.append(bullet)

        let posB = 0;
        
        let bInterval = setInterval(() => {
            posB +=10;
            bullet.style.bottom = posB + 'px'
        }, 10);
        
    }

    if (e.code === "ArrowLeft") {
        posX-=10;
        rocket.style.left = posX + "px";
        if(posX < 0){
            posX = 0;
        }
    }

    if (e.code === "ArrowRight") {
        posX+=10;
        rocket.style.left = posX+ "px";
        if(posX > window.innerWidth - 150){
            posX = window.innerWidth - 150;
        }
    }
    
    if (e.code === "ArrowUp") {
        posY+=10;
        rocket.style.bottom = posY + "px";

        if(posY > window.innerHeight - 150){
            posY = window.innerHeight - 150;
        }
    }
    if (e.code === "ArrowDown") {
        posY-=10;
        rocket.style.bottom = posY + "px";

        if(posY < 30){
            posY = 20;
        }
    }
});
