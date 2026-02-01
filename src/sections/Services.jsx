export default function Services() {
  const services = [
    {
      title: "Health: Medical Informatics",
      desc: "Advanced healthcare IT solutions that enable efficient data management, clinical decision support, and seamless integration of medical systems."
    },
    {
      title: "Hospital ERP",
      desc: "End-to-end hospital management systems covering patient records, billing, inventory, operations, and administrative workflows."
    },
    {
      title: "Security & Access Control",
      desc: "Robust access control and security frameworks ensuring data protection, compliance, and controlled system access across organizations."
    },
    {
      title: "Attendance Management",
      desc: "Automated attendance tracking solutions with real-time monitoring, reporting, and integration for workforce and institutional management."
    },
    {
      title: "Educational Academy Management",
      desc: "Comprehensive digital platforms for managing admissions, academics, examinations, faculty, and student performance efficiently."
    },
    {
      title: "Conference Management",
      desc: "Smart conference and event management systems enabling registration, scheduling, communication, and attendee engagement."
    }
  ];


  return (
    <section
      id="services"
      className="min-h-screen bg-(--offwhite) flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-4xl font-semibold text-(--maroon) mb-4">
            Our Services
          </h2>
          <p className="text-lg text-(--maroon)/80 leading-relaxed">
            We have provided the best IT & ITeS services across multiple domains,
            delivering secure, scalable, and future-ready solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white rounded-xl border border-(--maroon)/10 p-6
                              hover:-translate-y-2 transition-all duration-300
                              hover:shadow-xl cursor-pointer relative overflow-hidden">

              <span className="absolute top-0 left-0 h-1 w-0 bg-(--maroon)
                     group-hover:w-full transition-all duration-300" />

              <h3 className="text-lg font-medium text-(--maroon)">
                {service.title}
              </h3>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
