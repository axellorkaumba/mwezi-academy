import type { Course, Category, Level } from "./courses";

type Bi = { fr: string; en: string };

const t = (fr: string, en: string): Bi => ({ fr, en });

// ---------- Per-category content pools ----------
// Rotated per course (by level) so the 3 courses in one category don't read identically.

const learnPools: Record<Category, Bi[]> = {
  marketing: [
    t("Définir une cible et un message qui lui parle vraiment", "Define an audience and a message that actually speaks to them"),
    t("Construire un plan d'acquisition réaliste, canal par canal", "Build a realistic acquisition plan, channel by channel"),
    t("Lire un tableau de performance sans se noyer dans les métriques", "Read a performance dashboard without drowning in metrics"),
    t("Écrire des messages qui donnent envie de cliquer", "Write messages people actually want to click on"),
    t("Structurer un tunnel de conversion, de la première visite à l'achat", "Structure a conversion funnel, from first visit to purchase"),
    t("Prioriser un budget marketing limité sur ce qui rapporte", "Prioritize a limited marketing budget on what actually pays off"),
  ],
  branding: [
    t("Clarifier un positionnement en une phrase, sans jargon", "Clarify a positioning statement in one sentence, no jargon"),
    t("Construire une identité visuelle cohérente sur tous les supports", "Build a visual identity that holds together across every touchpoint"),
    t("Écrire l'histoire de marque qui différencie vraiment", "Write the brand story that actually differentiates you"),
    t("Traduire un positionnement en choix concrets de design", "Translate positioning into concrete design decisions"),
    t("Construire une présence personnelle cohérente avec l'activité", "Build a personal presence consistent with the business"),
    t("Éviter les pièges visuels qui rendent une marque interchangeable", "Avoid the visual traps that make a brand interchangeable"),
  ],
  contenu: [
    t("Maîtriser les bases d'un outil de création sans y perdre des heures", "Master the basics of a creation tool without losing hours to it"),
    t("Produire un visuel professionnel en partant d'un gabarit", "Produce a professional visual starting from a template"),
    t("Monter une vidéo courte qui garde l'attention jusqu'au bout", "Cut a short video that holds attention to the end"),
    t("Organiser un flux de production répétable, pas un coup unique", "Set up a repeatable production workflow, not a one-off"),
    t("Adapter un même contenu à plusieurs formats et plateformes", "Adapt one piece of content across multiple formats and platforms"),
    t("Publier en ligne sans dépendre d'un développeur", "Publish online without depending on a developer"),
  ],
  ia: [
    t("Écrire un prompt qui donne un résultat exploitable du premier coup", "Write a prompt that gives a usable result on the first try"),
    t("Distinguer les tâches où l'IA aide vraiment de celles où elle ne sert à rien", "Tell apart tasks where AI genuinely helps from ones where it doesn't"),
    t("Connecter un outil IA à un cas d'usage réel de votre activité", "Connect an AI tool to a real use case in your business"),
    t("Construire un workflow automatisé, étape par étape", "Build an automated workflow, step by step"),
    t("Garder un contrôle humain sur ce que l'IA produit", "Keep human oversight over what the AI produces"),
    t("Mesurer le temps réellement gagné, pas supposé", "Measure the time actually saved, not assumed"),
  ],
  developpement: [
    t("Utiliser un assistant IA comme copilote sans perdre le contrôle du code", "Use an AI assistant as a copilot without losing control of the code"),
    t("Lire et corriger ce qu'une IA génère avant de le livrer", "Read and fix what an AI generates before shipping it"),
    t("Connecter une API et gérer ses erreurs proprement", "Connect an API and handle its errors properly"),
    t("Structurer un projet pour qu'il reste maintenable", "Structure a project so it stays maintainable"),
    t("Automatiser une tâche répétitive de bout en bout", "Automate a repetitive task end to end"),
    t("Déployer un projet en production sans mauvaise surprise", "Deploy a project to production without nasty surprises"),
  ],
  entrepreneuriat: [
    t("Formuler une offre que quelqu'un comprend en une phrase", "Phrase an offer someone understands in one sentence"),
    t("Trouver ses premiers clients sans budget publicitaire", "Find your first clients without an ad budget"),
    t("Fixer un prix qui reflète la valeur réelle, pas la peur de vendre", "Set a price that reflects real value, not the fear of selling"),
    t("Construire un tunnel de vente simple, du premier contact au paiement", "Build a simple sales funnel, from first contact to payment"),
    t("Reconnaître les signaux qui annoncent un client prêt à acheter", "Recognize the signals that show a client is ready to buy"),
    t("Décider quoi arrêter de faire pour se concentrer sur ce qui vend", "Decide what to stop doing to focus on what actually sells"),
  ],
  vente: [
    t("Structurer un script d'appel qui ne sonne pas comme un script", "Structure a call script that doesn't sound scripted"),
    t("Passer le barrage secrétaire/standard sans perdre patience", "Get past the gatekeeper without losing your patience"),
    t("Reconnaître et lever les objections les plus courantes", "Recognize and overcome the most common objections"),
    t("Poser les bonnes questions pour qualifier un prospect en 5 minutes", "Ask the right questions to qualify a prospect in 5 minutes"),
    t("Coacher un commercial sur un appel qu'il vient de rater", "Coach a rep on a call they just lost"),
    t("Lire les indicateurs d'une équipe commerciale (conversion, durée d'appel, relances)", "Read a sales team's indicators (conversion, call length, follow-ups)"),
  ],
};

