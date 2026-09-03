# Construire des agents IA

> Brouillon — Vague 3 du plan de contenu MVP. À relire et corriger par Ruddy Kaumba avant publication. Le fil conducteur reprend le projet web d'"Atelier Nsimba" des cours précédents, étendu vers un agent IA plus autonome, à des fins pédagogiques uniquement.

Formateur : Ruddy Kaumba · 12 modules · Niveau avancé · Programme (3 semaines)

**Prérequis recommandé** : "Automatiser avec les APIs d'IA" ou une expérience équivalente d'intégration d'API.

---

## Module 1 — Comprendre ce qu'est un agent IA, au-delà d'un chatbot

**Objectif** : Distinguer un agent IA d'un simple assistant conversationnel.

**Leçon**

Un chatbot classique répond à des questions dans une conversation. Un agent IA va plus loin : il peut décider d'utiliser des outils externes (rechercher une information, envoyer un message, modifier une donnée) pour accomplir une tâche, pas seulement répondre par du texte. La différence clé : un agent a la capacité d'agir sur son environnement, pas seulement de converser à son sujet.

**Exemple concret**

Un chatbot répondrait "Voici les délais de livraison" à une question. Un agent pourrait, à la place, vérifier le stock réel dans un système, calculer un délai précis selon la localisation du client, et proposer directement une date — en utilisant plusieurs outils pour y parvenir.

**Ressource — Chatbot vs agent**

Chatbot = répond avec du texte · Agent = utilise des outils pour agir et produire un résultat concret

**Exercice**

Décrivez une tâche de votre activité qu'un simple chatbot ne pourrait pas accomplir seul, mais qu'un agent connecté à un outil pourrait réaliser.

---

## Module 2 — Définir un cas d'usage réel pour un premier agent

**Objectif** : Choisir un projet d'agent suffisamment concret et limité pour être réalisable en 3 semaines.

**Leçon**

Comme pour tout projet d'automatisation (voir "Automatiser son entreprise avec l'IA"), un premier agent doit rester volontairement simple : une tâche précise, avec un ou deux outils connectés maximum, plutôt qu'un agent censé "tout faire". Les critères : la tâche est répétitive, elle implique une action sur un outil externe (pas seulement une réponse textuelle), et l'échec de l'agent sur cette tâche n'a pas de conséquence grave.

**Exemple concret**

Pour Atelier Nsimba, le cas d'usage choisi : un agent qui reçoit une question client sur la disponibilité d'un produit, vérifie une liste de stock (un fichier simple), et répond avec l'information exacte — plutôt qu'un agent censé gérer l'intégralité du service client.

**Ressource — Critères d'un bon premier cas d'usage**

Tâche répétitive · Implique une action sur un outil externe · Erreur peu risquée si elle se produit

**Exercice**

Définissez votre cas d'usage avec ces 3 critères avant de continuer le programme.

---

## Module 3 — Choisir une architecture d'agent adaptée au besoin

**Objectif** : Comprendre les grandes options d'architecture avant de construire, pour éviter une complexité inutile.

**Leçon**

Pour un premier agent, deux architectures principales : un agent à **outil unique** (l'agent interroge un seul outil externe et répond) ou un agent à **plusieurs outils avec logique de décision** (l'agent choisit quel outil utiliser selon la situation). Commencer par l'architecture la plus simple qui répond au cas d'usage (module 2) — ajouter de la complexité seulement si le besoin réel l'exige, pas par anticipation.

**Exemple concret**

Le cas d'usage d'Atelier Nsimba (vérifier un stock) ne nécessite qu'un outil unique — l'architecture la plus simple est donc suffisante, sans besoin de logique de décision entre plusieurs outils à ce stade.

**Ressource — Deux architectures de départ**

