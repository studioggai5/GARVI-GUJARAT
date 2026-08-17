import { StudioConfig, ServiceItem, ProjectItem, CollaborationCategory } from '../types';

export const STUDIO_CONFIG: StudioConfig = {
  brandName: 'GARVI GUJARAT AI STUDIO',
  primaryTagline: 'AI-POWERED ENTERTAINMENT & CREATIVE PRODUCTION STUDIO',
  secondaryTagline: 'Where Indian Stories Meet the Future of Cinema.',
  founderName: 'Jayraj Solanki',
  founderTitle: 'Founder & Producer',
  founderBioPlaceholder: 'FOUNDER_BIO_PLACEHOLDER',
  founderBioText: 'Jayraj Solanki is an ambitious film producer and visionary creative director pioneering the fusion of authentic Indian heritage storytelling with cutting-edge AI technologies and cinematic visual craftsmanship.',
  emailPlaceholder: 'studioggai5@gmail.com',
  phonePlaceholder: '+91 9409682540',
  whatsappPlaceholder: 'WHATSAPP_PLACEHOLDER',
  socialLinksPlaceholder: 'SOCIAL_LINKS_PLACEHOLDER',
  socials: {
    youtube: 'https://youtube.com/@garvigujarataistudio',
    instagram: 'https://instagram.com/garvigujarat_aistudio',
    facebook: 'https://facebook.com/garvigujarat.aistudio',
    linkedin: 'https://linkedin.com/company/garvigujarat-aistudio'
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ai-film-digital-production',
    title: 'AI FILM & DIGITAL PRODUCTION',
    shortDesc: 'Create cinematic films and digital productions using AI-assisted workflows combined with professional filmmaking practices.',
    fullDesc: 'We produce full-length feature films, streaming web series, documentaries, and digital productions using an advanced pipeline that combines AI technology with professional filmmaking practices. From grand historical sagas to cultural stories, we deliver cinematic scale and narrative depth.',
    subCategories: [
      'Feature Films',
      'Web Series',
      'Short Films',
      'Documentaries',
      'Historical & Cultural Cinema',
      'Original IP Development'
    ],
    imagePlaceholderId: 'SERVICE_FILM_IMAGE',
    defaultImageUrl: '/src/assets/images/studio_cinematic_1786461148134.jpg',
    iconName: 'Film'
  },
  {
    id: 'ai-creative-production',
    title: 'AI CREATIVE PRODUCTION',
    shortDesc: 'AI-assisted creative development for cinematic storytelling, visual development, and digital production.',
    fullDesc: 'AI-assisted creative production for developing cinematic visual content from concept to production. We empower storytellers, artists, and directors—accelerating concept exploration, character visualization, and visual development while keeping human imagination and emotion at the core.',
    subCategories: [
      'AI Image Generation',
      'AI Video Generation',
      'AI Character Creation',
      'AI Voice & Music',
      'AI Pre-visualization',
      'Cinematic Concept Development'
    ],
    imagePlaceholderId: 'SERVICE_AI_IMAGE',
    defaultImageUrl: '/src/assets/images/jogidas_white_attire_poster_1786546636449.jpg',
    iconName: 'Cpu'
  },
  {
    id: 'ai-vfx-services',
    title: 'AI & VFX SERVICES',
    shortDesc: 'Advanced AI and VFX solutions for filmmakers, production houses, brands, museums, and historical content creators.',
    fullDesc: 'Advanced AI and VFX solutions for filmmakers, production houses, brands, museums, and historical content creators. Combining AI-assisted generation with 3D modeling, digital environment creation, and professional visual effects compositing for modern and period productions.',
    subCategories: [
      'AI Key Art & Posters',
      'AI Storyboarding',
      '3D Modeling & Assets',
      'VFX & Compositing',
      'Digital Environment Creation',
      'Historical Reconstruction'
    ],
    imagePlaceholderId: 'SERVICE_VFX_IMAGE',
    defaultImageUrl: '/src/assets/images/jogidas_poster_official_1786541347811.jpg',
    iconName: 'Sparkles'
  },
  {
    id: 'historical-digital-production',
    title: 'HISTORICAL DIGITAL PRODUCTION',
    shortDesc: 'Specialized digital production for bringing historical environments, locations, architecture, and cultural worlds to life through research, AI, and cinematic VFX.',
    fullDesc: 'Specialized digital production for bringing historical environments, locations, architecture, and cultural worlds to life through research, AI, and cinematic VFX. We recreate monumental fortresses, ancient cities, and large-scale battlegrounds with cinematic authenticity.',
    subCategories: [
      'Historical Environment Creation',
      'Fort & Ancient City Recreation',
      'Historical Location Recreation',
      'Battlefields & Digital Environments',
      'Period Worldbuilding',
      'Heritage & Cultural Visualization'
    ],
    imagePlaceholderId: 'SERVICE_HISTORICAL_IMAGE',
    defaultImageUrl: '/src/assets/images/hero_cinematic_bg_1786461121840.jpg',
    iconName: 'Landmark'
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'jogidas-khuman',
    title: 'JOGIDAS KHUMAN',
    universe: 'BAHARVATIYA — OUTLAWS OF SORATH',
    subtitle: 'THE FIRST FILM FROM THE BAHARVATIYA SERIES',
    genre: 'Historical Action Drama / Legend',
    status: 'Teaser Released',
    tagline: 'A legendary story from the land of Saurashtra. Honor. Rebellion. Sacrifice.',
    description: 'A legendary story from the land of Saurashtra. A story of honour, rebellion, sacrifice and the struggle of a man who became a legend. Jogidas Khuman marks the beginning of our ambitious historical storytelling universe — bringing the legendary Baharvatiya stories of Sorath to a new generation through cinematic AI-powered filmmaking.',
    longDescription: 'Set against the rugged, majestic terrains of 19th-century Sorath (Saurashtra), Jogidas Khuman tells the epic saga of a warrior who stood against tyranny with unyielding honor. Driven out of his ancestral land, Jogidas chose the righteous path of Baharvatiya — outlawry governed by chivalry, courage, and protective devotion to the helpless. Through AI-assisted visual development and cinematic worldbuilding and authentic historical research, Garvi Gujarat AI Studio breathes monumental visual scale into this cherished folk hero of Gujarat.',
    posterPlaceholderId: 'FILM_PROJECT_IMAGE_PLACEHOLDER',
    defaultPosterUrl: '/src/assets/images/jogidas.png',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    defaultTrailerVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-smoke-and-sparks-rising-in-the-dark-41584-large.mp4',
    historicalContext: 'Sorath (Saurashtra) was a land of independent chieftains, royal dynasties, and fierce honor codes. The Baharvatiya tradition was not banditry, but a noble armed resistance against unjust tax regimes and oppressive rulers, guided by sacred ethical principles.',
    characters: [
      { name: 'Jogidas Khuman', role: 'The Hero of Sorath', desc: 'A fierce Baharvatiya leader revered for his unbending principles, bravery, and defense of the oppressed.' },
      { name: 'Hada Khuman', role: 'Patriarch & Chieftain', desc: 'An elder of the Khuman family whose presence shapes the emotional and historical world of the story.' },
      { name: 'The Ruler of Bhavnagar', role: 'Royal Opponent', desc: 'A powerful ruler locked in an intense tactical and moral feud with the honorable outlaw.' }
    ],
    isFeatured: true
  },
  {
    id: 'kadu-makrani',
    title: 'KADU MAKRANI',
    universe: 'BAHARVATIYA UNIVERSE',
    subtitle: 'HISTORICAL CINEMATIC PROJECT',
    genre: 'Historical / Period Drama',
    status: 'In Development',
    tagline: 'Historical cinematic project in development.',
    description: 'An upcoming historical cinematic project from the Garvi Gujarat cinematic universe, currently in active development.',
    posterPlaceholderId: 'PROJECT_KADU_MAKRANI_PLACEHOLDER',
    defaultPosterUrl: '/Kadu_Makrani_.jpeg',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    isFeatured: false
  },
  {
    id: 'khapro-khodiyo',
    title: 'KHAPRO KHODIYO',
    universe: 'HISTORICAL SLATE',
    subtitle: 'HISTORICAL CINEMATIC PROJECT',
    genre: 'Historical / Legend',
    status: 'In Development',
    tagline: 'Historical cinematic project in development.',
    description: 'An upcoming historical cinematic project exploring Gujarat and Saurashtra folklore and heritage, currently in active development.',
    posterPlaceholderId: 'PROJECT_KHAPRO_KHODIYO_PLACEHOLDER',
    defaultPosterUrl: '/khapro-khodiyo.jpg.png',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    isFeatured: false
  },
  {
    id: 'ram-valo',
    title: 'RAM VALO',
    universe: 'BAHARVATIYA UNIVERSE',
    subtitle: 'HISTORICAL CINEMATIC PROJECT',
    genre: 'Historical / Period Drama',
    status: 'In Development',
    tagline: 'Historical cinematic project in development.',
    description: 'An upcoming historical cinematic project inspired by the legendary historical lore of Saurashtra, currently in active development.',
    posterPlaceholderId: 'PROJECT_RAM_VALO_PLACEHOLDER',
    defaultPosterUrl: '/ram-valo.jpg.png',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    isFeatured: false
  }
];

