# Contenu de cours — Vague 1

Brouillons de contenu pédagogique pour les 7 formations prioritaires du plan de contenu MVP (une par famille, niveau débutant). Chaque fichier suit la structure module par module déjà annoncée sur la page de vente correspondante (`src/lib/course-detail.ts`), pour rester cohérent avec ce que le site promet.

## Avant publication

Chaque fichier doit être relu et corrigé par le formateur assigné :

| Fichier | Formateur | Formation |
|---|---|---|
| `fondamentaux-du-marketing.md` | Axel Kaumba | Fondamentaux du marketing |
| `creer-une-marque-qui-se-souvient.md` | Axel Kaumba | Créer une marque qui se souvient |
| `canva-pour-entrepreneurs.md` | Ruddy Kaumba | Canva pour entrepreneurs |
| `claude-chatgpt-entrepreneurs.md` | Axel Kaumba | Claude & ChatGPT pour entrepreneurs |
| `ai-assisted-coding-debutants.md` | Ruddy Kaumba | AI-assisted coding pour débutants |
| `trouver-ses-premiers-clients.md` | Axel Kaumba | Trouver ses premiers clients |
| `prospection-vente-telephonique.md` | Abraham Tchio | Prospection & vente téléphonique |

Points à vérifier en priorité lors de la relecture :
- Exactitude technique (les exemples logiciels/techniques peuvent avoir évolué)
- Ton et méthode conformes à la façon dont chaque formateur enseigne réellement
- Remplacer ou compléter l'exemple fictif ("Atelier Nsimba", "Grâce Mbala") par un cas réel si vous en avez un à partager

## Pourquoi du Markdown, pas une base de données

Ce contenu est produit par 1 à 3 personnes, presque entièrement en texte. Des fichiers versionnés dans le repo suffisent pour cette échelle et restent faciles à relire/modifier par Git ou en clair. Une vraie table `lessons` en base ne devient nécessaire que si le volume de contenu ou le nombre de contributeurs augmente sensiblement — pas encore le cas.

## Ce qui manque encore pour que ce contenu soit réellement livré aux apprenants

Ces fichiers ne sont pour l'instant pas connectés au site — `/compte` renvoie toujours vers la page de vente publique de la formation, pas vers ce contenu. Il faut une page `/formation/[slug]/apprendre` (ou équivalent), accessible uniquement aux apprenants avec un statut "payé", qui affiche ce contenu module par module. C'est la prochaine étape technique une fois ce contenu validé.
