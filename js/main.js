const inputMusic = document.querySelector("#input");
const btnPlay = document.querySelector(".btnPlay")

const divA = document.querySelector("#keyA");
const divC = document.querySelector("#keyC");
const divD = document.querySelector("#keyD");

const divE = document.querySelector("#keyE");
const divQ = document.querySelector("#keyQ");
const divS = document.querySelector("#keyS");

const divW = document.querySelector("#keyW");
const divX = document.querySelector("#keyX");
const divZ = document.querySelector("#keyZ");



document.addEventListener ('keypress', (e) => {
    if(e.key == "a") {
        divA.classList.add("active");
        playSound("../assets/sounds/keya.wav");
        
        setTimeout(() => {
            divA.classList.remove("active");    
        }, 100);
    }
    if(e.key == "c") {
        divC.classList.add("active");
        playSound("../assets/sounds/keyc.wav");
        
        setTimeout(() => {
            divC.classList.remove("active");    
        }, 100);
    }
    if(e.key == "d") {
        divD.classList.add("active");
        playSound("../assets/sounds/keyd.wav");
        
        setTimeout(() => {
            divD.classList.remove("active");    
        }, 100);
    }
    if(e.key == "e") {
        divE.classList.add("active");
        playSound("../assets/sounds/keye.wav");
        
        setTimeout(() => {
            divE.classList.remove("active");
        },100)
    }
    if(e.key == "q") {
        divQ.classList.add("active");
        playSound("../assets/sounds/keyq.wav");
        
        setTimeout(() => {
            divQ.classList.remove("active");    
        }, 100);
    }
    if(e.key == "s") {
        divS.classList.add("active");
        playSound("../assets/sounds/keys.wav");
        
        setTimeout(() => {
            divS.classList.remove("active");    
        }, 100);
    }
    if(e.key == "w") {
        divW.classList.add("active");
        playSound("../assets/sounds/keyw.wav");
        
        setTimeout(() => {
            divW.classList.remove("active");    
        }, 100);
    }
    if(e.key == "x") {
        divX.classList.add("active");
        playSound("../assets/sounds/keyx.wav");
        
        setTimeout(() => {
            divX.classList.remove("active");    
        }, 100);
        }
    if(e.key == "z") {
        divZ.classList.add("active");
        playSound("../assets/sounds/keyz.wav");
        
        setTimeout(() => {
            divZ.classList.remove("active");    
        }, 100);
    }
    
  });
divA.addEventListener("click", () => {
    divA.classList.add("active");
    playSound("../assets/sounds/keya.wav");
    
    setTimeout(() => {
        divA.classList.remove("active");    
    }, 100);
})
divC.addEventListener("click", () => {
    divC.classList.add("active");
    playSound("../assets/sounds/keyc.wav");
    
    setTimeout(() => {
        divC.classList.remove("active");    
    }, 100);
})
divD.addEventListener("click", () => {
    divD.classList.add("active");
    playSound("../assets/sounds/keyd.wav");
    
    setTimeout(() => {
        divD.classList.remove("active");    
    }, 100);
})
divE.addEventListener("click", () => {
    divE.classList.add("active");
    playSound("../assets/sounds/keye.wav");
    
    setTimeout(() => {
        divE.classList.remove("active");    
    }, 100);
})
divQ.addEventListener("click", () => {
    divQ.classList.add("active");
    playSound("../assets/sounds/keyq.wav");
    
    setTimeout(() => {
        divQ.classList.remove("active");    
    }, 100);
})
divS.addEventListener("click", () => {
    divS.classList.add("active");
    playSound("../assets/sounds/keys.wav");
    
    setTimeout(() => {
        divS.classList.remove("active");    
    }, 100);
})
divW.addEventListener("click", () => {
    divW.classList.add("active");
    playSound("../assets/sounds/keyw.wav");
    
    setTimeout(() => {
        divW.classList.remove("active");    
    }, 100);
})
divX.addEventListener("click", () => {
    divX.classList.add("active");
    playSound("../assets/sounds/keyx.wav");
    
    setTimeout(() => {
        divX.classList.remove("active");    
    }, 100);
})
divZ.addEventListener("click", () => {
    divZ.classList.add("active");
    playSound("../assets/sounds/keyz.wav");
    
    setTimeout(() => {
        divZ.classList.remove("active");    
    }, 100);
})


function playSound(sound) {
    const Sound = new Audio(sound);
    Sound.play()
}

function playMusic() {
    const letters = inputMusic.value.split("");
    console.log(inputMusic.value.split(""));
    
    

    for (let i = 0; i < letters.length; i++) {
        console.log(i)

        if(letters[i] === "a") {
            playSound("../assets/sounds/keya.wav")
        }
        
        if(letters[i] === "c") {
            playSound("../assets/sounds/keyc.wav")
        }

        if(letters[i] === "d") {
            playSound("../assets/sounds/keyd.wav")
        }

        if(letters[i] === "e") {
            playSound("../assets/sounds/keye.wav")
        }

        if(letters[i] === "q") {
            playSound("../assets/sounds/keyq.wav")
        }

        if(letters[i] === "s") {
            playSound("../assets/sounds/keys.wav")
        }

        if(letters[i] === "z") {
            playSound("../assets/sounds/keyz.wav")
        }

        if(letters[i] === "x") {
            playSound("../assets/sounds/keyx.wav")
        }

        if(letters[i] === "w") {
            playSound("../assets/sounds/keyw.wav")
        }
        }
}

