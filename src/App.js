import Navigation from "./features/Navigation";
import LandingHeader from "./features/LandingHeader";
import FeaturesSection from "./features/FeaturesSection";
import AboutSection from "./features/AboutSection";
import OurServicesSection from "./features/OurServicesSection";
import GallerySection from "./features/GallerySection";
import TestimonialsSection from "./features/TestimonialsSection";

function App() {
  return (
    <>
      <Navigation />
      <LandingHeader />
      <FeaturesSection />
      <AboutSection />
      <OurServicesSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}

export default App;
