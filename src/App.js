
import './App.css';
import logo from './images/logo.png'
import icon from './images/icon.png'
import title from './images/title.png'
import shopWishlist from './images/shopWishlist.png'
import card1 from './images/card-1.png'
import card2 from './images/card2.png'
import card3 from './images/card3.png'
import card4 from './images/card4.png'
import details from './images/deetails.png'
import footerTerms from './images/footer-terms.png'
import footerIcons from './images/footer-icons.png'
import footerEnd from './images/footer-end.png'

function App() {
  return (
    <>
      <nav>
        <div className='logo'>
           <img src={logo} alt='sample'/>
        </div>
        <ul>
          <li>HOME</li>
          <li>SALON</li>
          <li>SHOP</li>
          <li>ABOUT US</li>
        </ul>
       <div className='icon'>
       <img src={icon} alt='sample'/>
       </div>
      </nav>
      <div className='shop-wishlist'>
        <img src={shopWishlist} alt='sample'/>
      </div>
      <div className='Title'>
         <img src={title} alt='sample'/>
          </div>
        <div className="cards">
           <div className="card-1">
            <img src={card1} alt='sample'/>
           </div>
           <div className='card-2'>
           <img src={card2} alt='sample'/>
           </div>
           <div className='card-3'>
           <img src={card3} alt='sample'/>
           </div>
           <div className='card-4'>
           <img src={card4} alt='sample'/>
           </div>
        </div>
        <div className="cards">
           <div className="card-1">
            <img src={card1} alt='sample'/>
           </div>
           <div className='card-2'>
           <img src={card2} alt='sample'/>
           </div>
           <div className='card-3'>
           <img src={card3} alt='sample'/>
           </div>
           <div className='card-4'>
           <img src={card4} alt='sample'/>
           </div>
        </div>
        <div className="footer">
          <div className='footer-logo'>
          <img src={logo} alt='sample'/>
          <img src={footerIcons} alt='sample'/>
          </div>
          <div className='footer-details'>
          <img src={details} alt='sample'/>
          </div>
          <div className='footer-terms'>
            <img src={footerTerms} alt='sample'/>
          </div>
        </div>
        <hr />
        <div className="footer-end">
          <img src={footerEnd} alt='sample'/>
        </div>
      </>
  );
}

export default App;
