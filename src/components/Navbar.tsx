import React, { useState, FC } from 'react';
import { Container, Dropdown, Menu, MenuItemProps } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {

  const [activeItem, setActiveItem] = useState('Home');
  const handleItemClick = (e: any, item: MenuItemProps) => setActiveItem(item.name || 'Home');

  return (
    <div className={'app-navbar'}>
      <Menu color={'red'} pointing secondary size='huge'>
        <Container>

          <Menu.Item header className={'logo-header'}>Travelshop.com</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item
              name='Home'
              active={activeItem === 'Home'}
              onClick={handleItemClick}
              as={Link} to="/"
            />
            <Menu.Item
              name='about'
              active={activeItem === 'about'}
              onClick={handleItemClick}
              as={Link} to="/about"
            />

            <Dropdown item text='UK(E)' icon='angle down'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/about" text='About'/>
                <Dropdown.Item as={Link} to={'/'} text='Home'/>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown item text='English' icon='angle down'>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/about" text='English'/>
                <Dropdown.Item as={Link} to={'/'} text='Arabic'/>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item
              name='SignIn'
              active={activeItem === 'SignIn'}
              onClick={handleItemClick}
              as = {Link} to="/signin"
            />
            <Menu.Item
              name='SignUp'
              active={activeItem === 'SignUp'}
              onClick={handleItemClick}
              as = {Link} to="/signup"
            />
          </Menu.Menu>
        </Container>

      </Menu>

    </div>
  );
};

export default Navbar;