import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import CTASection from '../components/CTASection';
import "../styles/Home.css";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectsSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Home;