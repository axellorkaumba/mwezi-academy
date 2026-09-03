# Automatiser son entreprise avec l'IA

> Brouillon — Vague 2 du plan de contenu MVP. À relire et corriger par Axel Kaumba avant publication. Les exemples utilisent une entreprise fictive ("Atelier Nsimba", boutique de vêtements à Kinshasa) à des fins pédagogiques uniquement.

Formateur : Axel Kaumba · 9 modules · Niveau intermédiaire · Bootcamp (2 jours)

**Ce cours suppose les bases du cours "Claude & ChatGPT pour entrepreneurs" acquises** (rédaction de prompts, choix d'un cas d'usage, vérification des résultats). Il va plus loin : automatiser trois workflows complets, pas une tâche isolée.

---

## Module 1 — Cartographier les tâches répétitives de son entreprise

**Objectif** : Identifier l'ensemble des tâches répétitives de l'activité, avant de choisir lesquelles automatiser.

**Leçon**

Avant d'automatiser, il faut voir l'ensemble du paysage. Sur une semaine type, listez toutes les tâches répétitives, dans trois catégories qui correspondent aux trois workflows de ce cours :

1. **Communication écrite** — Emails, messages clients, réponses répétées.
2. **Service client** — Questions fréquentes, prise de commande, suivi.
3. **Production de contenu** — Descriptions produit, publications réseaux sociaux, newsletters.

Pour chaque tâche, notez le temps hebdomadaire qu'elle prend — cette cartographie sert de base aux trois modules d'automatisation suivants.

**Exemple concret**

La cartographie d'Atelier Nsimba révèle : 3h/semaine de réponses aux mêmes questions sur les tailles et délais, 2h/semaine de rédaction de descriptions produit, 1h/semaine de tri d'emails fournisseurs — un total de 6h/semaine de tâches répétitives, une base de travail concrète pour ce bootcamp.

**Ressource — Grille de cartographie**

| Tâche répétitive | Catégorie (email/service client/contenu) | Temps/semaine |
|---|---|---|

**Exercice**

Remplissez cette grille avec vos propres tâches répétitives sur une semaine type.

---

## Module 2 — Automatiser la rédaction et le tri des emails

**Objectif** : Réduire le temps passé à rédiger et trier des emails répétitifs.

**Leçon**

Deux automatisations accessibles sans compétence technique avancée :

1. **Gabarits de réponse assistés par IA** — Pour les emails répétitifs (relance fournisseur, confirmation de commande), un prompt type (vu dans le cours précédent) génère une base à personnaliser en quelques secondes plutôt qu'à rédiger de zéro.
2. **Tri et priorisation** — Demander à l'IA de résumer et classer un lot d'emails reçus (urgent / à traiter cette semaine / informatif) pour prioriser sans tout lire en détail dans l'urgence.

Cette automatisation reste supervisée : l'IA prépare, la validation et l'envoi restent humains (rappel du principe de contrôle déjà vu).

**Exemple concret**

Atelier Nsimba reçoit chaque lundi une dizaine d'emails fournisseurs. Plutôt que de tous les lire en détail, un prompt les résume et les classe par urgence — le tri qui prenait 30 minutes prend maintenant 5 minutes de lecture des résumés.

**Ressource — Prompt de tri d'emails**

`Voici [N] emails reçus cette semaine [coller le contenu]. Classe-les en 3 catégories : urgent, à traiter cette semaine, informatif. Pour chaque email urgent, résume l'action nécessaire en une phrase.`

**Exercice**

Testez ce prompt sur vos emails de la semaine et mesurez le temps gagné par rapport à une lecture complète.

---

## Module 3 — Construire un premier assistant de service client

**Objectif** : Préparer une base de réponses automatisée pour les questions client les plus fréquentes.

**Leçon**

La plupart des activités reçoivent les mêmes 5 à 10 questions en boucle (tailles disponibles, délais de livraison, modalités de paiement). Un assistant simple :

1. **Lister les questions fréquentes** et leurs réponses exactes et à jour.
2. **Préparer un prompt qui utilise cette liste comme référence** pour générer des réponses cohérentes à de nouvelles formulations de la même question.
3. **Superviser les premières réponses** avant de les envoyer telles quelles, le temps de vérifier la fiabilité du système sur des cas réels.

Ce n'est pas un chatbot autonome complexe — c'est un système d'aide à la réponse qui accélère un humain, pas qui le remplace pour ce cours.

**Exemple concret**

