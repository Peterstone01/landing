import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Testimonial from "./components/Testimonial";
import WorkFlow from "./components/WorkFlow";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="max-w-7xl mx-auto pt-5 px-6">
        <HeroSection />
        <FeatureSection />
        <WorkFlow />
        <Pricing />
        <Testimonial />
      </div>
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
