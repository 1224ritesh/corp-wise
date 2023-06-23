
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>Company and LLP Formation</span>
            <span>FEMA and RBI Matters</span>
            <span>Audit and Compliance – Companies Act, 2013</span>
            <span>Amalgamation, Merger, De-merger & Takeover</span>
            <span>Agreements & Petitions</span>
            <span>Corporate Governance</span>
            <span>Industrial Licensing</span>
            <span>XBRL Filing</span>
            <span>Management Consultancy</span>
            <span>ESOP and SAR</span>
            <span>Liquidation Under Insolvency and Bankruptcy </span>
            <span>Data room creation, Due Diligence </span>
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>Corp-Wise</h2>
            <span>© Corp-Wise Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            <div className="link">
              <img src="/img/language.png" alt="" />
              <span>English</span>
            </div>
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>INR</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;