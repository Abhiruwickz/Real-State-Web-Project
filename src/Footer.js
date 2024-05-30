
import React from 'react';

// Footer
const Footer = () => {
  return (
    <footer id="footer">
      <hr />
      <div className="socials">
        <a href="https://twitter.com" target="_blank">
          <img src="/twitwe.png" alt="twitter" className="icon-imgs" />
        </a>
        <a href="https://www.facebook.com" target="_blank">
          <img src="/facebook.png" alt="facebook" className="icon-imgs" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="/instagram.png" alt="instagram" className="icon-imgs" />
        </a>
        <br /><br />
        <p>All Rights and reserved</p><br/>
        <a href="#top" className="back-top">↑Back to Top</a>
      </div>
    </footer>
  );
};

export default Footer;