export const COLLABORATION_CATEGORIES: CollaborationCategory[] = [
  {
    id: 'actors',
    title: 'ACTORS & PERFORMERS',
    targetAudience: 'Lead Roles, Character Actors, Stunt Performers & Voice Artists',
    description: 'Join our original cinematic films and streaming series. We are actively seeking passionate acting talent, performance capture artists, and voice talents for our historical and modern IPs.',
    benefits: [
      'Lead and featured acting roles in original cinematic Indian IPs',
      'High-impact global distribution across theatrical and streaming platforms',
      'AI digital twin and performance pre-visualization integration',
      'Professional screen presence and character spotlight'
    ],
    ctaLabel: 'ACTOR COLLABORATION',
    inquiryType: 'Acting / Casting'
  },
  {
    id: 'producers-investors',
    title: 'PRODUCERS & INVESTORS',
    targetAudience: 'Film Financiers, Production Partners & Venture Capitalists',
    description: 'Partner with us to co-produce and develop high-potential original Indian entertainment IPs. Combine high emotional storytelling with scalable AI production economics.',
    benefits: [
      'Co-ownership and revenue participation in high-value Indian cultural IPs',
      'Significantly reduced production overhead through AI visual development',
      'Global audience reach across NRI communities and international OTTs',
      'Structured production slate with clear risk mitigation'
    ],
    ctaLabel: 'PARTNER WITH US',
    inquiryType: 'Investment / Production Partnership'
  },
  {
    id: 'brands-businesses',
    title: 'BRANDS & BUSINESSES',
    targetAudience: 'Corporate Brands, Agencies & Enterprise Clients',
    description: 'Create cinematic AI-powered commercial content, brand films, and advertising campaigns with world-class production aesthetics delivered in record turnaround times.',
    benefits: [
      'Hollywood-caliber commercial visuals at a fraction of traditional shoot costs',
      'Hyper-customized AI brand avatars and virtual environments',
      'Multi-channel promotional video slates for TV and social media',
      'Rapid ideation and high-conversion visual storytelling'
    ],
    ctaLabel: 'COMMERCIAL PROJECTS',
    inquiryType: 'Commercial Project'
  },
  {
    id: 'distributors-ott',
    title: 'DISTRIBUTORS & OTT PLATFORMS',
    targetAudience: 'Streaming Platforms, Theatrical Distributors & Syndication Agencies',
    description: 'Explore content licensing, theatrical distribution rights, and streaming acquisitions for our original feature film and series pipeline.',
    benefits: [
      'Exclusive streaming and theatrical acquisition rights for premium Indian content',
      'High demand among regional, national, and global South Asian diaspora',
      'Multi-language dubbed and subtitled delivery assets prepared with AI precision',
      'Consistent slate of original historical and contemporary entertainment'
    ],
    ctaLabel: 'CONTENT & LICENSING',
    inquiryType: 'Licensing / Distribution'
  },
  {
    id: 'creative-partners',
    title: 'CREATIVE & TECH PARTNERS',
    targetAudience: 'Directors, Writers, Music Composers, VFX Artists & AI Engineers',
    description: 'Collaborate with Garvi Gujarat AI Studio to push the boundaries of storytelling technology. We welcome writers, musicians, artists, and technologists.',
    benefits: [
      'Access to state-of-the-art AI creative toolchains and rendering hardware',
      'Creative freedom to build ambitious, large-scale cinematic worlds',
      'Collaborative co-credit on breakthrough Indian entertainment projects',
      'Direct partnership with Founder & Producer Jayraj Solanki'
    ],
    ctaLabel: 'JOIN CREATIVE NETWORK',
    inquiryType: 'Creative Partnership'
  }
];
