import './sidebar.css';
import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './sidebar.css';




/**
 * Renders a sidebar menu with links to different sections of a webpage and a button to call a phone number.
 * @returns {JSX.Element} The sidebar menu component.
 */
export default function Default() {
  const [isOpen, setIsOpen] = useState(true);

  /**
   * Handles the close event of the sidebar menu.
   */
  const handleOnClose = () => {
    setIsOpen(false);
  };

  return (
    <Menu right>
      <AnchorLink className="col-3" href="#services">
        Services
      </AnchorLink>
      <AnchorLink className="col-3" href="#process">
        Process
      </AnchorLink>
      <AnchorLink className="col-3" href="#contact">
        Contact Us
      </AnchorLink>
      <button>
        <NavLink className="callus" to="tel:+998957009002">
          Call Us
        </NavLink>
      </button>
    </Menu>
  );
}