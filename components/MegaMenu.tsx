export default function MegaMenu() {
  return (
    <div className="absolute left-0 top-full mt-2 bg-white text-black shadow-xl w-[700px] rounded-md p-6 z-50">
      <div className="grid grid-cols-2 gap-6">

        {/* Left Side */}
        <div className="space-y-4 border-r pr-6">
          <p className="text-orange-500 font-semibold">
            Business Registrations
          </p>
          <p>Licenses & Certification</p>
        </div>

        {/* Right Side */}
        <div className="space-y-2 text-sm">
          <p>Limited Liability Partnership (LLP)</p>
          <p>One Person Company (OPC)</p>
          <p>Farmer Producer Companies (FPCs)</p>
          <p>Section 8 NGO Registration</p>
          <p>NBFC Registration</p>
          <p>Private Limited Company</p>
          <p>Public Limited Company</p>
        </div>
      </div>
    </div>
  );
}