import React from "react";
import { RefreshCcw, ShieldAlert, CreditCard, Clock, CheckCircle, Mail, AlertTriangle, MapPin, ArrowRightLeft, FileText } from "lucide-react";

const RefundPolicy = () => {
  const lastUpdated = "February 27, 2026";

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans">
      {/* HEADER SECTION */}
      <section className="bg-gradient-to-b from-orange-50 to-white py-20 border-b border-orange-100">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm border border-orange-200 mb-6">
            <RefreshCcw className="text-orange-600 w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Refund Policy
          </h1>
          <p className="text-sm text-slate-400 mt-4 uppercase tracking-widest font-semibold">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* MAIN CONTENT AREA */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none space-y-12 text-slate-700 leading-relaxed">
          
          {/* Section 1: Refund Policy Main */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6">
              <Clock className="text-orange-600" /> Refund Policy
            </h2>
            <p>
              Our policy lasts <strong>2 days</strong>. If 2 days have gone by since your purchase of our service, unfortunately, we can’t offer you a refund or exchange unless there is a genuine reason for the cancellation or we haven&apos;t started the work, and the refund if granted will subject to a cancellation fee, which is 60% of the payment amount received and in case of Software, 80% of the receipt amount or Rs. 15000, whichever is higher and the payment gateway charges or convinience fees is non refundable in any of the case mentioned above.
            </p>
            <p className="mt-4">
              Approval not guaranteed by the approving authority will not be considered as the ground of non-performance of service. In case, we only take registration filing and closure filing services, closure will totally depends on MCA, in case Government rejects the closure, the refund of any amount will not be issued by the company.
            </p>
            <p className="mt-4">
              Notwithstanding containing in the above paragraph, no refund shall be granted in the case of any Software booking, GST registration, GST Migration, GST Return Filing Payments and Income Tax Return Filing payments, in which our executive got to know the RC is cancelled or there is any error coming in the processing of the application due to Assessee mistakes in the past or the data for return filing is not available to us in the proper format given by us.
            </p>
            <p className="mt-4">
              Also, the payment gateway charges if any, fees which we have paid on your behalf to other professionals or contractors, DSC fees and other government fees, and proportionate other charges, will not able for refund in any case. We are not responsible for either rejection or resubmission in the case of special entities like Private Limited, Public limited, OPC, Nidhi, Section 8 or Micro Finance, If Any rejection or resubmission comes, <strong>techvisionnext.com</strong> is not in a position to refund your money back.
            </p>
            <p className="mt-4 font-semibold">
              To complete your refund, we require a receipt or proof of purchase and a mail to <span className="text-orange-600">support@techvisionnext.com</span> with your order id.
            </p>
            <p className="mt-4">
              Once your refund request is received and inspected, we will send you an email to notify you that we have received your request. We will also notify you of the approval or rejection of your refund. If you are approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days.
            </p>
          </section>

          {/* Section 2: Late Refunds */}
          <section className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6">
              <AlertTriangle className="text-orange-600" /> Late or missing refunds
            </h2>
            <p>
              If you haven’t received a refund yet, first check your bank account again. All Refund will be processed after deduction of Payment gateway fees which we never received.
            </p>
            <p className="mt-4">
              Then contact your credit card company, it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted.
            </p>
            <p className="mt-4 font-bold text-slate-900">
              If you’ve done all of this and you still have not received your refund yet, please contact us at:
            </p>
            <div className="mt-4 flex items-start gap-3">
              <MapPin className="text-orange-600 flex-shrink-0" />
              <address className="not-italic">
                <strong>TechVision Emitting Technologies Private Limited</strong><br />
                Rambagh Road Buddha Colony Musahri Muzaffarpur Bihar<br />
                Muzaffarpur - 842001<br />
              </address>
            </div>
          </section>

          {/* Section 3: Exchange */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6">
              <ArrowRightLeft className="text-orange-600" /> Exchange of Service
            </h2>
            <p>
              We only exchange service if requested from the original Order ID. The exchange of service will be the sole discretion of the <strong>techvisionnext.com</strong> the management team. If you need to exchange it for some other service, send us an email at <span className="text-orange-600">support@techvisionnext.com</span>.
            </p>
          </section>

          {/* Section 4: Cancellation */}
          <section className="border-t pt-12">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 mb-6">
              <ShieldAlert className="text-orange-600" /> Cancellation
            </h2>
            <p>
              In case of any cancellation by the user within one day of the payment, all the money paid by the customer less the payment gateway fees if any would be initiated for refund without any question asked.
            </p>
            <p className="mt-4">
              But if the customer would take more than <strong>2 days</strong> to initiate the cancellation request, the customer needs to bear 30% of the order amount towards cancellation charges and in case of Software, 80% of the receipt amount or Rs. 15000, whichever is higher.
            </p>
            <p className="mt-4 p-4 bg-orange-50 border-l-4 border-orange-500 italic">
              For GST Enrollment/Registration, MCA Filings, Nidhi Softwares or Any finance softwares and GST Return Filing related orders, No Refund or Cancellation request would be accepted if received after one day of payment or the provisional id is cancelled and our executive got to know after processing the documents.
            </p>
          </section>

          {/* Footer Call to Action */}
          <div className="bg-slate-900 rounded-3xl p-10 text-center text-white">
            <CheckCircle className="mx-auto mb-6 text-orange-400 w-12 h-12" />
            <h3 className="text-2xl font-bold mb-4">Billing Questions?</h3>
            <p className="text-slate-400 mb-8">
              For any queries related to your transaction or order status, please reach out to our support team.
            </p>
            <a 
              href="mailto:support@techvisionnext.com" 
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-2xl font-bold transition-all"
            >
              <Mail size={20} /> support@techvisionnext.com
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;