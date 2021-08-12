import { Menu, } from 'semantic-ui-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuBar = () => {
  const pathname = window.location.pathname;
  const path = pathname === '/' ? 'launches' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  }


  return (

    <Menu inverted size='large' fixed='top'  >
      <Menu.Item header>SpaceX</Menu.Item>
      <Menu.Item
        name='launches'
        active={activeItem === 'launches'}
        onClick={handleItemClick}
        as={Link} to='/launches'
      />
      <Menu.Item
        name='ships'
        active={activeItem === 'ships'}
        onClick={handleItemClick}
        as={Link} to='/ships'
      />
      <Menu.Item
        name='crew'
        active={activeItem === 'crew'}
        onClick={handleItemClick}
        as={Link} to='/crew'
      />
    </Menu>

  )
}

export default MenuBar




