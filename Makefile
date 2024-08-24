#Nome del progetto
NAME =			FreeProg

# Variabili
INST =			npm install
XAMP =			/opt/lampp/
SYS =			sudo systemctl
CPY =			sudo cp
FLAG = 			--prefer-dist --no-progress --no-suggest
DIRPHP =		/opt/lampp/htdocs/react
DIREQ =			src/Request/
BUILD_DIR =		build

# DEVO AVVIARE ANCHE UNO SCRIPT PER CONFIGURARE DATABASE 
# Regole
.PHONY: all install install-db start-xampp copy update build start clean #test

# Installazione delle dipendenze
install:
	$(INST)
	$(INST) react-router-dom
	$(INST) @reduxjs/toolkit react-redux
	$(INST) axios
	$(INST) js-cookie
	sudo mkdir $(DIRPHP)
	sudo composer require firebase/php-jwt --working-dir=$(DIRPHP) $(FLAG)

# Copia dei file php per le repository di xampp
copy:
	$(CPY) $(DIREQ)login.php $(DIRPHP)/login.php
	$(CPY) $(DIREQ)registration.php $(DIRPHP)/registration.php
	$(CPY) $(DIREQ)controluser.php $(DIRPHP)/controluser.php
	$(CPY) $(DIREQ)controlemail.php $(DIRPHP)/controlemail.php
	$(CPY) $(DIREQ)upload_ex.php $(DIRPHP)/upload_ex.php
	$(CPY) $(DIREQ)upload_video.php $(DIRPHP)/upload_video.php

# Costruzione del progetto, per quando sarà pronto per essere distribuito su un server web
build: clean
	npm run build

# Avvio dell'applicazione
start-xampp:
	$(SYS) stop mariadb
	$(SYS) stop apache2
	$(SYS) daemon-reload
	sudo $(XAMP)lampp start

# Installazione del Database 
install-db: start-xampp
	sudo bash script_database/createdb.sh

# Avvio dell'applicazione
start: start-xampp
	npm run dev

# Pulizia dei file generati con il comando build
clean:
	rm -rf $(BUILD_DIR)

# Esecuzione dei test da vedere
#test:
#	npm test

# Aggiornamento dei file php per le repository di xampp
update: copy start

# Regola predefinita DA VEDERE
all: install copy install-db build 
