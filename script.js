    let Tracer = {
        hp: 150,
        ult: 0,
    };

    let Pharah = {
        hp: 200,
        ult: 0,
    };

    document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
    document.querySelector("#pharahhp").textContent = Pharah.hp + " /200 hp";
    document.querySelector("#tracerult").textContent = Tracer.ult + "%";
    document.querySelector("#pharahult").textContent = Pharah.ult + "%";

    let pulsegun = document.querySelector("#gun").addEventListener("click", function() {
        Pharah.hp -= 20;
        Tracer.ult += 10;
        console.log(Tracer.ult);
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
        document.querySelector("#tracerult").textContent = Tracer.ult + "%";
        if (Pharah.hp <= 0) {
            alert('Tracer win');
        }

    })

    let bomb = document.querySelector("#bomb").addEventListener("click", function() {
        Pharah.hp -= 100;
        console.log(Pharah.hp);
        document.querySelector("#pharahhp").textContent = Pharah.hp + " /200 hp";
        if (Pharah.hp <= 0) {
            alert('Tracer win');
        }
    })


    let rocketlauncher = document.querySelector("#rocket").addEventListener("click", function() {
        Tracer.hp -= 30;
        console.log(Tracer.hp);
        document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
        if (Tracer.hp <= 0) {
            alert('Pharah win');
        };
    })

    let rocketbarrage = document.querySelector("#barrage").addEventListener("click", function() {
        Tracer.hp -= 150;
        console.log(Tracer.hp);
        document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
        if (Tracer.hp <= 0) {
            alert('Pharah win');
            Tracer.hp = 0;
        };
    })


    let recall = document.querySelector("#recall").addEventListener("click", function() {
        Tracer.hp += 30;
        console.log(Tracer.hp);
        document.querySelector("#tracerhp").textContent = Tracer.hp + " /150 hp";
        if (Tracer.hp >= 130) {
            Tracer.hp = 120;
        }
    })

    document.querySelector("#jouer").addEventListener("click", function() {
        document.querySelector("#menu").style.display = 'none';
    })

    if (Tracer.ult > 99) {

    }