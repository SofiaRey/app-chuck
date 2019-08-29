#!/bin/bash

# Agregar todos los archivos del proyecto al commit
git add .

# Realizar el commit con el siguiente mensaje: "Este commit es automatico"

git commit -m "Este commit es automatico"

# Pushear al repositorio remoto
git push origin master

# Que te muestre el status del repositorio local
git status
