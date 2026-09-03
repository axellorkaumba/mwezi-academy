# Contenu de cours — 21/21 formations rédigées

Brouillons de contenu pédagogique pour l'intégralité du catalogue. Chaque fichier suit la structure module par module de `src/lib/course-detail.ts` — les titres de module y sont définis explicitement dans `moduleOverrides` (plutôt que tirés du pool générique par catégorie) pour tous les cours ayant un contenu spécifique écrit, afin de rester cohérents avec ce que le contenu enseigne réellement.

Le contenu est lu et affiché en direct sur le site via `/formation/[slug]/apprendre`, réservé aux apprenants avec une inscription au statut "payé" pour cette formation précise.

**Le nom de fichier doit être identique au `slug` du cours dans `src/lib/courses.ts`** — sinon `getLessonContent()` ne trouve pas le fichier et l'apprenant voit "Contenu en préparation" malgré un contenu déjà écrit (bug réel rencontré et corrigé pendant la Vague 1 : 3 fichiers avaient un nom différent du slug réel).

## Avant publication

Chaque fichier doit être relu et corrigé par le formateur assigné :

| Fichier | Formateur | Formation | Niveau |
|---|---|---|---|
| `fondamentaux-du-marketing.md` | Axel Kaumba | Fondamentaux du marketing | Débutant |
| `creer-une-marque.md` | Axel Kaumba | Créer une marque qui se souvient | Débutant |
| `canva-pour-entrepreneurs.md` | Ruddy Kaumba | Canva pour entrepreneurs | Débutant |
| `chatgpt-claude-entrepreneurs.md` | Axel Kaumba | Claude & ChatGPT pour entrepreneurs | Débutant |
| `ai-assisted-coding.md` | Ruddy Kaumba | AI-assisted coding pour débutants | Débutant |
| `trouver-ses-premiers-clients.md` | Axel Kaumba | Trouver ses premiers clients | Débutant |
| `prospection-vente-telephonique.md` | Abraham Tchio | Prospection & vente téléphonique | Débutant |
| `site-web-sans-coder.md` | Ruddy Kaumba | Créer un site web sans coder | Débutant |
| `meta-ads-premiere-campagne.md` | Axel Kaumba | Meta Ads : de zéro à la première campagne | Intermédiaire |
| `personal-branding-entrepreneurs.md` | Axel Kaumba | Personal branding pour entrepreneurs | Intermédiaire |
| `montage-video-reseaux-sociaux.md` | Ruddy Kaumba | Montage vidéo pour réseaux sociaux | Intermédiaire |
| `automatiser-son-entreprise-avec-lia.md` | Axel Kaumba | Automatiser son entreprise avec l'IA | Intermédiaire |
| `automatiser-avec-les-apis-dia.md` | Ruddy Kaumba | Automatiser avec les APIs d'IA | Intermédiaire |
| `pricing-strategie-commerciale.md` | Axel Kaumba | Pricing & stratégie commerciale | Intermédiaire |
| `gestion-objections-closing.md` | Abraham Tchio | Gestion des objections & closing | Intermédiaire |
| `tunnel-de-conversion.md` | Axel Kaumba | Stratégie de contenu & tunnel de conversion | Avancé |
| `storytelling-plateforme-de-marque.md` | Axel Kaumba | Storytelling & plateforme de marque | Avancé |
| `construire-des-agents-ia.md` | Ruddy Kaumba | Construire des agents IA | Avancé |
| `construire-un-saas-avec-lia.md` | Ruddy Kaumba | Construire un SaaS avec l'IA | Avancé |
| `construire-son-offre-vendre-en-ligne.md` | Axel Kaumba | Construire son offre & vendre en ligne | Avancé |
| `manager-equipe-commerciale.md` | Abraham Tchio | Manager une équipe commerciale | Avancé |

Points à vérifier en priorité lors de la relecture :
- Exactitude technique (les exemples logiciels/techniques peuvent avoir évolué)
- Ton et méthode conformes à la façon dont chaque formateur enseigne réellement
- Remplacer ou compléter les exemples fictifs ("Atelier Nsimba", "Grâce Mbala", "Kivu Solutions", "StockFacile") par un cas réel si vous en avez un à partager
- Les cours d'un même formateur dans une même catégorie (ex. les 3 niveaux de "vente" par Abraham Tchio) ont été écrits pour ne pas se répéter — vérifier que c'est bien le cas en les lisant dans l'ordre débutant → intermédiaire → avancé

## Pourquoi du Markdown, pas une base de données

Ce contenu est produit par 1 à 3 personnes, presque entièrement en texte. Des fichiers versionnés dans le repo suffisent pour cette échelle et restent faciles à relire/modifier par Git ou en clair. Une vraie table `lessons` en base ne devient nécessaire que si le volume de contenu ou le nombre de contributeurs augmente sensiblement — pas encore le cas.

## Reste à faire

- Toujours aucun email transactionnel (Resend) — en attente de l'achat d'un nom de domaine par l'équipe.
- Le contenu de chaque module est actuellement du texte structuré, pas de vidéo — envisager d'ajouter des vidéos courtes (voir roadmap V1/V2) une fois le contenu texte validé par les formateurs.
- Aucune vidéo, quiz noté ou certificat généré n'existe encore — ce contenu couvre uniquement la partie "leçon + exercice + projet" du parcours pédagogique.
