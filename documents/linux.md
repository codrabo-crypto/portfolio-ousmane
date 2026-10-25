# Diagnostiquer un conflit de port

Identifier pourquoi Apache ne démarre pas : Nginx occupe déjà le port HTTP.

## Contexte
Apache refuse de démarrer dans la machine virtuelle Linux. Le besoin est d’identifier la cause avant de modifier les services.

## Rôle et cadre
Lecture du journal de service et identification du processus en écoute.
Formation — 16 octobre 2026

## Environnement
Machine virtuelle Linux du laboratoire. Apache et Nginx sont présents. La trace utile concerne le port HTTP 80. La même séance contient aussi un partage Samba et une tâche de sauvegarde planifiée.

## Démarche

1. **Lire le journal** : Repérer le message de port déjà utilisé et l’échec du démarrage d’Apache.

2. **Contrôler les sockets** : Consulter les ports en écoute et le processus qui les utilise.

3. **Établir le constat** : Relier l’écoute de Nginx sur le port 80 au refus de démarrage d’Apache.

4. **Planifier la sauvegarde du partage** : Dans la même séance, inscrire une tâche cron à 18 h pour archiver le partage Samba avec tar ; vérifier que cron est actif.

## Élément de preuve
Journal du conflit HTTP et extraits Samba / cron. Extraits issus des sorties conservées pendant la séance ; identifiant de session, nom de machine et horodatages retirés.

## Constat
Le conflit HTTP est identifié : Nginx écoute sur le port 80. La suite de la séance documente également une tâche cron quotidienne à 18 h pour archiver le partage Samba, ainsi que le service cron actif et une liste de contenu d’archive. La correction précise du conflit Apache n’est pas isolée dans une trace de test dédiée.

## Contrôles
- Journal Apache : Message de port occupé conservé.
- Écoute HTTP : Nginx identifié sur le port 80.
- Après correction : Pas de test conservé : aucune résolution définitive annoncée.
- Planification : Ligne cron à 18 h conservée ; systemctl is-active cron répond active.
- Archive du partage : Liste commun/ et commun/test-partage/ conservée ; elle ne constitue pas un test de restauration.

## Limites
- Le diagnostic de port est documenté ; aucun test dédié après correction ne permet d’attribuer précisément sa résolution.
- La planification et l’état actif de cron sont conservés ; le journal d’une exécution automatique à 18 h n’est pas fourni.
- La présence d’une archive ne démontre pas une restauration complète.
- Les identifiants, noms de machine et adresses internes ne sont pas publiés.

## Améliorations
- Documenter le correctif HTTP retenu et ses tests de redémarrage et d’accès.
- Vérifier une exécution automatique et réaliser un test de restauration du partage.

## Repères pédagogiques
E5.2, SISR.3, E5.1, E5.5 — rattachement indicatif, pas de validation déclarée.
