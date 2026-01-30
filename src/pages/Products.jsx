const products = [
  {
    name: "Aayu",
    desc: "Integrated Hospital ERP with built in EMR (Electronic Medical Record)",
  },
  {
    name: "iMediko",
    desc: "Prescription Software with built in EMR.",
  },
  {
    name: "iClinic",
    desc: "Clinical Decision Support System (CDSS) which Screens the risk disease wise and gives preliminary diagnosis based on symptoms.",
  },
  {
    name: "Snake Bite Game",
    desc: "Meant for Medical Students and people practicing in allied service. This is a Quiz game which follows and teaches the Clinical protocol, that is to be followed in case of Snake bite",
  },
];

export default function Products() {
  return (
    <section className="min-h-screen pt-28 pb-24 bg-(--offwhite)">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-(--maroon) mb-10">
          Our Products
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="border rounded-lg p-6 hover:shadow-lg transition"
            >
              <h3 className="font-semibold mb-2">{p.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {p.desc}
              </p>
              <button className="text-(--maroon) font-medium hover:underline">
                More Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
