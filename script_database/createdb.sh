#!/bin/bash

# Variabili
DB_NAME="user"
DB_USER="react-user"
DB_PASS="1234"
DB_POS="127.0.0.1"
DB_PORT="3306"
DB_PASROT="root"

# Creazione del database in /opt/lampp/bin
mysql -h ${DB_POS} -P ${DB_PORT} -u root -p"${DB_PASROT}" -e "CREATE DATABASE IF NOT EXISTS ${DB_NAME};"
mysql -h ${DB_POS} -P ${DB_PORT} -u root -p"${DB_PASROT}" -e "CREATE DATABASE IF NOT EXISTS ${DB_NAME};"

# Creazione dell'utente e concessione dei permessi
mysql -h ${DB_POS} -P ${DB_PORT} -u root -p"${DB_PASROT}" -e "CREATE USER IF NOT EXISTS '${DB_USER}'@'localhost' IDENTIFIED BY '${DB_PASS}';"
mysql -h ${DB_POS} -P ${DB_PORT} -u root -p"${DB_PASROT}" -e "GRANT ALL PRIVILEGES ON ${DB_NAME}.* TO '${DB_USER}'@'localhost' WITH GRANT OPTION;"
mysql -h ${DB_POS} -P ${DB_PORT} -u root -p"${DB_PASROT}" -e "FLUSH PRIVILEGES;"

# Esecuzione dello script SQL per inizializzare il database

if [ -f "/home/skitarrata/Desktop/WebApp-FreeProg/script_database/tables.sql" ]; then
    mysql -h ${DB_POS} -P ${DB_PORT} -u ${DB_USER} -p"${DB_PASS}" ${DB_NAME} < "/home/skitarrata/Desktop/WebApp-FreeProg/script_database/tables.sql"
    echo "Database ${DB_NAME} creato e inizializzato con successo."
else
    echo "File SQL non trovato: tables.sql"
fi