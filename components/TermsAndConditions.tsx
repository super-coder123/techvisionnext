import React from "react";
import { Scale, Mail, MapPin } from "lucide-react";

const TermsAndConditions = () => {
  const lastUpdated = "February 27, 2026";

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans selection:bg-blue-100">
      {/* HEADER */}
      <section className="bg-slate-50 py-16 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Scale className="mx-auto text-blue-600 mb-4" size={48} />
          <h1 className="text-4xl font-black text-slate-900 mb-2 uppercase tracking-tight">
            Terms & Conditions
          </h1>
          <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* FULL LEGAL CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
          
          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">User Agreement</h2>
            <p>
              Welcome to <strong>techvisionnext.com</strong>. This website is owned and operated by <strong>TechVision Technologies Private Limited</strong>. By visiting our website and accessing the information, resources, services, products, and tools we provide, you understand and agree to accept and adhere to the following terms and conditions as stated in this policy (hereafter referred to as &apos;User Agreement&apos;), along with the terms and conditions as stated in our Privacy Policy (please refer to the Privacy Policy section below for more information).
            </p>
            <p className="mt-4">
              We reserve the right to change this User Agreement from time to time without notice. You acknowledge and agree that it is your responsibility to review this User Agreement periodically to familiarize yourself with any modifications. Your continued use of this site after such modifications will constitute acknowledgment and agreement of the modified terms and conditions.
            </p>
            <p className="mt-4">
              If you wish to use the <strong>techvisionnext.com</strong>&apos;s services, you affirm that you are more than 18 years of age and are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties consequent to the creation of the documents, and are aware of the same. Kindly call us for further assistance.
            </p>
            <p className="mt-4">
              <strong>techvisionnext.com</strong> is not intended to be a source of advertising or solicitation and the contents of the website should not be construed as legal advice.
            </p>
            <p className="mt-4 font-semibold">Specifically, techvisionnext.com does not provide any avenue for solicitation.</p>
            <p className="mt-2 font-bold text-slate-900 italic">techvisionnext.com does not provide Legal Advice.</p>
            <p className="mt-4">
              The information provided in the ‘FAQs’ or learning centre or by any other way does not amount to legal advice, such merely being commonly asked queries about tax planning’s, company incorporations, structure design, accounting and other services. Users are advised to consult a professional if they need specialized guidance on any of these services.
            </p>
            <p className="mt-4">
              Except as otherwise provided, you acknowledge and agree that you have no right to modify, edit, copy, reproduce, create derivative works of, reverse engineer, alter, enhance or in any way exploit any of the Forms in any manner, except for modifications in filling out the Forms for your authorized use.
            </p>
            <p className="mt-4 p-4 bg-red-50 text-red-800 font-bold border border-red-100 rounded-lg">
              Reselling or distributing without permission amounts to a violation of techvisionnext.com’s exclusive copyright and is liable to prosecution.
            </p>
            <p className="mt-4 italic">
              Disclaimer of representations by users: <strong>techvisionnext.com</strong> makes no representation, guarantee, or warranty (express or implied) as to the legal ability, competence, or quality of representation which may be provided by any of the professionals or professional firms which are associated with or through this site or any affiliate thereof.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">1. RESPONSIBLE USE AND CONDUCT</h2>
            <p>In order to access our Resources, you may be required to provide certain information about yourself (such as identification, email, phone number, contact details, etc.) as part of the registration process, or as part of your ability to use the Resources. You agree that any information you provide will always be accurate, correct, and up to date.</p>
            <p className="mt-4">You are responsible for maintaining the confidentiality of any login information associated with any account you use to access our Resources. Accordingly, you are responsible for all activities that occur under your account&apos;s.</p>
            <p className="mt-4 font-semibold">Accessing (or attempting to access) any of our Resources by any means other than through the means we provide, is strictly prohibited. You specifically agree not to access (or attempt to access) any of our Resources through any automated, unethical or unconventional means.</p>
            <p className="mt-4">Engaging in any activity that disrupts or interferes with our Resources, including the servers and/or networks to which our Resources are located or connected, is strictly prohibited.</p>
            <p className="mt-4">Attempting to copy, duplicate, reproduce, sell, trade, or resell our resources is strictly prohibited.</p>
            <p className="mt-4">You are solely responsible any consequences, losses, or damages that we may directly or indirectly incur or suffer due to any unauthorized activities conducted by you, as explained above, and may incur criminal or civil liability.</p>
            <p className="mt-4">We may provide various open communication tools on our website, such as blog comments, blog posts, public chat, forums, message boards, newsgroups, product ratings and reviews, various social media services, etc. You understand that generally we do not pre-screen or monitor the content posted by users of these various communication tools, which means that if you choose to use these tools to submit any type of content to our website, then it is your personal responsibility to use these tools in a responsible and ethical manner. By posting information or otherwise using any open communication tools as mentioned, you agree that you will not upload, post, share, or otherwise distribute any content that:</p>
            <ul className="list-decimal pl-6 mt-4 space-y-2">
              <li>Is illegal, threatening, defamatory, abusive, harassing, degrading, intimidating, fraudulent, deceptive, invasive, racist, or contains any type of suggestive, inappropriate, or explicit language;</li>
              <li>Infringes on any trademark, patent, trade secret, copyright, or other proprietary right of any party;</li>
              <li>Contains any type of unauthorized or unsolicited advertising;</li>
              <li>Impersonates any person or entity, including any <strong>techvisionnext.com</strong> employees or representatives.</li>
            </ul>
            <p className="mt-4 italic">We have the right at our sole discretion to remove any content that, we feel in our judgment does not comply with this User Agreement, along with any content that we feel is otherwise offensive, harmful, objectionable, inaccurate, or violates any 3rd party copyrights or trademarks. We are not responsible for any delay or failure in removing such content. If you post content that we choose to remove, you hereby consent to such removal, and consent to waive any claim against us.</p>
            <p className="mt-4">We do not assume any liability for any content posted by you or any other 3rd party users of our website. However, any content posted by you using any open communication tools on our website, provided that it doesn&apos;t violate or infringe on any 3rd party copyrights or trademarks, becomes the property of <strong>techvisionnext.com</strong>, and as such, gives us a perpetual, irrevocable, worldwide, royalty-free, exclusive license to reproduce, modify, adapt, translate, publish, publicly display and/or distribute as we see fit. This only refers and applies to content posted via open communication tools as described, and does not refer to information that is provided as part of the registration process, necessary in order to use our Resources. All information provided as part of our registration process is covered by our Privacy Policy.</p>
            <p className="mt-4">You agree to indemnify and hold harmless <strong>techvisionnext.com</strong> a digital property of <strong>TechVision Technologies Private Limited</strong> and its parent company and affiliates, and their directors, officers, managers, employees, donors, agents, and licensors, from and against all losses, expenses, damages and costs, including reasonable attorneys&apos; fees, resulting from any violation of this User Agreement or the failure to fulfill any obligations relating to your account incurred by you or any other person using your account. We reserve the right to take over the exclusive defense of any claim for which we are entitled to indemnification under this User Agreement. In such event, you shall provide us with such cooperation as is reasonably requested by us.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">2. PRIVACY</h2>
            <p>Your privacy is very important to us, which is why we&apos;ve created a separate Privacy Policy in order to explain in detail how we collect, manage, process, secure, and store your private information. Our privacy policy is included under the scope of this User Agreement. To read our privacy policy in its entirety, click here.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">3. LIMITATION OF WARRANTIES</h2>
            <p>By using our website, you understand and agree that all Resources we provide are &quot;as is&quot; and &quot;as available&quot;. This means that we do not represent or warrant to you that:</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">4. LIMITATION OF LIABILITY</h2>
            <p>In conjunction with the Limitation of Warranties as explained above, you expressly understand and agree that any claim against us shall be limited to the amount you paid, if any, for use of products and/or services. <strong>techvisionnext.com</strong> will not be liable for any direct, indirect, incidental, consequential or exemplary loss or damages which may be incurred by you as a result of using our Resources, or as a result of any changes, data loss or corruption, cancellation, loss of access, or downtime to the full extent that applicable limitation of liability laws apply.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">5. COPYRIGHTS / TRADEMARKS</h2>
            <p>All content and materials available on <strong>techvisionnext.com</strong>, including but not limited to text, graphics, website name, code, images and logos are the intellectual property of <strong>TechVision Technologies Private Limited</strong>, and are protected by applicable copyright and trademark law. Any inappropriate use, including but not limited to the reproduction, distribution, display or transmission of any content on this site is strictly prohibited, unless specifically authorized by <strong>TechVision Technologies Private Limited</strong>.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">6. TERMINATION OF USE</h2>
            <p>You agree that we may, at our sole discretion, suspend or terminate your access to all or part of our website and Resources with or without notice and for any reason, including, without limitation, breach of this User Agreement. Any suspected illegal, fraudulent or abusive activity may be grounds for terminating your relationship and may be referred to appropriate law enforcement authorities. Upon suspension or termination, your right to use the Resources we provide will immediately cease, and we reserve the right to remove or delete any information that you may have on file with us, including any account or login information.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">7. GOVERNING LAW</h2>
            <p>This website is controlled by <strong>TechVision Technologies Private Limited</strong> from our offices located in the state of <strong>New Delhi, India</strong>. It can be accessed by most countries around the world. As each country has laws that may differ from those of New Delhi India by accessing our website, you agree that the statutes and laws of New Delhi, India without regard to the conflict of laws, will apply to all matters relating to the use of this website and the purchase of any products or services through this site.</p>
            <p className="mt-4">Furthermore, any action to enforce this User Agreement shall be brought in the federal or state courts located in New Delhi, India. You hereby agree to personal jurisdiction by such courts, and waive any jurisdictional, venue, or inconvenient forum objections to such courts.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">8. CANCELLATION AND REFUND</h2>
            <p>Cancellation of order is not possible once the payment has been made. No refunds will be given except in the event of cancellation or non-performance of service by <strong>TechVision Technologies Private Limited</strong> or as stated in refund policy or in satisfaction guaranteed. Approval not guaranteed by the approving authority wil not be considered as the ground of non-performance of service.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">9. GUARANTEE</h2>
            <p className="font-bold">UNLESS OTHERWISE EXPRESSED, techvisionnext.com EXPRESSLY DISCLAIMS ALL WARRANTIES AND CONDITIONS OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES AND CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">10. ERRORS AND CORRECTIONS</h2>
            <p>TechVision does not represent or warrant that the service will be error-free, free of viruses or other harmful components, or that defects will be corrected. TechVision may make improvements and/or changes to its features, functionality or service at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">11. CANCELLATION AND REFUND POLICY</h2>
            <p>We strive to ensure that the services you avail through our website are to your full satisfaction, and are the best in the Industry at extremely reasonable and affordable rates.</p>
            <p className="mt-4">However, there may arise situations when you desire a refund. Firstly, when you pay for the services but later on decide that you do not wish to avail them. Secondly, when there is a delay in the services offered from our side, beyond the time frame we have intimated to you, due to human error i.e., factors for which we are solely responsible not including the delay caused by government approvals. Thirdly, although we highly doubt it, you might find our services unsatisfactory.</p>
            <p className="mt-4 font-semibold italic text-slate-900">In all three situations, kindly send in an e-mail to on the Ticket that has been created in your name, marking a copy to support@techvisionnext.com. We would like to clarify that only refunds of the professional fees component of the charges paid by you shall be considered for a refund.</p>
            <p className="mt-4">Also, the fees which we have paid on your behalf to other professionals or contractors, DSC fees and other government fees, and proportionate other charges, will not able for refund in any case.</p>
            <p className="mt-4">We are not responsible for either rejection or resubmission in case of special entities like Nidhi, Section 8 or Micro Finance, If Any rejection or resubmission comes, <strong>techvisionnext.com</strong> is not in a position to refund your money back.</p>
            <p className="mt-4 italic">Upon receiving your mail, the Senior Management at <strong>techvisionnext.com</strong> shall decide on whether your request for a refund should be processed, contingent on the reasons for such a request. Please note that we reserve the right to take the final and binding decision with regard to requests for refund.</p>
            <p className="mt-4 underline">Most importantly, we wish to clarify that in cases outside our control, including but not limited to national holidays, department holidays, delays on the part of the Government of India, the respective State Governments, Our affiliates or elsewhere, acts of war, acts of God, earthquake, riot, sabotage, labour shortage or dispute, internet interruption, power disruption, lack of phone network connectivity, technical failures, breakage of sea cable, hacking, piracy, we shall not liable for any delays.</p>
            <p className="mt-4">If we confirm your request for refund, subject to the terms and conditions mentioned herein or elsewhere, we will send you an e-mail seeking the details required to refund the amount which may include your Bank Account details such as the account number and the IFSC code of the branch in question. Kindly note that it will take us a minimum of about 48-72 working hours from the receipt of all such information to process the refund and initiate the transfer. We reiterate once again that only the professional fees paid for our services shall be refunded, subject to the discretion of the Senior Management at <strong>techvisionnext.com</strong>.</p>
            <p className="mt-4">We assure you that we are continuously working to improve our services and are we are welcome to any suggestions from your end. For any other queries please contact out customer service desk at <strong>support@techvisionnext.com</strong>.</p>
            <p className="mt-4 font-bold text-blue-600">We appreciate your interest and support and we welcome you to our community!</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">12. ERRORS AND CORRECTIONS</h2>
            <p>TechVision does not represent or warrant that the service will be error-free, free of viruses or other harmful components, or that defects will be corrected. TechVision may make improvements and/or changes to its features, functionality or service at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 border-b pb-2 mb-4">13. DISCLAIMER</h2>
            <p>The views and opinions expressed on any content available on this website whether or not in the form of magazine/article are those of the authors/writers/guest authors and do not necessarily reflect the official policy or position of any agency of the Indian government. Examples of analysis performed within whether or not in the form of article/magazine are only examples. Further, the contents including but not limited to articles, guides, magazines of this website should not be used for any litigation and are solely for the purpose of informational and awareness purpose. The company shall not bear any responsibility for any reliance placed upon or any view expressed based upon the content in any form including guides, articles etc.</p>
          </section>

          <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Mail className="text-blue-600" size={20} /> 14. CONTACT INFORMATION
            </h2>
            <p className="text-slate-700">
              If you have any questions or comments about these our Terms of Service as outlined above, you can contact at <strong>info@techvisionnext.com</strong>.
            </p>
            <address className="mt-6 not-italic text-sm text-slate-600 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-slate-400" />
                <strong>TechVision Technologies Private Limited</strong>
              </div>
              <p className="pl-6">1116 11th floor Astralis Sector 94</p>
              <p className="pl-6">Noida - 201301</p>
            </address>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;