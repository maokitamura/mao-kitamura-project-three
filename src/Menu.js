import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faUsers, faImage, faDoorClosed, faFlagCheckered } from '@fortawesome/free-solid-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faBirthdayCake, faUsers, faImage, faDoorClosed, faFlagCheckered);

const Menu = () => {
  return (
    <nav>
        <p className="menu">MENU</p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faUsers} /> Profile</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faBirthdayCake} /> Aniversary</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faImage} /> Album</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faDoorClosed} /> Room</a></p>
        <p><a href="#usertText"><FontAwesomeIcon icon={faFlagCheckered} /> Notification</a></p>
      </nav>
  )
}

export default Menu;