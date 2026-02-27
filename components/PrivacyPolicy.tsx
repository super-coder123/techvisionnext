import { ShieldCheck, Lock, Eye, FileText, Globe, Scale, AlertTriangle, Database, Info, Share2, PhoneCall, UserCheck, Trash2, ShieldAlert } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | TechVisionNext",
  description: "Read the TechVisionNext Privacy Policy to understand how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  const lastUpdated = "February 2026";

  return (
    <div className="bg-white">
      {/* Header Section */}
      <section className="bg-slate-50 border-b py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-4">
            <ShieldCheck size={16} /> Data Protection & Privacy
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-500 italic">Last Updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="prose prose-slate max-w-none space-y-12 text-slate-600 leading-relaxed">
            
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Eye className="text-blue-500" /> PRIVACY POLICY
              </h2>
              <p className="mt-4">
                <strong>TechVisionNext</strong> is sensitive to your concerns about how we use the personal information we collect from you through our website (the &quot;Site&quot;) and other plug-ins exchanging information with <strong>techvisionnext.com</strong> (&quot;Applications&quot;). (The Site and Applications are sometimes collectively referred to as &quot;Online Services&quot; for simplicity.) 
                TechVisionNext takes your privacy seriously, and has implemented this privacy policy (the &quot;Privacy Policy&quot;) and internal policies and practices to keep your personal and financial information secure. The Privacy Policy covers TechVisionNext&apos;s treatment of the Personally Identifiable Information we collect when you use the Online Services. It also describes the choices available to you regarding our use of your personal information and how you can access and update this information.
              </p>
              <p className="mt-4 font-semibold text-slate-800">
                By using TechVisionNext Online Services, you accept the terms of this Privacy Policy. If you have questions or concerns about the Privacy Policy, please contact Customer Care at legal@techvisionnext.com.
              </p>
            </div>

            {/* Information Collection */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 border-b pb-2">
                <Database className="text-blue-500" /> What Information Do We Collect About Our Customers?
              </h2>
              
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 italic underline">Traffic Data</h3>
                  <p>
                    TechVisionNext may receive a variety of visitor data such as IP addresses, browser settings, internet service provider (ISP) information, refer/exit pages, operating systems, date/time stamps, and clickstream data (collectively &quot;Visitor Data&quot;). The TechVisionNext internal servers and software automatically recognize Visitor Data. No Personally Identifiable Information is collected in this process. The Site may use Visitor Data to compile traffic data about the types of visitors who use the Site at specific intervals (collectively &quot;Traffic Data&quot;).
                  </p>
                  <p className="mt-2">
                    We may use Traffic Data to analyze Site traffic, but this information is not examined for Personally Identifiable Information. We may also use Traffic Data to diagnose problems with our server, administer our Site, or display content according to your preferences. Visitor Data and Traffic Data may also be shared with business partners, affiliates, or advertisers on an aggregated and anonymous basis.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 italic underline">Cookies</h3>
                  <p>
                    TechVisionNext may use the standard cookie feature of major browser applications and third-party providers, including Google Analytics features (Remarketing, Google Display Network Impression Reporting, the DoubleClick Campaign Manager Integration and Google Analytics Demographics and Interest Reporting), or employ internally developed cookies and tracking codes, that allow TechVisionNext to store a small piece of data on a visitor&apos;s computer, or any other device a visitor uses to access Online Services, about his or her visit to the Site or use of Applications. TechVisionNext does not capture Personally Identifiable Information in cookies or use cookies to mine Personally Identifiable Information. You can remove persistent cookies by following directions provided in your Internet browser’s “help” directory. If you reject cookies, you may still use our site, but your ability to use some areas of our site, such order forms, will be limited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-800 italic underline">Personal Information</h3>
                  <p>
                    TechVisionNext requires each customer to provide us with personal information (collectively &quot;Personally Identifiable Information&quot;) to access and use TechVisionNext products and services. Personally Identifiable Information is captured only when a visitor accesses Online Services, or speaks on the phone with a TechVisionNext employee, and willingly discloses that information. This disclosure may occur when a visitor registers with an Online Service, engages in transactions, contacts customer service, or participates in contests, promotions, surveys, forums, content submissions, requests for suggestions, or other aspects of services offered by TechVisionNext.
                  </p>
                  <p className="mt-2 font-medium">Personally Identifiable Information includes:</p>
                  <ul className="mt-2 space-y-2 list-none">
                    <li>(i) <strong>&quot;Contact Data&quot;</strong> (such as your name, address, city, state, zip code, phone number, and email address);</li>
                    <li>(ii) <strong>&quot;Financial Data&quot;</strong> (such as your credit card number, expiration date, and verification code or bank account information);</li>
                    <li>(iii) <strong>&quot;Demographic Data&quot;</strong> (such as your zip code and sex); and</li>
                    <li>(iv) <strong>&quot;Legal Data&quot;</strong> (such as your social security number, mortgage information, automobile information, marital information, trade secrets, inventions, and idea submissions and other sensitive information necessary to generate legal documents).</li>
                  </ul>
                  <p className="mt-4">
                    We may collect the information of 3rd party individuals as necessary, such as to ask our customers to indicate beneficiaries of a will, record shareholders of a company, or register authorized contacts to access their TechVisionNext account. TechVisionNext uses this information for the sole purpose of administering its services for our customers and does not use such information for any other reason.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2 italic">
                    <Globe size={18}/> Public Records
                  </h3>
                  <p className="text-sm">
                    Certain personal information becomes public record when documents are filed with the federal or state government, or with a court. For example, a corporation&apos;s name, business address, and registered agent name become public information when its articles of incorporation are filed. A Secretary of State may publish this information on its website or provide this information to third parties for a fee. The Indian Trademark Office publishes the names and addresses of trademark registrants. In some states, fictitious business names, including the name and address of the business owner, must be published in a newspaper. The TechVisionNext Privacy Policy does not cover these or similar third-party actions.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials, Calls, and Usage */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-slate-900">Testimonials and Reviews</h2>
                <p>We display personal testimonials of satisfied customers received through email surveys. We ask for your specific consent as part of the survey. If you wish to update or delete your testimonial, you can contact us at legal@techvisionnext.com. We also display customer reviews. If you provide a review that we display and wish to update or delete it, you can also contact us at legal@techvisionnext.com.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <PhoneCall size={20} className="text-blue-500" /> Calls/Electronic Communications
                </h2>
                <p>In the regular course of our business, TechVisionNext may monitor and record phone conversations or email communications between you and TechVisionNext employees for training and quality assurance purposes. We may receive a confirmation when you open or click on content in an email from us, which helps us make our communications to you more useful and interesting. If you do not wish to receive the email from TechVisionNext, you may unsubscribe from our mailing list on any of the emails we send.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">How Do We Use the Information We Collect and Do We Share the Information We Receive?</h2>
                <p className="mt-4">We use information; we collect from the Online Services to communicate with you, process your orders, facilitate your transactions with our third-party marketing partners, and inform you of offers and discounts. For example, you may receive a welcome email that confirms your username and password, and later receive communications responding to your inquiries, providing services you request, and managing your account. We occasionally send service-related announcements, for example, to alert you if we need to temporarily suspend the Site for maintenance.</p>
              </div>
            </div>

            {/* Opting Out */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Trash2 className="text-blue-500" size={18} /> Opting Out
                </h3>
                <p className="text-sm">
                  We send promotional emails and newsletters from time to time to users who have registered on the site and to those who have opted in to receive such emails. Generally, you may not opt-out of service-related or transactional communications, which are not promotional. If you do not wish to receive service-related communications, you may terminate your account by contacting Customer Care at legal@techvisionnext.com. However, you can opt-out of promotional communications by following the unsubscribe instructions in any communication or by emailing us.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <h3 className="font-bold text-slate-900 flex items-center gap-2 mb-3">
                  <Info className="text-blue-500" size={18} /> Choices
                </h3>
                <p className="text-sm">
                  You may choose not to provide TechVisionNext with Personally Identifiable Information, or you may turn off cookies in your browser by changing its settings. If you make these decisions, you may continue to use the Online Services and browse its pages. However, TechVisionNext cannot process orders without Personally Identifiable Information.
                </p>
              </div>
            </div>

            {/* Sharing with Third Parties */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-2">We share customer information with third parties only as follows:</h2>
              <div className="mt-6 space-y-4">
                <p><strong>Order Processing:</strong> TechVisionNext, sometimes with the assistance of a third party or TechVisionNext subsidiary, may use your Personally Identifiable Information to process your payment through merchant account services, and to generate the products and services you order. Your Contact Data may be used to follow up with you on transactions you initiate through Online Services, respond to inquiries made through Online Services, inform you of changes to Online Services, and send you additional information about TechVisionNext and its products and services.</p>
                <p><strong>Registered Agent Requests:</strong> If you designate a person or company other than TechVisionNext to serve as the registered agent for your business entity, TechVisionNext may provide your name and contact information to that party, if the designee requests.</p>
                <p><strong>Third Party Marketing:</strong> Unless specifically authorized by you, we do not provide Personally Identifiable Information to third parties for marketing purposes. If you express interest in a third party offer or purchase a package that includes a third party offer, we may provide your Personally Identifiable Information to that third party solely in connection with the offer you have selected.</p>
                <p><strong>Required by Law:</strong> We may also disclose your personal information: as required by law, such as in response to a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a legal request.</p>
                <p><strong>Visitor Demographics:</strong> Contact Data and Traffic Data are used to gather general statistics about our customers and visitors. We may use Demographic Data to generate collective information about our users, but not in a way that identifies any user specifically.</p>
                <p><strong>Service Providers:</strong> We may share your Personally Identifiable Information with companies that provide support services to us (such as notary services), or help us market our products and services. These companies are not authorized to use the information we share with them for any other purpose.</p>
                <p><strong>Partner and Affiliate Tracking:</strong> Our partners and affiliates, including Google Analytics, may use cookies to collect non-personally identifiable information about your activities on this and other websites to provide you targeted advertising based upon your interests. Together with our partners and affiliates, we may use these cookies and web beacons to report how your ad impressions, other uses of ad services, and interactions with these ad impressions and ad services are related to your visits to our site.</p>
                <p><strong>Other Transfers:</strong> We may share Personally Identifiable Information and other data with businesses controlling, controlled by, or under common control with TechVisionNext. If TechVisionNext is merged, acquired, or sold, or if some or all of our assets or equity are transferred, we may disclose or transfer Personally Identifiable Information and other data in connection with the associated transactions.</p>
              </div>
            </div>

            {/* Bankruptcy */}
            <div className="bg-red-50 border border-red-100 p-6 rounded-2xl">
              <h2 className="text-xl font-bold text-red-900 flex items-center gap-2">
                <AlertTriangle size={20} /> Bankruptcy
              </h2>
              <p className="mt-2 text-red-800 text-sm italic">
                In the event of a TechVisionNext bankruptcy, insolvency, reorganization, receivership, or assignment for the benefit of creditors, or the application of laws or equitable principles affecting creditors&apos; rights generally, we may not be able to control how your personal information is treated, transferred, or used. If such an event occurs, your Personally Identifiable Information may be treated like any other TechVisionNext asset and sold, transferred, or shared with third parties, or used in ways not contemplated or permitted under this Privacy Policy. In this case, you will be notified via email and/or a prominent notice on our site of any change in ownership or uses of your personal information, as well as any choices you may have regarding your personal information.
              </p>
            </div>

            {/* Links and Social Media */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Third-Party Websites</h3>
                <p className="text-sm mt-2">TechVisionNext may maintain links to other websites and other websites may maintain links to the Online Services. This Privacy Policy applies only to TechVisionNext.com and not to other websites. TechVisionNext is not responsible for the privacy practices or content of those sites. It is your responsibility to review the privacy policies of non-TechVisionNext websites.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">Social Media Widgets</h3>
                <p className="text-sm mt-2">Our website includes social media features, such as the Facebook “like” button and widgets. These features may collect your IP address and may set a cookie. Your interactions with these features are governed by the privacy policy of the company providing it.</p>
              </div>
            </div>

            {/* Account Access */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3 border-b pb-2">
                <UserCheck className="text-blue-500" /> Accessing and Changing Your Account
              </h2>
              <div className="mt-4 space-y-4">
                <p><strong>User and Authorized Contact Access to Order Information:</strong> TechVisionNext will give you, or anyone listed as an authorized contact for your account, information about your order. This may include information about the nature and status of your order, information you provided to process your order, payment information, and contact information. If you want someone to have access to your order, you must list them as an authorized contact or they may not obtain information. You can confirm who is listed as an authorized contact for your account, add new authorized contacts, or remove authorized contacts by clicking first on &quot;My Account&quot;, and then on &quot;Account Information&quot;.</p>
                <p><strong>Data Retention:</strong> At a minimum, we will retain your information for as long as needed to provide you services, and as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. TechVisionNext may maintain some or all of this data in its archives even after it has been removed from the Site.</p>
              </div>
            </div>

            {/* Security and Disclaimer */}
            <div className="border-t pt-10">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                <Lock className="text-blue-500" /> How Secure Is the Personal Information We Collect?
              </h2>
              <p className="mt-4">
                <strong>Our Commitment to Data Security:</strong> We strive to make certain that our servers and connections incorporate the encryption and security devices. We have implemented physical, electronic, and managerial procedures to safeguard and secure the information we collect. Credit card and personal information are transmitted by secure servers (SSL). Documents are delivered to you via UPS or similar overnight delivery services, or email. 
              </p>
              <p className="mt-2 text-slate-800 font-semibold italic">
                Unfortunately, no data transmission is guaranteed to be 100% secure, and we, therefore, cannot guarantee the security of information you transmit to or from the Site, Applications, or through the use of our services, and you provide this information at your own risk.
              </p>
              <div className="mt-6 p-6 bg-slate-900 text-white rounded-xl">
                <h4 className="flex items-center gap-2 text-red-400 font-bold mb-2 uppercase tracking-wide">
                  <ShieldAlert size={20}/> Legal Disclaimer
                </h4>
                <p className="text-sm font-medium">
                  ACCORDINGLY, WE DISCLAIM LIABILITY FOR THE THEFT, LOSS, OR INTERCEPTION OF, OR UNAUTHORIZED ACCESS OR DAMAGE TO, YOUR DATA OR COMMUNICATIONS BY USING THE SITE, APPLICATIONS, AND OUR SERVICES. YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND ASSUME THESE RISKS.
                </p>
              </div>
            </div>

            {/* Closing Clauses */}
            <div className="space-y-6">
              <p><strong>Enforcement:</strong> We periodically review this Privacy Policy and our compliance with it to verify that both are accurate. We encourage you to contact us with any concerns, and we will investigate and attempt to resolve any complaints and disputes about our privacy practices.</p>
              <p><strong>Changes to this Policy:</strong> We may update this privacy policy to reflect changes to our information practices. If we make any material changes a notice will be posted on this page along with the updated Privacy Policy before the change becoming effective. We encourage you periodically review this page for the latest information on our privacy practices.</p>
            </div>

            {/* Contact Section */}
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-3xl">
              <h2 className="text-2xl font-bold text-blue-900">Contact Us</h2>
              <p className="text-blue-800 mt-2">
                If you have any questions regarding our Privacy Policy, please contact us. IF YOU BELIEVE YOUR PRIVACY HAS BEEN BREACHED THROUGH USE OF OUR WEBSITE, APPLICATIONS, OR OTHER SERVICES, PLEASE CONTACT US IMMEDIATELY:
              </p>
              <div className="mt-4 space-y-1 text-blue-900 font-medium">
                <p>Email: legal@techvisionnext.com</p>
                <p>Location: Muzaffarpur, Bihar, India</p>
              </div>
            </div>

            {/* Final Sticky Disclaimer */}
            <div className="text-xs text-slate-400 uppercase border-t pt-4">
              DISCLAIMER: WE DISCLAIM LIABILITY FOR THE THEFT, LOSS, OR INTERCEPTION OF, OR UNAUTHORIZED ACCESS OR DAMAGE TO, YOUR DATA OR COMMUNICATIONS BY USING THE SITE, APPLICATIONS, AND OUR SERVICES. YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND ASSUME THESE RISKS.
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}