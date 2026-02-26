import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactUs from "@/components/ContactUs";

export const metadata = {
  title: "Contact Us | TechVision Muzaffarpur",
  description: "Get in touch with TechVision experts for legal and IT consultancy in Bihar. We are here to help your business grow.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
}