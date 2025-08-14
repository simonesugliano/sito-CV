## Altervista – Pubblicazione online e problemi reali

---

[Visita il sito online](https://sitocv.altervista.org)

---


#### Il sito è stato pubblicato su Altervista, un servizio gratuito che consente di caricare e visualizzare online pagine HTML/CSS/JS senza bisogno di configurazioni avanzate. L’obiettivo era testare la resa del sito su dispositivi reali e rendere facilmente condivisibile il progetto tramite link.

### Caricamento con FileZilla: un’avventura a parte

Per l’upload ho utilizzato FileZilla, client FTP essenziale per gestire file e cartelle sul server.
Durante il processo ho affrontato alcuni problemi classici ma educativi:

trascinamenti errati che hanno spostato intere cartelle (con momenti di panico inclusi),

cache del browser che mostrava versioni vecchie anche dopo la sostituzione dei file,

necessità di cancellare manualmente i contenuti dal server per forzare il refresh completo del sito.

---

### Il caso zoom (e come l’ho risolto)

Una volta online, mi sono accorto che alcune pagine – soprattutto la homepage – rompevano il layout quando lo zoom della finestra veniva ridotto.
Questo bug mi ha permesso di rientrare nel codice e ottimizzare il CSS in modo più accurato: adesso la home regge bene fino al 33% di zoom, e l’esperienza visiva è più coerente.

---

### Nota:  
questa parte del progetto non è solo una vetrina, ma anche un piccolo racconto dei problemi pratici che si incontrano pubblicando un sito nel mondo reale. E se oggi funziona, è anche grazie a quei piccoli disastri.
