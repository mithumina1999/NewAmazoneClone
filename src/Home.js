import React from "react";
import "./Home.css";
import Product from "./Product";
import homeimage from "./home.jpeg"
import mobile from "./mobile.jpeg"
import wash1 from "./wash1.jpeg"
import wash2 from "./wash2.jpeg"
import side from "./side.jpg"
import oil from "./oil.jpg"
import soap from "./soap.jpeg"


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          src={homeimage}
          alt=""
        />
         <div className="home__row">
          <Product
            id="12321341"
            title="Best overall| Best for dry skin | Best for acne-prone skin | Best for oily skin | Best exfoliating for oily skin | Best for sensitive skin"
            price={11.96}
            rating={5}
            image={wash1}
          />
          <Product
            id="49538094"
            title="Best overall| Best for dry skin | Best for acne-prone skin | Best for oily skin | Best exfoliating for oily skin | "
            price={239.0}
            rating={4}
            image={wash2}
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="Huge collection of men's travel bags at low offer price & discounts at COD, Easy Returns ... Textured Travel Backpack with Adjustable Shoulder Straps."
            price={11.96}
            rating={5}
            image={side}
          />
          <Product
            id="49538094"
            title="Essential oils are distilled from the plant itself. They have the signature scent of the plant they came from."
            price={239.0}
            rating={4}
            image={oil}
          />
          <Product
            id="49538094"
            title="Our natural and organic handmade soap will cleanses your skin and keeps it moisturize. Our organic handmade soaps are pure and effective."
            price={239.0}
            rating={4}
            image={soap}
          />
        </div>
        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
          <Product
            id="3254354345"
            title="Realme mobile phone | best mobile phone"
            price={608.99}
            rating={4}
            image={mobile}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
