export type Category =
  | "marketing"
  | "branding"
  | "contenu"
  | "ia"
  | "developpement"
  | "entrepreneuriat";

export type Level = "debutant" | "intermediaire" | "avance";

export type Format = "mini" | "formation" | "bootcamp" | "masterclass" | "programme";

export type Instructor = "axel" | "ruddy";

export interface Course {
  slug: string;
  category: Category;
  level: Level;
  format: Format;
  durationLabel: { fr: string; en: string };
  priceUSD: number;
  instructor: Instructor;
  modules: number;
  title: { fr: string; en: string };
  description: { fr: string; en: string };
}

export const categoryOrder: Category[] = [
  "marketing",
  "branding",
  "contenu",
  "ia",
  "developpement",
  "entrepreneuriat",
];

export const categoryLabels: Record<Category, { fr: string; en: string }> = {
  marketing: { fr: "Marketing", en: "Marketing" },
  branding: { fr: "Branding", en: "Branding" },
  contenu: { fr: "Création de contenu", en: "Content creation" },
  ia: { fr: "Intelligence artificielle", en: "Artificial intelligence" },
  developpement: { fr: "Développement", en: "Development" },
  entrepreneuriat: { fr: "Entrepreneuriat", en: "Entrepreneurship" },
};

export const instructorNames: Record<Instructor, string> = {
  axel: "Axel Kaumba",
  ruddy: "Ruddy Kaumba",
};

