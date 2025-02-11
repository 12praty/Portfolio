const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a href="https://github.com/12praty" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/github.svg" alt="GitHub" className="w-1/2 h-1/2" />
        </a>
        <a href="https://x.com/pratyush__dev" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/twitter.svg" alt="Twitter" className="w-1/2 h-1/2" />
        </a>
        <a href="https://www.linkedin.com/in/pratyush-kumar-9b13902ba/" target="_blank" rel="noopener noreferrer" className="social-icon">
          <img src="/assets/L.png" alt="LinkedIn" className="w-1/2 h-1/2 filter invert" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Pratyush. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
