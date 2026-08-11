import { StudioConfig, ServiceItem, ProjectItem, CollaborationCategory } from '../types';

export const STUDIO_CONFIG: StudioConfig = {
  brandName: 'GARVI GUJARAT AI STUDIO',
  primaryTagline: 'AI-POWERED ENTERTAINMENT & CREATIVE PRODUCTION STUDIO',
  secondaryTagline: 'Where Indian Stories Meet the Future of Cinema.',
  founderName: 'Jayraj Solanki',
  founderTitle: 'Founder & Producer',
  founderBioPlaceholder: 'FOUNDER_BIO_PLACEHOLDER',
  founderBioText: 'Jayraj Solanki is an ambitious film producer and visionary creative director pioneering the fusion of authentic Indian heritage storytelling with cutting-edge AI technologies and cinematic visual craftsmanship.',
  emailPlaceholder: 'EMAIL_PLACEHOLDER',
  phonePlaceholder: 'PHONE_PLACEHOLDER',
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
    id: 'films-series',
    title: 'FILMS & SERIES',
    shortDesc: 'Feature Films, Web Series, Short Films, Documentaries, Music Videos and Original Entertainment.',
    fullDesc: 'We conceptualize, script, direct, and produce full-length feature films, streaming web series, documentaries, and music videos. By combining high-end cinema craft with AI visual pre-visualization and digital worldbuilding, we deliver epic scale and cultural depth.',
    subCategories: [
      'Feature Films Production',
      'Original Web Series',
      'Short Films & Anthologies',
      'Cultural & Historical Documentaries',
      'Cinematic Music Videos',
      'Original IP Development'
    ],
    imagePlaceholderId: 'SERVICE_FILM_IMAGE',
    defaultImageUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Film'
  },
  {
    id: 'ai-creative-production',
    title: 'AI CREATIVE PRODUCTION',
    shortDesc: 'AI Image & Video Generation, Character Creation, Digital Environments, Animation, AI Voice and AI-assisted Pre-visualization.',
    fullDesc: 'Harnessing state-of-the-art generative AI models as artistic instruments to design hyper-detailed characters, digital set extensions, photorealistic concept art, dynamic previz animatics, and AI-assisted dubbing.',
    subCategories: [
      'AI Image & Video Generation',
      'AI Character Development & Digital Humans',
      'Digital Environments & Worldbuilding',
      'AI Animation & Motion Capture Synthesis',
      'AI Voice, Dubbing & Multi-language Translation',
      'AI Pre-visualization & Animatics'
    ],
    imagePlaceholderId: 'SERVICE_AI_IMAGE',
    defaultImageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Cpu'
  },
  {
    id: 'vfx-post-production',
    title: 'VFX & POST PRODUCTION',
    shortDesc: 'CGI, VFX, Compositing, Environment Creation, Motion Graphics, Editing, Color Grading and Sound Design.',
    fullDesc: 'A complete end-to-end post-production workflow designed for modern film standard finishing. From complex CGI shots and 3D environment compositing to cinematic color grading and immersive Dolby Atmos soundscapes.',
    subCategories: [
      'CGI & Visual Effects (VFX)',
      'Digital Compositing & Matte Painting',
      '3D Environment Creation & Set Extensions',
      'Motion Graphics & Title Design',
      'Cinematic Film Editing',
      'Color Grading & Finishing',
      'Sound Design & Audio Mastering'
    ],
    imagePlaceholderId: 'SERVICE_VFX_IMAGE',
    defaultImageUrl: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Sparkles'
  },
  {
    id: 'commercial-content',
    title: 'COMMERCIAL CONTENT',
    shortDesc: 'Advertisements, Brand Films, Promotional Videos, Corporate Content, Social Media Content and Digital Campaigns.',
    fullDesc: 'Translating cinematic storytelling and high-impact AI visual production into high-converting brand commercials, corporate identity films, launch videos, and viral digital media campaigns.',
    subCategories: [
      'Television & Digital Advertisements',
      'Cinematic Brand Storytelling Films',
      'Corporate & Institutional Content',
      'Product Launch & Promotional Videos',
      'Social Media Campaign Visuals',
      'High-Impact Digital Campaigns'
    ],
    imagePlaceholderId: 'SERVICE_COMMERCIAL_IMAGE',
    defaultImageUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
    iconName: 'Tv'
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
    longDescription: 'Set against the rugged, majestic terrains of 19th-century Sorath (Saurashtra), Jogidas Khuman tells the epic saga of a warrior who stood against tyranny with unyielding honor. Driven out of his ancestral land, Jogidas chose the righteous path of Baharvatiya — outlawry governed by chivalry, courage, and protective devotion to the helpless. Through state-of-the-art AI-assisted worldbuilding and authentic historical research, Garvi Gujarat AI Studio breathes monumental visual scale into this cherished folk hero of Gujarat.',
    posterPlaceholderId: 'FILM_PROJECT_IMAGE_PLACEHOLDER',
    defaultPosterUrl: '/src/assets/images/jogidas_poster_1786461136092.jpg',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    defaultTrailerVideoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-smoke-and-sparks-rising-in-the-dark-41584-large.mp4',
    historicalContext: 'Sorath (Saurashtra) was a land of independent chieftains, royal dynasties, and fierce honor codes. The Baharvatiya tradition was not banditry, but a noble armed resistance against unjust tax regimes and oppressive rulers, guided by sacred ethical principles.',
    characters: [
      { name: 'Jogidas Khuman', role: 'The Hero of Sorath', desc: 'A fierce Baharvatiya leader revered for his unbending principles, bravery, and defense of the oppressed.' },
      { name: 'Hada Khuman', role: 'Patriarch & Chieftain', desc: 'The wise elder chieftain of the Khuman clan whose ancestral land rights sparked the legendary struggle.' },
      { name: 'The Ruler of Bhavnagar', role: 'Royal Opponent', desc: 'A powerful ruler locked in a intense tactical and moral feud with the honorable outlaw.' }
    ],
    isFeatured: true
  },
  {
    id: 'project-02',
    title: 'PROJECT_02 (UNANNOUNCED HISTORICAL IP)',
    universe: 'BAHARVATIYA UNIVERSE / GUJARAT CHRONICLES',
    subtitle: 'UNDER ACTIVE DEVELOPMENT',
    genre: 'Epic War / Historical Fantasy',
    status: 'In Development',
    tagline: 'The forgotten kings and maritime legends of Western India.',
    description: 'An ambitious original historical spectacle exploring the maritime heroism and golden trade empires of ancient Gujarat. Developing next-generation AI character pipelines.',
    posterPlaceholderId: 'PROJECT_02_PLACEHOLDER',
    defaultPosterUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    isFeatured: false
  },
  {
    id: 'project-03',
    title: 'PROJECT_03 (SCI-FI FOLKLORE FUSION)',
    universe: 'INDIAN CYBERPUNK MYTHOLOGY',
    subtitle: 'CONCEPT PHASE',
    genre: 'Futuristic Sci-Fi / Mythological Thriller',
    status: 'Concept Phase',
    tagline: 'When ancient folklore reawakens in a high-tech future.',
    description: 'Merging Indian mythic archetypes with futuristic AI visual art, exploring quantum consciousness and ancient Vedic cosmic folklore in 2150 AD.',
    posterPlaceholderId: 'PROJECT_03_PLACEHOLDER',
    defaultPosterUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    trailerPlaceholderId: 'FILM_TRAILER_PLACEHOLDER',
    isFeatured: false
  },
  {
    id: 'project-04',
    title: 'PROJECT_04 (ORIGINAL ANTHOLOGY)',
    universe: 'STORIES OF SORATH',
    subtitle: 'IN PRE-PRODUCTION',
    genre: 'Drama / Culture / Heritage',
    status: 'In Production',
    tagline: '6 stories of courage, love, and devotion from the soil of Gujarat.',
    description: 'A 6-episode cinematic anthology series blending live actors with AI-generated digital environments capturing the folk songs and tales of Kathiawar.',
    posterPlaceholderId: 'PROJECT_04_PLACEHOLDER',
    defaultPosterUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
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
