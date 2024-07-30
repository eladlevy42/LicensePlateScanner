import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center flex justify-around">
      <p>
        <i className="fab fa-github"></i>
        <a
          href="https://github.com/eladlevy42"
          id="github-link"
          className="text-white hover:underline"
        >
          GitHub
        </a>
      </p>
      <p>
        <i className="fab fa-whatsapp"></i>
        <a
          href="https://wa.me/+972548010701"
          id="whatsapp-link"
          className="text-white hover:underline"
        >
          WhatsApp
        </a>
      </p>
      <p>
        <i className="fas fa-envelope"></i>
        <a
          href="mailto:eladlevy42@gmail.com"
          className="text-white hover:underline"
        >
          eladlevy42@gmail.com
        </a>
      </p>
    </footer>
  );
}

export default Footer;
