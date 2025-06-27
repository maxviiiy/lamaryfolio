import { useEffect, useState } from "react";
import Hero from '../components/Hero'
import ProjectPreview from "../components/ProjectList";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProjectPreview />
    </div>
  );
};

export default Home;