const forWhoPools: Record<Category, Bi[]> = {
  marketing: [
    t("Entrepreneurs qui gèrent leur marketing seuls, sans agence", "Entrepreneurs handling their own marketing, without an agency"),
    t("Professionnels qui veulent comprendre ce que fait leur équipe marketing", "Professionals who want to understand what their marketing team does"),
    t("Community managers qui veulent monter en compétence", "Community managers looking to level up"),
    t("Toute personne qui doit vendre en ligne et ne sait pas par où commencer", "Anyone who needs to sell online and doesn't know where to start"),
  ],
  branding: [
    t("Entrepreneurs qui lancent une marque ou en changent l'image", "Entrepreneurs launching a brand or repositioning one"),
    t("Indépendants qui veulent une présence professionnelle cohérente", "Freelancers who want a consistent professional presence"),
    t("Petites équipes sans designer dédié", "Small teams without a dedicated designer"),
    t("Toute personne fatiguée d'improviser son image de marque", "Anyone tired of improvising their brand image"),
  ],
  contenu: [
    t("Entrepreneurs qui produisent eux-mêmes leur contenu", "Entrepreneurs producing their own content"),
    t("Community managers et assistants marketing", "Community managers and marketing assistants"),
    t("Créateurs de contenu qui veulent un rendu plus professionnel", "Content creators aiming for a more professional finish"),
    t("Toute personne sans budget pour un studio ou une agence", "Anyone without the budget for a studio or an agency"),
  ],
  ia: [
    t("Entrepreneurs qui veulent gagner du temps sans embaucher", "Entrepreneurs who want to save time without hiring"),
    t("Professionnels curieux mais jamais vraiment formés à l'IA", "Professionals curious about AI but never properly trained"),
    t("Équipes qui utilisent déjà ChatGPT ou Claude sans méthode", "Teams already using ChatGPT or Claude without a real method"),
    t("Toute personne qui veut des cas d'usage réels, pas une démo", "Anyone who wants real use cases, not a demo"),
  ],
  developpement: [
    t("Développeurs qui veulent intégrer l'IA dans leur pratique quotidienne", "Developers who want to bring AI into their daily practice"),
    t("Autodidactes qui codent déjà un peu et veulent structurer leurs bases", "Self-taught coders who already build things and want solid foundations"),
    t("Product builders qui veulent livrer plus vite, sans bâcler", "Product builders who want to ship faster without cutting corners"),
    t("Toute personne technique curieuse des outils d'IA appliqués au code", "Any technical person curious about AI tools applied to code"),
  ],
  entrepreneuriat: [
    t("Porteurs de projet avant ou juste après le lancement", "Founders before or just after launch"),
    t("Indépendants qui peinent à trouver leurs premiers clients", "Freelancers struggling to land their first clients"),
    t("Professionnels qui envisagent de se lancer à leur compte", "Professionals considering going independent"),
    t("Toute personne qui a une offre mais pas encore de méthode pour la vendre", "Anyone with an offer but no method yet to sell it"),
  ],
  vente: [
    t("Commerciaux qui prospectent par téléphone au quotidien", "Sales reps prospecting by phone every day"),
    t("Entrepreneurs qui doivent vendre eux-mêmes, sans équipe dédiée", "Entrepreneurs who have to sell themselves, without a dedicated team"),
    t("Team leaders et managers qui encadrent une équipe commerciale", "Team leaders and managers overseeing a sales team"),
    t("Toute personne qui doit décrocher des rendez-vous ou closer des ventes", "Anyone who needs to book meetings or close sales"),
  ],
};

