import { FaWhatsapp } from 'react-icons/fa';

const ContactWhatsApp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href="https://wa.me/523957881559"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-600 text-white w-16 h-16 rounded-full shadow-lg hover:bg-green-700 transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={32} />
      </a>
    </div>
  );
};

export default ContactWhatsApp; 