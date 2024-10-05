FreeProg, un progetto sviluppato per diffondere e ampliare le conoscenze dei vari linguaggi di programmazione.

GUIDA PER IL CORRETTO FUNZIONAMENTO

dopo aver installato nodejs, XAMPP e react+vite che serviranno per il funzionamento della webapp
possiamo orientarci con il Makefile per effettuare una corretta installazione.
NB: Se è la prima volta che si usa la webapp, assicurarsi che i path del makefile siano giusti
in particolar modo controllare l'user che sarà sicuramente diverso nei path del file createdb.sh.
Dare un occhiata anche ai path del Makefile.

COMANDI MAKEFILE:
NB!!!: procedura che segue è automatizata se si lancia il solo comando (sudo make all), 
i comandi sotto serviranno per esplicitare l'utilizzo pulito dell'installazione e il loro
funzionamento.

Iniziamo con l'installazione delle dipendenze e creazione delle cartelle per ospitare la webapp.
COMANDO: sudo make install

Una volta installate passiamo alla copia dei file PHP che serviranno al backend.
NB: (per questo passaggio assicurarsi di aver installato gia XAMPP.)
COMANDO: sudo make copy

Una volta copiati i file possiamo passare alla creazione del database per XAMPP.
COMANDO: sudo make install-db

Fatto questo la webapp dovrebbe essere pronta per runnare, quindi eseguire il seguente comando.
COMANDO: sudo make start

Da qui in poi basterà lanciare solo quest'ultimo comando.

ALTRI COMANDI:
I restanti comandi del Makefile sono serviti allo sviluppo della webapp, eccoli elencati:

sudo make build: Usato per montare la webapp su un server (da non utilizzare per uso didattico)
sudo make start-xampp: Usato per avviare solo XAMPP.
sudo make clean: Usato per pulire le cartelle dai file generati dal comando build
sudo make update: Usato per aggiornare i file PHP in caso di modifica.

DIPENDENZE UTILIZZATE:
react-router-dom: Usato per il routing delle pagine web
@reduxjs/toolkit react-redux: Toolkits per react  
axios: Usato per il token JWT (Lato Frontend)
firebase/php-jwt: Usato per il token JWT (Lato Backend)
js-cookie: Usato per la convalida dei Cookie
jwt-decode: Usato per estrarre informazioni dal token JWT