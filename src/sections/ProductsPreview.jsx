import { Link } from "react-router-dom";

export default function ProductsPreview() {
  return (
    <section className="py-27 bg-(--offwhite)">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-(--maroon) mb-6">
          Products
        </h2>
        <p className="mb-6 text-gray-700">
          Explore our range of enterprise-grade solutions.
        </p>
        <Link
          to="/products"
          className="inline-block px-6 py-3 bg-(--maroon) text-white rounded "
        >View All Products
          
        </Link>
      </div>
    </section>
  );
}
