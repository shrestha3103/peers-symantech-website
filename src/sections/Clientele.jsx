import R from "../assets/clients/R.jpg";
import ntpcimages from "../assets/clients/ntpcimages.png";
import bhelimages from "../assets/clients/bhelimages.jpg";
import grse from "../assets/clients/grse.jpg";
import vecc from "../assets/clients/vecc.jpg";
import iitkgp from "../assets/clients/iitkgp.png";
import ti from "../assets/clients/ti.jpg";
import webel from "../assets/clients/webel.jpg";
import bcci from "../assets/clients/bcci.jpg";
import NASSCOM from "../assets/clients/NASSCOM.png";
import BESU from "../assets/clients/BESU.jpg";
import birlahigh2 from "../assets/clients/birlahigh2.jpg";
import cmcimages from "../assets/clients/cmcimages.jpg";
import dae from "../assets/clients/dae.jpg";
import etntlogo from "../assets/clients/etntlogo.png";
import exide from "../assets/clients/exide.png";
import IEEE from "../assets/clients/IEEE.png";
import keltronimages from "../assets/clients/keltronimages.png";
import lechler from "../assets/clients/lechler.png";
import sbiimages from "../assets/clients/sbiimages.jpg";

const clients = [
  { img: R, name: "Indian Oil Corporation Limited" },
  { img: ntpcimages, name: "NTPC Limited" },
  { img: bhelimages, name: "Bharat Heavy Electricals Limited" },
  { img: grse, name: "Garden Reach Shipbuilders & Engineers Limited" },
  { img: vecc, name: "Variable Energy Cyclotron Centre" },
  { img: iitkgp, name: "IIT Kharagpur" },
  { img: ti, name: "Techno India Group" },
  { img: webel, name: "Webel" },
  { img: bcci, name: "Bengal Chamber of Commerce & Industry" },
  { img: NASSCOM, name: "NASSCOM" },
  { img: BESU, name: "Bengal Engineering and Science Institute (IIEST Shibpur)" },
  { img: birlahigh2, name: "Birla High School" },
  { img: cmcimages, name: "CMC Limited (TATA Enterprise)" },
  { img: dae, name: "Department of Atomic Energy" },
  { img: etntlogo, name: "ET&T" },
  { img: exide, name: "Exide Industries" },
  { img: IEEE, name: "IEEE" },
  { img: keltronimages, name: "Keltron" },
  { img: lechler, name: "Lechler" },
  { img: sbiimages, name: "State Bank of India" },
];

export default function Clientele() {
  return (
    <section id="clientele" className="py-27 bg-(--offwhite)">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-(--maroon) mb-10">
          Our Clients
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center
                        bg-white rounded-xl p-5
                        shadow-sm hover:shadow-lg
                        transition-all duration-300 ease-out
                        hover:-translate-y-1"
            >
              <img
                src={client.img}
                alt={client.name}
                className="max-h-14 group-hover:grayscale-0
                          transition duration-300"
              />

              {/* Tooltip */}
              <div
                className="absolute -bottom-9 left-1/2 -translate-x-1/2
                          opacity-0 group-hover:opacity-100
                          scale-95 group-hover:scale-100
                          transition-all duration-300
                          bg-(--maroon) text-white text-xs px-3 py-1
                          rounded-md my-2 whitespace-nowrap shadow-md"
              >
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
