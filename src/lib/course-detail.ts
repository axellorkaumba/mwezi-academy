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
        "Par mobile money (Airtel Money, Orange Money, M-Pesa) ou carte bancaire selon votre pays — le paiement à l'international est aussi pris en charge.",
        "By mobile money (Airtel Money, Orange Money, M-Pesa) or card depending on your country — international payment is also supported."
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

export function getCourseDetail(course: Course): CourseDetail {
  const offset = levelOffset[course.level];

  return {
    learn: rotate(learnPools[course.category], offset, 4),
    forWho: rotate(forWhoPools[course.category], offset, 3),
    outcomes: [
      t(course.description.fr, course.description.en),
      ...rotate(outcomesPools[course.category], offset, 3),
    ],
    modules: rotateModules(moduleNamePools[course.category], course.modules),
    project: {
      fr: projectTemplate.fr.replace("{title}", course.title.fr),
      en: projectTemplate.en.replace("{title}", course.title.en),
    },
    resources: resourcesList,
    faq: faqFor(course.level),
  };
}
