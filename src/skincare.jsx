import skin1 from'./sm1.jpg';
import skin2 from'./sm2.jpg';
import skin3 from'./sm3.jpg';
import skin4 from'./sm4.jpg';
import skin5 from'./sm5.jpg';
import skin6 from'./sm6.jpg';
import skin7 from'./sm7.jpg';
import skin8 from'./sm8.jpg';
import skin9 from'./sm9.jpg';
import skin10 from'./sm10.jpg';
export default function Skincare()
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
          <img src={skin1} alt="skin1" />
        </div>
        <div className="name">PAC</div>
        <div className="price"><strike>Rs.1,499</strike>RS.1,175</div>
        <div className="info">
          Focus On Me Blush and Highlighter Dark
        </div>
      </div>
      <div className="items">
        <div className="img img2">
          <img src={skin2} alt="skin2" />
        </div>
        <div className="name">COLORBAR</div>
        <div className="price"><strike>Rs.705</strike>Rs.636</div>
        <div className="info">Perfect Match Compact Classic Ivory</div>
      </div>
      <div className="items">
        <div className="img img3">
          <img src={skin3} alt="skin3" />
        </div>
        <div className="name">ANASTASIA BEVERLY HILLS</div>
        <div className="price"><strike>Rs.3,000</strike>Rs.2,700</div>
        <div className="info">Liquid Lipstick Sarafine </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin4} alt="skin4" />
        </div>
        <div className="name">ANASTASIA BEVERLY HILLS</div>
        <div className="price"><strike>Rs.3,000</strike>Rs.2,700</div>
        <div className="info">Liquid Lipstick Dusty Rose</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin5} alt="skin5" />
        </div>
        <div className="name">ANASTASIA BEVERLY HILLS</div>
        <div className="price"><strike>Rs.5,000</strike>Rs.4,700</div>
        <div className="info">Luminous Foundation</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin6} alt="skin6" />
        </div>
        <div className="name">ANASTASIA BEVERLY HILLS</div>
        <div className="price"><strike>Rs.3,000</strike>Rs.2,200</div>
        <div className="info">
          Lip Primer 
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin7} alt="skin7" />
        </div>
        <div className="name">BY TERRY</div>
        <div className="price"><strike>Rs.4,000</strike>Rs.3,850</div>
        <div className="info">Mascara Terrybly Waterproof Black</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin8} alt="skin8" />
        </div>
        <div className="name">GARNIER</div>
        <div className="price"><strike>Rs.350</strike>Rs.281</div>
        <div className="info">
          All-in-1 Micellar Cleansing Water
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin9} alt="skin9" />
        </div>
        <div className="name">OLAY</div>
        <div className="price"><strike>Rs.2,000</strike>Rs.1,499</div>
        <div className="info">
          Night Cream Regenerist Retinol 24 Moisturiser
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={skin10} alt="skin10" />
        </div>
        <div className="name">PILGRIM</div>
        <div className="price"><strike>Rs.650</strike>Rs.585</div>
        <div className="info">
          Alpha Arbutin &amp; 3% Vitamin C Brightening Face Serum
        </div>
      </div>
    </div>
  </div>
</div>
);
}