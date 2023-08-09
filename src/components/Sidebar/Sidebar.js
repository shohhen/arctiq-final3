import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink, Route, Routes } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './sidebar.css';




export default props => {
    const [isOpen, setIsOpen] = useState(true);

    const handleOnClose = () => {
        setIsOpen(false);
    };
  return (
    <Menu right>
        
            <AnchorLink className="col-3" href='#services'>Services</AnchorLink> 
            <AnchorLink className="col-3" href='#process'>Process</AnchorLink>
            <AnchorLink className="col-3" href='#contact'>Contact Us</AnchorLink>
            <button><NavLink className="callus" to={'tel::+998957009002'}>Call Us</NavLink> </button>        
    </Menu>
  );
};