export const courses: Course[] = [
  // ---------- Marketing ----------
  {
    slug: "fondamentaux-du-marketing",
    category: "marketing",
    level: "debutant",
    format: "formation",
    durationLabel: { fr: "4 h", en: "4 h" },
    priceUSD: 19,
    instructor: "axel",
    modules: 6,
    title: { fr: "Fondamentaux du marketing", en: "Marketing fundamentals" },
    description: {
      fr: "Poser les bases : cible, positionnement, mix marketing — pour arrêter de deviner et commencer à décider.",
      en: "The real basics: audience, positioning, marketing mix — stop guessing, start deciding.",
    },
  },
  {
    slug: "meta-ads-premiere-campagne",
    category: "marketing",
    level: "intermediaire",
    format: "formation",
    durationLabel: { fr: "5 h", en: "5 h" },
    priceUSD: 39,
    instructor: "axel",
    modules: 8,
    title: { fr: "Meta Ads : de zéro à la première campagne", en: "Meta Ads: zero to your first campaign" },
    description: {
      fr: "Configurer, cibler, suivre et optimiser une campagne Meta Ads rentable, étape par étape.",
      en: "Set up, target, track and optimize a profitable Meta Ads campaign, step by step.",
    },
  },
  {
    slug: "tunnel-de-conversion",
    category: "marketing",
    level: "avance",
    format: "bootcamp",
    durationLabel: { fr: "2 jours", en: "2 days" },
    priceUSD: 129,
    instructor: "axel",
    modules: 10,
    title: { fr: "Stratégie de contenu & tunnel de conversion", en: "Content strategy & conversion funnel" },
    description: {
      fr: "Construire un tunnel complet, de l'acquisition à la vente, avec un calendrier éditorial qui tient dans le temps.",
      en: "Build a complete funnel, from acquisition to sale, with an editorial calendar that actually holds.",
    },
  },

  // ---------- Branding ----------
  {
    slug: "creer-une-marque",
    category: "branding",
    level: "debutant",
    format: "formation",
    durationLabel: { fr: "4 h", en: "4 h" },
    priceUSD: 29,
    instructor: "axel",
    modules: 7,
    title: { fr: "Créer une marque qui se souvient", en: "Building a brand people remember" },
    description: {
      fr: "Positionnement, nom, identité visuelle : construire les fondations d'une marque, pas juste un logo.",
      en: "Positioning, naming, visual identity: the real foundations of a brand, not just a logo.",
    },
  },
  {
    slug: "personal-branding-entrepreneurs",
    category: "branding",
    level: "intermediaire",
    format: "formation",
    durationLabel: { fr: "3 h", en: "3 h" },
    priceUSD: 25,
    instructor: "axel",
    modules: 6,
    title: { fr: "Personal branding pour entrepreneurs", en: "Personal branding for entrepreneurs" },
    description: {
      fr: "Devenir visible sans devenir un influenceur : construire une présence qui sert votre activité.",
      en: "Get visible without becoming an influencer: build a presence that actually serves your business.",
    },
  },
  {
    slug: "storytelling-plateforme-de-marque",
    category: "branding",
    level: "avance",
    format: "masterclass",
    durationLabel: { fr: "Session unique", en: "Single session" },
    priceUSD: 49,
    instructor: "axel",
    modules: 4,
    title: { fr: "Storytelling & plateforme de marque", en: "Storytelling & brand platform" },
    description: {
      fr: "Écrire l'histoire de votre marque et la structurer en une vraie plateforme, réutilisable partout.",
      en: "Write your brand's story and structure it into a real platform, reusable everywhere.",
    },
  },

  // ---------- Création de contenu ----------
  {
    slug: "canva-pour-entrepreneurs",
    category: "contenu",
    level: "debutant",
    format: "mini",
    durationLabel: { fr: "2 h", en: "2 h" },
    priceUSD: 12,
    instructor: "axel",
    modules: 4,
    title: { fr: "Canva pour entrepreneurs", en: "Canva for entrepreneurs" },
    description: {
      fr: "Produire vos propres visuels professionnels sans designer — kit de marque, templates, réflexes.",
      en: "Produce your own professional visuals without a designer — brand kit, templates, habits that stick.",
    },
  },
  {
    slug: "montage-video-reseaux-sociaux",
    category: "contenu",
    level: "intermediaire",
    format: "formation",
    durationLabel: { fr: "4 h", en: "4 h" },
    priceUSD: 35,
    instructor: "ruddy",
    modules: 7,
    title: { fr: "Montage vidéo pour réseaux sociaux", en: "Video editing for social media" },
    description: {
      fr: "Monter des Reels et TikTok qui retiennent l'attention, du tournage au montage final.",
      en: "Cut Reels and TikToks that hold attention, from filming to final export.",
    },
  },
  {
    slug: "site-web-sans-coder",
    category: "contenu",
    level: "debutant",
    format: "formation",
    durationLabel: { fr: "5 h", en: "5 h" },
    priceUSD: 39,
    instructor: "ruddy",
    modules: 8,
    title: { fr: "Créer un site web sans coder", en: "Build a website without code" },
    description: {
      fr: "Un site professionnel en ligne à la fin de la formation — structure, contenu, mise en ligne.",
      en: "A professional site live by the end of the course — structure, content, and deployment.",
    },
  },

  // ---------- Intelligence artificielle ----------
  {
    slug: "chatgpt-claude-entrepreneurs",
    category: "ia",
    level: "debutant",
    format: "formation",
    durationLabel: { fr: "3 h", en: "3 h" },
    priceUSD: 25,
    instructor: "axel",
    modules: 6,
    title: { fr: "Claude & ChatGPT pour entrepreneurs", en: "Claude & ChatGPT for entrepreneurs" },
    description: {
      fr: "Des cas d'usage réels — pas une visite guidée des fonctionnalités — pour gagner du temps dès demain.",
      en: "Real use cases — not a feature tour — to save real time starting tomorrow.",
    },
  },
  {
    slug: "automatiser-son-entreprise-avec-lia",
    category: "ia",
    level: "intermediaire",
    format: "bootcamp",
    durationLabel: { fr: "2 jours", en: "2 days" },
    priceUSD: 99,
    instructor: "axel",
    modules: 9,
    title: { fr: "Automatiser son entreprise avec l'IA", en: "Automating your business with AI" },
    description: {
      fr: "Emails, service client, production de contenu : automatiser trois workflows concrets de A à Z.",
      en: "Email, customer service, content production: automate three concrete workflows end to end.",
    },
  },
  {
    slug: "construire-des-agents-ia",
    category: "ia",
    level: "avance",
    format: "programme",
    durationLabel: { fr: "3 semaines", en: "3 weeks" },
    priceUSD: 199,
    instructor: "ruddy",
    modules: 12,
    title: { fr: "Construire des agents IA", en: "Building AI agents" },
    description: {
      fr: "Concevoir, connecter et déployer des agents IA avec MCP et des outils connectés, sur un projet réel.",
      en: "Design, connect and deploy AI agents with MCP and connected tools, on a real project.",
    },
  },

  // ---------- Développement ----------
  {
    slug: "ai-assisted-coding",
    category: "developpement",
    level: "debutant",
    format: "formation",
    durationLabel: { fr: "5 h", en: "5 h" },
    priceUSD: 39,
    instructor: "ruddy",
    modules: 8,
    title: { fr: "AI-assisted coding pour débutants", en: "AI-assisted coding for beginners" },
    description: {
      fr: "Coder avec Claude et ChatGPT comme copilotes — sans perdre le contrôle de ce que vous livrez.",
      en: "Code with Claude and ChatGPT as copilots — without losing control of what you ship.",
    },
  },
  {
    slug: "automatiser-avec-les-apis-dia",
    category: "developpement",
    level: "intermediaire",
    format: "formation",
    durationLabel: { fr: "4 h", en: "4 h" },
    priceUSD: 35,
    instructor: "ruddy",
    modules: 7,
    title: { fr: "Automatiser avec les APIs d'IA", en: "Automating with AI APIs" },
    description: {
      fr: "Intégrer une API d'IA dans un projet existant, du prototype au déploiement.",
      en: "Integrate an AI API into an existing project, from prototype to deployment.",
    },
  },
  {
    slug: "construire-un-saas-avec-lia",
    category: "developpement",
    level: "avance",
    format: "programme",
    durationLabel: { fr: "4 semaines", en: "4 weeks" },
    priceUSD: 249,
    instructor: "ruddy",
    modules: 14,
    title: { fr: "Construire un SaaS avec l'IA", en: "Building a SaaS with AI" },
    description: {
      fr: "De l'idée au produit déployé : construire un vrai SaaS assisté par IA, avec mentorat sur projet.",
      en: "From idea to deployed product: build a real AI-assisted SaaS, with project mentoring.",
    },
  },

  // ---------- Entrepreneuriat ----------
  {
    slug: "trouver-ses-premiers-clients",
    category: "entrepreneuriat",
    level: "debutant",
    format: "formation",
    durationLabel: { fr: "3 h", en: "3 h" },
    priceUSD: 19,
    instructor: "axel",
    modules: 5,
    title: { fr: "Trouver ses premiers clients", en: "Landing your first clients" },
    description: {
      fr: "Une méthode concrète pour décrocher vos 10 premiers clients sans budget publicitaire.",
      en: "A concrete method to land your first 10 clients without an ad budget.",
    },
  },
  {
    slug: "pricing-strategie-commerciale",
    category: "entrepreneuriat",
    level: "intermediaire",
    format: "formation",
    durationLabel: { fr: "4 h", en: "4 h" },
    priceUSD: 29,
    instructor: "axel",
    modules: 6,
    title: { fr: "Pricing & stratégie commerciale", en: "Pricing & sales strategy" },
    description: {
      fr: "Fixer un prix qui reflète votre valeur, et construire une stratégie commerciale qui tient la route.",
      en: "Price to reflect your value, and build a sales strategy that actually holds up.",
    },
  },
  {
    slug: "construire-son-offre-vendre-en-ligne",
    category: "entrepreneuriat",
    level: "avance",
    format: "bootcamp",
    durationLabel: { fr: "2 jours", en: "2 days" },
    priceUSD: 119,
    instructor: "axel",
    modules: 10,
    title: { fr: "Construire son offre & vendre en ligne", en: "Building your offer & selling online" },
    description: {
      fr: "Structurer une offre claire et la vendre en ligne — de la page de vente au premier encaissement.",
      en: "Structure a clear offer and sell it online — from sales page to first payment.",
    },
  },
];
