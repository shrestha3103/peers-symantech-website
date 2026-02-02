import { useState } from "react";

// Preview Data

const verticals = [
  {
    title: "Medical Informatics",
    products: [
      {
        name: "Aayu",
        desc: "Integrated Hospital ERP with built in EMR (Electronic Medical Record).",
      },
      {
        name: "iMediko",
        desc: "Prescription Software with built in EMR.",
      },
      {
        name: "iClinic",
        desc:
          "Clinical Decision Support System (CDSS) which screens risk disease-wise and gives preliminary diagnosis based on symptoms.",
      },
      {
        name: "Snake Bite Game",
        desc:
          "Quiz-based training tool for medical students and allied professionals to learn clinical protocol for snake bite cases.",
      },
    ],
  },
  {
    title: "Access Control & Attendance Management",
    products: [
      {
        name: "Protect Plus",
        desc:
          "Visitor management system that captures visitor photo, prints pass, and enables gate-level video conferencing.",
      },
      {
        name: "Premise Plus",
        desc:
          "Contract workforce access & attendance management with controlled permissions and entry/exit tracking.",
      },
    ],
  },
  {
    title: "Academy & Conference Management",
    products: [
      {
        name: "Athena",
        desc:
          "Educational academy management platform covering academics, accounting, and finance.",
      },
      {
        name: "Conference Management",
        desc:
          "End-to-end conference handling including committee formation, reviewer invitations, and paper management.",
      },
    ],
  },
];

// Internal Details

const productDetails = {
  Aayu: {
    fullDesc:
      "Aayu is a comprehensive Hospital ERP solution with an integrated Electronic Medical Record (EMR) system. It streamlines end-to-end hospital operations including patient registration, OPD/IPD management, billing, laboratory integration, pharmacy workflows, inventory control, and clinical documentation. Aayu enables healthcare institutions to improve operational efficiency, maintain accurate patient records, and deliver better patient care through a unified digital platform.",
    // demoVideo: "https://www.youtube.com/embed/YOUR_AAYU_VIDEO_ID",
    demoLink: "https://example.com/aayu-demo",
  },

  iMediko: {
    fullDesc:
      "iMediko is a lightweight yet powerful prescription and EMR software designed for clinics and individual practitioners. It allows doctors to generate digital prescriptions, maintain longitudinal patient records, track medical history, and manage follow-ups efficiently. The system reduces paperwork, improves accuracy, and supports faster clinical decision-making in day-to-day practice.",
    demoLink: "https://example.com/imediko-demo",
  },

  iClinic: {
    fullDesc:
      "iClinic is a Clinical Decision Support System (CDSS) that assists healthcare professionals in early risk screening and preliminary diagnosis. By analyzing patient symptoms and clinical parameters, iClinic provides disease-wise risk assessment and diagnostic insights. It acts as a support tool for clinicians, helping improve diagnostic accuracy and early intervention outcomes.",
    demoLink: "https://example.com/iclinic-demo",
  },

  "Snake Bite Game": {
    fullDesc:
      "Snake Bite Game is an interactive, scenario-based training application developed for medical students, interns, and allied healthcare professionals. The game follows standard clinical protocols and simulates real-life snake bite management cases. Through quizzes and decision-making challenges, it helps users learn correct emergency response, treatment pathways, and protocol adherence in a practical and engaging manner.",
    // demoVideo: "https://www.youtube.com/embed/YOUR_SNAKE_BITE_VIDEO_ID",
    demoLink: "https://example.com/snake-bite-game-demo",
  },

  "Protect Plus": {
    fullDesc:
      "Protect Plus is a smart visitor management and access control system designed to enhance organizational security. It captures visitor photographs at entry points, stores visitor details, prints photo-enabled visitor passes, and enables real-time video conferencing with the concerned personnel at the gate. The solution improves visitor traceability, security compliance, and entry approval efficiency.",
    demoLink: "https://example.com/protect-plus-demo",
  },

  "Premise Plus": {
    fullDesc:
      "Premise Plus is an advanced access control and attendance management solution tailored for contractual and third-party personnel. It manages permissions, entry and exit records, and attendance tracking for non-permanent staff. The system helps organizations maintain security, ensure compliance, and monitor workforce movement effectively.",
    demoLink: "https://example.com/premise-plus-demo",
  },

  Athena: {
    fullDesc:
      "Athena is a complete Educational Academy Management System that manages academic operations along with accounting and finance. It covers admissions, student records, course management, faculty coordination, fee management, and financial reporting. Athena enables educational institutions to digitize processes and gain better operational visibility.",
    demoLink: "https://example.com/athena-demo",
  },

  "Conference Management": {
    fullDesc:
      "Conference Management software handles all aspects of organizing academic and professional conferences. It supports committee formation, automated email communication, reviewer invitation management, paper submission workflows, and review processes. The platform reduces manual effort and ensures smooth coordination throughout the conference lifecycle.",
    demoLink: "https://example.com/conference-management-demo",
  },
};



