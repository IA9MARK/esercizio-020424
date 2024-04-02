// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
function cambiaTitoloH1() {
    document.querySelector("h1").innerHTML = 'Nuovo Negozio AMG';
};

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
function cambiaBackgroundColor()  {
    document.querySelector("body").style.backgroundColor = 'red';
};

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function cambiaIndirizzo()  {
    document.querySelector("footer").textContent= 'Via Sparano, 5  località Bari';
};

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella

function aggiungiStileAmazon() {

    const link = document.querySelectorAll('.amazonLink');
    Link.forEach(function(amazonLink){
        amazonLink.classList.add('amazonLink');
    }

    );
};

// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine

function ModificaClasseimg () {
    let immagine =
    document.querySelectorAll("img");
    immagine.forEach(function(img){
        img.classList.toggle('Classe');
    });
};

// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

function CambiaColorePrezzo() {
    let tariffa = document.querySelectorAll('.prezzo');
    tariffa.forEach(function(prezzo){
        prezzo.classList.toggle('prezzo-giallo');
    })
};