Atelier Nsimba prépare une liste de 8 questions fréquentes avec leurs réponses. Face à une nouvelle question formulée différemment ("vous livrez en dehors de Kinshasa ?"), le prompt utilise cette liste de référence pour générer une réponse cohérente avec la politique établie, à valider avant envoi.

**Ressource — Prompt d'assistant de service client**

`Voici nos réponses officielles à nos questions fréquentes : [liste]. Un client demande : [nouvelle question]. Réponds en te basant uniquement sur ces informations officielles, sans inventer de détail.`

**Exercice**

Listez vos 5 à 10 questions les plus fréquentes avec leurs réponses exactes, puis testez le prompt sur une nouvelle formulation de l'une d'elles.

---

## Module 4 — Automatiser la production de contenu récurrent

**Objectif** : Réduire le temps de production des contenus répétitifs (descriptions produit, publications).

**Leçon**

En s'appuyant sur le workflow déjà construit dans "Claude & ChatGPT pour entrepreneurs" (module 4 de ce cours précédent), l'automatisation ici passe à l'échelle : traiter plusieurs éléments en une seule session plutôt qu'un par un.

Méthode : préparer une liste de plusieurs produits ou sujets (comme vu dans "AI-assisted coding pour débutants" pour le code, le même principe s'applique au texte), et demander une génération en lot avec un format cohérent pour tous les éléments.

**Exemple concret**

Pour 6 nouveaux produits à décrire, Atelier Nsimba prépare une liste avec les caractéristiques de chacun et demande une génération en une seule fois, avec le même format que les descriptions précédentes — plutôt que 6 sessions séparées.

**Ressource — Principe de production en lot**

Liste de plusieurs éléments + format validé sur un exemple → génération en une seule session pour tous les éléments

**Exercice**

Identifiez un contenu récurrent de votre activité et produisez-en plusieurs versions en une seule session avec ce principe.

---

## Module 5 — Connecter l'IA à ses outils existants

**Objectif** : Relier les automatisations construites aux outils déjà utilisés au quotidien (comme vu dans le cours précédent, module 5, mais avec plusieurs workflows en parallèle).

**Leçon**

Avec trois workflows désormais en place (emails, service client, contenu), l'enjeu devient de les organiser ensemble sans confusion :

1. **Un espace centralisé** pour les prompts types (document unique avec les 3 workflows, plutôt que dispersés).
2. **Une routine claire** — à quel moment de la journée ou de la semaine chaque workflow est utilisé.
3. **Des points de sortie cohérents** — vers quel outil va chaque résultat (réseaux sociaux, email, document interne).

**Exemple concret**

Atelier Nsimba tient un document unique avec les 3 prompts types (tri email, service client, descriptions produit), utilisé chaque lundi matin pour le tri email, au fil de l'eau pour le service client, et en fin de semaine pour préparer le contenu de la semaine suivante.

**Ressource — Routine hebdomadaire type**

Lundi matin : tri email · Au fil de l'eau : réponses service client · Vendredi : préparation contenu de la semaine suivante

**Exercice**

Organisez vos 3 workflows dans un document unique avec une routine hebdomadaire réaliste pour votre activité.

---

## Module 6 — Créer des gabarits réutilisables pour chaque workflow

**Objectif** : Stabiliser chaque workflow en un gabarit fixe, pour ne plus avoir à le reconstruire.

**Leçon**

Un gabarit réutilisable, pour chacun des 3 workflows, précise :
- Le prompt type exact (modules 2, 3, 4)
- Les informations à préparer avant de le lancer
- Le point de vérification systématique avant utilisation du résultat

Documenter ces 3 gabarits une fois pour toutes évite de "réinventer" le prompt à chaque utilisation, et permet de les transmettre facilement à un futur employé ou collaborateur.

**Exemple concret**

Le gabarit "tri email" d'Atelier Nsimba est documenté avec le prompt exact, l'information à préparer (copier les emails de la semaine), et le point de vérification (les emails classés "urgent" sont-ils vraiment urgents ?).

**Ressource — Fiche de gabarit (à dupliquer pour chaque workflow)**

Nom du workflow : ______ · Prompt type : ______ · Préparation nécessaire : ______ · Point de vérification : ______

**Exercice**

Documentez vos 3 workflows avec cette fiche.

---

## Module 7 — Garder un contrôle humain sur les automatisations sensibles

**Objectif** : Identifier les situations où l'automatisation doit rester strictement supervisée, voire évitée.

**Leçon**

En reprenant les règles de contrôle déjà vues (cours précédent, module 6), certaines situations méritent une vigilance renforcée quand on automatise à l'échelle de plusieurs workflows :

1. **Les réclamations et litiges clients** — Ne jamais laisser une réponse automatisée partir sans validation humaine, le risque de ton inadapté ou d'erreur factuelle y est plus coûteux qu'ailleurs.
2. **Les engagements financiers ou contractuels** — Prix, délais, conditions ne doivent jamais être confirmés à un client sans vérification humaine du contenu généré.
3. **La cohérence de marque** — Sur un volume de contenu généré en lot (module 4), vérifier qu'aucun élément ne s'écarte du ton ou du positionnement de la marque (voir "Créer une marque qui se souvient").

**Exemple concret**

Sur un lot de 6 descriptions produit générées, Atelier Nsimba relit chacune avant publication et corrige une description qui employait un ton trop formel, incohérent avec le reste de la marque.

**Ressource — Checklist de vigilance renforcée**

- [ ] Aucune réponse à réclamation envoyée sans validation humaine
- [ ] Aucun engagement financier confirmé sans vérification
- [ ] Cohérence de marque vérifiée sur tout contenu produit en lot

**Exercice**

Identifiez, parmi vos 3 workflows, lequel présente le plus de risque en cas d'erreur non contrôlée, et renforcez sa vérification en conséquence.

---

## Module 8 — Mesurer le temps réellement gagné

**Objectif** : Chiffrer l'impact réel des 3 workflows automatisés, pas une impression générale.

**Leçon**

En reprenant la cartographie du module 1, comparez le temps passé sur chaque tâche avant et après la mise en place des workflows. La mesure doit inclure le temps de vérification humaine (modules 6-7), pas seulement le temps de génération — sinon le gain est surestimé.

**Exemple concret**

Avant : 6h/semaine sur les 3 catégories de tâches. Après mise en place des workflows (génération + vérification incluse) : environ 2h30/semaine — un gain réel de 3h30, mesuré et non estimé à la louche.

**Ressource — Tableau avant/après**

| Tâche | Temps avant | Temps après (génération + vérification) | Gain |
|---|---|---|---|

**Exercice**

Mesurez, sur une semaine réelle d'utilisation des 3 workflows, le temps avant/après avec ce tableau.

---

## Module 9 — Étude de cas et plan d'automatisation personnel

**Objectif** : Consolider les 3 workflows en un plan d'automatisation stable et documenté pour l'activité.

**Leçon**

Cette synthèse réunit :
- La cartographie initiale (module 1)
- Les 3 workflows construits et documentés (modules 2-4, 6)
- La routine d'organisation (module 5)
- Les garde-fous de contrôle (module 7)
- La mesure de gain réel (module 8)

L'objectif du bootcamp n'est pas d'automatiser "tout" l'entreprise en 2 jours, mais d'avoir 3 workflows solides, documentés et mesurés — sur lesquels construire d'autres automatisations plus tard si besoin.

**Exemple concret**

À l'issue du bootcamp, Atelier Nsimba dispose d'un document unique réunissant les 3 gabarits, la routine hebdomadaire et le suivi du temps gagné — un système reproductible, pas un essai isolé oublié la semaine suivante.

**Ressource — Plan d'automatisation final**

Réunissez sur un document unique : cartographie, 3 gabarits documentés, routine hebdomadaire, mesure de gain.

**Exercice**

Constituez ce document final et fixez une date de révision dans 2 mois pour vérifier que les workflows sont toujours utilisés.

---

## Projet pratique — Brief complet

**Contexte** : Vous mettez en place 3 workflows d'automatisation réels pour votre activité, sur les 2 jours du bootcamp.

**Objectif** : 3 workflows fonctionnels, documentés, mesurés et intégrés dans une routine réelle.

**Livrable attendu** :
1. Cartographie complète des tâches répétitives (module 1)
2. Workflow email fonctionnel (module 2)
3. Workflow service client fonctionnel (module 3)
4. Workflow contenu fonctionnel (module 4)
5. Document final réunissant gabarits, routine et mesure de gain (module 9)

**Critères de réussite** :
- Chaque workflow a un point de vérification humaine explicite.
- Le gain de temps est mesuré, incluant le temps de vérification, pas seulement de génération.
- Le document final est utilisable par quelqu'un d'autre que vous sans explication supplémentaire.

**Deadline suggérée** : Fin du bootcamp (2 jours) pour la mise en place, 2 semaines pour la mesure du module 8.
