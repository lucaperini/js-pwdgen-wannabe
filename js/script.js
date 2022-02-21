const nome_utente = prompt("Scrivi il tuo nome");
const cognome_utente = prompt("Scrivi il tuo Cognome");
const colore_utente = prompt("Quale è il tuo colore preferito?");
let codice=21;
document.getElementById('tua-password').innerHTML= nome_utente + cognome_utente + colore_utente + `${codice}`;

