const userMail = prompt("Inserisci la tua email");

const authorizedMails = ["kratos84@live.com", "darkemperor@hotmail.it", "aloyarrow93@gmail.com", "darkside89@outlook.it"];

let authorization = false;

for(let i = 0; i < authorizedMails.length; i++) {
    if (authorizedMails[i] === userMail) {
        authorization = true;
    }
}

if(authorization){
    console.log("Accesso consentito");
} else {
    console.log("Accesso non autorizzato");
}