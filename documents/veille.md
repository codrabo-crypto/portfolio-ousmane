# Veille technique

Notes préparées le 25 octobre 2026.

## Équipements exposés : ne pas oublier la périphérie du réseau

ANSSI · CERT-FR — 11 mars 2026

Le panorama décrit l’exploitation rapide de vulnérabilités sur les équipements de bordure et les services exposés sur Internet. Les attaques ne visent pas seulement les postes : l’accès au réseau et les équipements qui le protègent comptent aussi.

Lecture métier : Connaître les équipements exposés, leur version et les correctifs disponibles. Lors d’un incident de connectivité, vérifier aussi le contexte de sécurité et remonter les anomalies.

Source : https://www.cert.cyber.gouv.fr/cti/CERTFR-2026-CTI-002/

## openSUSE Leap 16 : un changement à connaître avant de dépanner

Projet openSUSE — 1er octobre 2025

Leap 16 introduit notamment l’installateur Agama et utilise SELinux comme mécanisme de contrôle d’accès. La publication précise aussi les exigences matérielles et la durée de maintenance annoncée pour cette version.

Lecture métier : Identifier la distribution et sa version avant d’appliquer une procédure. Un refus d’accès mérite un diagnostic du contrôle de sécurité avant toute modification de permissions.

Source : https://news.opensuse.org/2025/10/01/next-chapter-opens-with-leap-release/

## Debian 13 : préparer une évolution de système

Projet Debian — 9 août 2025

L’annonce présente Debian 13, ses logiciels mis à jour et les points de vigilance pour passer de Debian 12 à 13. Elle recommande de sauvegarder les données et la configuration, puis de lire les notes de version avant une migration.

Lecture métier : Préparer une mise à niveau : inventaire, sauvegarde et contrôle de compatibilité. Une machine virtuelle permet d’observer les changements avant une intervention sur un poste de production.

Source : https://www.debian.org/News/2025/20250809

## Fin de support Windows 10 : raisonner en cycle de vie

Microsoft · Windows Experience Blog — 24 juin 2025

Microsoft rappelle la fin du support standard de Windows 10 au 14 octobre 2025 et décrit les possibilités de transition, dont les mises à jour de sécurité étendues sous conditions. L’article comporte des mises à jour : il faut distinguer fin du support standard et couverture particulière.

Lecture métier : Un poste qui démarre encore n’est pas forcément maintenu. Vérifier l’édition, le cycle de support et les logiciels utilisés avant de proposer une migration ou une autre solution.

Source : https://blogs.windows.com/windowsexperience/2025/06/24/stay-secure-with-windows-11-copilot-pcs-and-windows-365-before-support-ends-for-windows-10/

## Réponse à incident : préparer et documenter le traitement

NIST — 3 avril 2025

La révision 3 du guide SP 800-61 relie la réponse aux incidents à la gestion des risques et au cadre CSF 2.0. Détecter, répondre et rétablir le service s’inscrivent dans une organisation préparée, plutôt que dans une intervention improvisée.

Lecture métier : Qualifier l’incident, conserver les traces et transmettre à la bonne équipe. L’exercice GLPI illustre cette traçabilité, sans constituer une mise en œuvre complète du référentiel.

Source : https://www.nist.gov/news-events/news/2025/04/nist-revises-sp-800-61-incident-response-recommendations-and-considerations

## Authentification multifacteur : protéger les comptes et les données

CNIL — 1er avril 2025

La CNIL publie une recommandation sur l’authentification multifacteur. Elle relie la sécurisation des accès au choix de solutions qui prennent en compte la protection des données personnelles dès leur conception.

Lecture métier : Aider à retrouver l’accès à un compte suppose de respecter la procédure de l’entreprise, les moyens d’authentification et les données personnelles. La MFA fait partie de cet accompagnement.

Source : https://www.cnil.fr/fr/recommandation-mfa
