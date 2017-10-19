let Tracer = {
    hp: 150,
    ult: 0,
};

let Pharah = {
    hp: 200,
    ult: 0,
};



function TracerBomb() {};

function TracerRecall() {};

function TracerBlinkattack() {};

function PharahRocketlauncher() {};

function PharahConcussiveblast() {};

function PharahJump() {};

function PharahRocketbarrage() {};


function intro() {
    document.querySelector("#jouer").addEventListener("click", function() {
        document.querySelector("#menu").style.display = 'none';
    });
}

function newgame() {
    Tracer.hp = 150;
    Pharah.hp = 200;
}

function tracerwin () {
     if (Pharah.hp <= 0) {
        alert('Tracer win o/');
    }
}


function pharahwin() {
    if (Tracer.hp <= 0) {
        alert('Pharah win o/');
    }    
}

intro() ;

function TracerPulsegun(attaquant, defenseur) {
    console.log('test')
    defenseur.hp -= 20;
    attaquant.ult += 10;
    console.log(attaquant.ult);
    console.log(defenseur.hp);
    document.querySelector('.traceranim').style.animation = "tracerpulsegun 1s steps(1)";
    setTimeout(function() {
        document.querySelector('#tirs').style.display = 'block';
    }, 410);
    setTimeout(function() {
        document.querySelector('#tirs').style.display = 'none';
    }, 1000)
    document.querySelector('.traceranim').addEventListener("animationend", function() {
        document.querySelector('.traceranim').style.animationName = "";
    })
    document.querySelector("#pharahhp").textContent = Pharah.hp + " /200 hp";
    tracerwin();
};

document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
document.querySelector("#pharahhp").textContent = Pharah.hp + " /200 hp";
document.querySelector("#tracerult").textContent = Tracer.ult + "%";
document.querySelector("#pharahult").textContent = Pharah.ult + "%";

document.querySelector("#gun").addEventListener("click", function() {
    TracerPulsegun(Tracer, Pharah);
});

document.querySelector("#bomb").addEventListener("click", function() {
    Pharah.hp -= 100;
    console.log(Pharah.hp);
    document.querySelector("#pharahhp").textContent = Pharah.hp + " /200 hp";
    tracerwin();
})


document.querySelector("#rocket").addEventListener("click", function() {
    Tracer.hp -= 30;
    console.log(Tracer.hp);
    document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
    pharahwin();
})

document.querySelector("#barrage").addEventListener("click", function() {
    Tracer.hp -= 150;
    console.log(Tracer.hp);
    document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
    pharahwin();
})


document.querySelector("#recall").addEventListener("click", function() {
    Tracer.hp += 30;
    console.log(Tracer.hp);
    document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
    if (Tracer.hp >= 130) {
        Tracer.hp = 120;
    }
})



