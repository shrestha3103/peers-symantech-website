import { Link } from "react-router-dom";

export default function ProductsPreview() {
  return (
    <section
      id="products"
      className="min-h-screen bg-(--offwhite) flex items-center py-27"
    >
      <div className="max-w-6xl w-full mx-auto px-6 flex flex-col justify-between min-h-[80vh]">
        
        {/* Top */}
        <div>
          <h2 className="text-3xl font-semibold text-(--maroon)">
            Products
          </h2>

          <p className="text-lg mt-6 max-w-xl text-(--maroon)">
            Explore our range of enterprise-grade solutions designed for
            scalability, security, and performance.
          </p>
        </div>

        {/* Middle – Highlight Card */}
        <div className="mt-16">
          <div className="bg-white border border-(--maroon)/20 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 max-w-3xl">
            <p className="text-xl text-(--maroon) leading-relaxed">
              All of our software solutions are
              <span className="font-semibold"> cloud-enabled</span>,
              <span className="font-semibold"> cross-platform</span>, and fully
              optimized for the <span className="font-semibold">SaaS model</span>.
            </p>
          </div>
        </div>

        {/* Bottom – CTA */}
        <div className="mt-20">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-3 bg-(--maroon) text-white rounded-lg font-medium
                       hover:bg-(--maroon)/90 hover:scale-[1.02]
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
