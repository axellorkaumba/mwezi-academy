# Contenu de cours

Brouillons de contenu pédagogique pour les formations, produits par vague (une par famille et par niveau, en partant du prix d'entrée). Chaque fichier suit la structure module par module de `src/lib/course-detail.ts` — pour les cours avec un contenu spécifique (voir `moduleOverrides` dans ce fichier), les titres de module y sont définis explicitement plutôt que tirés du pool générique par catégorie, pour rester cohérents avec ce que le contenu enseigne réellement.

Le contenu est lu et affiché en direct sur le site via `/formation/[slug]/apprendre`, réservé aux apprenants avec une inscription au statut "payé" pour cette formation.

## Avant publication

Chaque fichier doit être relu et corrigé par le formateur assigné :

| Fichier | Formateur | Formation | Niveau |
|---|---|---|---|
| `fondamentaux-du-marketing.md` | Axel Kaumba | Fondamentaux du marketing | Débutant |
| `creer-une-marque-qui-se-souvient.md` | Axel Kaumba | Créer une marque qui se souvient | Débutant |
| `canva-pour-entrepreneurs.md` | Ruddy Kaumba | Canva pour entrepreneurs | Débutant |
| `claude-chatgpt-entrepreneurs.md` | Axel Kaumba | Claude & ChatGPT pour entrepreneurs | Débutant |
| `ai-assisted-coding-debutants.md` | Ruddy Kaumba | AI-assisted coding pour débutants | Débutant |
| `trouver-ses-premiers-clients.md` | Axel Kaumba | Trouver ses premiers clients | Débutant |
| `prospection-vente-telephonique.md` | Abraham Tchio | Prospection & vente téléphonique | Débutant |
| `meta-ads-premiere-campagne.md` | Axel Kaumba | Meta Ads : de zéro à la première campagne | Intermédiaire |
| `personal-branding-entrepreneurs.md` | Axel Kaumba | Personal branding pour entrepreneurs | Intermédiaire |
| `montage-video-reseaux-sociaux.md` | Ruddy Kaumba | Montage vidéo pour réseaux sociaux | Intermédiaire |
| `automatiser-son-entreprise-avec-lia.md` | Axel Kaumba | Automatiser son entreprise avec l'IA | Intermédiaire |
| `automatiser-avec-les-apis-dia.md` | Ruddy Kaumba | Automatiser avec les APIs d'IA | Intermédiaire |
| `pricing-strategie-commerciale.md` | Axel Kaumba | Pricing & stratégie commerciale | Intermédiaire |
| `gestion-objections-closing.md` | Abraham Tchio | Gestion des objections & closing | Intermédiaire |

Points à vérifier en priorité lors de la relecture :
- Exactitude technique (les exemples logiciels/techniques peuvent avoir évolué)
- Ton et méthode conformes à la façon dont chaque formateur enseigne réellement
- Remplacer ou compléter l'exemple fictif ("Atelier Nsimba", "Grâce Mbala") par un cas réel si vous en avez un à partager

## Pourquoi du Markdown, pas une base de données

Ce contenu est produit par 1 à 3 personnes, presque entièrement en texte. Des fichiers versionnés dans le repo suffisent pour cette échelle et restent faciles à relire/modifier par Git ou en clair. Une vraie table `lessons` en base ne devient nécessaire que si le volume de contenu ou le nombre de contributeurs augmente sensiblement — pas encore le cas.

## Reste à faire

- **Vague 3** (7 formations niveau avancé — bootcamps et programmes) — pas encore rédigée.
- Les niveaux intermédiaire et avancé de la catégorie "vente" partagent le formateur Abraham Tchio avec le niveau débutant — vérifier qu'il n'y a pas de redite entre les cours en les relisant dans l'ordre (débutant → intermédiaire → avancé).
- Toujours aucun email transactionnel (Resend) — en attente de l'achat d'un nom de domaine.
