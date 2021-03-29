import React from 'react'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {

  const[{basket , user}] = useStateValue();

  const login = () =>{
    if(user){
      auth.signOut();
    }
  }

    return (
        <nav className="header">

            {/* logo onto the left -> img */}

            <Link to="/login">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/small/amazon_PNG25.png" alt="" />
            </Link>

            {/* search box */}

            <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
            
            {/* 3 links */}

            <div className="header__nav">
         {/* 1 link */}

         <Link to={!user && "/login"} className="header__link">
          <div onClick ={login} className="header__option">
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>
          {/* 2 link */}
          <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">&Orders</span>
          </div>
        </Link>
          {/* 3 link */}
          <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
           {/* 4 link */}
           <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionLineTwo header__BasketCount">
              {basket?.length}
            
            </span>
          </div>
        </Link>


            </div>
            {/* Basket icon with number */}


        </nav>
    )
}

export default Header;
