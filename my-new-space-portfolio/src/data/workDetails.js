// Import work data from existing files
import { reactPortfolioWork } from '../components/work/reactPortfolio';
import { brandguideStudioWork } from '../components/work/brandguideStudio';
import { studioLogosWork } from '../components/work/studioLogos';
import { reactNativeAppWork } from '../components/work/reactNativeApp';
import { wireframingWork } from '../components/work/wireframing';
import { researchMethodsWork } from '../components/work/researchMethods';

// Map learning outcome IDs to their section names
const learningOutcomeSections = {
  'media-products': 'Media Products',
  'process-documentation': 'Development',
  'iterations': 'Iterative Design',
  'professional': 'Professionalism',
  'personal': 'Personal'
};

// Combine all work data into a single object
export const workDetails = {
  'react-portfolio': reactPortfolioWork,
  'brandguide-studio': brandguideStudioWork,
  'studio-logos': studioLogosWork,
  'react-native-app': reactNativeAppWork,
  'wireframing': wireframingWork,
  'research-methods': researchMethodsWork
}; 