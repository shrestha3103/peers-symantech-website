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



export default function Clientele() {
  return (
    <section id="clientele" className="py-27 bg-(--offwhite)">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-(--maroon) mb-4">Our Clients</h2>
        <div className="flex flex-wrap gap-5">
          <img src={R} alt="" className="h-15 w-14 my-5" />
          <img src={ntpcimages} alt="" className="h-15 w-22 my-5" />
          <img src={bhelimages} alt="" className="h-15 w-22 my-5" />
          <img src={grse} alt="" className="h-15 w-18 my-5" />
          <img src={vecc} alt="" className="h-15 w-28 my-5" />
          <img src={iitkgp} alt="" className="h-15 w-15 my-5" />
          <img src={ti} alt="" className="h-15 w-15 my-5" />
          <img src={webel} alt="" className="h-15 w-25 my-5" />
          <img src={bcci} alt="" className="h-15 w-25 my-5" />
          <img src={NASSCOM} alt="" className="h-15 w-35 my-5" />
          <img src={BESU} alt="" className="h-15 w-15 my-5" />
          <img src={birlahigh2} alt="" className="h-15 w-33 my-5" />
          <img src={cmcimages} alt="" className="h-15 w-25 my-5" />
          <img src={dae} alt="" className="h-15 w-18 my-5" />
          <img src={etntlogo} alt="" className="h-15 w-15 my-5" />
          <img src={exide} alt="" className="h-15 w-28 my-5" />
          <img src={IEEE} alt="" className="h-15 w-25 my-5" />
          <img src={keltronimages} alt="" className="h-15 w-35 my-5" />
          <img src={lechler} alt="" className="h-15 w-25 my-5" />
          <img src={sbiimages} alt="" className="h-15 w-45 my-5" />
        </div>
      </div>
    </section>
  );
}