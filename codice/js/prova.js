
//alert("Grazie per il tempo che stai dedicando al mio progetto personale! Questo è uno dei progetti presenti nel mio portfolio frontend.\n\nSi tratta di un sito-curriculum, dove racconto in modo divertente e interattivo il mio percorso lavorativo prima di approdare allo sviluppo web.\n\nTi invito a giudicare le tecniche costruttive e le scelte di impostazione, più che l'effetto grafico in sé. In ogni pagina troverai una breve spiegazione tecnica di ciò che ho realizzato, cercando di usare il maggior numero di strumenti possibile.\n\nTrovi nella navbar il mio CV storico da scaricare e la sezione contatti, se vorrai scrivermi un feedback.\n\nBuona navigazione!");

//////////////////////////////////////////////////////dimensiono il testo del titolo in modo che sia sempre perfettamante coerente con il contenuto
function aggiornaTitolo() {
  const titolo = document.getElementById("nome");
 if (window.innerWidth < 300) {
    titolo.innerHTML = "S S";
  } else if (window.innerWidth < 500) {
    titolo.innerHTML = "Simone S";
  } else if (window.innerWidth < 1740) {
    titolo.innerHTML = "Simone Sugliano";
  } else {
    titolo.innerHTML = "Sito Curriculum Sugliano Simone";
  }
}

window.addEventListener("resize", aggiornaTitolo);
window.addEventListener("load", aggiornaTitolo);
/////////////////////////////////////////////////// FINE dimensiono il testo del titolo in modo che sia sempre perfettamante coerente con il contenuto   

///////////////////////////////////////////////////  dimensiono il testo del link che da smartphone porta alla pagina EXTRA

function aggiornalink() {
  const link = document.getElementById("linkSezioneNascostaSmartphone");

  if (window.innerWidth >= 700) {
    link.innerHTML = "Vedi la pagina link dedicata";
  } else if (window.innerWidth >= 500) {
    link.innerHTML = "Vedi la pagina dedicata";
  } else if (window.innerWidth >= 200) {
  link.innerHTML = "Vedi pagina";
}
else if (window.innerWidth >= 150) {
  link.innerHTML = "Vedi";
}
else if (window.innerWidth >= 50) {
  link.innerHTML = "V";
}

}
window.addEventListener("resize", aggiornalink);
window.addEventListener("load", aggiornalink);

///////////////////////////////////////////////////  FINE  dimensiono il testo del link che da smartphone gira alla pagina dove ho messo le colonne che qui sono nascoste in modo che sia sempre perfettamante coerente con il contenuto  --> linkSezioneNascostaSmartphone

function cambiaMeteo(link) {
    if (link) {
      document.getElementById("meteoFrame").src = link;
    }
  }



let currentSlide = 0;

/////////////////////////////////////////////////////////////////CAROSELLO HOME
function updateSlide() {
  const slide = document.querySelector('.carosello-slide');
  slide.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  const total = document.querySelectorAll('.carosello-slide img').length;
  currentSlide = (currentSlide + 1) % total;
  updateSlide();
}

function prevSlide() {
  const total = document.querySelectorAll('.carosello-slide img').length;
  currentSlide = (currentSlide - 1 + total) % total;
  updateSlide();
}

setInterval(() => {
  nextSlide();
}, 4000); // cambia immagine ogni 4 secondi 










///////////////////////////////////////////////////  funzione che copia numero di telefono
function copyPhone() {
  const phone = document.getElementById('phone').innerText;
  navigator.clipboard.writeText(phone).then(function() {
    // Mostra il messaggio "Copiato!"
    document.getElementById('msg').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('msg').style.display = 'none';
    }, 1200);
  }).catch(function(err) {
    alert('Errore nella copia');
  });
}

///////////////////////////////////////////////////  funzione che copia mail
function copyMail() {
  const mail = document.getElementById('mail').innerText;
  navigator.clipboard.writeText(mail).then(function() {
    document.getElementById('msg-mail').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('msg-mail').style.display = 'none';
    }, 1200);
  }).catch(function(err) {
    alert('Errore nella copia');
  });
}
///////////////////////////////////////////////////  funzione che copia contatto telegram
function copyTelegram() {
  const tg = document.getElementById('telegram').innerText;
  navigator.clipboard.writeText(tg).then(function() {
    document.getElementById('msg-telegram').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('msg-telegram').style.display = 'none';
    }, 1200);
  }).catch(function(err) {
    alert('Errore nella copia');
  });
}
///////////////////////////////////////////////////  funzione che copia numero whatsapp
function copyWhatsapp() {
  const numero = "393923688757";
  navigator.clipboard.writeText(numero).then(function() {
    document.getElementById('msg-wa').style.display = 'inline';
    setTimeout(() => {
      document.getElementById('msg-wa').style.display = 'none';
    }, 1200);
  }).catch(function(err) {
    alert('Errore nella copia');
  });
}





/////////////////////////////////////////////////// /////////////////////////////////////////modale che gestisce tutte le pagine////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* function chiudiModale() {
  document.getElementById("modale").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const modale = document.getElementById("modale");
  const chiudi = document.getElementById("countdownChiudi");

  let contatore = 10;
  chiudi.textContent = contatore;

  overlay.style.display = "block";
  modale.style.display = "block";

  const intervallo = setInterval(() => {
    contatore--;
    if (contatore > 0) {
      chiudi.textContent = contatore;
    } else {
      clearInterval(intervallo);
      chiudi.textContent = "X";
      chiudi.disabled = false;
      chiudi.classList.add("attiva");

      // 👉 ora che è attivo, aggiungiamo l’event listener
      chiudi.addEventListener("click", chiudiModale);
    }
  }, 1000);
});*/
  
//////////////////////////////////////////////////// ///////////////////////////////////////// fine modale che gestisce tutte le pagine////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
