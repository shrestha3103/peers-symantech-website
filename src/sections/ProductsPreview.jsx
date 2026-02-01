import { Link } from "react-router-dom";

export default function ProductsPreview() {
  return (
    <section id="products" className="py-27 bg-(--offwhite)">
      <div className="max-w-6xl min-h-screen mx-auto px-6">
        <h2 className="text-2xl font-semibold text-(--maroon) mb-6">
          Products
        </h2>
        <p className="text-lg mt-16 mb-6 text-(--maroon)">
          Explore our range of enterprise-grade solutions.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-3 bg-(--maroon) text-white rounded "
        >View All Products
          
        </Link>
        <div className="text-xl text-(--maroon) mt-20">
          All of our Software are Cloud enabled, Cross-Platform and ready to be used in SaaS Model.
        </div>
      </div>
    </section>
  );
}
