# Automatiser avec les APIs d'IA

> Brouillon — Vague 2 du plan de contenu MVP. À relire et corriger par Ruddy Kaumba avant publication. Le fil conducteur reprend le projet du cours "AI-assisted coding pour débutants" (le site web d'"Atelier Nsimba") à des fins pédagogiques uniquement.

Formateur : Ruddy Kaumba · 7 modules · Niveau intermédiaire

**Prérequis recommandé** : avoir suivi "AI-assisted coding pour débutants" ou disposer d'un projet web existant simple (HTML/CSS/JavaScript de base).

---

## Module 1 — Comprendre le fonctionnement d'une API d'IA

**Objectif** : Comprendre à quoi sert une API d'IA et comment elle s'insère dans un projet existant.

**Leçon**

Une API (interface de programmation) permet à votre site ou application d'envoyer une demande à un service externe et de recevoir une réponse — ici, un service d'IA comme celui de Claude ou d'OpenAI. Contrairement à l'usage manuel vu dans "Claude & ChatGPT pour entrepreneurs" (copier-coller dans une interface web), l'API permet d'intégrer cette capacité directement dans votre propre site, de façon automatisée.

Le principe : votre code envoie un texte (par exemple, un message d'un visiteur), l'API le transmet au modèle d'IA, et renvoie une réponse générée, que votre code affiche ensuite sur la page.

**Exemple concret**

Atelier Nsimba veut ajouter un petit outil sur son site : un champ où un visiteur décrit ce qu'il cherche, et reçoit une suggestion de produit. Ce n'est pas un texte fixe écrit à l'avance — chaque réponse est générée à la demande via l'API.

**Ressource — Principe de base d'une API d'IA**

Votre code envoie une demande (texte) → l'API traite la demande via le modèle d'IA → l'API renvoie une réponse → votre code affiche la réponse

**Exercice**

Décrivez, en une phrase, une fonctionnalité de votre projet qui bénéficierait d'une réponse générée dynamiquement plutôt qu'un texte fixe.

---

## Module 2 — Obtenir et sécuriser une clé API

**Objectif** : Créer un accès à une API d'IA et le protéger correctement.

**Leçon**

Utiliser une API nécessite une clé d'accès (une longue chaîne de caractères qui identifie votre compte). Cette clé doit être traitée comme un mot de passe :

1. **Ne jamais l'écrire directement dans le code visible** (le code d'une page web peut être vu par n'importe qui via le navigateur) — elle doit rester côté serveur, jamais côté client.
2. **Ne jamais la publier sur GitHub ou un dépôt public** — utiliser un fichier de variables d'environnement, exclu du suivi de version (comme vu implicitement dans la structure de projet du cours précédent).
3. **Vérifier les quotas et coûts associés** à la clé avant de l'utiliser en production, pour éviter une facture surprise.

**Exemple concret**

Pour son outil de suggestion produit, Atelier Nsimba crée une clé API, la stocke dans un fichier de configuration non partagé, et vérifie les tarifs du service avant de lancer l'outil publiquement.

**Ressource — Checklist de sécurité de clé API**

- [ ] Clé jamais visible dans le code côté navigateur
- [ ] Clé exclue du suivi de version (fichier ignoré)
- [ ] Quotas et coûts vérifiés avant mise en production

**Exercice**

Créez une clé API pour le service de votre choix et vérifiez qu'elle respecte cette checklist.

---

## Module 3 — Envoyer sa première requête et lire la réponse

**Objectif** : Faire fonctionner un premier échange simple avec l'API, en dehors de tout projet complexe.

**Leçon**

Avant d'intégrer l'API dans un vrai projet, il est plus simple de tester un échange basique : envoyer un texte fixe et observer la réponse brute reçue. Cela permet de comprendre le format de la réponse (souvent structuré, avec le texte généré à l'intérieur d'autres informations techniques) avant de l'exploiter dans une interface.

Utiliser l'assistant IA comme copilote (déjà vu dans le cours précédent) pour générer ce premier test de code est parfaitement légitime — l'important est de comprendre ce que fait le code généré (voir module suivant du cours précédent sur la lecture de code).

**Exemple concret**

Premier test d'Atelier Nsimba : un script simple qui envoie "Suggère un vêtement pour un événement professionnel" à l'API et affiche la réponse brute dans la console, avant de penser à l'intégrer visuellement sur le site.

**Ressource — Étapes du premier test**

Écrire une demande simple et fixe → l'envoyer via l'API → afficher la réponse brute (console) → comprendre sa structure avant de l'exploiter

**Exercice**

Avec l'aide de l'IA comme copilote, écrivez et testez un premier échange simple avec une API d'IA.

---

## Module 4 — Intégrer l'API dans un projet existant

**Objectif** : Connecter l'échange testé au module 3 à une vraie interface du projet.

**Leçon**

Intégrer l'API dans un projet existant (comme le site d'Atelier Nsimba du cours précédent) implique de :

1. **Créer un point d'entrée** — un champ de saisie ou un bouton qui déclenche la demande à l'API.
2. **Envoyer l'information utilisateur** à l'API (ce que la personne a écrit ou sélectionné) au lieu d'un texte fixe.
3. **Afficher la réponse** dans l'interface, de façon lisible et cohérente avec le design du site (voir "structurer un projet maintenable" du cours précédent).

À ce stade, garder l'interface simple : un champ de texte, un bouton, une zone de réponse — l'objectif est la fonctionnalité, pas la sophistication visuelle.

**Exemple concret**

Sur le site d'Atelier Nsimba, un champ "Décrivez ce que vous cherchez" est ajouté, relié à l'API, avec la réponse affichée juste en dessous dans une zone dédiée — intégré au design existant du site sans le complexifier.

**Ressource — Éléments d'intégration**

Champ de saisie utilisateur → transmission à l'API → affichage de la réponse dans l'interface existante

**Exercice**

Intégrez l'échange du module 3 dans une interface simple de votre projet.

---

## Module 5 — Gérer les erreurs et les limites de l'API (quotas, coûts)

**Objectif** : Anticiper ce qui peut mal se passer, pour que le site reste fonctionnel même en cas de problème.

**Leçon**

Une intégration d'API doit prévoir les cas où la demande échoue : quota dépassé, service temporairement indisponible, réponse invalide. Sans cette gestion, une erreur d'API peut faire planter la fonctionnalité, voire donner une mauvaise impression au visiteur.

Bonnes pratiques minimales :
1. **Afficher un message clair en cas d'échec** ("Une erreur est survenue, réessayez dans un instant") plutôt qu'un plantage silencieux ou un message technique incompréhensible.
2. **Limiter le nombre de demandes** par visiteur si pertinent, pour éviter une utilisation abusive coûteuse.
3. **Surveiller les coûts régulièrement**, surtout dans les premières semaines d'utilisation réelle.

**Exemple concret**

Si l'API ne répond pas dans les 10 secondes ou renvoie une erreur, le site d'Atelier Nsimba affiche "Le service est momentanément indisponible, réessayez plus tard" plutôt que de laisser la page bloquée sans explication.

**Ressource — Checklist de gestion d'erreur**

- [ ] Message clair affiché en cas d'échec de l'API
- [ ] Limite de demandes par visiteur si pertinent
- [ ] Suivi régulier des coûts d'utilisation

**Exercice**

Ajoutez une gestion d'erreur simple à votre intégration du module 4, avec l'aide de l'IA comme copilote pour écrire ce code si besoin.

---

## Module 6 — Automatiser un traitement en lot

**Objectif** : Utiliser l'API pour traiter plusieurs éléments d'un coup, pas seulement une demande à la fois.

**Leçon**

Au-delà d'une interaction ponctuelle (modules 3-4), une API peut aussi traiter des données en lot — par exemple, générer plusieurs descriptions produit automatiquement à partir d'une liste, de façon programmée plutôt que manuelle (le même principe que le module 4 du cours "Automatiser son entreprise avec l'IA", mais réalisé par du code plutôt que par des demandes manuelles répétées).

Cela demande de structurer les données en entrée (une liste organisée, par exemple dans un fichier simple) et de faire boucler le programme sur chaque élément pour envoyer une demande à l'API par élément, puis rassembler les résultats.

**Exemple concret**

Plutôt que de générer chaque description produit une par une manuellement, un script pourrait lire une liste de 10 nouveaux produits et générer automatiquement les 10 descriptions via l'API, prêtes à être relues avant publication.

**Ressource — Principe du traitement en lot**

Liste de données structurée → boucle qui envoie une demande API par élément → résultats rassemblés pour relecture

**Exercice**

Avec l'aide de l'IA comme copilote, écrivez un script simple qui traite une petite liste de 3 à 5 éléments via l'API.

---

## Module 7 — Déployer et surveiller l'intégration en production

**Objectif** : Mettre l'intégration API en ligne de façon sûre, et savoir si elle fonctionne correctement une fois publiée.

**Leçon**

Le déploiement suit la même logique que pour un projet simple (cours précédent, module 7), avec une vigilance supplémentaire pour l'API :

1. **Vérifier que la clé API est bien configurée** sur l'environnement de production (l'hébergement), pas seulement en local.
2. **Tester la fonctionnalité une fois en ligne**, pas seulement en local — un fonctionnement local ne garantit pas un fonctionnement identique en production.
3. **Surveiller l'usage réel** dans les premiers jours — nombre de demandes, coûts, erreurs éventuelles rencontrées par de vrais visiteurs.

