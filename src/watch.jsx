import watch1 from'./watch 1.jpg';
import watch2 from'./watch 2.jpg';
import watch3 from'./watch 3.jpg';
import watch4 from'./watch 4.jpg';
import watch5 from'./watch 5.jpg';
import watch6 from'./watch 6.jpg';
import watch7 from'./watch 7.jpg';
import watch8 from'./watch 8.jpg';
import watch9 from'./watch 9.jpg';
import watch10 from'./watch 10.jpg';




export default function Watch()
{
return(
<div>
   <div className="width-100 search-panel">
    <div className="container">
      <div className="width-20">
        <img src={pic3} className="logo" width="180px" height="50px" />
      </div>
      <div className="width-50">
        <input className="search-textbox" type="text" placeholder="Search for products, brand and more" />
        <button className="search-button">
          <i className="fa fa-search" aria-hidden="true" />
        </button>
      </div>
      <div className="width-30">
        <ul className="cart-sect">
          <li>
            <i className="fa fa-user-circle-o" aria-hidden="true" />
            <a href="login.html">Login &amp; Signup</a>
          </li>
          <li>
            <i className="fa fa-shopping-cart" aria-hidden="true" />
            <a href="#">Cart (0)</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div className="section2">
    <div className="container">
      <div className="items">
        <div className="img img1">
          <img src={watch1} alt="WATCH" />
        </div>
        <div className="name">SONATA</div>
        <div className="price"><strike>Rs.2,125</strike>RS.1,999</div>
        <div className="info">
          Sonata Utsav Black Dial Watch
        </div>
      </div>
      <div className="items">
        <div className="img img2">
          <img src={watch2} alt="WATCH" />
        </div>
        <div className="name">TIMEX</div>
        <div className="price">Rs.2,397</div>
        <div className="info"> Eden &amp; Ivy Analog Women's Watch</div>
      </div>
      <div className="items">
        <div className="img img3">
          <img src={watch3} alt="WATCH" />
        </div>
        <div className="name">Rizino Leather Strap</div>
        <div className="price"><strike>Rs.399</strike>Rs.255</div>
        <div className="info">Vibrant Violet Casual Watch</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch4} alt="WATCH" />
        </div>
        <div className="name">TIMEX</div>
        <div className="price">Rs.1,599</div>
        <div className="info">Eden Analog Women's Watch</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch5} alt="WATCH" />
        </div>
        <div className="name">Danial Klein</div>
        <div className="price">Rs.445</div>
        <div className="info">Strap Anolog watch</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch6} alt="WATCH" />
        </div>
        <div className="name">Rizino Leather Strap</div>
        <div className="price">Rs.355</div>
        <div className="info">
          Vibrant Casual Watch
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch7} alt="WATCH" />
        </div>
        <div className="name">Rizzly</div>
        <div className="price">Rs.299</div>
        <div className="info">Latest designer watches</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch8} alt="WATCH" />
        </div>
        <div className="name">TITANIUM</div>
        <div className="price"><strike>Rs.3099</strike>Rs.2,599</div>
        <div className="info">
          Latest Watches
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch9} alt="WATCH" />
        </div>
        <div className="name">DressBerry</div>
        <div className="price">Rs.813</div>
        <div className="info">
          Brown solid round metal dial
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={watch10} alt="WATCH" />
        </div>
        <div className="name">COMBO WATCHES</div>
        <div className="price"><strike>Rs.499</strike>Rs.359</div>
        <div className="info">
          CASUAL COMBO WATCHES 
        </div>
      </div>
    </div>
  </div>
</div>
);
}