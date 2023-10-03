import access1 from'./chain 1.jpg';
import access2 from'./chain 4.jpg';
import access3 from'./chain 9.jpg';
import access4 from'./ring 1.jpg';
import access5 from'./ring 2.jpg';
import access6 from'./bangle 1.jpg';
import access7 from'./bangle 2.jpg';
import access8 from'./earing 1.jpg';
import access9 from'./earing 2.jpg';
import access10 from'./earing 3.jpg';

export default function Access()
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
          <img src={"chain 1"} alt="CHAIN" />
        </div>
        <div className="name">Chain Set</div>
        <div className="price"><strike>Rs.1,499</strike>RS.799</div>
        <div className="info">
          Brass Copper gold-plated gold jewel set
        </div>
      </div>
      <div className="items">
        <div className="img img2">
          <img src={"chain 4"} alt="CHAIN" />
        </div>
        <div className="name">BRANDSOON</div>
        <div className="price">Rs.169</div>
        <div className="info">Pendant Gold-plated Brass,Alloy chain</div>
      </div>
      <div className="items">
        <div className="img img3">
          <img src={"chain 9"} alt="CHAIN" />
        </div>
        <div className="name">NECKLACE</div>
        <div className="price"><strike>Rs.1,599</strike>Rs.879</div>
        <div className="info">Brass Gold-plated gold,rose gold</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"ring 1"} alt="RING" />
        </div>
        <div className="name">RING</div>
        <div className="price">Rs.159</div>
        <div className="info">Crystal Rotating Ring Alloy Crystal Silver</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"ring 2"} alt="RING"/>
        </div>
        <div className="name">RING</div>
        <div className="price">Rs.199</div>
        <div className="info">Half round Cz Alloy Cubic Zirconia</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"bangle 1"} alt="BANGLE" />
        </div>
        <div className="name">BANGLE</div>
        <div className="price">Rs.799</div>
        <div className="info">
          Brass Cubic Zirconia Gold-plated Bangle Set
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"bangle 2"} alt="BANGLE" />
        </div>
        <div className="name">BANGLE</div>
        <div className="price">Rs.355</div>
        <div className="info">Alloy Beads Gold-plated Bangle Pack</div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"earing 1"} alt="EARINGS" />
        </div>
        <div className="name">VEMBLEY</div>
        <div className="price"><strike>Rs.499</strike>Rs.357</div>
        <div className="info">
          FASHION STUNNING EARRING
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"earing 2"} alt="EARINGS" />
        </div>
        <div className="name">JHUMKA</div>
        <div className="price">Rs.99</div>
        <div className="info">
          Latest JHUMKA EARRINGS
        </div>
      </div>
      <div className="items">
        <div className="img img1">
          <img src={"earing 3"} alt="EARINGS" />
        </div>
        <div className="name">JHUMKA</div>
        <div className="price"><strike>Rs.599</strike>Rs.377</div>
        <div className="info">
          Latest JHUMKA EARRINGS
        </div>
      </div>
    </div>
  </div>
</div>
);
}