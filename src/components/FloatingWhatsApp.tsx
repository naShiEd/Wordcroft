import './FloatingWhatsApp.css';

export default function FloatingWhatsApp() {
  const whatsappNumber = "263771263576"; // Format: Country code without '+' followed by number
  const message = "Hello Wordcroft, I would like to inquire about your logistics services.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        {/* Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 414.7c-32 0-64-8.9-92.4-25.7l-6.7-4-68.7 18 18.2-66.9-4.4-7C52.1 298.5 42 261.9 42 223.9 42 123.6 123.7 42 224 42c48.6 0 94.3 18.9 128.7 53.3 34.4 34.4 53.4 80.2 53.4 128.7 0 100.3-81.7 181.9-181.9 181.9l-.3 8.8zM315.6 295c-5-2.5-29.8-14.7-34.4-16.4-4.6-1.7-8.1-2.5-11.4 2.5-3.4 5-13 16.4-16 19.8-2.9 3.4-5.9 3.8-10.9 1.3-5-2.5-21.3-7.8-40.5-25-14.9-13.4-25-29.9-27.9-34.9-2.9-5-.3-7.7 2.2-10.2 2.2-2.3 5-5.6 7.5-8.4 2.5-2.9 3.4-5 5-8.4 1.7-3.4.8-6.3-.4-8.8-1.3-2.5-11.4-27.5-15.6-37.7-4.1-9.9-8.3-8.6-11.4-8.7-2.9-.1-6.3-.1-9.6-.1-3.4 0-8.8 1.3-13.4 6.3-4.6 5-17.6 17.2-17.6 42 0 24.8 18 48.7 20.5 52.1 2.5 3.4 35.6 54.3 86.3 76.2 12.1 5.2 21.5 8.3 28.8 10.6 12.1 3.9 23.1 3.3 31.9 2 9.6-1.4 29.8-12.2 34-24 4.1-11.8 4.1-22 2.9-24-1.2-2-4.6-3-9.6-5.5z" />
      </svg>
    </a>
  );
}
