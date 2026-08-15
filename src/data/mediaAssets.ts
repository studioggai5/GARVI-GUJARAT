/**
 * GARVI GUJARAT AI STUDIO — MEDIA ASSETS & PLACEHOLDER REGISTRY
 * All images, posters, and video placeholders are centrally registered here.
 * Owners can easily replace file paths or URLs in this file.
 */

export interface MediaAsset {
  id: string;
  label: string;
  replacementPath: string;
  currentUrl: string;
  description: string;
  type: 'image' | 'video';
}

export const MEDIA_ASSETS: Record<string, MediaAsset> = {
  STUDIO_LOGO: {
    id: 'STUDIO_LOGO',
    label: 'Garvi Gujarat AI Studios Official Emblem Logo',
    replacementPath: '/assets/studio-logo.jpg',
    currentUrl: '/src/assets/images/studio_logo_1786540872261.jpg',
    description: 'Official 3D metallic lion & Gujarat map studio logo',
    type: 'image'
  },
  HERO_VIDEO_PLACEHOLDER: {
    id: 'HERO_VIDEO_PLACEHOLDER',
    label: 'Hero Background Video Placeholder',
    replacementPath: '/assets/hero-video.mp4',
    currentUrl: 'https://assets.mixkit.co/videos/preview/mixkit-dramatic-sunset-over-a-mountain-range-42790-large.mp4',
    description: 'Cinematic video playing on Hero loop (MP4/WebM)',
    type: 'video'
  },
  HERO_IMAGE_PLACEHOLDER: {
    id: 'HERO_IMAGE_PLACEHOLDER',
    label: 'Hero Background Fallback Image',
    replacementPath: '/assets/hero-image.jpg',
    currentUrl: '/src/assets/images/hero_cinematic_bg_1786461121840.jpg',
    description: 'High-res cinematic background for hero section',
    type: 'image'
  },
  ABOUT_STUDIO_IMAGE: {
    id: 'ABOUT_STUDIO_IMAGE',
    label: 'About Studio Production Visual',
    replacementPath: '/assets/studio-images/about-studio.jpg',
    currentUrl: '/src/assets/images/studio_cinematic_1786461148134.jpg',
    description: 'Cinematic film studio and AI production soundstage image',
    type: 'image'
  },
  FILM_PROJECT_IMAGE_PLACEHOLDER: {
    id: 'FILM_PROJECT_IMAGE_PLACEHOLDER',
    label: 'Jogidas Khuman Key Visual Banner',
    replacementPath: '/assets/jogidas-poster.jpg',
    currentUrl: '/src/assets/images/jogidas.png',
    description: 'Official movie banner visual for Jogidas Khuman film - The Legendary Baharvatiya of Sorath',
    type: 'image'
  },
  FILM_TRAILER_PLACEHOLDER: {
    id: 'FILM_TRAILER_PLACEHOLDER',
    label: 'Jogidas Khuman Official Teaser Video',
    replacementPath: '/assets/jogidas-trailer.mp4',
    currentUrl: 'https://assets.mixkit.co/videos/preview/mixkit-smoke-and-sparks-rising-in-the-dark-41584-large.mp4',
    description: 'Official trailer video file or stream URL',
    type: 'video'
  },
  VISION_BACKGROUND_PLACEHOLDER: {
    id: 'VISION_BACKGROUND_PLACEHOLDER',
    label: 'Our Vision Background Visual',
    replacementPath: '/assets/studio-images/vision-bg.jpg',
    currentUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1920&auto=format&fit=crop',
    description: 'Slow moody cinematic atmosphere background',
    type: 'image'
  },
  FOUNDER_IMAGE_PLACEHOLDER: {
    id: 'FOUNDER_IMAGE_PLACEHOLDER',
    label: 'Jayraj Solanki - Founder & Producer Portrait',
    replacementPath: '/assets/studio-images/jayraj-solanki.jpg',
    currentUrl: '/src/assets/images/jayraj.png',
    description: 'Producer portrait visual for Jayraj Solanki',
    type: 'image'
  },
  SERVICE_FILM_IMAGE: {
    id: 'SERVICE_FILM_IMAGE',
    label: 'AI Film & Digital Production Visual',
    replacementPath: '/src/assets/images/studio_cinematic_1786461148134.jpg',
    currentUrl: '/src/assets/images/studio_cinematic_1786461148134.jpg',
    description: 'Cinematic film camera and studio production setup',
    type: 'image'
  },
  SERVICE_AI_IMAGE: {
    id: 'SERVICE_AI_IMAGE',
    label: 'AI Creative Production Visual',
    replacementPath: '/src/assets/images/jogidas_white_attire_poster_1786546636449.jpg',
    currentUrl: '/src/assets/images/jogidas_white_attire_poster_1786546636449.jpg',
    description: 'AI visual concept development and character visualization',
    type: 'image'
  },
  SERVICE_VFX_IMAGE: {
    id: 'SERVICE_VFX_IMAGE',
    label: 'AI & VFX Services Visual',
    replacementPath: '/src/assets/images/jogidas_poster_official_1786541347811.jpg',
    currentUrl: '/src/assets/images/jogidas_poster_official_1786541347811.jpg',
    description: 'Official key art, digital compositing, and visual effects',
    type: 'image'
  },
  SERVICE_HISTORICAL_IMAGE: {
    id: 'SERVICE_HISTORICAL_IMAGE',
    label: 'Historical Digital Production Visual',
    replacementPath: '/src/assets/images/hero_cinematic_bg_1786461121840.jpg',
    currentUrl: '/src/assets/images/hero_cinematic_bg_1786461121840.jpg',
    description: 'Historical fort and digital environment recreation',
    type: 'image'
  },
  SERVICE_COMMERCIAL_IMAGE: {
    id: 'SERVICE_COMMERCIAL_IMAGE',
    label: 'Commercial Content Service Visual',
    replacementPath: '/assets/service-images/commercial.jpg',
    currentUrl: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop',
    description: 'Brand advertisement production setup',
    type: 'image'
  },
  PROJECT_02_PLACEHOLDER: {
    id: 'PROJECT_02_PLACEHOLDER',
    label: 'Project 02 Poster Visual',
    replacementPath: '/assets/projects/project-02.jpg',
    currentUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop',
    description: 'Future project poster placeholder',
    type: 'image'
  },
  PROJECT_03_PLACEHOLDER: {
    id: 'PROJECT_03_PLACEHOLDER',
    label: 'Project 03 Poster Visual',
    replacementPath: '/assets/projects/project-03.jpg',
    currentUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800&auto=format&fit=crop',
    description: 'Future project poster placeholder',
    type: 'image'
  },
  PROJECT_04_PLACEHOLDER: {
    id: 'PROJECT_04_PLACEHOLDER',
    label: 'Project 04 Poster Visual',
    replacementPath: '/assets/projects/project-04.jpg',
    currentUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop',
    description: 'Future project poster placeholder',
    type: 'image'
  }
};
