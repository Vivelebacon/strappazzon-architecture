export interface Project {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  role: string;
  description: string;
  longDescription: string;
  image: string;
  specs: { label: string; value: string }[];
  gallery: string[];
}

export const projects: Project[] = [
  {
    slug: 'projet-confignon',
    title: 'Projet Confignon',
    category: 'Construction villa',
    location: 'Confignon, GE, Suisse',
    year: '2009 - 2011',
    role: 'Architecte Associé (KSarchitecture SA)',
    description: 'Mandat de réalisation de deux villas de standing contemporaines dans la campagne Genevoise.',
    longDescription: "Ce mandat de prestige a consisté en la réalisation de deux villas de standing contiguës au cœur de la campagne genevoise, à Confignon. Le concept architectural repose sur une intégration paysagère minutieuse et une géométrie contemporaine forte. Le jeu des volumes superposés crée des porte-à-faux élégants protégeant les terrasses extérieures. Les façades alternent le béton banché brut, apportant une texture minérale pérenne, et des parements en bois naturel de mélèze offrant chaleur et contraste. Une attention particulière a été accordée à la lumière naturelle, inondant les espaces de vie à travers d'immenses baies vitrées coulissantes à double vitrage.",
    image: '/realisations/projet-confignon/01.jpg',
    specs: [
      { label: 'Surface habitable', value: '280 m² par villa' },
      { label: 'Volume SIA', value: '1,250 m³ par villa' },
      { label: 'Standard énergétique', value: 'Haute performance thermique' },
      { label: 'Structure', value: 'Béton armé et ossature bois' }
    ],
    gallery: [
      '/realisations/projet-confignon/01.jpg',
      '/realisations/projet-confignon/02.jpg',
      '/realisations/projet-confignon/03.jpg',
      '/realisations/projet-confignon/04.jpg',
      '/realisations/projet-confignon/05.jpg',
      '/realisations/projet-confignon/06.jpg',
      '/realisations/projet-confignon/07.jpg',
      '/realisations/projet-confignon/08.jpg',
      '/realisations/projet-confignon/09.jpg',
      '/realisations/projet-confignon/10.jpg',
      '/realisations/projet-confignon/11.jpg',
      '/realisations/projet-confignon/12.jpg',
      '/realisations/projet-confignon/13.jpg',
      '/realisations/projet-confignon/14.jpg'
    ]
  },
  {
    slug: 'projet-muller-brun',
    title: 'Muller-Brun GE',
    category: 'Résidentiel',
    location: 'Genève, Suisse',
    year: '2015 - 2016',
    role: 'Architecte HES Indépendant',
    description: "Rénovation d'un ensemble résidentiel et historique d'exception.",
    longDescription: "Le projet Muller-Brun a consisté en la rénovation complète et la restructuration d'un ensemble résidentiel et administratif chargé d'histoire au cœur de Genève. L'intervention a relevé le défi majeur de concilier la préservation rigoureuse du patrimoine classé et l'intégration de technologies thermiques et de confort modernes. Les détails d'époque (boiseries, corniches en plâtre, parquets de Versailles) ont été soigneusement restaurés par des compagnons spécialisés. Parallèlement, les cloisons intérieures ont été allégées pour optimiser la circulation de la lumière et créer une flexibilité d'occupation de l'espace haut de gamme.",
    image: '/realisations/projet-muller-brun/01.jpg',
    specs: [
      { label: 'Type de mandat', value: 'Rénovation & Pilotage complet' },
      { label: 'Localisation', value: 'Quartier historique, Genève' },
      { label: 'Spécificité', value: 'Bâtiment classé au patrimoine' },
      { label: 'Durée des travaux', value: '14 mois' }
    ],
    gallery: [
      '/realisations/projet-muller-brun/01.jpg',
      '/realisations/projet-muller-brun/02.jpg',
      '/realisations/projet-muller-brun/03.jpg',
      '/realisations/projet-muller-brun/04.jpg',
      '/realisations/projet-muller-brun/05.jpg',
      '/realisations/projet-muller-brun/06.jpg',
      '/realisations/projet-muller-brun/07.jpg',
      '/realisations/projet-muller-brun/08.jpg',
      '/realisations/projet-muller-brun/09.jpg',
      '/realisations/projet-muller-brun/10.jpg',
      '/realisations/projet-muller-brun/11.jpg',
      '/realisations/projet-muller-brun/12.jpg'
    ]
  },
  {
    slug: 'jonction-falaises-deux-ponts',
    title: 'Jonction falaises-deux ponts',
    category: 'Bureaux',
    location: 'La Jonction, Genève, Suisse',
    year: '2018 - 2019',
    role: 'Direction de Travaux & Pilotage',
    description: 'Transformation lourde de plateaux administratifs dans une ancienne structure industrielle.',
    longDescription: "Situé dans le quartier industriel et culturel de La Jonction à Genève, ce projet porte sur la transformation lourde et la réhabilitation de vastes plateaux administratifs de bureaux. L'enjeu conceptuel consistait à magnifier le caractère industriel du bâtiment existant tout en créant des zones de travail ergonomiques, chaleureuses et ultra-connectées. La structure de béton d'origine a été sablée et laissée apparente, créant un dialogue saisissant avec des cloisons acoustiques en verre à montants métalliques noirs (style verrière d'atelier). Les sols sont traités en micro-chape de béton ciré gris clair de haute résistance.",
    image: '/realisations/jonction-falaises-deux-ponts/01.jpg',
    specs: [
      { label: 'Surface de bureaux', value: '850 m²' },
      { label: 'Style architectural', value: 'Industriel contemporain' },
      { label: 'Prestations', value: 'Management de projet et direction des travaux' },
      { label: 'Confort acoustique', value: 'Cloisonnement double vitrage haut indice (42dB)' }
    ],
    gallery: [
      '/realisations/jonction-falaises-deux-ponts/01.jpg',
      '/realisations/jonction-falaises-deux-ponts/02.jpg',
      '/realisations/jonction-falaises-deux-ponts/03.jpg',
      '/realisations/jonction-falaises-deux-ponts/04.jpg',
      '/realisations/jonction-falaises-deux-ponts/05.jpg',
      '/realisations/jonction-falaises-deux-ponts/06.jpg',
      '/realisations/jonction-falaises-deux-ponts/07.jpg',
      '/realisations/jonction-falaises-deux-ponts/08.jpg',
      '/realisations/jonction-falaises-deux-ponts/09.jpg',
      '/realisations/jonction-falaises-deux-ponts/10.jpg',
      '/realisations/jonction-falaises-deux-ponts/11.jpg',
      '/realisations/jonction-falaises-deux-ponts/12.png',
      '/realisations/jonction-falaises-deux-ponts/13.png',
      '/realisations/jonction-falaises-deux-ponts/14.png',
      '/realisations/jonction-falaises-deux-ponts/15.png'
    ]
  },
  {
    slug: 'rue-de-zurich-ge',
    title: 'Rue de Zurich GE',
    category: 'Résidentiel',
    location: 'Genève, Suisse',
    year: '2019 - 2020',
    role: 'Architecte HES',
    description: "Rénovation complète d'appartements de haut standing au centre-ville.",
    longDescription: "Ce mandat a consisté en la rénovation complète et haut de gamme d'un groupe d'appartements situés dans un immeuble de style classique à la Rue de Zurich. Le programme exigeait une redistribution complète des pièces d'eau et de vie pour s'adapter aux standards d'ergonomie contemporains. L'isolation thermique par l'intérieur et l'insonorisation acoustique entre dalles ont fait l'objet d'études physiques poussées. Les éléments décoratifs anciens (cheminées décoratives, trumeaux, radiateurs en fonte ciselée) ont été méticuleusement préservés et repeints dans des teintes minérales mates contrastant avec le chêne brut huilé des nouveaux parquets.",
    image: '/realisations/rue-de-zurich-ge/01.jpg',
    specs: [
      { label: 'Nombre de lots', value: '3 appartements rénovés' },
      { label: 'Prestations fournies', value: 'Études de projet, demandes d\'autorisation et exécution' },
      { label: 'Menuiserie', value: 'Cuisines et dressings dessinés sur mesure' },
      { label: 'Acoustique', value: 'Chapes flottantes avec isolant haute résilience' }
    ],
    gallery: [
      '/realisations/rue-de-zurich-ge/01.jpg',
      '/realisations/rue-de-zurich-ge/02.jpg',
      '/realisations/rue-de-zurich-ge/03.jpg',
      '/realisations/rue-de-zurich-ge/04.jpg',
      '/realisations/rue-de-zurich-ge/05.jpg',
      '/realisations/rue-de-zurich-ge/06.jpg'
    ]
  },
  {
    slug: 'conches',
    title: 'Conches',
    category: 'Construction villa',
    location: 'Conches, GE, Suisse',
    year: '2016 - 2017',
    role: 'Architecte HES',
    description: "Conception d'une villa contemporaine à haute performance énergétique.",
    longDescription: "La villa de Conches est une œuvre d'architecture résidentielle contemporaine d'exception, implantée dans un écrin de verdure préservé de la commune de Conches. La volumétrie générale se compose de boîtes horizontales glissant les unes par rapport aux autres pour optimiser l'ensoleillement et l'intimité par rapport au voisinage. Conçue selon les principes bioclimatiques, la villa dispose d'une isolation thermique renforcée en fibre de bois, d'un chauffage par pompe à chaleur géothermique couplé à des panneaux solaires photovoltaïques en toiture. Les façades en crépi minéral fin dialoguent avec de larges cadres de fenêtres en aluminium anodisé bronze.",
    image: '/realisations/conches/01.jpg',
    specs: [
      { label: 'Surface brute', value: '340 m² de plancher' },
      { label: 'Chauffage', value: 'Géothermie verticale + Solaire passif' },
      { label: 'Ventilation', value: 'Double flux régulée (Minergie)' },
      { label: 'Aménagements', value: 'Piscine naturelle et pool house intégré' }
    ],
    gallery: [
      '/realisations/conches/01.jpg',
      '/realisations/conches/02.jpg',
      '/realisations/conches/03.jpg',
      '/realisations/conches/04.jpg',
      '/realisations/conches/05.jpg',
      '/realisations/conches/06.jpg',
      '/realisations/conches/07.jpg'
    ]
  },
  {
    slug: 'villa-anieres-ge',
    title: 'Villa Anières GE',
    category: 'Construction villa',
    location: 'Anières, GE, Suisse',
    year: '2017 - 2018',
    role: 'Architecte Freelance / Direction de Travaux',
    description: 'Pilotage complet du chantier d’une villa de luxe construite sur des pieux dans l’eau.',
    longDescription: "Ce chantier d'une complexité technique hors du commun a consisté à assurer la direction des travaux et le pilotage opérationnel d'une villa de très haut standing située dans la commune lacustre d'Anières. Implantée sur une parcelle présentant un fort dénivelé vers le lac Léman, la villa repose sur des fondations spéciales composées de pieux forés en béton armé ancrés profondément dans la roche, nécessitant des terrassements sous nappe phréatique. Le projet comprend des baies vitrées minimalistes monumentales sans montants apparents, une piscine miroir chauffée suspendue, et une domotique intégrée gérant l'ensemble des flux techniques du bâtiment.",
    image: '/realisations/villa-anieres-ge/01.jpg',
    specs: [
      { label: 'Volume SIA', value: '2,100 m³' },
      { label: 'Fondations', value: 'Pieux forés spéciaux sous nappe' },
      { label: 'Gros œuvre', value: 'Béton autoplaçant d\'aspect architectural' },
      { label: 'Équipements', value: 'Piscine miroir suspendue, ascenseur intérieur' }
    ],
    gallery: [
      '/realisations/villa-anieres-ge/01.jpg',
      '/realisations/villa-anieres-ge/02.jpg',
      '/realisations/villa-anieres-ge/03.jpg',
      '/realisations/villa-anieres-ge/04.jpg',
      '/realisations/villa-anieres-ge/05.jpg',
      '/realisations/villa-anieres-ge/06.jpg'
    ]
  },
  {
    slug: 'chene-bougeries',
    title: 'Projet Chêne-Bougeries',
    category: 'Résidentiel',
    location: 'Chêne-Bougeries, GE, Suisse',
    year: '2014 - 2015',
    role: 'Architecte HES',
    description: "Transformation thermique et esthétique d'une maison de maître historique.",
    longDescription: "La rénovation de cette somptueuse maison de maître à Chêne-Bougeries a nécessité une approche sensible respectant l'esprit du lieu. L'objectif était d'optimiser l'enveloppe énergétique pour répondre aux nouvelles normes environnementales suisses (transition énergétique) sans altérer les façades historiques en pierre naturelle. Les doublages intérieurs ont été réalisés en enduit thermo-isolant chaux-chanvre projeté, laissant respirer le bâti ancien. Les combles ont été entièrement isolés en ouate de cellulose insufflée sous rampants, et les verrières d'origine ont reçu des vitrages isolants de haute technologie à profilés bois très fins.",
    image: '/realisations/chene-bougeries/01.jpg',
    specs: [
      { label: 'Isolation', value: 'Enduit biosourcé chaux-chanvre' },
      { label: 'Chauffage', value: 'Chaudière à pellets bois de haute performance' },
      { label: 'Demandes administratives', value: 'Accord du Département des Monuments et Sites (DMS)' },
      { label: 'Qualité d\'air', value: 'Ventilation naturelle assistée hygrorégulée' }
    ],
    gallery: [
      '/realisations/chene-bougeries/01.jpg',
      '/realisations/chene-bougeries/02.jpg',
      '/realisations/chene-bougeries/03.jpg',
      '/realisations/chene-bougeries/04.jpg',
      '/realisations/chene-bougeries/05.jpg'
    ]
  },
  {
    slug: 'prada',
    title: 'PRADA, Genève',
    category: 'Commerce',
    location: 'Rue du Rhône, Genève, Suisse',
    year: '2012 - 2013',
    role: 'Direction de Travaux / Pilotage local',
    description: "Suivi technique et direction locale pour la prestigieuse enseigne de la Rue du Rhône.",
    longDescription: "Ce projet emblématique a porté sur l'aménagement haut de gamme et la direction locale des travaux de la boutique phare de la marque PRADA sur la prestigieuse Rue du Rhône à Genève. Ce projet a nécessité une coordination sans faille avec l'équipe de design centrale de la marque à Milan, une traduction précise des concepts esthétiques en détails techniques de construction suisses (normes SIA), et un suivi extrêmement rigoureux de la finition. Des matériaux luxueux (marbres italiens de haute qualité, placages de bois rares, ferronneries d'art complexes) ont été mis en œuvre sous des tolérances de finition de l'ordre du millimètre.",
    image: '/realisations/prada/01.jpg',
    specs: [
      { label: 'Surface commerciale', value: '450 m² répartis sur deux niveaux' },
      { label: 'Matériaux signature', value: 'Marbre noir Marquina et vert Alpi, laiton brossé' },
      { label: 'Prestations', value: 'Direction locale, coordination technique, autorisations' },
      { label: 'Planification', value: 'Exécution en 12 semaines (travaux de nuit inclus)' }
    ],
    gallery: [
      '/realisations/prada/01.jpg'
    ]
  },
  {
    slug: 'versace',
    title: 'VERSACE, Genève',
    category: 'Commerce',
    location: 'Rue du Rhône, Genève, Suisse',
    year: '2013 - 2014',
    role: 'Direction de Travaux',
    description: "Management global de chantier et coordination pour la boutique de luxe.",
    longDescription: "Dans le prolongement de notre expertise en aménagement de commerces de luxe, ce mandat concernait la direction des travaux et le pilotage technique de la boutique VERSACE à la Rue du Rhône. La réalisation a intégré la pose de sols complexes en mosaïque posés pièce par pièce par des artisans italiens, des habillages muraux en stuc vénitien d'art, et la création d'escaliers intérieurs monumentaux en marbre de Carrare supportés par des structures en acier invisibles. Une logistique chantier complexe a dû être mise en place en raison de la forte densité du trafic piétonnier et de l'exiguïté des accès logistiques de la zone.",
    image: '/realisations/versace/01.jpg',
    specs: [
      { label: 'Catégorie', value: 'Boutique de luxe (Flagship)' },
      { label: 'Prestations', value: 'Direction des travaux, management des coûts et délais' },
      { label: 'Particularité', value: 'Coordination internationale (Milan/Genève)' },
      { label: 'Technique', value: 'Climatisation silencieuse intégrée sous staff en plafond' }
    ],
    gallery: [
      '/realisations/versace/01.jpg'
    ]
  },
  {
    slug: 'omc-geneve',
    title: 'OMC, Genève',
    category: 'Bureaux',
    location: 'Genève, Suisse',
    year: '2014',
    role: 'Pilotage Technique & Suivi',
    description: "Aménagement d'espaces administratifs et salles de conférence.",
    longDescription: "Ce projet concernait le suivi technique des chantiers d'aménagement intérieur et acoustique au sein du siège de l'Organisation Mondiale du Commerce (OMC) à Genève. Face aux exigences d'isolation sonore extrêmement élevées des salles de conférence multilingues, nous avons mis en œuvre des cloisons acoustiques mobiles sur mesure à double étanchéité périphérique (indice RW 52dB) et des parements de plafonds absorbants en bois perforé micro-ondulé. La gestion des chantiers a été soumise à des protocoles de sécurité stricts inhérents aux bâtiments diplomatiques et aux organisations internationales.",
    image: '/realisations/omc-geneve/01.jpg',
    specs: [
      { label: 'Type d\'espace', value: 'Salles de conférence institutionnelles' },
      { label: 'Performance sonore', value: 'Indice Rw=52dB entre espaces de conférence' },
      { label: 'Acoustique', value: 'Plafonds bois acoustiques perforés sur mesure' },
      { label: 'Sécurité', value: 'Accréditation fédérale de sécurité d\'accès' }
    ],
    gallery: [
      '/realisations/omc-geneve/01.jpg',
      '/realisations/omc-geneve/02.jpg',
      '/realisations/omc-geneve/03.jpg',
      '/realisations/omc-geneve/04.jpg'
    ]
  },
  {
    slug: 'arena-cinemas',
    title: 'Arena Cinemas, La Praille',
    category: 'Commerce',
    location: 'Centre Commercial de la Praille, Carouge, GE, Suisse',
    year: '2015',
    role: 'Direction de Travaux',
    description: "Aménagement technique et acoustique d'un complexe de 9 salles de cinéma.",
    longDescription: "Pilotage des travaux d'aménagement technique pour le complexe multiplex Arena Cinemas situé dans le centre commercial de La Praille à Carouge. Ce chantier d'envergure a requis la mise en place d'une isolation acoustique complexe de type 'boîte dans la boîte' pour éviter toute transmission solidienne des vibrations des basses fréquences sonores vers la structure générale du centre commercial. Nous avons également piloté la pose des installations complexes de traitement d'air (débit de renouvellement de 30m³/h par personne) et la pose des fauteuils motorisés haut de gamme de grand confort.",
    image: '/realisations/arena-cinemas/01.jpg',
    specs: [
      { label: 'Nombre de salles', value: '9 salles de cinéma multiplex' },
      { label: 'Structure sonore', value: 'Système acoustique double paroi découplé' },
      { label: 'Ventilation', value: 'Renouvellement thermique haute capacité (45,000 m³/h)' },
      { label: 'Coordination', value: 'Intégration des lots audio-visuels de pointe (Dolby Atmos)' }
    ],
    gallery: [
      '/realisations/arena-cinemas/01.jpg',
      '/realisations/arena-cinemas/02.jpg'
    ]
  },
  {
    slug: 'saint-julien-plo',
    title: 'Projet PLO',
    category: 'Résidentiel',
    location: 'Plan-les-Ouates, GE, Suisse',
    year: '2016 - 2017',
    role: 'Architecte HES',
    description: 'Développement architectural pour un ensemble de villas mitoyennes.',
    longDescription: "Le projet PLO, implanté dans la commune en pleine expansion de Plan-les-Ouates, a consisté à concevoir et à développer les plans d'avant-projet et de demande d'autorisation pour un ensemble de villas mitoyennes de standing moyen. L'approche a privilégié une rationalisation de la construction pour offrir des coûts de réalisation maîtrisés tout en conservant une grande qualité spatiale. Le plan au sol favorise des espaces de vie ouverts, en duplex, avec des patios intérieurs végétalisés qui apportent de la lumière naturelle au cœur de l'habitat tout en créant une ventilation naturelle en été.",
    image: '/realisations/saint-julien-plo/01.jpg',
    specs: [
      { label: 'Nombre de villas', value: '4 villas contemporaines contiguës' },
      { label: 'Performance', value: 'Standard Haute Performance Énergétique (HPE)' },
      { label: 'Surface utile', value: '210 m² par villa + sous-sol' },
      { label: 'Structure', value: 'Voiles de béton armé teintés dans la masse' }
    ],
    gallery: [
      '/realisations/saint-julien-plo/01.jpg',
      '/realisations/saint-julien-plo/02.jpg',
      '/realisations/saint-julien-plo/03.jpg',
      '/realisations/saint-julien-plo/04.jpg',
      '/realisations/saint-julien-plo/05.jpg',
      '/realisations/saint-julien-plo/06.jpg',
      '/realisations/saint-julien-plo/07.jpg',
      '/realisations/saint-julien-plo/08.jpg'
    ]
  },
  {
    slug: 'grand-saconnex',
    title: 'Villas mitoyennes, Grand-Saconnex',
    category: 'Résidentiel',
    location: 'Grand-Saconnex, GE, Suisse',
    year: '2017',
    role: 'Architecte HES',
    description: 'Projet de construction de villas de style géométrique contemporain.',
    longDescription: "Situé à proximité immédiate des organisations internationales au Grand-Saconnex, ce projet de villas contemporaines explore le jeu des contrastes chromatiques et des formes géométriques. La façade se compose d'une alternance de briques pleines de parement sombres et de pans de béton blanc de granulométrie très fine. Chaque villa a fait l'objet d'une étude d'ensoleillement tridimensionnelle pour implanter des brise-soleil orientables motorisés (BSO), réduisant ainsi les apports thermiques estivaux et maintenant un confort thermique intérieur optimal sans recours à une climatisation mécanique active.",
    image: '/realisations/grand-saconnex/01.jpg',
    specs: [
      { label: 'Architecte', value: 'Alan Strappazzon (Mandataire principal)' },
      { label: 'Prestations', value: 'Projet de l\'avant-projet à la réalisation finale' },
      { label: 'Énergie', value: 'Pompe à chaleur air-eau + Panneaux solaires thermiques' },
      { label: 'Intimité', value: 'Jardins clos avec intégration paysagère locale' }
    ],
    gallery: [
      '/realisations/grand-saconnex/01.jpg',
      '/realisations/grand-saconnex/02.jpg',
      '/realisations/grand-saconnex/03.jpg',
      '/realisations/grand-saconnex/04.jpg',
      '/realisations/grand-saconnex/05.jpg',
      '/realisations/grand-saconnex/06.jpg',
      '/realisations/grand-saconnex/07.jpg',
      '/realisations/grand-saconnex/08.jpg',
      '/realisations/grand-saconnex/09.jpg',
      '/realisations/grand-saconnex/10.jpg',
      '/realisations/grand-saconnex/11.jpg',
      '/realisations/grand-saconnex/12.jpg'
    ]
  },
  {
    slug: 'grange-onex',
    title: 'Grange, Onex',
    category: 'Résidentiel',
    location: 'Onex, GE, Suisse',
    year: '2018',
    role: 'Architecte HES / Rénovation Historique',
    description: 'Transformation et réhabilitation complète d’une grange classée en lofts contemporains.',
    longDescription: "Ce projet hautement valorisant a consisté en la transformation d'une ancienne grange agricole du vieux village d'Onex, protégée au patrimoine cantonal, en trois appartements lofts contemporains. Pour préserver l'intégrité architecturale de la bâtisse, les murs extérieurs d'époque en moellons et pierre calcaire ont été injectés de mortier de chaux naturelle puis jointoyés à l'ancienne. À l'intérieur, les charpentes d'origine ont été suspendues et laissées apparentes, créant de grands volumes verticaux. Des structures métalliques fines peintes en noir mat supportent des dalles collaborantes en verre, introduisant une transparence et une lumière magistrale.",
    image: '/realisations/grange-onex/01.jpg',
    specs: [
      { label: 'Type de bâtiment', value: 'Grange patrimoniale agricole' },
      { label: 'Lots créés', value: '3 lofts de haut standing de 140 à 180 m²' },
      { label: 'Structure interne', value: 'Planchers suspendus en acier et verre' },
      { label: 'Rénovation', value: 'Restauration de la charpente du XVIIIe siècle' }
    ],
    gallery: [
      '/realisations/grange-onex/01.jpg',
      '/realisations/grange-onex/02.jpg',
      '/realisations/grange-onex/03.jpg',
      '/realisations/grange-onex/04.jpg',
      '/realisations/grange-onex/05.jpg',
      '/realisations/grange-onex/06.jpg'
    ]
  },
  {
    slug: 'aeroport-geneve',
    title: 'Aéroport de Genève',
    category: 'Commerce',
    location: 'Cointrin, Genève, Suisse',
    year: '2019',
    role: 'Direction de Travaux / Pilotage technique',
    description: "Aménagement d'espaces commerciaux d'exception en zone aéroportuaire internationale.",
    longDescription: "Mandat complexe de direction de travaux et de coordination technique pour l'aménagement d'enseignes commerciales haut de gamme et de salons VIP de standing au terminal principal de l'Aéroport de Genève (Cointrin). Travailler dans le contexte sécurisé ultra-strict de la zone internationale sous-douane a requis une organisation et une logistique d'approvisionnement millimétrées. Les interventions ont été coordonnées de manière à s'effectuer exclusivement de nuit pour assurer la continuité d'activité du terminal aérien, en maintenant le niveau de sécurité incendie et la conformité absolue aux normes aéroportuaires.",
    image: '/realisations/aeroport-geneve/01.jpg',
    specs: [
      { label: 'Catégorie', value: 'Aménagement commercial en zone sécurisée' },
      { label: 'Contraintes', value: 'Travaux nocturnes, accès badges OFAC' },
      { label: 'Prestations', value: 'Direction de chantier, planification opérationnelle, sécurité' },
      { label: 'Matériaux', value: 'Matériaux ininflammables certifiés de classe A1 et A2' }
    ],
    gallery: [
      '/realisations/aeroport-geneve/01.jpg',
      '/realisations/aeroport-geneve/02.jpg',
      '/realisations/aeroport-geneve/03.jpg',
      '/realisations/aeroport-geneve/04.png',
      '/realisations/aeroport-geneve/05.jpg',
      '/realisations/aeroport-geneve/06.jpg'
    ]
  },
  {
    slug: 'seymaz-parc',
    title: 'Seymaz Parc',
    category: 'Résidentiel',
    location: 'Chêne-Bourg, GE, Suisse',
    year: '2020 - 2021',
    role: 'Architecte HES / Aménagement Paysager',
    description: "Développement d'un ensemble résidentiel haut de gamme en lisière de forêt.",
    longDescription: "Implanté à Chêne-Bourg en lisière de la rivière préservée de La Seymaz, ce projet résidentiel de grand standing incarne une intégration environnementale totale. Le concept repose sur une architecture organique qui respecte la topographie d'origine de la parcelle boisée. Les bâtiments s'organisent en courbes douces, évitant l'abattage d'arbres majeurs. La matérialité fait la part belle aux essences de bois certifiées locales (mélèze et chêne) traitées thermiquement, et au béton pré-patiné. Les toitures végétalisées assurent la rétention des eaux et une isolation thermique naturelle exceptionnelle.",
    image: '/realisations/seymaz-parc/01.jpg',
    specs: [
      { label: 'Prestations', value: 'Conception, autorisation de construire, détails' },
      { label: 'Catégorie', value: 'Résidentiel de haut standing & Paysage' },
      { label: 'Écologie', value: 'Matériaux certifiés bois indigène, béton bas-carbone' },
      { label: 'Standard énergétique', value: 'Minergie-P Eco' }
    ],
    gallery: [
      '/realisations/seymaz-parc/01.jpg',
      '/realisations/seymaz-parc/02.jpg',
      '/realisations/seymaz-parc/03.jpg',
      '/realisations/seymaz-parc/04.jpg'
    ]
  }
];
