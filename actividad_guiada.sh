#!/bin/bash
git remote add origin git@github.com:SofiaRey/app-chuck.git

if [ $? -eq 0 ];then
	echo "El repositorio remoto se configuro con exito"
	git remote -v
else
	echo $?
	git remote -v
fi
