import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TermsAndConditions from "@/components/TermsAndConditions";

export const metadata = {
  title: "Terms & Conditions | TechVision",
  description: "Official terms of service for TechVision IT and Legal consultancy.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <TermsAndConditions />
      </div>
      <Footer />
    </main>
  );
}