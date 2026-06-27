import './floating.css'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

export default function Floating() {
  return (
    <div className="floating-contact">

      {/* Phone */}
      <a
        href="tel:+919543061112"
        className="floating-contact__btn floating-contact__btn--phone"
        aria-label="Call Us"
      >
        <FaPhoneAlt size={22} />
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919543061112?text=Hello%20Devz%20Studio,%20I%20would%20like%20to%20discuss%20my%20upcoming%20event."
        target="_blank"
        rel="noopener noreferrer"
        className="floating-contact__btn floating-contact__btn--whatsapp"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={30} />
      </a>

    </div>
  )
}
