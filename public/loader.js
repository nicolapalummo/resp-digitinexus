// Boot-screen globale: nasconde il contenuto prerenderizzato (destinato ai
// crawler) finché React non monta la UI reale, evitando il flash di HTML
// semplificato su ogni pagina. Caricato SINCRONO nel <head>, quindi la classe
// è attiva prima del primo paint. I crawler senza JS non eseguono questo file
// e vedono il contenuto statico. External file (non inline) per la CSP
// script-src 'self'. App.tsx rimuove la classe al mount; il timeout è il
// failsafe se React non parte (mai lasciare lo schermo nero).
(function () {
  var d = document.documentElement;
  d.classList.add('booting');
  setTimeout(function () {
    d.classList.remove('booting');
  }, 5000);
})();
