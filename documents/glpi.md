# Installer GLPI et suivre un incident

Préparer le service sous Linux, vérifier la connexion MariaDB et suivre un incident de partage.

## Contexte
Mettre à disposition un service de support dans un laboratoire, puis documenter une demande simulée d’accès à un partage Samba.

## Rôle et cadre
Préparation du laboratoire GLPI, vérification des prérequis, connexion à MariaDB et suivi d’un ticket de test.
Formation — 16 octobre 2026

## Environnement
Machine virtuelle Linux, gestionnaire zypper, Apache, PHP, MariaDB et SELinux. L’archive GLPI 11.0.11 apparaît dans la commande de téléchargement conservée.

## Démarche

1. **Préparer les composants** : Installer les composants web et SQL avec zypper, puis vérifier le contenu de l’archive GLPI téléchargée.

2. **Analyser les obstacles** : Lire les journaux Apache, contrôler le port HTTP, examiner la réponse HTTP 500 et les refus d’écriture SELinux.

3. **Configurer la connexion SQL** : Renseigner le serveur de base de données et vérifier le message « Connexion à la base de données réussie » dans l’installateur.

4. **Utiliser le service support** : Accéder aux écrans d’administration, puis consigner les vérifications d’un incident simulé de partage dans un ticket.

## Élément de preuve
Extraits d’installation, test MariaDB et vue anonymisée du ticket. Vue anonymisée et recomposée à partir de la capture source, avec comparaison du contenu utile. Elle ne constitue pas une capture brute ; l’original reste privé.

## Constat
La séance conserve un test de connexion à MariaDB réussi, des vues de gestion des comptes et du parc, puis un ticket de test suivi jusqu’au statut clos. Ces éléments documentent davantage qu’une simple lecture de ticket.

## Contrôles
- Préparation GLPI : Archive téléchargée et liste de son contenu conservées.
- Connexion MariaDB : Message de test de connexion réussi conservé.
- Comptes et parc : Vues d’administration retrouvées dans les captures de la séance.
- Ticket de test : Suivi et statut clos visibles dans la vue anonymisée.

## Limites
- Laboratoire de formation, sans utilisateur de production.
- Les extraits publics retirent les identifiants, adresses et informations d’accès.
- La capture du ticket est anonymisée et recomposée ; les originaux restent privés.
- Le test SQL réussi ne prouve pas une sécurisation complète ni la disponibilité dans la durée.

## Améliorations
- Consolider une procédure de réinstallation et ses tests de contrôle.
- Documenter une restauration et les contrôles de sécurité du service.

## Repères pédagogiques
E5.1, E5.2, E5.5, E5.6, SISR.2 — rattachement indicatif, pas de validation déclarée.
