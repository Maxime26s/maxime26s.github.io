import Experience from "../components/Experience";
import Knowledge from "../components/Knowledge";
import Project from "../components/Project";

export const experiences: Experience[] = [
  {
    id: 1,
    shortTitle: "WonderJam",
    title: "WonderJam - Chef d'équipe",
    location: "Université du Québec à Chicoutimi",
    years: "2018 - Présent (9 participations)",
    description: [
      "Deux 1ère places", "Deux Prix du publique", "Deux 3ème place",
      "En 48 heures, concevoir et programmer un jeu vidéo dans le cadre d’une compétition",
      "Cette activité intensive a permis d’expérimenter la répartition de la charge de travail, la gestion du temps, la collaboration et la communication en vue d’atteindre un objectif dans le respect des contraintes et des délais imposés",
    ],
  },
  {
    id: 2,
    shortTitle: "WonderJam - CO",
    title: "WonderJam - Comité Organisateur",
    location: "Université du Québec à Chicoutimi",
    years: "2020 - Présent",
    description: [
      "Cette expérience m’a permis de développer mes habiletés pour assurer la concrétisation d’un événement, en assurer la logistique et l’encadrement et l’amélioration sur la base des années précédentes",
    ],
  },
  {
    id: 3,
    shortTitle: "CSGames",
    title: "Computer Science Games",
    location: "Délégation UQAC",
    years: "2023",
    description: [
      "Relever des défis portant sur tous les aspects de l’informatique",
    ],
  },
  {
    id: 4,
    shortTitle: "Jeux de Génie",
    title: "Jeux de Génie",
    location: "Délégation UQAC",
    years: "2020 - 2023",
    description: [
      "Participer à des compétitions en ingénierie, ainsi qu’à des activités de réseautage",
    ],
  },
  {
    id: 5,
    shortTitle: "Compétition NASA",
    title: "Compétition NASA",
    location: "Université du Québec à Chicoutimi",
    years: "2023",
    description: [
      "Résoudre un problème d’ingénierie lié à l’industrie 4.0 en équipe",
      "En 3 heures, mettre en place une solution robotique utilisant une variété de capteurs et un microcontrôleur",
    ],
  },
  {
    id: 6,
    shortTitle: "CodeJam CGI",
    title: "CodeJam CGI - Chef d'équipe",
    location: "Université du Québec à Chicoutimi",
    years: "2020",
    description: [
      "Concevoir et programmer un logiciel visant à répondre à un besoin particulier dans le respect des contraintes et du délai de 48 heures imposés en s’assurant de la compréhension des objectifs de l’équipe, planifier et organiser les ressources en tenant compte des fonctions prioritaires à développer",
    ],
  },
];

export const parcours: Experience[] = [
  {
    id: 1,
    shortTitle: "Maîtrise",
    title: "Maîtrise en Informatique (Intelligence Artificielle)",
    location: "Université du Québec à Chicoutimi",
    years: "2023 - Présent",
    description: [
      "La Maîtrise en informatique avec concentration en intelligence artificielle forme des informaticiens compétents dans le domaine de l'IA",
      "Les étudiants acquièrent les connaissances et compétences nécessaires pour concevoir, mettre en œuvre et évaluer diverses approches et techniques d'IA",
      "Cette formation est axée sur les enjeux et les besoins liés à l'IA et prépare les étudiants à relever les défis actuels et futurs de ce domaine en constante évolution",
    ],
  },

  {
    id: 2,
    shortTitle: "Baccalauréat",
    title: "Baccalauréat en Génie Informatique",
    location: "Université du Québec à Chicoutimi",
    years: "2019 - 2023",
    description: [
      "Actuellement en cours de formation en génie informatique",
      "Acquisition de compétences en développement de logiciels, en intelligence artificielle et en sécurité informatique",
    ],
  },
  {
    id: 3,
    shortTitle: "Certification Microsoft",
    title: "Certification Microsoft : Azure Administrator Associate",
    location: "Microsoft",
    years: "2022",
    description: [
      "Les compétences requises pour obtenir cette certification comprennent la gestion des réseaux virtuels, du stockage, du calcul, de l'identité, de la sécurité et de la gouvernance",
      "Les candidats à cette certification doivent avoir une connaissance approfondie des systèmes d'exploitation, des réseaux, des serveurs et de la virtualisation",
      //"Les candidats doivent également avoir une expérience pratique de PowerShell, Azure CLI, du portail Azure, des modèles de gestion des ressources Azure (modèles ARM) et de Microsoft Azure Active Directory (Azure AD), qui font partie de Microsoft Enterprise",
    ],
  },
  {
    id: 4,
    shortTitle: "Étude Collégiale",
    title:
      "Programme Préuniversitaire (Sciences, Informatiques et Mathématiques)",
    location: "Cégep de Jonquière",
    years: "2017 - 2019",
    description: [
      "Obtention d'un diplôme préuniversitaire en sciences, informatiques et mathématiques",
      "Acquisition de compétences en programmation, en mathématiques et en sciences physiques",
    ],
  },
  {
    id: 5,
    shortTitle: "Étude Secondaire",
    title: "Programme d’Éducation Internationale (PEI)",
    location: "École Secondaire Kénogami",
    years: "2012 - 2017",
    description: [
      "Obtention d'un diplôme d'études secondaires avec un programme d'éducation internationale",
      "Acquisition de compétences en langues, en sciences sociales et en mathématiques",
    ],
  },
];

