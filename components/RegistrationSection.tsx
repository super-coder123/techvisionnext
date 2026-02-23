const services = [
  "Startup Registration",
  "Trademark Registration",
  "GST Registration",
  "ISO Certification",
  "NGO Registration",
  "NBFC Registration",
];

export default function RegistrationSection() {
  return (
    <section className="px-16 py-20">
      <h2 className="text-4xl font-bold mb-12">
        Registration & Licenses
      </h2>

      <div className="grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="border p-8 rounded-lg hover:shadow-lg transition cursor-pointer"
          >
            <p className="font-semibold text-lg">{service}</p>
          </div>
        ))}
      </div>
    </section>
  );
}