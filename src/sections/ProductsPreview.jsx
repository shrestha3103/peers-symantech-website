import { Link } from "react-router-dom";

export default function ProductsPreview() {
  return (
    <section
      id="products"
      className="min-h-screen bg-(--offwhite) flex items-center py-28"
    >
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col justify-between min-h-[80vh]">

        {/* Top Section */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-(--maroon)">
            Products
          </h2>

          <p className="text-lg text-(--maroon) max-w-3xl">
            Explore our range of enterprise-grade software solutions across healthcare,
            security, and academic ecosystems — engineered for scalability, compliance,
            and long-term performance.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

          {/* Medical Informatics */}
          <div className="group bg-white border border-(--maroon)/20 rounded-xl p-8
                          hover:-translate-y-2 hover:shadow-xl
                          transition-all duration-300
                          cursor-pointer relative overflow-hidden">

            <span className="absolute top-0 left-0 h-1 w-0 bg-(--maroon)
                             group-hover:w-full transition-all duration-300" />

            <h3 className="text-xl font-semibold text-(--maroon) mb-4">
              Medical Informatics
            </h3>

            <ul className="space-y-2 text-lg text-(--maroon)/90">
              <li>• Aayu</li>
              <li>• iMediko</li>
              <li>• iCliniq</li>
              <li>• Snake Bite Game</li>
            </ul>

            <p className="mt-5 text-md text-(--maroon)/70">
              Intelligent digital healthcare platforms built for hospitals, clinics,
              and medical education.
            </p>
          </div>

          {/* Access Control & Attendance */}
          <div className="group bg-white border border-(--maroon)/20 rounded-xl p-8
                          hover:-translate-y-2 hover:shadow-xl
                          transition-all duration-300
                          cursor-pointer relative overflow-hidden">

            <span className="absolute top-0 left-0 h-1 w-0 bg-(--maroon)
                             group-hover:w-full transition-all duration-300" />

            <h3 className="text-xl font-semibold text-(--maroon) mb-4">
              Access Control & Attendance Management
            </h3>

            <ul className="space-y-2 text-lg text-(--maroon)/90">
              <li>• Protect Plus</li>
              <li>• Premise Plus</li>
            </ul>

            <p className="mt-5 text-md text-(--maroon)/70">
              Secure identity, access, and attendance management systems for
              enterprises and institutions.
            </p>
          </div>

          {/* Academy & Conference */}
          <div className="group bg-white border border-(--maroon)/20 rounded-xl p-8
                          hover:-translate-y-2 hover:shadow-xl
                          transition-all duration-300
                          cursor-pointer relative overflow-hidden">

            <span className="absolute top-0 left-0 h-1 w-0 bg-(--maroon)
                             group-hover:w-full transition-all duration-300" />

            <h3 className="text-xl font-semibold text-(--maroon) mb-4">
              Academy & Conference Management
            </h3>

            <ul className="space-y-2 text-lg text-(--maroon)/90">
              <li>• Athena</li>
              <li>• Conference Management</li>
            </ul>

            <p className="mt-5 text-md text-(--maroon)/70">
              End-to-end academic administration and conference lifecycle
              management platforms.
            </p>
          </div>

        </div>

        {/* Highlight Card */}
        <div className="mt-10">
          <div className="bg-white border border-(--maroon)/20 rounded-xl p-8 max-w-3xl shadow-sm">
            <p className="text-lg text-(--maroon) leading-relaxed">
              All of our software solutions are
              <span className="font-semibold"> cloud-enabled</span>,
              <span className="font-semibold"> cross-platform</span>, and
              architected for the <span className="font-semibold"> SaaS model</span>,
              ensuring reliability, security, and seamless scalability.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-9 py-3
                       bg-(--maroon) text-white rounded-lg font-medium
                       hover:bg-(--maroon)/90 hover:scale-[1.03]
                       transition-all duration-300 shadow-md"
          >
            View All Products
            <span className="text-lg">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