export const emplois: Experience[] = [
  {
    id: 1,
    shortTitle: "Développeur .NET Full Stack",
    title: "Développeur .NET Full Stack",
    location: "Elmo Solutions",
    years: "2021 - Présent",
    description: [
      "Développement continu du logiciel d’intégration CAO-ERP Agni-Link",
      "Développement de nouveaux outils internes pour optimiser et automatiser certaines tâches",
      "Recherche et développement",
    ],
  },
  {
    id: 2,
    shortTitle: "Aide Pédagogique",
    title: "Aide Pédagogique",
    location: "Université du Québec à Chicoutimi",
    years: "2022",
    description: ["Correction de devoirs et laboratoires en informatique"],
  },
];

export const languages: Knowledge[] = [
  {
    id: 1,
    title: "C++",
  },
  {
    id: 2,
    title: "C#",
  },
  {
    id: 3,
    title: "Python",
  },
  {
    id: 4,
    title: "Java",
  },
  {
    id: 5,
    title: "Kotlin",
  },
  {
    id: 6,
    title: "HTML",
  },
  {
    id: 7,
    title: "CSS",
  },
  {
    id: 8,
    title: "JavaScript",
  },
  {
    id: 9,
    title: "TypeScript",
  },
  {
    id: 10,
    title: "SQL",
  },
  {
    id: 11,
    title: "VB",
  },
  {
    id: 12,
    title: "VHDL",
  },
  {
    id: 13,
    title: "Matlab",
  },
  {
    id: 14,
    title: "LaTeX",
  },
];

export const technologies: Knowledge[] = [
  {
    id: 1,
    title: ".NET",
  },
  {
    id: 2,
    title: "React",
  },
  {
    id: 3,
    title: "React Native",
  },
  {
    id: 4,
    title: "WPF",
  },
  {
    id: 5,
    title: "REST API",
  },
  {
    id: 6,
    title: "Flask",
  },
  {
    id: 7,
    title: "DevExpress",
  },
  {
    id: 8,
    title: "WebGL",
  },
  {
    id: 9,
    title: "Oracle",
  },
  {
    id: 10,
    title: "JQuery",
  },
  {
    id: 11,
    title: "MVVM",
  },
  {
    id: 12,
    title: "NativeScript",
  },
  {
    id: 13,
    title: "JavaFX",
  },
];

