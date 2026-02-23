import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServiceSection";
import ClientsSection from "@/components/ClientSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import WorkingProcess from "@/components/WorkingProcess";
import OurStory from "@/components/OurStory";
import ConsultationSection from "@/components/ConsultationSection";
import FaqSection from "@/components/FaqSection";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ServicesSection/>
      <ClientsSection/>
      <WhyChooseUs/>
      <WorkingProcess/>
      <OurStory/>
      <ConsultationSection/>
      <FaqSection/>
      <TestimonialSection/>
      <Footer/>
    </>
  );
}