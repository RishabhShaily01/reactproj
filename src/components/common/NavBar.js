import { Menu } from 'semantic-ui-react';
import { logo } from '../../constants/constant';
import {Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <Menu borderless fixed="top" > 
        <Menu>
            <img src={logo} alt="logo" borderless style={{width:150}} />
        </Menu>
<Menu.Item name="Home" as ={Link} to="/" />
<Menu.Item name="Recipes" as={Link} to="/recipes" />
        </Menu>
    )
}

export default NavBar;