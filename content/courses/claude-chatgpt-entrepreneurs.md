# Claude & ChatGPT pour entrepreneurs

> Brouillon — Vague 1 du plan de contenu MVP. À relire et corriger par Axel Kaumba avant publication. Les exemples utilisent une entreprise fictive ("Atelier Nsimba", boutique de vêtements à Kinshasa) à des fins pédagogiques uniquement.

Formateur : Axel Kaumba · 6 modules · Niveau débutant

---

## Module 1 — Comprendre ce que l'IA sait vraiment faire

**Objectif** : Distinguer ce que Claude ou ChatGPT font bien de ce qu'ils font mal, pour éviter la déception ou la mauvaise utilisation.

**Leçon**

Beaucoup d'entrepreneurs abandonnent l'IA après une mauvaise expérience, souvent parce qu'ils lui ont demandé quelque chose qu'elle ne peut pas bien faire. L'IA générative est très efficace pour :

- Reformuler, résumer, structurer un texte
- Générer des premières versions (messages, descriptions, réponses type)
- Répondre à des questions générales et expliquer des concepts
- Traiter du texte en volume (trier, catégoriser, extraire des informations)

Elle est en revanche peu fiable pour :
- Donner des chiffres exacts sans vérification (elle peut inventer des statistiques de façon convaincante)
- Connaître votre activité spécifique sans qu'on la lui explique
- Remplacer un jugement humain sur une décision qui engage de l'argent ou une relation client

La bonne façon de voir l'IA : un assistant rapide qui produit une première version, pas un décideur autonome.

**Exemple concret**

Atelier Nsimba a essayé de demander à ChatGPT "combien de clientes à Kinshasa portent du 42 ?" — une question à laquelle l'IA a répondu avec un chiffre inventé, sonnant crédible mais sans source réelle. En revanche, lui demander de reformuler une réponse client en restant courtois donne un résultat immédiatement utilisable.

**Ressource — Ce que l'IA fait bien / mal**

| Fait bien | Fait mal |
|---|---|
| Reformuler, résumer | Donner des chiffres précis non vérifiés |
| Générer une première version | Connaître votre activité sans contexte |
| Traiter du texte en volume | Remplacer un jugement engageant |

**Exercice**

Listez 3 tâches de votre activité que vous pensez pouvoir déléguer à l'IA. Classez chacune : "fait bien" ou "à vérifier soigneusement".

---

## Module 2 — Les bases du prompt qui fonctionne

**Objectif** : Écrire une demande (prompt) qui donne un résultat exploitable dès le premier essai.

**Leçon**

Un prompt vague donne une réponse vague. Un bon prompt contient quatre éléments :

1. **Le rôle** — "Agis comme un..." aide l'IA à adopter le bon ton et le bon niveau de précision.
2. **Le contexte** — Donnez les informations nécessaires (votre activité, votre cible, la situation) — l'IA ne devine pas ce qu'elle ne sait pas.
3. **La tâche précise** — Ce que vous voulez exactement, pas "aide-moi avec le marketing" mais "écris 3 messages courts pour promouvoir une nouvelle collection auprès de femmes actives de 25-40 ans à Kinshasa".
4. **Le format attendu** — Longueur, ton, structure (liste, paragraphe, tableau).

Itérer est normal : la première réponse est rarement parfaite. Redemandez en précisant ce qui ne convient pas ("plus court", "moins formel", "ajoute un appel à l'action").

**Exemple concret**

Prompt faible : "Écris un post pour ma boutique." Prompt efficace : "Agis comme un rédacteur marketing pour une boutique de vêtements à Kinshasa. Écris 3 versions courtes (2 phrases maximum) d'un post Instagram annonçant une nouvelle collection de tenues professionnelles, avec un ton chaleureux et un appel à l'action clair."

**Ressource — Gabarit de prompt**

`Agis comme [rôle]. Contexte : [informations utiles]. Tâche : [ce que tu veux exactement]. Format : [longueur, ton, structure].`

**Exercice**

Reprenez une tâche du module 1 et écrivez un prompt complet avec les 4 éléments. Comparez le résultat à ce que vous auriez obtenu avec une demande vague.

---

## Module 3 — Choisir le bon cas d'usage pour commencer

**Objectif** : Identifier une première tâche concrète où l'IA fait gagner un temps réel et mesurable.

**Leçon**

L'erreur classique : essayer d'utiliser l'IA "partout" dès le début, se sentir dépassé, et abandonner. La bonne approche : choisir une seule tâche récurrente, chronophage, et peu risquée en cas d'erreur, pour commencer.

Critères d'un bon premier cas d'usage :
- **Récurrent** — Une tâche que vous faites au moins une fois par semaine.
- **Chronophage** — Elle vous prend un temps réel que vous pouvez mesurer avant/après.
- **Peu risquée** — Une erreur de l'IA ne cause pas de dommage grave (à l'inverse d'une réponse juridique ou financière engageante).

Exemples typiques pour un petit entrepreneur : rédiger des descriptions produit, préparer des réponses aux questions fréquentes, structurer un post pour les réseaux sociaux, résumer les retours clients.

**Exemple concret**

Atelier Nsimba choisit comme premier cas d'usage la rédaction des descriptions produit — une tâche répétée à chaque nouvel arrivage, qui prenait environ 15 minutes par article. Avec un bon prompt (module 2), le temps passe à 3 minutes de rédaction + relecture.

**Ressource — Grille de sélection du cas d'usage**

| Tâche envisagée | Récurrente ? | Temps actuel | Risque si erreur ? | Retenue ? |
|---|---|---|---|---|

**Exercice**

