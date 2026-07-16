import AboutSection from "../components/About";
import WhyChoose from "../components/WhyChoose";
import ManufacturingProcess from "../components/ManufacturingProcess";
import Certification from "../components/Certification";
import CTA from "../components/CTA";

function About() {
  return (
    <>
      <div className="mt-18"></div>
      <AboutSection />
      <WhyChoose />
      <ManufacturingProcess />
      <Certification />
      <CTA />
    </>
  );
}

export default About;