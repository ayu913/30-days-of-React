import React from 'react'

import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
         <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
           
       <div className="home__row">
       <Product 
               id="12321341"
               title="OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage)"
               price={42999}
               rating={4}
              image="https://m.media-amazon.com/images/I/61Tw6LZoaiL._AC_UY218_.jpg"
           />
            <Product 
               id="33882822"
               title="Apple iPhone XR 64GB Black (includes EarPods, power adapter)"
               price={59990}
               rating={4}
              image="https://m.media-amazon.com/images/I/519KIlHA2wL._AC_UY218_.jpg"
           />
       </div>

       <div className="home__row">
       <Product 
               id="38774303"
               title="Fire-Boltt BGH1300 Gaming Headset with 7.1 Surround Stereo Sound for PS4 PS5 PC USB Gaming Headphones with Noise Canceling Mic & RGB Light Over Ear Headphones, Compatible with PC, PS4 PS5 Console"
               price={3299}
               rating={5}
              image="https://m.media-amazon.com/images/I/716fk1EywgL._AC_UY218_.jpg"
           />
            <Product 
               id="98378373"
               title="CELLBELL® CG03 Transformer Series Gaming/Racing Style Ergonomic High Back Chair with Removable Neck Rest and Adjustable Back Cushion [Blue-Black]"
               price={15999}
               rating={5}
              image="https://m.media-amazon.com/images/I/617NYfMc38L._AC_UL320_.jpg"
           />
            <Product 
               id="18375851"
               title="Bose SoundLink Revolve+ Portable & Long-Lasting Bluetooth 360 Speaker - Luxe Silver"
               price={29990}
               rating={5}
              image="https://images-na.ssl-images-amazon.com/images/I/61Aq0VzYnDL._SY450_.jpg"
           />
       </div>
       <div className="home__row">
       <Product 
               id="12321341"
               title="LG 139 cm (55 inches) 4K UHD Smart LED TV 55UM7290PTD (Ceramic BK + Dark Steel Silver)"
               price={49990}
               rating={5}
              image="https://m.media-amazon.com/images/I/71kMdY5M1KL._AC_UY218_.jpg"
           />
           
       </div>
           
        </div>
    )
}

export default Home
