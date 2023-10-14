--------------------RamaBruno---------------------
C:\Users\BruGKnox\Desktop>cd Tarea_Final_EDI

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git init
Initialized empty Git repository in C:/Users/BruGKnox/Desktop/Tarea_Final_EDI/.git/

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git clone https://github.com/BrunoVapore/Tarea_Final_EDI.git
Cloning into 'Tarea_Final_EDI'...
warning: You appear to have cloned an empty repository.

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tarea_Final_EDI/

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git add.

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git add .
error: 'Tarea_Final_EDI/' does not have a commit checked out
fatal: adding files failed

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git status
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        Tarea_Final_EDI/

nothing added to commit but untracked files present (use "git add" to track)

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>git add ahorcado
fatal: pathspec 'ahorcado' did not match any files

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>lc
"lc" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>ls
"ls" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>dir
 El volumen de la unidad C es WINDOWS
 El número de serie del volumen es: 908E-BEED

 Directorio de C:\Users\BruGKnox\Desktop\Tarea_Final_EDI

14/10/2023  07:22 p. m.    <DIR>          .
14/10/2023  07:22 p. m.    <DIR>          ..
14/10/2023  07:25 p. m.    <DIR>          Tarea_Final_EDI
               0 archivos              0 bytes
               3 dirs  847.883.100.160 bytes libres

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI>cd Tarea_Final_EDI

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git add .

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   ahorcado.html


C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git commit -m"primer archivo"
[main (root-commit) be2d73b] primer archivo
 1 file changed, 12 insertions(+)
 create mode 100644 ahorcado.html

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git push origin main
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 391 bytes | 391.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
 * [new branch]      main -> main

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git status
On branch main
Your branch is up to date with 'origin/main'.

nothing to commit, working tree clean

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git add .

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git commit -m"archivo js"
[main 1123c3b] archivo js
 1 file changed, 39 insertions(+)
 create mode 100644 ahorcado.js

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 674 bytes | 674.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
   be2d73b..1123c3b  main -> main

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git add .

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git commit -m"archivo readme"
[main 21a012b] archivo readme
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 readme.md.txt

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git push origin main
Enumerating objects: 4, done.
Counting objects: 100% (4/4), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 315 bytes | 157.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
   1123c3b..21a012b  main -> main

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git checkout -b"RamaBruno"
Switched to a new branch 'RamaBruno'
M       ahorcado.html

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git add .

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git commit -m"RamaBruno"
[RamaBruno 448fa3e] RamaBruno
 1 file changed, 6 insertions(+), 2 deletions(-)

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>git push origin RamaBruno
Enumerating objects: 12, done.
Counting objects: 100% (12/12), done.
Delta compression using up to 4 threads
Compressing objects: 100% (10/10), done.
Writing objects: 100% (12/12), 1.64 KiB | 840.00 KiB/s, done.
Total 12 (delta 2), reused 0 (delta 0), pack-reused 0
remote: Resolving deltas: 100% (2/2), done.
remote:
remote: Create a pull request for 'RamaBruno' on GitHub by visiting:
remote:      https://github.com/BrunoVapore/Tarea_Final_EDI/pull/new/RamaBruno
remote:
To https://github.com/BrunoVapore/Tarea_Final_EDI.git
 * [new branch]      RamaBruno -> RamaBruno

C:\Users\BruGKnox\Desktop\Tarea_Final_EDI\Tarea_Final_EDI>
----------------------------------------------------------------------------------------------------