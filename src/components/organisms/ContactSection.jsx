import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "../molecules/ContactForm";

const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebook,
    url: "https://facebook.com",
    bgColor: "bg-blue-600",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com",
    bgColor: "bg-pink-500",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com",
    bgColor: "bg-blue-700",
  },
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    url: "https://wa.me",
    bgColor: "bg-green-500",
  },
];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-green-50/30 to-white py-20">
      {/* Decorative elements */}
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-green-100/20 blur-3xl" />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-green-100/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              <span className="mr-2">✈</span> CONTÁCTANOS
            </div>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
              Estamos aquí para
              <span className="text-green-600"> ayudarte</span>
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              ¿Tienes alguna consulta, sugerencia o proyecto en mente?
              Completa el formulario y nos pondremos en contacto contigo
              lo antes posible.
            </p>
          </div>

          <div className="relative hidden lg:block">
            <svg
              className="mx-auto h-96 w-96"
              viewBox="0 0 400 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Mail illustration */}
              <defs>
                <linearGradient
                  id="mailGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" style={{ stopColor: "#10b981", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#059669", stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Main envelope */}
              <rect x="80" y="120" width="240" height="160" rx="20" fill="url(#mailGradient)" />
              <path
                d="M 80 120 L 200 200 L 320 120"
                fill="none"
                stroke="white"
                strokeWidth="4"
              />
              <path d="M 80 120 L 200 180 L 320 120" fill="white" opacity="0.3" />

              {/* Phone icon */}
              <circle cx="340" cy="280" r="45" fill="#10b981" />
              <text
                x="340"
                y="295"
                textAnchor="middle"
                fontSize="32"
                fill="white"
              >
                ☎
              </text>

              {/* Chat bubble */}
              <ellipse cx="280" cy="100" rx="50" ry="45" fill="#10b981" />
              <circle cx="300" cy="85" r="4" fill="white" />
              <circle cx="288" cy="85" r="4" fill="white" />
              <circle cx="276" cy="85" r="4" fill="white" />
              <path d="M 240 140 L 220 160 L 240 150" fill="#10b981" />

              {/* Decorative dots */}
              <circle cx="110" cy="90" r="6" fill="#10b981" opacity="0.5" />
              <circle cx="340" cy="180" r="5" fill="#10b981" opacity="0.3" />
              <circle cx="140" cy="350" r="7" fill="#10b981" opacity="0.4" />
            </svg>
          </div>
        </div>

        {/* Contact Info + Form + Map Grid */}
        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="rounded-3xl bg-white p-8 shadow-lg">
            <h3 className="mb-8 text-xl font-bold text-green-700">
              Información de contacto
            </h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FaMapMarkerAlt className="text-lg text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Dirección</p>
                  <p className="text-sm text-gray-600">Jr. Amazonas 123, Calendín</p>
                  <p className="text-sm text-gray-600">Cajamarca, Perú</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FaPhone className="text-lg text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Teléfono</p>
                  <p className="text-sm text-gray-600">+51 987 654 321</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FaEnvelope className="text-lg text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Correo electrónico</p>
                  <p className="text-sm text-gray-600">info@fixora.com</p>
                </div>
              </div>

              {/* Schedule */}
              <div className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100">
                  <FaClock className="text-lg text-green-700" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Horario de atención</p>
                  <p className="text-sm text-gray-600">Lunes a Viernes</p>
                  <p className="text-sm text-gray-600">8:00 a.m. - 6:00 p.m.</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 border-t pt-8">
              <p className="mb-4 font-semibold text-gray-900">Síguenos en redes sociales</p>
              <div className="flex gap-4">
                {socialLinks.map(({ name, icon: Icon, url, bgColor }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${bgColor} text-white transition hover:scale-110`}
                    title={name}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-6 font-script text-lg text-green-600">
              Conectemos juntos 💚
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-1">
            <div className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-bold text-green-700">
                ✈ Envianos un mensaje
              </h3>
              <ContactForm />
            </div>
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden bg-white shadow-lg">
            <div className="mb-4 px-8 pt-8">
              <h3 className="text-lg font-bold text-green-700">
                📍 Nuestra ubicación
              </h3>
            </div>
            <iframe
              className="h-full w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.4561234567890!2d-78.50123!3d-7.15123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d2c8c8c8c8c8c9%3A0x8c8c8c8c8c8c8c8c!2sInstituto%20Privado%20Caledin!5e0!3m2!1ses!2spe!4v1234567890123"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}