Outil unique (une action, un outil) · Plusieurs outils avec décision (l'agent choisit selon le contexte)

**Exercice**

Déterminez quelle architecture correspond à votre cas d'usage du module 2.

---

## Module 4 — Comprendre le principe de MCP (Model Context Protocol)

**Objectif** : Comprendre à quoi sert MCP et pourquoi il facilite la connexion d'outils à un agent.

**Leçon**

MCP est un protocole standardisé qui permet à un agent IA de se connecter à des outils externes de façon uniforme, plutôt que de devoir coder une intégration différente pour chaque outil. Il fonctionne comme un langage commun entre l'agent et les outils connectés (fichiers, bases de données, services externes), ce qui simplifie considérablement la connexion de nouveaux outils une fois le principe compris.

**Exemple concret**

Plutôt que d'écrire un code d'intégration spécifique pour chaque nouvel outil que l'agent d'Atelier Nsimba pourrait utiliser à l'avenir, MCP permet de connecter ces outils selon un même principe standard, réutilisable d'un outil à l'autre.

**Ressource — Principe de MCP**

Un protocole standard de connexion entre un agent et ses outils → moins de code spécifique par outil, plus de réutilisation

**Exercice**

Recherchez un exemple de serveur MCP existant (documentation officielle) proche de votre cas d'usage.

---

## Module 5 — Connecter un premier outil externe à l'agent

**Objectif** : Réaliser la première connexion réelle entre l'agent et un outil.

**Leçon**

En s'appuyant sur les compétences déjà acquises ("Automatiser avec les APIs d'IA"), connecter un premier outil implique de définir clairement ce que l'outil peut faire (consulter une information, effectuer une action), de le rendre accessible à l'agent selon le principe MCP (module 4), et de tester cette connexion isolément avant de l'intégrer dans un flux plus large.

**Exemple concret**

Le premier outil connecté à l'agent d'Atelier Nsimba est une simple liste de stock accessible en lecture — testée isolément (l'agent peut-il correctement lire une quantité disponible ?) avant d'être utilisée dans une vraie conversation avec un client.

**Ressource — Étapes de connexion d'un outil**

Définir ce que l'outil peut faire → le rendre accessible selon MCP → tester la connexion isolément

**Exercice**

Connectez un premier outil simple à votre agent et testez-le indépendamment de toute conversation.

---

## Module 6 — Donner à l'agent une mémoire ou un contexte persistant

**Objectif** : Permettre à l'agent de se souvenir d'informations d'un échange à l'autre, si le cas d'usage le nécessite.

**Leçon**

Par défaut, un agent traite souvent chaque échange indépendamment. Certains cas d'usage nécessitent une mémoire (se souvenir d'un client déjà identifié, d'une préférence exprimée précédemment). Ajouter cette mémoire demande de définir précisément quelles informations doivent être conservées et pour combien de temps, plutôt que de tout mémoriser sans discernement, ce qui pose aussi des questions de confidentialité.

**Exemple concret**

Si un client revient plusieurs fois avec des questions sur le même produit, l'agent d'Atelier Nsimba pourrait se souvenir de cet historique pour éviter de répéter les mêmes questions de clarification — mais seulement si ce type de suivi est réellement utile au cas d'usage, pas par défaut.

**Ressource — Questions avant d'ajouter une mémoire**

Quelle information est réellement utile à conserver ? · Pendant combien de temps ? · Quelles implications de confidentialité ?

**Exercice**

Déterminez si votre agent a réellement besoin d'une mémoire persistante, et si oui, laquelle précisément.

---

## Module 7 — Structurer les instructions et les limites de l'agent

**Objectif** : Définir clairement ce que l'agent doit faire, et surtout ce qu'il ne doit jamais faire.

**Leçon**

Un agent sans limites explicites peut prendre des initiatives non désirées (donner une information incorrecte avec assurance, agir sur un outil de façon inappropriée). Les instructions doivent préciser : le rôle exact de l'agent, le ton à adopter, les actions autorisées sur chaque outil connecté, et surtout les situations où l'agent doit s'arrêter et transmettre à un humain plutôt que d'agir seul.

**Exemple concret**

L'agent d'Atelier Nsimba est instruit de répondre uniquement sur la disponibilité de stock, et de transmettre systématiquement à un humain toute question sur un remboursement ou une réclamation — une limite claire qui évite qu'il s'aventure sur des sujets sensibles.

**Ressource — Éléments d'instruction d'un agent**

Rôle précis · Ton à adopter · Actions autorisées par outil · Situations de transfert obligatoire vers un humain

**Exercice**

Rédigez les instructions complètes de votre agent avec ces 4 éléments.

---

## Module 8 — Tester l'agent sur des cas réels et corriger ses erreurs

**Objectif** : Vérifier le comportement de l'agent sur des situations concrètes avant tout usage réel.

**Leçon**

Tester un agent signifie lui soumettre des cas réalistes, y compris des cas limites (question ambiguë, information manquante, demande hors de son périmètre défini au module 7) — pas seulement le cas idéal évident. Chaque erreur observée doit être corrigée soit dans les instructions, soit dans la logique de connexion à l'outil, avant de passer au cas suivant.

**Exemple concret**

En testant l'agent d'Atelier Nsimba avec une question ambiguë ("vous avez encore la robe bleue ?"), on découvre qu'il ne demande pas de précision sur la taille avant de répondre — une correction est ajoutée aux instructions pour qu'il demande systématiquement cette précision.

**Ressource — Méthode de test**

Cas idéal évident → cas ambigu → cas hors périmètre → cas d'erreur d'outil — tester chaque catégorie avant mise en usage réel.

**Exercice**

Testez votre agent sur au moins un cas de chaque catégorie ci-dessus et corrigez les erreurs identifiées.

---

## Module 9 — Ajouter un deuxième outil connecté et gérer leur interaction

**Objectif** : Étendre l'agent à un deuxième outil, en gérant la décision entre les deux.

**Leçon**

Ajouter un deuxième outil (par exemple, en plus du stock, un outil de prise de rendez-vous) nécessite de préciser dans les instructions (module 7) comment l'agent choisit quel outil utiliser selon la demande, et comment il gère une demande qui nécessiterait les deux successivement. C'est ici que l'architecture à plusieurs outils avec décision (module 3) devient nécessaire si elle ne l'était pas au départ.

**Exemple concret**

Avec l'ajout d'un outil de prise de rendez-vous pour un essayage, l'agent d'Atelier Nsimba doit distinguer une question de disponibilité (outil stock) d'une demande de rendez-vous (outil calendrier), et parfois enchaîner les deux si un client demande "c'est disponible, je peux venir l'essayer quand ?"

**Ressource — Gestion de plusieurs outils**

Préciser dans les instructions : quel outil pour quel type de demande · Comment enchaîner plusieurs outils si nécessaire

**Exercice**

Si pertinent pour votre cas d'usage, ajoutez un deuxième outil et testez la capacité de l'agent à choisir correctement entre les deux.

---

## Module 10 — Sécuriser l'accès de l'agent aux outils sensibles

**Objectif** : Limiter les risques liés à un agent ayant accès à des informations ou actions sensibles.

**Leçon**

Plus un agent a accès à des outils capables d'agir (pas seulement de consulter), plus les précautions de sécurité comptent : limiter les actions possibles au strict nécessaire (un agent qui consulte un stock n'a pas besoin de pouvoir le modifier), protéger les clés d'accès aux outils (même principe que pour les API, déjà vu), et prévoir une supervision humaine sur toute action irréversible ou coûteuse.

**Exemple concret**

L'agent d'Atelier Nsimba a un accès en lecture seule au stock, jamais en modification — pour éviter qu'une erreur de l'agent ne modifie accidentellement les quantités réelles disponibles.

**Ressource — Checklist de sécurité d'agent**

- [ ] Accès limité au strict nécessaire (lecture seule si possible)
- [ ] Clés d'accès aux outils sécurisées
- [ ] Supervision humaine sur toute action irréversible ou coûteuse

**Exercice**

Vérifiez les niveaux d'accès de votre agent à chaque outil connecté et réduisez-les au strict nécessaire.

---

## Module 11 — Déployer l'agent pour un usage réel

**Objectif** : Mettre l'agent en production, accessible aux vrais utilisateurs concernés.

**Leçon**

Le déploiement suit une logique proche de celle déjà vue pour une intégration API simple, avec une vigilance supplémentaire : tester l'agent en conditions réelles limitées d'abord (un groupe restreint d'utilisateurs ou une période de test courte) avant un déploiement complet, pour repérer d'éventuels problèmes non détectés lors des tests du module 8.

**Exemple concret**

Avant de rendre l'agent accessible à tous les visiteurs du site, Atelier Nsimba le teste une semaine en interne, avec l'équipe posant des questions variées, avant l'ouverture complète.

**Ressource — Étapes de déploiement progressif**

Test interne restreint → correction des problèmes identifiés → déploiement complet

**Exercice**

Planifiez une phase de test restreint avant le déploiement complet de votre agent.

---

## Module 12 — Étude de cas et plan d'agent personnel

**Objectif** : Consolider l'ensemble du programme en un agent fonctionnel et un plan d'évolution future.

**Leçon**

Cette synthèse réunit le cas d'usage (module 2), l'architecture choisie (module 3), les outils connectés (modules 5, 9) avec MCP (module 4), les instructions et limites (module 7), les tests (module 8), la sécurité (module 10) et le déploiement (module 11) — un agent complet, documenté, prêt à évoluer si de nouveaux besoins apparaissent.

**Exemple concret**

À l'issue du programme, Atelier Nsimba dispose d'un agent fonctionnel de vérification de stock et de prise de rendez-vous, documenté et sécurisé — avec une liste de prochaines évolutions possibles (un troisième outil, une mémoire client) à envisager plus tard, pas ajoutées prématurément.

**Ressource — Plan d'agent final**

Réunissez : cas d'usage, architecture, outils connectés et documentés, instructions et limites, résultats des tests, mesures de sécurité, statut de déploiement.

**Exercice**

Constituez ce document final et listez 2 évolutions possibles pour votre agent, sans les développer immédiatement.

---

## Projet pratique — Brief complet

**Contexte** : Vous concevez, construisez et déployez un agent IA réel sur les 3 semaines du programme.

**Objectif** : Un agent fonctionnel, connecté à au moins un outil réel, testé et déployé de façon sécurisée.

**Livrable attendu** :
1. Cas d'usage défini et justifié (module 2)
2. Au moins un outil connecté selon le principe MCP (modules 4-5)
3. Instructions et limites documentées (module 7)
4. Tests réalisés sur cas idéal, ambigu et hors périmètre (module 8)
5. Mesures de sécurité appliquées (module 10)
6. Agent déployé, au moins en test restreint (module 11)

**Critères de réussite** :
- L'agent transmet systématiquement à un humain les situations hors de son périmètre défini.
- L'agent a été testé sur des cas ambigus, pas seulement sur le cas idéal.
- L'accès de l'agent aux outils est limité au strict nécessaire.

**Deadline suggérée** : Fin du programme (3 semaines).
