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
