const bullet = document.querySelector(".bullet");
const rocket = document.querySelector(".rocket");
const chickenContainer = document.querySelector(".chickenContainer");
for (let i = 0; i < 100; i++) {
    let chicken = document.createElement("img");
    chicken.src = "./Images/Chicken.png";
    chicken.classList.add("chicken");
    chickenContainer.appendChild(chicken);
    if (
        chicken.getBoundingClientRect().bottom >
        chickenContainer.getBoundingClientRect().bottom
    ) {
        chicken.remove();
        break;
    }
}

let posX = 0;
let posY = 0;
let lastBulletTime = 0;
const bulletInterval = 300;

window.addEventListener("keydown", (e) => {
    const currentTime = Date.now();

    if (e.code === "Space" && currentTime - lastBulletTime >= bulletInterval) {
        lastBulletTime = currentTime;

        let bullet = document.createElement("img");
        bullet.classList.add("bullet");
        bullet.src = "./Images/Bullet.png";
        rocket.append(bullet);

        let posB = 50;

        let bInterval = setInterval(() => {
            posB += 10;
            bullet.style.bottom = posB + "px";

            if (posB >= window.innerHeight) {
                clearInterval(bInterval);
                bullet.remove();
            }
        }, 10);
    }

    if (e.code === "ArrowLeft") {
        posX -= 10;
        rocket.style.left = posX + "px";
        if (posX < 0) {
            posX = 0;
        }
    }

    if (e.code === "ArrowRight") {
        posX += 10;
        rocket.style.left = posX + "px";
        if (posX > window.innerWidth - 150) {
            posX = window.innerWidth - 150;
        }
    }

    if (e.code === "ArrowUp") {
        posY += 10;
        rocket.style.bottom = posY + "px";

        if (posY > window.innerHeight - 150) {
            posY = window.innerHeight - 150;
        }
    }
    if (e.code === "ArrowDown") {
        posY -= 10;
        rocket.style.bottom = posY + "px";

        if (posY < 30) {
            posY = 20;
        }
    }
});

window.addEventListener("resize", () => {
    for (let i = 0; i < 100; i++) {
        let chicken = document.createElement("img");
        chicken.src = "./Images/Chicken.png";
        chicken.classList.add("chicken");
        chickenContainer.appendChild(chicken);
        if (
            chicken.getBoundingClientRect().bottom >
            chickenContainer.getBoundingClientRect().bottom
        ) {
            chicken.remove();
            removeChicken();
            break;
        }
    }
});

removeChicken = () => {
    let chickens = document.querySelectorAll(".chicken");
    for (let i = 0; i < chickens.length; i++) {
        if (
            chickens[i].getBoundingClientRect().bottom >
            chickenContainer.getBoundingClientRect().bottom
        ) {
            chickens[i].remove();
        }
    }
};
