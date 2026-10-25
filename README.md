# Support informatique — version bleu nuit et cyan

## Ouvrir le site

Décompresser l’archive, puis ouvrir `index.html` dans un navigateur. Aucune installation de Node, npm ou dépendance n’est nécessaire. Les pages, images, polices, PDF et scripts sont locaux. Une connexion n’est nécessaire que pour consulter les sources externes.

Pour un aperçu servi en HTTP, depuis ce dossier :

```sh
python3 -m http.server 4330 --bind 127.0.0.1
```

Ouvrir ensuite http://127.0.0.1:4330/ dans le navigateur de la même machine. Depuis une VM, décompresser l’archive dans la VM et ouvrir son `index.html`. Un localhost de l’hôte n’est pas automatiquement celui de la VM.

## Contenu

Accueil court ; quatre fiches de réalisation ; parcours ; compétences ; synthèse E5/SISR ; six notes de veille sourcées ; page de confidentialité. Les PDF, Markdown et CSV se trouvent dans `documents/`. L’accueil reste le point d’entrée de la candidature ; les fiches et la matrice servent à approfondir.

## Modifier les contenus

Les sources éditoriales sont dans `data/`. Après modification :

```sh
python3 build.py
```

Ce script régénère les pages HTML, les fiches Markdown et le CSV. Il n’écrase pas la feuille de style ni les scripts. La direction bleu nuit est définie dans `bleu.css`, chargée après `style.css`. Les PDF doivent être mis à jour séparément si les faits changent : leur génération nécessite ReportLab et des polices compatibles. Le code de génération PDF est fourni dans `outils/generer-pdf.py` ; les polices Arial système sont attendues sur macOS. Adapter ces chemins sur un autre système.

## Publier et partager sur LinkedIn

Le site n’a pas été mis en ligne. L’archive `support-sisr-a-publier.zip` contient uniquement les fichiers nécessaires à son fonctionnement public, sans les guides de préparation.

1. Choisir un hébergement statique et obtenir l’URL HTTPS définitive.
2. Dans `data/config.json`, renseigner `site_url` avec cette URL, sans slash final.
3. Exécuter `python3 build.py`. Cela produit les URL canoniques, les URL absolues Open Graph et le sitemap. Sans domaine, ces éléments ne peuvent pas être finalisés.
4. Déposer les fichiers du site à la racine de l’hébergement. Conserver le chemin relatif `assets/`, `documents/` et `projets/`. Ne pas publier `data/`, `outils/`, `build.py` ni les guides internes si inutiles.
5. Vérifier l’URL sur téléphone, tous les téléchargements et l’aperçu via LinkedIn Post Inspector. Le visuel de partage est `assets/hero-bleu.webp`, au format 1536 × 1024. Vérifier le recadrage affiché par LinkedIn.

Aucun identifiant personnel, téléphone, e-mail ou CV n’est diffusé par défaut. Le paramétrage d’un contact ne doit être fait qu’après décision explicite. Le contact éventuel utilise le logiciel de messagerie ; ce n’est pas un serveur d’envoi.

## Pour l’examen

La synthèse est une aide au repérage, pas une validation du référentiel. Le CSV ne remplace pas le modèle officiel de la session. Lire `PERSONNALISATION.md` et `ORAL-ET-ENTRETIEN.md` avant toute présentation au jury.

## Contrôles

Voir `CHECKLIST.md` : les vérifications de code et de fichiers sont distinguées du contrôle visuel. Aucun score Lighthouse n’est annoncé.
