import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";

export const metadata = {
  title: "About Us | TechVision",
  description: "Learn about TechVision's journey in Muzaffarpur, Bihar, providing top-tier IT and Legal services.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AboutUs />
      </div>
      <Footer />
    </main>
  );
}