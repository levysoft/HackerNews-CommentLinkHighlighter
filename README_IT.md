# UserScripts for Tampermonkey

Questa repository contiene una collezione di script Tampermonkey progettati per migliorare l'esperienza utente su siti web popolari come GitHub e Hacker News.

## Script Inclusi

### GitHub Auto Redirect to User Repositories
**File**: `userscripts/github-auto-redirect-to-user-repositories-1.0.user.js`

Questo script reindirizza automaticamente gli utenti loggati di GitHub alla pagina dei loro repository non appena visitano la homepage di GitHub. È pensato per coloro che desiderano accedere rapidamente ai loro progetti senza dover navigare attraverso il menu utente.

### Hacker News Enhancements
**File**: `userscripts/hacker-news-enhancer-1.0.user.js`

Questo script migliora la lettura dei commenti su Hacker News evidenziando i link in base al dominio di appartenenza, mettendo in evidenza il nome dell'autore del post e assicurando che tutti i link si aprano in una nuova scheda. È ideale per gli utenti che desiderano una navigazione più intuitiva e una maggiore leggibilità dei contenuti, permettendo di identificare facilmente i link esterni o rilevanti.

Dopo l'installazione, naviga su [Hacker News](https://news.ycombinator.com/) e apri qualsiasi thread di commenti. Noterai che tutti i link sono ora evidenziati non solo per risaltare, ma anche per indicare il loro dominio di origine a colpo d'occhio, e cliccandoci sopra il contenuto si aprirà in una nuova scheda

## Compatibilità e Installazione

Questi script sono stati progettati per essere compatibili sia con **Tampermonkey** che con **Greasemonkey**, permettendo così una vasta gamma di opzioni per gli utenti di diversi browser. Tuttavia, data la maggiore versatilità e la disponibilità su più piattaforme, raccomandiamo l'uso di **Tampermonkey** per una migliore esperienza utente visto che è disponibile per Chrome, Firefox, Safari e altri browser moderni.
La funzionalità degli script rimane la stessa indipendentemente dal gestore di userscript utilizzato. Assicurati di avere l'ultima versione del gestore di userscript installata per garantire la compatibilità e il corretto funzionamento degli script.

### Passaggi per l'installazione:
1. Installa Tampermonkey nel tuo browser:
    - [Tampermonkey per Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
    - [Tampermonkey per Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
    - [Tampermonkey per Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
2. Naviga allo script desiderato nella directory `/scripts`.
3. Clicca sul file dello script per visualizzarlo, poi clicca sul pulsante "Raw" per aprire il file dello script grezzo.
4. Tampermonkey dovrebbe riconoscere automaticamente lo script e visualizzare una finestra di installazione. Clicca su "Installa" per procedere.

### Installazione con Greasemonkey (per utenti Firefox)
Se sei un utente **Firefox** e preferisci **Greasemonkey**, gli script dovrebbero funzionare anche in questo ambiente. Tuttavia, poiché la nostra guida all'installazione è ottimizzata per Tampermonkey, ti invitiamo a seguire le istruzioni generali fornite dalla documentazione di Greasemonkey per aggiungere userscript al tuo browser.

## Feedback e Contributi
Il tuo feedback è molto apprezzato! Se hai suggerimenti, bug da segnalare o miglioramenti, sentiti libero di aprire un issue o una pull request nel repository GitHub. Se desideri contribuire al progetto, le pull request sono benvenute.

## Licenza
Questo script è rilasciato sotto la licenza MIT. Sentiti libero di usarlo, modificarlo e distribuirlo come desideri.
