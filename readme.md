
Pasos para jugar al ahorcado
. se debe ir tratando de acertar las letras para completar la palabra.
. si logra completarla en menos de 6 intentos habra ganado el juego.


-------------Log Sil----------------------------------

Usuario@DESKTOP-KUGHOJM MINGW64 ~
$ ls
'3D Objects'/
 AppData/
'Configuración local'@
 Contacts/
 Cookies@
'Datos de programa'@
 Desktop/
 Documents/
 Downloads/
'Entorno de red'@
 Favorites/
 Impresoras@
 IntelGraphicsProfiles/
 Links/
'Menú Inicio'@
 MicrosoftEdgeBackups/
'Mis documentos'@
 Music/
 NTUSER.DAT
 NTUSER.DAT{53b39e87-18c4-11ea-a811-000d3aa4692b}.TxR.0.regtrans-ms
 NTUSER.DAT{53b39e87-18c4-11ea-a811-000d3aa4692b}.TxR.1.regtrans-ms
 NTUSER.DAT{53b39e87-18c4-11ea-a811-000d3aa4692b}.TxR.2.regtrans-ms
 NTUSER.DAT{53b39e87-18c4-11ea-a811-000d3aa4692b}.TxR.blf
 NTUSER.DAT{53b39e88-18c4-11ea-a811-000d3aa4692b}.TM.blf
 NTUSER.DAT{53b39e88-18c4-11ea-a811-000d3aa4692b}.TMContainer00000000000000000001.regtrans-ms
 NTUSER.DAT{53b39e88-18c4-11ea-a811-000d3aa4692b}.TMContainer00000000000000000002.regtrans-ms
 OneDrive/
 Pictures/
 Plantillas@
 Reciente@
'Saved Games'/
 Searches/
 SendTo@
 Videos/
 ntuser.dat.LOG1
 ntuser.dat.LOG2
 ntuser.ini
 pseint/

Usuario@DESKTOP-KUGHOJM MINGW64 ~
$ cd desktop

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop
$ cd Tarea_Final_EDI

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI
$ git clone
cd..
fatal: You must specify a repository to clone.

usage: git clone [<options>] [--] <repo> [<dir>]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --reject-shallow      don't clone shallow repository
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
    --recurse-submodules[=<pathspec>]
                          initialize submodules in the clone
    --recursive ...       alias of --recurse-submodules
    -j, --jobs <n>        number of submodules cloned in parallel
    --template <template-directory>
                          directory from which templates will be used
    --reference <repo>    reference repository
    --reference-if-able <repo>
                          reference repository
    --dissociate          use --reference only while cloning
    -o, --origin <name>   use <name> instead of 'origin' to track upstream
    -b, --branch <branch>
                          checkout <branch> instead of the remote's HEAD
    -u, --upload-pack <path>
                          path to git-upload-pack on the remote
    --depth <depth>       create a shallow clone of that depth
    --shallow-since <time>
                          create a shallow clone since a specific time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --single-branch       clone only one branch, HEAD or --branch
    --no-tags             don't clone any tags, and make later fetches not to fo
llow them
    --shallow-submodules  any cloned submodules will be shallow
    --separate-git-dir <gitdir>
                          separate git dir from working tree
    -c, --config <key=value>
                          set config inside the new repository
    --server-option <server-specific>
                          option to transmit
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --filter <args>       object filtering
    --also-filter-submodules
                          apply partial clone filters to submodules
    --remote-submodules   any cloned submodules will use their remote-tracking b
ranch
    --sparse              initialize sparse-checkout file to include only files
at root
    --bundle-uri <uri>    a URI for downloading bundles before fetching from ori
gin remote

bash: cd..: command not found

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI
$ git clone https://github.com/BrunoVapore/Tarea_Final_EDI.git
Cloning into 'Tarea_Final_EDI'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (5/5), done.
remote: Total 6 (delta 0), reused 6 (delta 0), pack-reused 0
Receiving objects: 100% (6/6), done.

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI
$ git pull
fatal: not a git repository (or any of the parent directories): .git

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI
$ cdTarea_Final_EDI
bash: cdTarea_Final_EDI: command not found

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI
$ cd Tarea_Final_EDI

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (main)
$ git pull
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 5 (delta 1), reused 5 (delta 1), pack-reused 0
Unpacking objects: 100% (5/5), 485 bytes | 1024 bytes/s, done.
From https://github.com/BrunoVapore/Tarea_Final_EDI
   1123c3b..47eeef2  main       -> origin/main
Updating 1123c3b..47eeef2
Fast-forward
 readme.md | 0
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.md

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (main)
$ ls
ahorcado.html  ahorcado.js  readme.md

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (main)
$ git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (main)
$ git checkout -b RamaSilvana
Switched to a new branch 'RamaSilvana'

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (RamaSilvana)
$ git status
On branch RamaSilvana
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   readme.md

no changes added to commit (use "git add" and/or "git commit -a")

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (RamaSilvana)
$ git add readme.md

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (RamaSilvana)
$ git commit -m RamaSilvana
[RamaSilvana 7605fd0] RamaSilvana
 1 file changed, 4 insertions(+)

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (RamaSilvana)
$ git commit -m "RamaSilvana"
On branch RamaSilvana
nothing to commit, working tree clean

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (RamaSilvana)
$ git push origin RamaSilvana
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 2 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 367 bytes | 122.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
remote:
remote: Create a pull request for 'RamaSilvana' on GitHub by visiting:
remote:      https://github.com/BrunoVapore/Tarea_Final_EDI/pull/new/RamaSilvana
remote:
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
 * [new branch]      RamaSilvana -> RamaSilvana

Usuario@DESKTOP-KUGHOJM MINGW64 ~/desktop/Tarea_Final_EDI/Tarea_Final_EDI (RamaSilvana)
$
-----------------------------------------------------------------


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

  