const outcomesPools: Record<Category, Bi[]> = {
  marketing: [
    t("Lancer une campagne publicitaire de bout en bout", "Launch an ad campaign end to end"),
    t("Écrire un plan d'acquisition sur 90 jours", "Write a 90-day acquisition plan"),
    t("Analyser vos résultats et corriger ce qui ne marche pas", "Analyze your results and fix what isn't working"),
    t("Construire un tunnel de conversion complet", "Build a complete conversion funnel"),
  ],
  branding: [
    t("Écrire un positionnement de marque en une phrase", "Write a one-sentence brand positioning"),
    t("Construire une charte visuelle simple et applicable", "Build a simple, applicable visual style guide"),
    t("Raconter votre marque de façon mémorable", "Tell your brand's story in a memorable way"),
    t("Appliquer votre identité à tous vos supports", "Apply your identity consistently across every touchpoint"),
  ],
  contenu: [
    t("Produire un visuel de marque prêt à publier", "Produce a brand visual ready to publish"),
    t("Monter une vidéo courte pour les réseaux sociaux", "Cut a short video for social media"),
    t("Mettre en ligne un site simple et fonctionnel", "Publish a simple, working website"),
    t("Organiser un flux de production de contenu réutilisable", "Set up a reusable content production workflow"),
  ],
  ia: [
    t("Automatiser une tâche répétitive avec l'IA", "Automate a repetitive task with AI"),
    t("Construire un premier agent ou workflow IA", "Build a first AI agent or workflow"),
    t("Écrire des prompts fiables et réutilisables", "Write reliable, reusable prompts"),
    t("Intégrer l'IA dans un processus métier réel", "Integrate AI into a real business process"),
  ],
  developpement: [
    t("Livrer une fonctionnalité avec un assistant IA en copilote", "Ship a feature with an AI assistant as copilot"),
    t("Connecter une API d'IA à un projet existant", "Connect an AI API to an existing project"),
    t("Déployer un projet en production", "Deploy a project to production"),
    t("Automatiser une tâche de développement répétitive", "Automate a repetitive development task"),
  ],
  entrepreneuriat: [
    t("Formuler une offre claire et vendable", "Phrase a clear, sellable offer"),
    t("Décrocher un premier rendez-vous client qualifié", "Land a first qualified client meeting"),
    t("Fixer un prix défendable pour votre offre", "Set a defensible price for your offer"),
    t("Mettre en ligne une page de vente fonctionnelle", "Publish a working sales page"),
  ],
  vente: [
    t("Mener un appel de prospection de bout en bout", "Run a prospecting call end to end"),
    t("Répondre aux objections les plus fréquentes sans perdre le client", "Handle the most common objections without losing the client"),
    t("Fixer des objectifs commerciaux réalistes et les suivre", "Set realistic sales targets and track them"),
    t("Coacher un commercial sur ses points faibles au téléphone", "Coach a rep on their weak points on the phone"),
  ],
};

