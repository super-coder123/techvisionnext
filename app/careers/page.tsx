import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Careers from "@/components/Careers";

export const metadata = {
  title: "Careers | TechVision",
  description: "Join the TechVision team and build the future of IT and Legal consultancy.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Careers />
      </div>
      <Footer />
    </main>
  );
}