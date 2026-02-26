import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RefundPolicy from "@/components/RefundPolicy";

export const metadata = {
  title: "Refund Policy | TechVision",
  description: "Our transparent refund and cancellation policy for IT and Legal services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <RefundPolicy />
      </div>
      <Footer />
    </main>
  );
}