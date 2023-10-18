-------- RAMA PABLOOOOOO -------------------------
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git status
En la rama main
Tu rama está actualizada con 'origin/main'.

nada para hacer commit, el árbol de trabajo está limpio
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Desempaquetando objetos: 100% (3/3), 654 bytes | 327.00 KiB/s, listo.
Desde https://github.com/BrunoVapore/Tarea_Final_EDI
   be2d73b..1123c3b  main       -> origin/main
Actualizando be2d73b..1123c3b
Fast-forward
 ahorcado.js | 39 +++++++++++++++++++++++++++++++++++++++
 1 file changed, 39 insertions(+)
 create mode 100644 ahorcado.js
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Desempaquetando objetos: 100% (3/3), 295 bytes | 98.00 KiB/s, listo.
Desde https://github.com/BrunoVapore/Tarea_Final_EDI
   1123c3b..21a012b  main       -> origin/main
Actualizando 1123c3b..21a012b
Fast-forward
 readme.md.txt | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.md.txt
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git add .
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git commit -m "Corregir extension"
[main 47eeef2] Corregir extension
 1 file changed, 0 insertions(+), 0 deletions(-)
 rename readme.md.txt => readme.md (100%)
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git push origin main
Enumerando objetos: 3, listo.
Contando objetos: 100% (3/3), listo.
Compresión delta usando hasta 2 hilos
Comprimiendo objetos: 100% (2/2), listo.
Escribiendo objetos: 100% (2/2), 241 bytes | 241.00 KiB/s, listo.
Total 2 (delta 1), reusados 0 (delta 0), pack-reusados 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
   21a012b..47eeef2  main -> main
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git checkout -B RamaPablo
M       ahorcado.js
Cambiado a nueva rama 'RamaPablo'
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git status
En la rama RamaPablo
Cambios no rastreados para el commit:
  (usa "git add <archivo>..." para actualizar lo que será confirmado)
  (usa "git restore <archivo>..." para descartar los cambios en el directorio de trabajo)
        modificados:     ahorcado.js

sin cambios agregados al commit (usa "git add" y/o "git commit -a")
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git add ahorcado.js
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git commit -m "Rama Pabloooooo"
[RamaPablo e7afd4a] Rama Pabloooooo
 1 file changed, 8 insertions(+)
fosfito@LNX-5551:~/Documentos/TPFINALEDI/Tarea_Final_EDI$ git push origin RamaPablo
Enumerando objetos: 5, listo.
Contando objetos: 100% (5/5), listo.
Compresión delta usando hasta 2 hilos
Comprimiendo objetos: 100% (3/3), listo.
Escribiendo objetos: 100% (3/3), 506 bytes | 506.00 KiB/s, listo.
Total 3 (delta 1), reusados 0 (delta 0), pack-reusados 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote: 
remote: Create a pull request for 'RamaPablo' on GitHub by visiting:
remote:      https://github.com/BrunoVapore/Tarea_Final_EDI/pull/new/RamaPablo
remote: 
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
 * [new branch]      RamaPablo -> RamaPablo
 -------------------------------------------------------------------------------------------

 