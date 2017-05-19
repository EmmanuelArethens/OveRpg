    
let Tracer = {
    hp : 150
};

let Pharah = {
    hp : 200
};

let pulsegun = document.querySelector("#gun").addEventListener("click", function(){
                Pharah.hp -= 20;
                console.log(Pharah.hp);
                document.querySelector("#pharahhp").textContent = Pharah.hp;
})

let rocketlauncher = document.querySelector("#rocket").addEventListener("click", function(){
                Tracer.hp -= 15;
                console.log(Tracer.hp);
                document.querySelector("#tracerhp").textContent = Tracer.hp;
})

document.querySelector("#jouer").addEventListener("click",function(){
    document.querySelector("#menu").style.display = 'none';
})

document.querySelector("#tracerhp").textContent = Tracer.hp;
document.querySelector("#pharahhp").textContent = Pharah.hp;

