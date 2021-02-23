var mail = ["angelo@live.it", "francesco@gmail.com", "giovanni@gmail.com", "marco@live.it", "alice@virgilio.it"];

console.log(mail);

var utente = prompt('Inserire mail per accedere');

console.log(utente);

for (var i=0; i < 5; i++) {
    if (mail[i] == utente) {
        alert("Utente accettato");
        break;
    } else {
        alert("Accesso negato");
        break;
    }
};

// break interrompe il ciclo