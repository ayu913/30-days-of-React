import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <>    <div className="menu_style">
            <NavLink exact activeClassName="active_class" to="/"> About Us</NavLink>
            <NavLink exact activeClassName="active_class" to="/services"> Services</NavLink>
            <NavLink exact activeClassName="active_class" to="/user"> Users</NavLink>

            <NavLink exact activeClassName="active_class" to="/contact"> Contact US</NavLink>
        </div>





        </>

    );
};


export default Menu;