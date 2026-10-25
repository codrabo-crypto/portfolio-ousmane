# État de vérification — 25 octobre 2026

## Contrôlé

- [x] 11 pages HTML et tous leurs liens locaux et ancres : aucun fichier cible manquant.
- [x] 359 assertions DOM et références locales, dont filtres des travaux et de la matrice, menu, thème mémorisé et zoom avec retour du focus.
- [x] 27 fichiers publics contrôlés en HTTP : réponses 200.
- [x] Quatre PDF, deux pages chacun : extraction de texte et inspection des huit pages rendues ; vérification supplémentaire de la dernière révision GLPI.
- [x] Contrastes calculés des principales paires texte/fond de la direction bleu nuit et du thème clair : au moins 4,5:1. Les superpositions sur le visuel d’ouverture restent à contrôler visuellement.
- [x] Police et images locales ; aucun script publicitaire ni outil de mesure d’audience.
- [x] Texte alternatif des images, titres des schémas, régions de navigation, lien d’évitement, focus visible et dialogue natif.
- [x] Respect de la préférence de réduction des mouvements ; contenu visible sans animation et sans JavaScript.
- [x] Recherche des identifiants personnels connus, noms et adresses internes dans les fichiers livrés : aucune occurrence relevée. Cette recherche ne constitue pas un audit d’anonymisation universel.
- [x] Six sources officielles de veille ouvertes et datées ; distinction entre publication et date de rédaction des notes.
- [x] Résultats non attestés et certifications absentes non inventés. Limites des traces indiquées.

## À vérifier dans un navigateur avant publication

- [ ] Rendu réel à 320, 390, 768 et 1440 pixels, sans débordement horizontal hors tableau défilant.
- [ ] Navigation complète au clavier, lecteur d’écran et zoom de texte à 200 %.
- [ ] Captures et schémas lisibles en clair et sombre sur les appareils visés.
- [ ] Performance Lighthouse, accessibilité automatisée et Core Web Vitals. Aucun score mesuré n’est annoncé.

Le lancement automatisé de Chrome échoue ici par SIGABRT avant le chargement du site. Les tests DOM n’attestent donc ni le rendu responsive réel ni le comportement d’un lecteur d’écran. L’aperçu local est fourni pour inspection.

## Avant partage public ou jury

- [ ] URL HTTPS finale renseignée puis génération des URL canoniques, du sitemap et du visuel Open Graph absolu.
- [ ] Aperçu LinkedIn contrôlé sur l’URL publiée ; aucun aperçu public réel n’a été validé ici.
- [ ] Mentions d’éditeur et d’hébergeur adaptées à la publication.
- [ ] Modèle officiel de synthèse, périodes, justificatifs et admissibilité des réalisations confirmés avec l’établissement.
- [ ] Fichier Packet Tracer final et tests après correction Linux ajoutés si disponibles.
- [ ] Identité et coordonnées conservées privées tant qu’aucune décision explicite ne les rend publiques.

## Compléments retrouvés et intégrés

- Séance du 16 octobre : préparation GLPI, connexion MariaDB réussie, erreurs HTTP / SELinux, partage Samba et planification cron.
- CV : période NRO, mesures optiques, appui aux techniciens, escalade, canal collectif et audits qualité.
- Fichier d’activité PKA retrouvé : aucune réussite de connectivité déduite de sa seule présence.
- Les extraits techniques publiés sont sélectionnés et expurgés ; les fichiers bruts privés ne sont pas livrés.
