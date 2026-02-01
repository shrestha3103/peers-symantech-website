import ACIR from "../assets/associations/ACIR.png";
import americaflag from "../assets/associations/americaflag.jpg"
import americancenter2 from "../assets/associations/americancenter2.png"
import nexus from "../assets/associations/nexus.jpg"
import texasglobal from "../assets/associations/texasglobal.jpg"
import universityoftexas from "../assets/associations/universityoftexas.jpg"
import USA from "../assets/associations/USA.jpg"

export default function About() {
  return (
    <section id="about" className="py-27 bg-(--offwhite)">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-(--maroon) mb-25">About Us</h2>
        <div className="flex flex-col gap-20 text-(--maroon)">

          <div className="">
            Peers Symantech is a multi-disciplinary, Technology driven and customer focused organization into the business of Software/App development and IT Enabled Services with leading edge engineering solution.
          </div>
          <div>
            We have worked in various verticals in Software Development. However, the specialization that put us stand apart is Medical Informatics. We have number of software developed in this Vertical. Software, we have developed in this field has helped Medical and allied professionals access and utilize various advanced techniques in Medical Informatics like Electronic Medical Record (EMR) and Clinical Decision Support System(CDSS).
          </div>
          <div>
            We have received award from:
            <div className="flex">
              <img src={texasglobal} alt="" className="w-55 h-15 m-5" />
              <img src={universityoftexas} alt="" className="w-15 h-15 m-5" />
            </div>
          </div>
          <div>
            We are incubated in Nexus, US Embassy, New Delhi.
            <div className="flex">
              <img src={ACIR} alt="" className="w-12 h-15 m-5" />
              <img src={americaflag} alt="" className="w-15 h-15 m-5" />
              <img src={americancenter2} alt="" className="w-14 h-15 m-5" />
              <img src={nexus} alt="" className="w-15 h-15 m-5" />
              <img src={USA} alt="" className="w-15 h-15 m-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
