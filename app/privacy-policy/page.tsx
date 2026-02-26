import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      {/* This renders the UI from your components folder */}
      <PrivacyPolicy /> 
      <Footer />
    </main>
  );
}