Listez 3 tâches candidates et notez-les sur les 3 critères. Choisissez-en une seule pour démarrer.

---

## Module 4 — Construire son premier workflow

**Objectif** : Transformer un cas d'usage ponctuel en une méthode répétable, pas un essai isolé.

**Leçon**

Un workflow, c'est une suite d'étapes qu'on peut refaire à l'identique chaque fois qu'on en a besoin, sans repartir de zéro. Pour la tâche choisie au module 3 :

1. **Le prompt type** — Écrivez une version du prompt du module 2 que vous pouvez réutiliser en changeant seulement les détails (nom du produit, information spécifique).
2. **L'entrée** — Qu'est-ce que vous devez préparer avant de lancer la demande (une photo, une info produit) ?
3. **La vérification** — Quel point précis devez-vous systématiquement contrôler dans la réponse avant de l'utiliser (module 6) ?
4. **La sortie** — Où va le résultat une fois validé (publication directe, fichier, message client) ?

Conserver ce prompt type quelque part accessible (note, document) évite de le réécrire à chaque fois.

**Exemple concret**

Workflow d'Atelier Nsimba pour les descriptions produit : (1) prompt type sauvegardé avec les caractéristiques du tissu et de la coupe à remplir ; (2) entrée = photo + 3 caractéristiques du vêtement ; (3) vérification = le prix et les tailles disponibles sont-ils corrects ; (4) sortie = copié directement dans la fiche produit Instagram.

**Ressource — Fiche de workflow**

Prompt type (sauvegardé) → Entrée nécessaire → Point de vérification → Destination du résultat

**Exercice**

Documentez votre workflow pour la tâche choisie au module 3, avec les 4 étapes ci-dessus.

---

## Module 5 — Connecter les outils entre eux

**Objectif** : Comprendre comment relier l'IA à d'autres outils déjà utilisés, sans complexité technique excessive.

**Leçon**

Pour un entrepreneur débutant, "connecter les outils" ne veut pas dire coder une intégration complexe — cela veut dire organiser un enchaînement simple entre des outils existants. Exemples accessibles sans compétence technique :

- Copier une réponse générée par l'IA directement dans WhatsApp Business ou Instagram.
- Utiliser l'IA pour préparer un brouillon, puis un outil de planification (comme Meta Business Suite) pour programmer la publication.
- Demander à l'IA de structurer des données (par exemple une liste de commandes) dans un format copiable vers une feuille de calcul.

Le principe : chaque outil fait ce qu'il fait le mieux — l'IA pour générer et structurer, les outils métier pour exécuter et diffuser.

**Exemple concret**

Atelier Nsimba utilise ChatGPT pour rédiger un lot de 5 descriptions produit en une session, les copie dans un document, puis les publie une par une dans la semaine via Meta Business Suite programmé à l'avance — au lieu de rédiger et publier une par une dans l'urgence.

**Ressource — Enchaînements simples à connaître**

IA → copier-coller → réseau social · IA → structuration → feuille de calcul · IA → brouillon → outil de programmation

**Exercice**

Identifiez un enchaînement simple entre l'IA et un outil que vous utilisez déjà. Testez-le sur une tâche réelle.

---

## Module 6 — Garder le contrôle : vérification et limites

**Objectif** : Utiliser l'IA sans lui déléguer une responsabilité qu'elle ne peut pas assumer.

**Leçon**

Le risque principal de l'IA n'est pas qu'elle refuse de répondre — c'est qu'elle réponde avec assurance à côté de la vérité (informations inventées, ton inadapté, erreur factuelle). Trois règles de contrôle :

1. **Ne jamais publier sans relecture humaine** — Même pour une tâche répétitive, un œil humain avant diffusion reste nécessaire, en particulier pour les prix, les dates, les engagements.
2. **Vérifier tout chiffre ou fait précis** — Si l'IA cite un chiffre, une loi, une donnée spécifique, vérifiez la source avant de vous y fier.
3. **Ne jamais laisser l'IA s'engager en votre nom** — Sur des sujets sensibles (réclamation client, litige, engagement financier), l'IA prépare une réponse, mais la décision finale reste humaine.

Ces règles ne ralentissent pas le travail si elles sont intégrées au workflow (module 4) dès le départ — elles évitent une erreur coûteuse plus tard.

**Exemple concret**

Atelier Nsimba utilise l'IA pour rédiger une réponse à une cliente mécontente d'un retard de livraison — mais relit et ajuste le ton avant envoi, car la première version proposée par l'IA minimisait le problème au lieu de simplement s'excuser et proposer une solution.

**Ressource — Checklist de contrôle avant utilisation**

- [ ] Relecture humaine effectuée
- [ ] Chiffres et faits précis vérifiés
- [ ] Aucun engagement pris au nom de l'entreprise sans validation humaine

**Exercice**

Reprenez votre dernière utilisation de l'IA (ou celle du module 5) et passez-la par cette checklist avant de la considérer "prête".

---

## Projet pratique — Brief complet

**Contexte** : Vous mettez en place un premier usage réel et durable de l'IA dans votre activité.

**Objectif** : Un workflow IA documenté et testé, avec ses garde-fous.

**Livrable attendu** :
1. Un cas d'usage choisi et justifié (module 3)
2. Un prompt type réutilisable (module 2 et 4)
3. Un workflow documenté avec point de vérification (module 4)
4. Une checklist de contrôle appliquée sur un exemple réel (module 6)

**Critères de réussite** :
- Le prompt type peut être réutilisé sans être réécrit de zéro.
- Le workflow inclut une étape de vérification humaine explicite.
- Le temps gagné est mesuré, pas juste ressenti.

**Deadline suggérée** : 2 semaines après la fin du module 6.
