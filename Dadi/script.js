var giocatore = Math.ceil( Math.random()*6);

var computer = Math.ceil( Math.random()*6);

document.getElementById("giocatore").innerHTML =
"Valore giocatore: " + giocatore;

document.getElementById("computer").innerHTML =
"Valore computer: " + computer;

if(giocatore > computer) {
    alert("Vince il giocatore");
} else if(computer > giocatore) {
    alert("Vince il computer");
} else {
    alert("Pareggio");
}

var ricarica = document.getElementById('ricarica');

ricarica.addEventListener("click",
    function() {
        location.reload();
    }
);