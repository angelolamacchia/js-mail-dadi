var mail = ["angelo", "francesco@gmail.com", "giovanni@gmail.com", "marco@live.it", "alice@virgilio.it"];

console.log(mail);

var utente = prompt('Inserire mail per accedere');

if (mail == utente) {
    alert("Utente accettato");
} else {
    alert("Accesso negato");
}

console.log(utente);