export const softwares: Knowledge[] = [
  {
    id: 1,
    title: "Visual Studio",
  },
  {
    id: 2,
    title: "IntelliJ",
  },
  {
    id: 3,
    title: "Unity",
  },
  {
    id: 4,
    title: "Android Studio",
  },
  {
    id: 5,
    title: "Visual Studio Code",
  },
  {
    id: 6,
    title: "GIT",
  },
  {
    id: 7,
    title: "TFS",
  },
  {
    id: 8,
    title: "Quartus Prime",
  },
  {
    id: 9,
    title: "Suite Office",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: "Appareil de mesure en laboratoire",
    description:
      "L'appareil de mesure en laboratoire permet aux étudiants de faire leurs laboratoires à partir de la maison. Il est l'équivalent d'un oscilloscope, d'une source de tension et d'un générateur de fonction. Le tout est contrôlé par téléphone mobile. Cette solution est disponible à un prix abordable pour les étudiants.",
    technologies: ["Python", "React-Native", "Android", "Kotlin", "Raspberry Pi", "UART", "Bluetooth Low Energy"],
    githubUrl: "https://github.com/Maxime26s/PFE-Bluetooth",
  },
  {
    id: 2,
    name: "Processeur / Calculatrice FPGA",
    description:
      "Ce circuit de processeur permet des calculs de base sur un FPGA. Le processeur possède 8 registres, une unité de calcul et un bus de données de 9 bits. Il supporte les entrées claviers par UART et un affichage VGA. Il compte un total de 8 instructions.",
    technologies: ["VHDL", "FPGA", "UART", "VGA"],
    githubUrl: "https://github.com/Maxime26s/CSD/tree/main/Lab%204",
  },
  {
    id: 3,
    name: "Détecteur de mouvement par caméra IP",
    description: "Cette application permet la détection de mouvement dans une caméra IP ou une vidéo. Lorsqu'un mouvement est détecté, une notification est envoyée et un carré apparaît à l'écran où le mouvement a été détecté. Les paramètres de détection sont tous configurables.",
    technologies: ["Python", "Vision Numérique"],
    githubUrl: "https://github.com/Maxime26s/6GEI311-Lab5",
  },

  {
    id: 4,
    name: "Réseau de neuronnes de genres de musique",
    description:
      "Ce réseau de neuronnes détecte et classifie jusqu'à 10 genres de musiques. Après entrainement, il atteint un taux de réussite de 70% sur des pièces qu'il n'a jamais vu auparavant. Pour le prétraitement des données, j'ai utilisé la représentation du son dans le spectre des fréquences et les MFCCs.",
    technologies: ["Python", "TensorFlow", "Neural Network", "CNN", "Signal Processing"],
  },
  {
    id: 9,
    name: "Temporal Magus",
    description: "Dans Temporal Magus, vous incarnez un mage temporel qui doit sauvez le monde d'une fin imminente en traversant 5 donjons. Son but est de mettre un terme au plan du méchant mage temporel, Xelor, qui veut faire exploser la terre dans 10 minutes! En complétant des challenges vous pouvez gagner (ou perdre) du temps afin d'accomplir votre but!",
    technologies: ["Unity", "C#", "GameJam", "1ère place", "Prix du publique"],
    githubUrl: "https://github.com/Maxime26s/WonderJamA2020",
    externalUrl: "https://choccymilk.itch.io/temporal-magus",
  },
  {
    id: 10,
    name: "Raccoon City",
    description: "Vous êtes un rebelle essayant de sauver Raccoon City des plans maléfiques de votre musée local. Ils prévoient de créer une machine qui transforme tout le monde en fossiles et d'ajouter leurs ossements aux expositions. Vous devez voler tout ce qui se trouve dans le musée pour empêcher les gens de vouloir y aller et payer les frais d'entrée.",
    technologies: ["Unity", "C#", "GameJam", "1ère place", "Prix du publique"],
    githubUrl: "https://github.com/Maxime26s/WonderJam-H2021",
    externalUrl: "https://choccymilk.itch.io/raccoon-city",
  },
  {
    id: 11,
    name: "Punch Lord",
    description: "Après être tombé dans les égoûts, vos jambes se font voler par un goblin. Comment les retrouver? Vous devrez parcourir les nombreuses sections des égoûts en frappant le sol et les murs pour vous propulser!",
    technologies: ["Unity", "C#", "GameJam", "3ème place"],
    githubUrl: "https://github.com/Charles23R/WonderJamH2020",
    externalUrl: "https://choccymilk.itch.io/punch-lord",
  },
  {
    id: 12,
    name: "Feature Hunter",
    description: "Un groupe de hacker international a pris contrôle du web et a infecté l’ensemble des jeux hébergés sur itch.io avec des « features » indésirables. Vous aurez comme mission de parcourir ces jeux afin d’identifier et d’éliminer ces ajouts malveillants. Pour éliminer les bugs, utilisez votre clé à molette sur les anomalie afin de les \"réparer\", ou explosez- les à l’aide de votre fusil à pompe!",
    technologies: ["Unity", "C#", "GameJam", "Hors-Concours"],
    githubUrl: "https://github.com/Maxime26s/WonderJam-A2022",
    externalUrl: "https://choccymilk.itch.io/feature-hunter",
  },
  {
    id: 13,
    name: "Pachinko Mountain",
    description: "Gagnez des points en escaladant le sommet de la montagne Pachinko plus rapidement que vos amis ! Une fois au sommet, lancez des rochers pour arrêter la progression de vos amis. Vous pouvez jouer avec jusqu'à 4 joueurs, au clavier et/ou à la manette.",
    technologies: ["Unity", "C#", "GameJam", "3ème place"],
    githubUrl: "https://github.com/Maxime26s/WonderJam-A2022",
    externalUrl: "https://choccymilk.itch.io/feature-hunter",
  },
  {
    id: 5,
    name: "Application de contrôle à distance par console",
    description:
      "Cette application permet de se connecter à un ordinateur à distance. Une fois connecté avec un compte valide, on peux librement télécharger les fichiers de cet ordinateur. Il est aussi possible d'utiliser toutes les commandes consoles normalement disponibles, à distance.",
    technologies: ["C++", "Socket", "Network", "Shell"],
  },
  {
    id: 6,
    name: "Simulateur de circuit électrique",
    description:
      "Le simulateur de circuit électrique est le projet final de mon parcours pré-universitaire. Ce logiciel permet de facilement représenter un circuit, donner des paramètres à ses composantes et évaluer le courant et la tension dans chaque composante.",
    technologies: ["Java", "JavaFX", "Théorie des Graphs"],
    githubUrl: "https://github.com/JesusMobile44/ProjetFinal",
    externalUrl: "https://github.com/JesusMobile44/ProjetFinal/releases/tag/1.0",
  },
  {
    id: 7,
    name: "Application de tendance d'écoute Spotify/Last.FM",
    description:
      "Cette application génère une liste ainsi qu'un montage photo résumant les tendances d'écoute Spotify ou Last.FM. Pour ce faire, j'utilise les deux APIs afin de récolter les données utilisateurs et génerer un rapport d'écoute personnalisé.",
    technologies: ["Python", "Flask", "HTML", "JavaScript", "JQuery"],
    githubUrl: "https://github.com/Maxime26s/6GEI466-Projet",
  }, {
    id: 8,
    name: "Calculateur de moment de force",
    description:
      "Cette calculatrice de moment de force a été conçue comme projet personnel pour faciliter certains calculs dans mon cours \"Mécanique de l'ingénieur\". Les forces qui sont ajoutées par l'utilisateur sont ensuite illustrées sur un graphique afin de pouvoir rapidement vérifier si les entrées correspondent au problème.",
    technologies: ["React", "JavaScript"],
    githubUrl: "https://github.com/Maxime26s/calc-moment-force",
    externalUrl: "https://maxime26s.github.io/calc-moment-force/",
  },
  {
    id: 14,
    name: "Système de communication par carte de son",
    description:
      "Création d'un protocole de communication par carte de son. Utilisation des techniques d'analyse et de transmission de signaux numériques et analogues. Mise en place de filtres en de méthodes d'échantillonages.",
    technologies: ["MATLAB", "Signal Processing"],
  },
  {
    id: 15,
    name: "Système de téléphonie IP",
    description:
      "Mise en place d'un système de communication par téléphonie IP. Configuration du serveurs et des services offerts. Création d'une application de Softphone pour permettre son utilisation.",
    technologies: ["VoIP.ms", "Linux", "Java"],
  },
  {
    id: 16,
    name: "Analyseur de BOM pour application CAD",
    description:
      "Application WPF permettant l'analyse du BOM et des propriétés d'un assemblage par l'utilisation de l'API SOLDIWORKS et Inventor",
    technologies: [".NET", "C#", "WPF", "SOLIDWORK", "Inventor"],
  },
  {
    id: 17,
    name: "Automatisation de génération de rapport",
    description:
      "Génération automatique de rapports basés sur des fichiers MSProject hebergés sur un serveur SharePoint. Une fois le rapport généré, il est transformé en fichier .eml puis envoyé automatiquement par Email avec l'API Outlook.",
    technologies: [".NET", "C#", "WPF", "MSProject", "SharePoint", "Outlook"],
  },
  {
    id: 18,
    name: "Calculatrice de matrice",
    description:
      "La calculatrice de matrice est un programme que j'ai codé lors de ma 3e session au cégep. Cette application permet d'effectuer plusieurs opérations sur les matrices de notre choix. Ces dernières peuvent être écrites dans le programme, mais aussi importées à l'aide de fichier csv ou xml. Le programme affiche la démarche utilisée à la suite de chaque opération.",
    technologies: ["Java", "JavaFX"],
    externalUrl: "https://github.com/Maxime26s/Calculatrice-de-Matrices/releases/tag/1.0",
    githubUrl: "https://github.com/Maxime26s/Calculatrice-de-Matrices"
  },
];
