# AI-assisted coding pour débutants

> Brouillon — Vague 1 du plan de contenu MVP. À relire et corriger par Ruddy Kaumba avant publication. Le fil conducteur du cours est la construction d'une page web simple pour une entreprise fictive ("Atelier Nsimba") à des fins pédagogiques uniquement.

Formateur : Ruddy Kaumba · 8 modules · Niveau débutant

**Projet fil rouge du cours** : construire une page web vitrine simple (une seule page) pour une petite entreprise, avec Claude ou ChatGPT comme copilote de code, sans expérience de programmation préalable.

---

## Module 1 — Configurer son environnement de travail

**Objectif** : Avoir tout l'outillage nécessaire installé et fonctionnel avant d'écrire la première ligne de code.

**Leçon**

Coder avec l'aide de l'IA ne dispense pas d'avoir un environnement de travail correct. Trois éléments minimum :

1. **Un éditeur de code** — Un logiciel comme VS Code (gratuit), qui permet d'écrire et d'organiser des fichiers de code, avec coloration syntaxique pour repérer les erreurs plus facilement qu'avec un simple bloc-notes.
2. **Un accès à un assistant IA** — Claude ou ChatGPT, utilisé directement dans le navigateur pour ce cours (pas besoin d'intégration technique avancée au début).
3. **Un navigateur pour tester** — Chaque page web créée s'ouvre et se vérifie directement dans un navigateur (Chrome, Firefox), sans serveur nécessaire pour une page simple.

L'installation de VS Code est directe (téléchargement depuis le site officiel, installation standard). Pas besoin d'extensions complexes pour débuter.

**Exemple concret**

Pour ce cours, on installe VS Code, on crée un dossier "site-atelier-nsimba" sur l'ordinateur, et on vérifie qu'on peut ouvrir ce dossier dans VS Code et créer un fichier vide dedans.

**Ressource — Checklist d'installation**

- [ ] VS Code installé et ouvert
- [ ] Un dossier de projet créé
- [ ] Accès à Claude ou ChatGPT dans le navigateur
- [ ] Un navigateur pour prévisualiser les pages

**Exercice**

Installez VS Code si ce n'est pas déjà fait, créez un dossier de projet, et ouvrez-le dans l'éditeur.

---

## Module 2 — Utiliser un assistant IA comme copilote

**Objectif** : Demander du code à l'IA de façon à obtenir un résultat utilisable, pas un code générique inexploitable.

**Leçon**

Un assistant IA en coding fonctionne comme un collègue qui écrit vite mais qu'il faut bien briefer. Une bonne demande de code précise :

1. **Le langage** — HTML, CSS (les deux langages utilisés dans ce cours pour construire une page web simple).
2. **L'objectif exact** — Ce que la page doit contenir et faire, pas "fais-moi un site".
3. **Le niveau** — Préciser "je débute, explique les parties importantes" change la façon dont l'IA présente sa réponse.
4. **Les contraintes** — Couleurs, structure, contenu spécifique déjà connus (identité de marque si le cours "Créer une marque qui se souvient" a déjà été suivi).

Ne copiez jamais un bloc de code sans comprendre au moins globalement ce qu'il fait — le module 3 couvre comment lire ce qui est généré.

**Exemple concret**

Demande à l'IA : "Je débute en HTML/CSS. Génère le code d'une page web simple pour une boutique de vêtements, avec un titre, une courte description, une image, et un bouton de contact WhatsApp. Explique chaque partie du code en commentaire."

**Ressource — Gabarit de demande de code**

`Langage : [HTML/CSS]. Niveau : je débute, explique les parties importantes. Objectif : [ce que la page doit contenir/faire]. Contraintes : [couleurs, structure connues].`

**Exercice**

Utilisez ce gabarit pour demander à l'IA le code d'une page simple pour votre propre projet ou pour Atelier Nsimba.

---

## Module 3 — Lire et corriger le code généré

**Objectif** : Comprendre suffisamment le code produit par l'IA pour repérer une erreur évidente ou un élément à ajuster.

**Leçon**

Le code HTML/CSS généré suit une logique lisible même pour un débutant, une fois qu'on connaît quelques repères :

- **Les balises HTML** (`<h1>`, `<p>`, `<img>`, `<a>`) définissent la structure du contenu — titre, paragraphe, image, lien.
- **Les indentations** (les décalages de texte) indiquent quel élément est "à l'intérieur" d'un autre — un désalignement visuel dans le code est souvent le signe d'une structure cassée.
- **Le CSS** (souvent dans un bloc séparé ou un fichier à part) définit l'apparence — couleurs, tailles, espacements — sans toucher au contenu lui-même.

Pour corriger une erreur simple sans tout comprendre : décrivez ce qui ne va pas visuellement à l'IA ("le bouton est trop petit", "le texte déborde de l'image") plutôt que d'essayer de deviner la ligne de code fautive vous-même.

**Exemple concret**

Le bouton WhatsApp généré au module 2 est trop petit sur mobile. Plutôt que de chercher la ligne de code, la demande à l'IA est : "Le bouton de contact est trop petit sur téléphone, agrandis-le et centre-le." L'IA renvoie le code corrigé.

**Ressource — Repères de lecture du code**

Balises = structure du contenu · Indentation = hiérarchie des éléments · CSS = apparence, pas contenu

**Exercice**

Repérez dans le code généré au module 2 : un titre, une image, un lien. Demandez une correction à l'IA sur un élément qui ne vous convient pas visuellement.

---

## Module 4 — Connecter une API et gérer les erreurs

**Objectif** : Comprendre le principe d'une connexion à un service externe (API), même sans la mettre en œuvre de façon complexe dans ce cours.

**Leçon**

Une API (interface de programmation) permet à une page ou une application de communiquer avec un service externe — par exemple, un formulaire de contact qui envoie réellement un message, ou un lien WhatsApp qui ouvre directement une conversation avec un numéro précis.

Pour ce cours de niveau débutant, l'exemple le plus accessible est le lien WhatsApp "click to chat", qui fonctionne sans API complexe — un simple lien structuré (`https://wa.me/[numéro]`) suffit pour ouvrir une conversation pré-remplie. C'est une première approche du principe "connecter un site à un service externe" sans complexité technique.

Gérer les erreurs à ce niveau signifie surtout : vérifier que le lien fonctionne réellement (numéro correct, format correct) avant de le publier, et prévoir ce qui se passe si l'utilisateur n'a pas WhatsApp installé (ajouter une adresse email en alternative).

**Exemple concret**

Le bouton de contact d'Atelier Nsimba utilise `https://wa.me/243XXXXXXXXX?text=Bonjour%2C%20je%20suis%20intéressée%20par%20vos%20produits` — testé en cliquant dessus depuis un téléphone pour vérifier que la conversation s'ouvre correctement avec le message pré-rempli.

**Ressource — Structure d'un lien WhatsApp**

`https://wa.me/[numéro avec indicatif pays, sans espaces ni +]?text=[message pré-rempli encodé]`

**Exercice**

Créez votre propre lien WhatsApp avec ce format et testez-le depuis votre téléphone.

---

## Module 5 — Structurer un projet maintenable

**Objectif** : Organiser les fichiers du projet pour pouvoir le reprendre et le modifier facilement plus tard.

**Leçon**

Un projet "maintenable" veut dire : dans 3 mois, vous (ou quelqu'un d'autre) pouvez rouvrir le projet et comprendre où se trouve quoi, sans tout redécouvrir. Pour une page simple, la structure minimale :

- Un fichier `index.html` — le contenu de la page.
- Un fichier `style.css` séparé — l'apparence, plutôt que tout mélangé dans le même fichier.
- Un dossier `images/` — pour ranger les photos utilisées, plutôt que de les laisser éparpillées.

Demandez explicitement à l'IA de séparer le HTML et le CSS dans deux fichiers si elle les génère ensemble par défaut — c'est une meilleure pratique dès le début, même pour un projet simple.

**Exemple concret**

Le projet Atelier Nsimba est organisé ainsi : `index.html` (contenu), `style.css` (apparence), `images/produit1.jpg` — plutôt qu'un unique fichier de 200 lignes mélangeant tout, qui deviendrait difficile à modifier après quelques semaines.

**Ressource — Structure de dossier type**

```
site-atelier-nsimba/
  index.html
  style.css
  images/
    produit1.jpg
```

**Exercice**

Réorganisez votre projet du module 2-4 selon cette structure si ce n'est pas déjà le cas.

---

## Module 6 — Automatiser une tâche de bout en bout

**Objectif** : Utiliser l'IA pour automatiser une tâche répétitive liée au projet, pas juste écrire du code une fois.

**Leçon**

L'automatisation, à ce niveau, ne veut pas dire construire un système complexe — cela veut dire déléguer une tâche répétitive à un script simple généré avec l'IA. Exemple accessible : générer automatiquement plusieurs blocs HTML similaires (une fiche produit répétée plusieurs fois) à partir d'une liste de données, plutôt que de copier-coller et modifier manuellement chaque fois.

La méthode : donnez à l'IA une liste de produits (nom, prix, description courte) et demandez-lui de générer le bloc HTML répété pour chacun, en suivant la structure déjà validée pour un seul produit.

**Exemple concret**

Atelier Nsimba a 5 nouveaux produits à ajouter à sa page. Plutôt que de copier-coller le bloc HTML d'un produit 5 fois et modifier chaque champ manuellement, la liste des 5 produits (nom, prix, description) est donnée à l'IA avec la structure du premier bloc — elle génère les 5 blocs complets en une seule réponse.

**Ressource — Principe d'automatisation par lot**

Structure validée pour 1 élément + liste de données → demande à l'IA de générer tous les éléments de la liste avec cette structure.

**Exercice**

Identifiez un élément répété sur votre page (produit, service, témoignage) et générez-en plusieurs versions en donnant une liste de données à l'IA.

---

## Module 7 — Déployer en production

**Objectif** : Mettre la page en ligne, accessible publiquement via une adresse web.

**Leçon**

"Déployer" veut simplement dire rendre le site accessible sur internet plutôt que seulement visible sur votre ordinateur. Pour une page simple de niveau débutant, l'option la plus accessible est un service d'hébergement gratuit comme Netlify ou GitHub Pages, qui permet de mettre en ligne un site HTML/CSS en quelques minutes, sans configuration serveur complexe.

Étapes générales (à détailler avec captures d'écran lors de la production finale du contenu) :
1. Créer un compte sur le service d'hébergement choisi.
2. Importer le dossier du projet (structure du module 5).
3. Obtenir une adresse web fonctionnelle.
4. Vérifier que la page s'affiche correctement en ligne, pas seulement en local.

**Exemple concret**

Le site d'Atelier Nsimba, une fois terminé et testé en local, est déployé sur Netlify en glissant simplement le dossier du projet dans l'interface — obtenant une adresse accessible à partager sur les réseaux sociaux et dans la bio Instagram.

**Ressource — Checklist de déploiement**

- [ ] Site testé et fonctionnel en local
- [ ] Compte créé sur le service d'hébergement
- [ ] Projet déployé
- [ ] Adresse en ligne vérifiée sur téléphone et ordinateur

**Exercice**

Déployez votre page sur un service d'hébergement gratuit et vérifiez son fonctionnement en ligne.

---

## Module 8 — Étude de cas et plan d'action personnel

**Objectif** : Consolider l'ensemble du parcours en un plan applicable à un vrai projet personnel ou professionnel.

**Leçon**

Cette synthèse reprend chaque étape du cours appliquée à votre propre besoin, pas seulement à l'exemple du fil rouge :
- Environnement configuré (module 1)
- Code généré et compris (modules 2-3)
- Un élément interactif simple ajouté (module 4)
- Projet structuré proprement (module 5)
- Une tâche automatisée (module 6)
- Site déployé en ligne (module 7)

L'objectif n'est pas de devenir développeur en une formation — c'est de savoir utiliser l'IA comme copilote pour produire quelque chose de réel et fonctionnel, et de comprendre suffisamment le résultat pour le maintenir.

**Exemple concret**

Au terme du cours, le site Atelier Nsimba est en ligne, structuré proprement, avec un lien de contact fonctionnel — un résultat concret utilisable immédiatement pour l'activité, pas un exercice théorique.

**Ressource — Grille de bilan**

| Étape | Fait ? | À améliorer |
|---|---|---|
| Environnement | | |
| Code compris | | |
| Élément interactif | | |
| Structure propre | | |
| Automatisation | | |
| Déploiement | | |

**Exercice**

Remplissez la grille de bilan pour votre propre projet et identifiez une amélioration à apporter dans les 2 semaines suivant la formation.

---

## Projet pratique — Brief complet

**Contexte** : Vous construisez une page web simple et fonctionnelle pour une activité réelle (la vôtre ou un projet personnel).

**Objectif** : Un site déployé en ligne, avec un contact fonctionnel, structuré proprement.

**Livrable attendu** :
1. Une page HTML/CSS générée avec l'aide de l'IA et comprise (modules 2-3)
2. Un lien de contact fonctionnel (module 4)
3. Un projet structuré en fichiers séparés (module 5)
4. Le site déployé et accessible en ligne (module 7)

**Critères de réussite** :
- Le site s'affiche correctement sur mobile et ordinateur.
- Le lien de contact fonctionne réellement (testé).
- Le code est organisé en fichiers séparés (HTML/CSS), pas dans un seul bloc.

**Deadline suggérée** : 2 semaines après la fin du module 8.
