let nome = prompt("Inserisci il tuo nome")
let cognome = prompt("Inserisci il tuo cognome")
let colore = prompt("Inserisci il tuo colore preferito")

let password = `${nome}-${cognome}-${colore}-2023`;

console.log("La nuova password è: ", password);

document.getElementById("password").innerText = password;