// Modal for Details

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const details = productDetails[product.name];

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 animate-[scaleIn_0.25s_ease-out] max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-(--maroon)">
            {product.name}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black"
          >
            ✕
          </button>
        </div>

        {/* FULL DESCRIPTION */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {details?.fullDesc ||
            "Detailed product information will be added here soon. Please contact us for a demo or more details."}
        </p>

        {/* DEMO VIDEO */}
        {details?.demoVideo && (
          <div className="mb-6">
            <h4 className="font-medium mb-2 text-(--maroon)">
              Product Demo
            </h4>
            <div className="aspect-video w-full rounded overflow-hidden border">
              <iframe
                src={details.demoVideo}
                title={`${product.name} Demo`}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* DEMO LINK */}
        {details?.demoLink && (
          <a
            href={details.demoLink}
            target="_blank"
            rel="noreferrer"
            className="inline-block mb-6 text-(--maroon) font-medium mr-5 px-4 py-2 border border-(--maroon) rounded hover:bg-(--maroon) hover:text-white transition"
          >
            View Live Demo →
          </a>
        )}

        {/* <button
          onClick={onClose}
          className="px-4 py-2 bg-(--maroon) text-white rounded hover:opacity-90"
        >
          Close
        </button> */}
      </div>
    </div>
  );
};


// Page

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBuyNow = (productName) => {
    const message = `I want to buy ${productName} product from you.`;
    const url = `https://wa.me/919748152945?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="min-h-screen pt-28 pb-24 bg-(--offwhite)">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-semibold text-(--maroon) mb-14">
          Our Products
        </h1>

        {verticals.map((vertical, vIndex) => (
          <div key={vIndex} className="mb-16">
            <h2 className="text-2xl font-semibold text-(--maroon) mb-8 border-b pb-2">
              {vertical.title}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {vertical.products.map((product, index) => (
                <div
                  key={index}
                  className="group border border-(--maroon)/50 rounded-xl p-6 bg-white
             relative overflow-hidden cursor-pointer
             transition-all duration-300
             hover:-translate-y-2 hover:shadow-xl
             animate-[fadeIn_0.6s_ease-in-out]"
                >
                  <span
                    className="absolute top-0 left-0 h-1 w-0 bg-(--maroon)
               group-hover:w-full transition-all duration-300"
                  />
                  <h3 className="font-semibold mb-2">
                    {product.name}
                  </h3>

                  {/* PREVIEW DESCRIPTION */}
                  <p className="text-sm text-gray-600 mb-6">
                    {product.desc}
                  </p>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="px-4 py-2 border border-(--maroon) text-(--maroon) rounded hover:bg-(--maroon) hover:text-white transition"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => handleBuyNow(product.name)}
                      className="px-4 py-2 bg-(--maroon) text-white rounded hover:opacity-90 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