const moduleNamePools: Record<Category, Bi[]> = {
  marketing: [
    t("Diagnostic : où en est votre marketing aujourd'hui", "Diagnostic: where your marketing stands today"),
    t("Définir sa cible et son message", "Defining your audience and message"),
    t("Choisir ses canaux d'acquisition", "Choosing your acquisition channels"),
    t("Construire sa première campagne", "Building your first campaign"),
    t("Suivre et lire ses résultats", "Tracking and reading your results"),
    t("Optimiser ce qui marche, couper ce qui ne marche pas", "Doubling down on what works, cutting what doesn't"),
    t("Construire un tunnel de conversion", "Building a conversion funnel"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
  branding: [
    t("Diagnostic de marque : où est le flou aujourd'hui", "Brand diagnostic: where things are unclear today"),
    t("Trouver son positionnement en une phrase", "Finding your positioning in one sentence"),
    t("Construire son identité visuelle", "Building your visual identity"),
    t("Écrire son histoire de marque", "Writing your brand story"),
    t("Appliquer l'identité à ses supports", "Applying your identity across your materials"),
    t("Cohérence de marque sur le long terme", "Keeping brand consistency over time"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
  contenu: [
    t("Prise en main de l'outil", "Getting started with the tool"),
    t("Les bases qui changent tout : cadrage, lumière, structure", "The basics that change everything: framing, light, structure"),
    t("Construire un gabarit réutilisable", "Building a reusable template"),
    t("Produire son premier contenu", "Producing your first piece of content"),
    t("Adapter un contenu à plusieurs formats", "Adapting one piece of content across formats"),
    t("Publier et organiser sa production", "Publishing and organizing your production"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
  ia: [
    t("Comprendre ce que l'IA sait vraiment faire", "Understanding what AI can actually do"),
    t("Les bases du prompt qui fonctionne", "The basics of a prompt that works"),
    t("Choisir le bon cas d'usage pour commencer", "Choosing the right use case to start"),
    t("Construire son premier workflow", "Building your first workflow"),
    t("Connecter les outils entre eux", "Connecting tools together"),
    t("Garder le contrôle : vérification et limites", "Staying in control: review and limits"),
    t("Mesurer le temps gagné", "Measuring the time saved"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
  developpement: [
    t("Configurer son environnement de travail", "Setting up your working environment"),
    t("Utiliser un assistant IA comme copilote", "Using an AI assistant as a copilot"),
    t("Lire et corriger le code généré", "Reading and fixing generated code"),
    t("Connecter une API et gérer les erreurs", "Connecting an API and handling errors"),
    t("Structurer un projet maintenable", "Structuring a maintainable project"),
    t("Automatiser une tâche de bout en bout", "Automating a task end to end"),
    t("Déployer en production", "Deploying to production"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
  entrepreneuriat: [
    t("Clarifier son offre en une phrase", "Clarifying your offer in one sentence"),
    t("Identifier sa cible prioritaire", "Identifying your priority audience"),
    t("Trouver ses 10 premiers prospects", "Finding your first 10 prospects"),
    t("Structurer sa proposition commerciale", "Structuring your sales proposal"),
    t("Fixer son prix sans brader sa valeur", "Pricing without undervaluing yourself"),
    t("Construire son premier tunnel de vente", "Building your first sales funnel"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
  vente: [
    t("Diagnostic : où perdez-vous des ventes aujourd'hui", "Diagnostic: where you're losing sales today"),
    t("Construire un script d'appel qui reste naturel", "Building a call script that stays natural"),
    t("Passer les barrages et capter l'attention en 20 secondes", "Getting past gatekeepers and grabbing attention in 20 seconds"),
    t("Qualifier un prospect : les bonnes questions", "Qualifying a prospect: the right questions"),
    t("Gérer les objections sans se justifier", "Handling objections without over-justifying"),
    t("Conclure : demander l'engagement sans forcer", "Closing: asking for commitment without pushing"),
    t("Coacher une équipe sur ses appels et lire ses indicateurs", "Coaching a team on their calls and reading their indicators"),
    t("Étude de cas et plan d'action personnel", "Case study and personal action plan"),
  ],
};

const projectTemplate: Bi = t(
  "Un projet pratique sur votre propre activité : appliquer directement les méthodes de « {title} » à un cas réel, avec un livrable concret à la fin — pas un exercice fictif.",
  "A hands-on project on your own business: apply the methods from \"{title}\" directly to a real case, with a concrete deliverable at the end — not a made-up exercise."
);

const resourcesList: Bi[] = [
  t("Enregistrement des sessions, à revoir à volonté", "Session recordings, available on demand"),
  t("Supports et templates prêts à réutiliser", "Slides and ready-to-reuse templates"),
  t("Accès à la communauté des apprenants Mwezi Academy", "Access to the Mwezi Academy learner community"),
  t("Attestation ou certificat selon la réussite du projet", "Attestation or certificate depending on project success"),
];

function faqFor(level: Level): { q: Bi; a: Bi }[] {
  const prereq: Record<Level, Bi> = {
    debutant: t(
      "Aucun. Cette formation part de zéro — c'est justement fait pour ça.",
      "None. This course starts from zero — that's exactly what it's built for."
    ),
    intermediaire: t(
      "Connaître les bases du sujet suffit ; l'objectif est de devenir opérationnel, pas de tout réapprendre.",
      "Knowing the basics is enough; the goal is to become operational, not to relearn everything."
    ),
    avance: t(
      "Une pratique déjà régulière du sujet est recommandée pour profiter pleinement du niveau avancé.",
      "Regular hands-on practice with the topic is recommended to get the most out of the advanced level."
    ),
  };

  return [
    { q: t("Ai-je besoin de prérequis ?", "Do I need any prerequisites?"), a: prereq[level] },
    {
      q: t("Comment se passe le paiement ?", "How does payment work?"),
      a: t(
        "En espèces, en main propre à un formateur ou référent Mwezi Academy, après votre inscription en ligne. Votre accès à la formation est activé dès réception du paiement.",
        "In cash, in person to a Mwezi Academy instructor or referent, after you enroll online. Your access to the course is activated once payment is received."
      ),
    },
    {
      q: t("Est-ce que j'obtiens un certificat ?", "Do I get a certificate?"),
      a: t(
        "Oui, avec un numéro unique vérifiable en ligne — une attestation si vous suivez la formation, un certificat de compétence si vous réussissez le projet noté.",
        "Yes, with a unique number verifiable online — an attestation for completing the course, a competency certificate if you pass the graded project."
      ),
    },
  ];
}

export interface CourseDetail {
  learn: Bi[];
  forWho: Bi[];
  outcomes: Bi[];
  modules: Bi[];
  project: Bi;
  resources: Bi[];
  faq: { q: Bi; a: Bi }[];
}

const levelOffset: Record<Level, number> = { debutant: 0, intermediaire: 1, avance: 2 };

function rotate<T>(pool: T[], offset: number, count: number): T[] {
  const out: T[] = [];
  for (let i = 0; i < count; i++) {
    out.push(pool[(offset + i) % pool.length]);
  }
  return out;
}

// Same as rotate, but for module lists: once the pool has cycled once,
// each extra pass gets an "advanced" suffix instead of repeating the exact title.
function rotateModules(pool: Bi[], count: number): Bi[] {
  const suffix: Bi = t(" — approfondissement", " — advanced practice");
  const out: Bi[] = [];
  for (let i = 0; i < count; i++) {
    const pass = Math.floor(i / pool.length);
    const base = pool[i % pool.length];
    out.push(
      pass === 0
        ? base
        : { fr: base.fr + suffix.fr, en: base.en + suffix.en }
    );
  }
  return out;
}

// Per-course module overrides. The shared category pools above work fine as
// sales-page teaser copy, but rotateModules never applies the level offset —
// an intermediate course and a beginner course in the same category end up
// with near-identical module titles. For courses where real lesson content
// has been written (content/courses/*.md), the modules here must match that
// content exactly, so they're listed explicitly rather than pulled from the
// generic pool.
const moduleOverrides: Partial<Record<string, Bi[]>> = {
  "meta-ads-premiere-campagne": [
    t("Comprendre le Gestionnaire de publicités Meta", "Understanding Meta Ads Manager"),
    t("Définir son audience cible", "Defining your target audience"),
    t("Choisir le bon objectif de campagne", "Choosing the right campaign objective"),
    t("Structurer une campagne (campagne, ensemble, publicité)", "Structuring a campaign (campaign, ad set, ad)"),
    t("Créer une publicité qui capte l'attention", "Creating an ad that grabs attention"),
    t("Fixer un budget et une enchère", "Setting a budget and a bid"),
    t("Lire ses résultats et ses indicateurs clés", "Reading your results and key metrics"),
    t("Optimiser et relancer une campagne rentable", "Optimizing and relaunching a profitable campaign"),
  ],
  "personal-branding-entrepreneurs": [
    t("Pourquoi se rendre visible sans devenir un influenceur", "Why get visible without becoming an influencer"),
    t("Clarifier son positionnement personnel", "Clarifying your personal positioning"),
    t("Choisir ses sujets et sa ligne éditoriale", "Choosing your topics and editorial line"),
    t("Construire une présence cohérente sur un réseau", "Building a consistent presence on one platform"),
    t("Prendre la parole sans se sentir artificiel", "Speaking up without feeling fake"),
    t("Transformer sa visibilité en opportunités concrètes", "Turning visibility into real opportunities"),
  ],
  "montage-video-reseaux-sociaux": [
    t("Préparer son tournage avant de filmer", "Preparing your shoot before filming"),
    t("Filmer avec un simple téléphone : les réglages qui comptent", "Filming with just a phone: the settings that matter"),
    t("Prendre en main un logiciel de montage accessible", "Getting started with an accessible editing tool"),
    t("Structurer un montage qui garde l'attention", "Structuring an edit that holds attention"),
    t("Ajouter texte, musique et rythme", "Adding text, music and pacing"),
    t("Adapter un montage à plusieurs formats (Reels, TikTok, Shorts)", "Adapting one edit to multiple formats (Reels, TikTok, Shorts)"),
    t("Publier au bon moment et avec la bonne description", "Publishing at the right time with the right caption"),
  ],
  "automatiser-son-entreprise-avec-lia": [
    t("Cartographier les tâches répétitives de son entreprise", "Mapping your business's repetitive tasks"),
    t("Automatiser la rédaction et le tri des emails", "Automating email drafting and sorting"),
    t("Construire un premier assistant de service client", "Building a first customer service assistant"),
    t("Automatiser la production de contenu récurrent", "Automating recurring content production"),
    t("Connecter l'IA à ses outils existants", "Connecting AI to your existing tools"),
    t("Créer des gabarits réutilisables pour chaque workflow", "Creating reusable templates for each workflow"),
    t("Garder un contrôle humain sur les automatisations sensibles", "Keeping human oversight on sensitive automations"),
    t("Mesurer le temps réellement gagné", "Measuring the time actually saved"),
    t("Étude de cas et plan d'automatisation personnel", "Case study and personal automation plan"),
  ],
  "automatiser-avec-les-apis-dia": [
    t("Comprendre le fonctionnement d'une API d'IA", "Understanding how an AI API works"),
    t("Obtenir et sécuriser une clé API", "Getting and securing an API key"),
    t("Envoyer sa première requête et lire la réponse", "Sending your first request and reading the response"),
    t("Intégrer l'API dans un projet existant", "Integrating the API into an existing project"),
    t("Gérer les erreurs et les limites de l'API (quotas, coûts)", "Handling API errors and limits (quotas, costs)"),
    t("Automatiser un traitement en lot", "Automating a batch process"),
    t("Déployer et surveiller l'intégration en production", "Deploying and monitoring the integration in production"),
  ],
  "pricing-strategie-commerciale": [
    t("Comprendre les différents modèles de tarification", "Understanding different pricing models"),
    t("Calculer son prix plancher réel", "Calculating your real price floor"),
    t("Aligner son prix sur la valeur perçue, pas seulement le coût", "Aligning price with perceived value, not just cost"),
    t("Construire une grille tarifaire (offres, options, paliers)", "Building a pricing grid (tiers, options, packages)"),
    t("Défendre son prix face à la négociation", "Defending your price against negotiation"),
    t("Ajuster sa stratégie commerciale selon les résultats", "Adjusting your sales strategy based on results"),
  ],
  "gestion-objections-closing": [
    t("Pourquoi une objection n'est pas un refus", "Why an objection isn't a refusal"),
    t("Les objections les plus fréquentes et ce qu'elles cachent vraiment", "The most common objections and what they really hide"),
    t("La méthode en 3 temps pour désamorcer une objection", "The 3-step method to defuse an objection"),
    t("Objection prix : au-delà de \"c'est trop cher\"", "Price objection: beyond \"it's too expensive\""),
    t("Objection délai : \"je dois réfléchir\"", "Timing objection: \"I need to think about it\""),
    t("Techniques de closing : demander l'engagement au bon moment", "Closing techniques: asking for commitment at the right time"),
    t("Gérer un refus et garder la porte ouverte", "Handling a refusal and keeping the door open"),
  ],
  "tunnel-de-conversion": [
    t("Cartographier le parcours client, de la découverte à l'achat", "Mapping the customer journey, from discovery to purchase"),
    t("Aligner son contenu sur chaque étape du tunnel", "Aligning content to each stage of the funnel"),
    t("Construire une page de destination qui convertit", "Building a landing page that converts"),
    t("Créer un lead magnet qui attire les bons prospects", "Creating a lead magnet that attracts the right prospects"),
    t("Mettre en place une séquence de nurturing", "Setting up a nurturing sequence"),
    t("Construire un calendrier éditorial tenable sur la durée", "Building an editorial calendar that holds up over time"),
    t("Produire du contenu qui alimente chaque étape du tunnel", "Producing content that feeds each stage of the funnel"),
    t("Suivre la conversion à chaque étape, pas seulement à la fin", "Tracking conversion at every stage, not just the end"),
    t("Identifier et corriger le point de fuite principal du tunnel", "Identifying and fixing the funnel's main leak"),
    t("Étude de cas et plan de tunnel personnel", "Case study and personal funnel plan"),
  ],
  "storytelling-plateforme-de-marque": [
    t("Approfondir son histoire de marque au-delà du pitch de base", "Deepening your brand story beyond the basic pitch"),
    t("Construire les piliers de sa plateforme de marque", "Building the pillars of your brand platform"),
    t("Décliner sa plateforme de marque sur tous les formats", "Adapting your brand platform across every format"),
    t("Faire vivre sa plateforme de marque dans la durée", "Keeping your brand platform alive over time"),
  ],
  "site-web-sans-coder": [
    t("Choisir le bon outil sans code pour son projet", "Choosing the right no-code tool for your project"),
    t("Structurer les pages essentielles d'un site vitrine", "Structuring the essential pages of a showcase site"),
    t("Choisir un modèle et l'adapter à son identité de marque", "Choosing a template and adapting it to your brand identity"),
    t("Rédiger un contenu qui donne envie de rester", "Writing content that makes visitors want to stay"),
    t("Ajouter les éléments indispensables (contact, réseaux, action)", "Adding the essentials (contact, social links, call to action)"),
    t("Optimiser l'affichage sur mobile", "Optimizing the mobile display"),
    t("Vérifier et corriger avant la mise en ligne", "Reviewing and fixing before going live"),
    t("Publier et partager son site", "Publishing and sharing your site"),
  ],
  "construire-des-agents-ia": [
    t("Comprendre ce qu'est un agent IA, au-delà d'un chatbot", "Understanding what an AI agent is, beyond a chatbot"),
    t("Définir un cas d'usage réel pour un premier agent", "Defining a real use case for a first agent"),
    t("Choisir une architecture d'agent adaptée au besoin", "Choosing an agent architecture suited to the need"),
    t("Comprendre le principe de MCP (Model Context Protocol)", "Understanding the MCP (Model Context Protocol) principle"),
    t("Connecter un premier outil externe à l'agent", "Connecting a first external tool to the agent"),
    t("Donner à l'agent une mémoire ou un contexte persistant", "Giving the agent memory or persistent context"),
    t("Structurer les instructions et les limites de l'agent", "Structuring the agent's instructions and limits"),
    t("Tester l'agent sur des cas réels et corriger ses erreurs", "Testing the agent on real cases and fixing its errors"),
    t("Ajouter un deuxième outil connecté et gérer leur interaction", "Adding a second connected tool and managing their interaction"),
    t("Sécuriser l'accès de l'agent aux outils sensibles", "Securing the agent's access to sensitive tools"),
    t("Déployer l'agent pour un usage réel", "Deploying the agent for real use"),
    t("Étude de cas et plan d'agent personnel", "Case study and personal agent plan"),
  ],
  "construire-un-saas-avec-lia": [
    t("Valider une idée de SaaS avant d'écrire une ligne de code", "Validating a SaaS idea before writing a line of code"),
    t("Définir le périmètre minimal du premier produit (MVP)", "Defining the minimal scope of the first product (MVP)"),
    t("Choisir une stack technique adaptée à un solo builder", "Choosing a tech stack suited to a solo builder"),
    t("Concevoir la structure de données de son produit", "Designing your product's data structure"),
    t("Construire l'authentification et les comptes utilisateurs", "Building authentication and user accounts"),
    t("Développer la fonctionnalité principale avec un assistant IA", "Building the core feature with an AI assistant"),
    t("Construire une interface utilisateur fonctionnelle et claire", "Building a functional, clear user interface"),
    t("Intégrer un système de paiement/abonnement", "Integrating a payment/subscription system"),
    t("Tester le produit avec de vrais utilisateurs avant le lancement", "Testing the product with real users before launch"),
    t("Corriger les problèmes remontés par les premiers testeurs", "Fixing issues reported by early testers"),
    t("Préparer le déploiement en production", "Preparing the production deployment"),
    t("Déployer et surveiller le produit en production", "Deploying and monitoring the product in production"),
    t("Mettre en place un premier canal d'acquisition d'utilisateurs", "Setting up a first user acquisition channel"),
    t("Étude de cas et plan de lancement personnel", "Case study and personal launch plan"),
  ],
  "construire-son-offre-vendre-en-ligne": [
    t("Structurer une offre claire à partir d'un besoin validé", "Structuring a clear offer from a validated need"),
    t("Choisir le bon format d'offre (produit, service, abonnement)", "Choosing the right offer format (product, service, subscription)"),
    t("Construire une page de vente qui explique et convainc", "Building a sales page that explains and convinces"),
    t("Rédiger des témoignages et preuves qui rassurent", "Writing testimonials and proof that reassure"),
    t("Fixer un prix de lancement et une structure d'offre", "Setting a launch price and offer structure"),
    t("Mettre en place un moyen d'encaissement en ligne", "Setting up an online payment method"),
    t("Construire un tunnel simple de la page de vente au paiement", "Building a simple funnel from sales page to payment"),
    t("Préparer le lancement (audience, calendrier, canaux)", "Preparing the launch (audience, calendar, channels)"),
    t("Gérer les premiers retours et objections après lancement", "Handling first feedback and objections after launch"),
    t("Étude de cas et plan de lancement personnel", "Case study and personal launch plan"),
  ],
  "manager-equipe-commerciale": [
    t("Passer de commercial individuel à manager d'équipe", "Moving from individual rep to team manager"),
    t("Fixer des objectifs commerciaux réalistes et motivants", "Setting realistic, motivating sales targets"),
    t("Structurer le suivi d'activité d'une équipe", "Structuring a team's activity tracking"),
    t("Écouter un appel et donner un feedback constructif", "Listening to a call and giving constructive feedback"),
    t("Coacher un commercial sur ses points faibles précis", "Coaching a rep on their specific weak points"),
    t("Animer un point d'équipe commercial efficace", "Running an effective sales team meeting"),
    t("Gérer un commercial en difficulté de performance", "Managing an underperforming rep"),
    t("Reconnaître et faire progresser un bon élément", "Recognizing and growing a strong performer"),
    t("Lire un tableau de bord commercial et décider des priorités", "Reading a sales dashboard and deciding priorities"),
    t("Étude de cas et plan de management personnel", "Case study and personal management plan"),
  ],
};

export function getCourseDetail(course: Course): CourseDetail {
  const offset = levelOffset[course.level];

  return {
    learn: rotate(learnPools[course.category], offset, 4),
    forWho: rotate(forWhoPools[course.category], offset, 3),
    outcomes: [
      t(course.description.fr, course.description.en),
      ...rotate(outcomesPools[course.category], offset, 3),
    ],
    modules: moduleOverrides[course.slug] ?? rotateModules(moduleNamePools[course.category], course.modules),
    project: {
      fr: projectTemplate.fr.replace("{title}", course.title.fr),
      en: projectTemplate.en.replace("{title}", course.title.en),
    },
    resources: resourcesList,
    faq: faqFor(course.level),
  };
}
