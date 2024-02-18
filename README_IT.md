# Hacker News Enhancer

Collezione di script per Tampermonkey progettati per migliorare la tua esperienza di navigazione su Hacker News. Ogni script ha uno scopo specifico, dal mettere in evidenza i link nei commenti e rendere più evidenti i nomi degli autori, alla personalizzazione dei colori dei link in base al loro dominio. Questi miglioramenti mirano a migliorare la leggibilità, la navigazione e il coinvolgimento generale su Hacker News, rendendo più facile e intuitivo distinguere tra diversi tipi di contenuti e fonti direttamente dalla sezione dei commenti. Questi script sono facili da installare e utilizzare, offrendo un'esperienza di navigazione su misura per ogni utente.

## Script

### Evidenziatore di Link nei Commenti di Hacker News (Senza Risposte)
**File**: `scripts/hacker-news-highlight-comments-links-1.0.user.js`

Mette in evidenza tutti i link presenti nei commenti su Hacker News, escludendo i link di risposta. Questo script fa risaltare i link esterni con un colore di sfondo personalizzato, migliorando la leggibilità dei commenti. Ciò permette agli utenti di identificare facilmente i link esterni o rilevanti senza essere distratti dai link di risposta predefiniti presenti sotto ogni commento.

Dopo l'installazione, naviga su [Hacker News](https://news.ycombinator.com/) e apri qualsiasi thread di commenti. Noterai che tutti i link nei commenti sono ora evidenziati, rendendoli più visibili mentre scorri la pagina.

### Evidenziatore dei Link nei Commenti di Hacker News (Senza Risposte) ed Evidenziazione dell'Autore
**File**: `scripts/hacker-news-highlight-comments-links-and-author-1.1.user.js`

Questo script aumenta la visibilità del nome dell'autore del post nella sezione dei commenti applicando un colore di sfondo distinto, rendendolo più evidente durante la navigazione nei commenti. Inoltre, evidenzia tutti i link esterni nei commenti, escludendo i link di "risposta", per farli risaltare. Questa doppia funzionalità aiuta gli utenti a identificare facilmente sia i commenti fatti dall'autore originale sia le risorse esterne linkate nei commenti, migliorando la navigazione e la leggibilità su Hacker News.

Dopo l'installazione, naviga su [Hacker News](https://news.ycombinator.com/) ed entra nella sezione commenti di qualsiasi articolo. Noterai immediatamente i miglioramenti apportati dallo script: il nome dell'autore del post risalta con un colore di sfondo distinto per un'identificazione facile, e i link esterni nei commenti sono evidenziati—escludendo i link di "risposta"—semplificando la tua navigazione distinguendo tra contenuto e gestione della discussione.

### Evidenziazione dei Link su Hacker News (Senza Risposte) con Personalizzazione del Dominio ed Evidenziazione dell'Autore
**File**: `scripts/hacker-news-highlight-comments-links-domain-customization-1.2.user.js`

Questo script non solo mette in evidenza tutti i link all'interno dei commenti su Hacker News, escludendo i link di risposta, ma personalizza anche il colore di evidenziazione in base al dominio del link. I link provenienti da GitHub sono evidenziati con uno sfondo nero e testo bianco, i link da Wikipedia hanno uno sfondo grigio e testo bianco, mentre tutti gli altri link utilizzano lo sfondo standard arancione-rosso con testo bianco. Questa personalizzazione specifica del dominio permette agli utenti di distinguere facilmente tra diverse fonti di informazione senza essere distratti dai link di risposta o sopraffatti da uno schema di colori uniforme.

Dopo l'installazione, naviga su [Hacker News](https://news.ycombinator.com/) e apri qualsiasi thread di commenti. Noterai che i link sono ora evidenziati non solo per spiccare, ma anche per indicare il loro dominio di origine a colpo d'occhio, migliorando la tua esperienza generale di lettura e navigazione sul sito.

Questi miglioramenti lavorano insieme per fornire un'esperienza di navigazione più fluida e user-friendly su Hacker News, aiutandoti a concentrarti sui contenuti che contano di più per te.

## Come Installare
Per utilizzare questo script, devi avere Tampermonkey installato nel tuo browser. Tampermonkey è disponibile per Chrome, Firefox, Safari e altri browser moderni.

### Passaggi per l'installazione:
1. Installa Tampermonkey nel tuo browser:
    - [Tampermonkey per Chrome](https://tampermonkey.net/?ext=dhdg&browser=chrome)
    - [Tampermonkey per Firefox](https://tampermonkey.net/?ext=dhdg&browser=firefox)
    - [Tampermonkey per Safari](https://tampermonkey.net/?ext=dhdg&browser=safari)
2. Naviga allo script desiderato nella directory `/scripts`.
3. Clicca sul file dello script per visualizzarlo, poi clicca sul pulsante "Raw" per aprire il file dello script grezzo.
4. Tampermonkey dovrebbe riconoscere automaticamente lo script e visualizzare una finestra di installazione. Clicca su "Installa" per procedere.

## Feedback e Contributi
Il tuo feedback è molto apprezzato! Se hai suggerimenti, bug da segnalare o miglioramenti, sentiti libero di aprire un issue o una pull request nel repository GitHub. Se desideri contribuire al progetto, le pull request sono benvenute.

## Licenza
Questo script è rilasciato sotto la licenza MIT. Sentiti libero di usarlo, modificarlo e distribuirlo come desideri.
