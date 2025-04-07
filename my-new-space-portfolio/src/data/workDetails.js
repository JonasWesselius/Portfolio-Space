// Import work data from existing files
import { reactPortfolioWork } from '../components/work/reactPortfolio';
import { brandguideStudioWork } from '../components/work/brandguideStudio';
import { studioLogosWork } from '../components/work/studioLogos';
import { motivationWork } from '../components/work/motivation';
import { clientMeetingsWork } from '../components/work/clientMeetings';
import { posterPresentationWork } from '../components/work/posterPresentation';
import { personasWork } from '../components/work/personas';
import { woodworksWork } from '../components/work/woodworks';
import { artDepartmentWork } from '../components/work/artDepartment';
// Map learning outcome IDs to their section names
export const learningOutcomeSections = {
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
  'motivation': motivationWork,
  'client-meetings': clientMeetingsWork,
  'poster-presentation': posterPresentationWork,
  'personas': personasWork,
  'woodworks': woodworksWork,
  'art-department': artDepartmentWork,
}; 