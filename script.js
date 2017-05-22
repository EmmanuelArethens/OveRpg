    let Tracer = {
        hp: 150
    };

    let Pharah = {
        hp: 200
    };

    document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
    document.querySelector("#pharahhp").textContent = Pharah.hp + " /200 hp";

    let pulsegun = document.querySelector("#gun").addEventListener("click", function() {
        Pharah.hp -= 20;
        console.log(Pharah.hp);
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
    })


    let rocketlauncher = document.querySelector("#rocket").addEventListener("click", function() {
        Tracer.hp -= 15;
        console.log(Tracer.hp);
        document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
    })

    document.querySelector("#jouer").addEventListener("click", function() {
        document.querySelector("#menu").style.display = 'none';
    })