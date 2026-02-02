import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-27 bg-(--offwhite)">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl font-semibold text-(--maroon) mb-10">
          Contact
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-start">

          {/* LEFT: Contact Info */}
          <div className="space-y-10">

            {/* Address */}
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-teal-700 mt-1" />
              <p className="text-lg text-(--maroon) leading-relaxed">
                6A Jatin Das Road,<br />
                Kolkata - 700029,<br />
                West Bengal.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-2xl text-teal-700 mt-1" />
              <div className="text-lg text-(--maroon)">
                <p>+91 9748152945</p>
                <p>+91 9432321280</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-teal-700 mt-1" />
              <div className="text-lg text-(--maroon)">
                <p>info@peerssymantech.com</p>
                <p>sales@peerssymantech.com</p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded"
              >
                <FaLinkedinIn />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919748152945?text=Hello%20Peers%20Symantech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                <FaWhatsapp className="text-xl" />
              </a>
            </div>

          </div>

          {/* RIGHT: Google Map */}
          <div className="w-full h-105 border">
            <iframe
              title="Peers Symantech Location"
              src="https://www.google.com/maps?q=6A%20Jatindas%20Rd,%20Lake%20Market,%20Kolkata,%20West%20Bengal%20700029&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
