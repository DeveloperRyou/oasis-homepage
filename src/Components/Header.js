import { Link as LinkScroll } from 'react-scroll';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import Navsocial from './Navsocial';
import { Fade } from "react-awesome-reveal";

function Header() {
  const contents = [
    {id: 1, title: 'OASIS', url: 'oasis'},
    {id: 2, title: 'ABOUT', url: 'about'},
    {id: 3, title: 'NFT', url: 'nft'},
    {id: 4, title: 'FAQ', url: 'faq'}
  ];
  
  const [offset, setOffset] = useState(0);
  const [bgClass, setbgClass] = useState('');

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (offset > 0) 
      setbgClass('bg-gray');
    else 
      setbgClass('');
  }, [offset]);

  return (
    <Navbar className={"py-4 px-3 px-md-0 "+bgClass} expand="md" variant="dark" fixed="top">
      <Container className='h-100 px-0'>
        <Fade triggerOnce direction='down' duration={1500}>
          <LinkScroll spy to={"app"} className="nav-brand nav-link h-100">
            <Image fluid src='/title.png'></Image>
          </LinkScroll>
        </Fade>
        <Navbar.Toggle aria-controls="navbar-collapse" />
        <Navbar.Collapse id="navbar-collapse" className="flex-row-reverse">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <Fade triggerOnce cascade damping={0.1} direction="down">
            {contents.map((content) => 
              <li className="nav-item text-end mx-3 mx-md-0" key={content.id}>
                <LinkScroll className="nav-link" activeClass="active" spy to={content.url} offset={-70}>
                  {content.title}
                </LinkScroll>
              </li>
            )}
            <li className="nav-item d-flex flex-column justify-content-center">
              <Navsocial />
            </li>
            </Fade>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
  