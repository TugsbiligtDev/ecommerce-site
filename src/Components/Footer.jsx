import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="top-container">
        <img src="./symbol.svg" alt="pineconeicon" />
        <div className="contact">
          <div className="circle-icon">
            <img src="./call.svg" alt="call icon" />
          </div>
          <p>(976) 7007-1234</p>
          <div className="circle-icon">
            <img src="./message.svg" alt="message icon" />
          </div>
          <p>contact@ecommerce.mn</p>
        </div>
      </div>
      <hr />
      <div className="bottom-container">
        <p>© 2024 Ecommerce MN</p>
        <div className="icon-container">
          <img src="./facebook.svg" alt="facebook icon" />
          <img src="./instagram.svg" alt="instagram icon" />
          <img src="./twitter.svg" alt="twitter icon" />
          <img src="./linkedIn.svg" alt="linkedInicon" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