**Exemple concret**

Après déploiement, Atelier Nsimba teste l'outil de suggestion directement sur le site en ligne (pas seulement en local), et surveille les premiers jours d'utilisation réelle pour vérifier que les coûts restent dans les limites prévues.

**Ressource — Checklist de mise en production**

- [ ] Clé API configurée sur l'environnement de production
- [ ] Fonctionnalité testée en ligne, pas seulement en local
- [ ] Usage surveillé les premiers jours (demandes, coûts, erreurs)

**Exercice**

Déployez votre intégration et testez-la directement en ligne, en suivant cette checklist.

---

## Projet pratique — Brief complet

**Contexte** : Vous intégrez une fonctionnalité IA réelle dans un projet web existant.

**Objectif** : Une fonctionnalité connectée à une API d'IA, fonctionnelle, gérée en cas d'erreur, et déployée en ligne.

**Livrable attendu** :
1. Clé API créée et sécurisée (module 2)
2. Premier échange testé et compris (module 3)
3. Fonctionnalité intégrée dans une interface réelle (module 4)
4. Gestion d'erreur en place (module 5)
5. Fonctionnalité déployée et testée en ligne (module 7)

**Critères de réussite** :
- La clé API n'est jamais visible dans le code côté navigateur.
- Un message clair s'affiche si l'API échoue, pas un plantage silencieux.
- La fonctionnalité a été testée en production, pas seulement en local.

**Deadline suggérée** : 2 semaines après la fin du module 7.
