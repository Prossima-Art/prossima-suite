import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Logo } from '../../logo';
import './navbar.scss';

const dropdownItems = {
  solutions: {
    ia: [
      "Artificial Intelligence",
      "Sentiment Analysis",
      "Process Optimization",
      "Forecasting"
    ],
    dev: [
      "Planning",
      "Implementation",
      "Reviews & Testing",
      "Deployment"
    ],
    ux: [
      "Research & Design",
      "Prototyping",
      "User Testing",
      "Metrics",
    ],
    xr: [
      "VR applications",
      "AR applications",
      "Research & Design",
      "User Testing",
    ],
  },
};

enum DropDown {
  SOLUTIONS = "Solutions",
  INDUSTRIES = "Industries",
  RESOURCES = "Resources",
};

const iconsList = {
  ia: (
    <svg width="23" height="28" viewBox="0 0 23 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.88303 6.00018H10.4128L17.3179 21.4429H13.5675L8.62447 9.51007L3.66213 21.4429H0L6.88303 6.00018Z" fill="#0068FF" />
      <path d="M19.1705 6L22.7444 6.00027V21.4429H19.1705V6Z" fill="#0068FF" />
    </svg>
  ),
  dev: (
    <svg width="48" height="15" viewBox="0 0 48 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.744385 2.85V0H7.55867C9.18724 0 10.623 0.314286 11.8658 0.942858C13.1087 1.55714 14.0801 2.42143 14.7801 3.53571C15.4801 4.65 15.8301 5.97143 15.8301 7.5C15.8301 9.01429 15.4801 10.3357 14.7801 11.4643C14.0801 12.5786 13.1087 13.45 11.8658 14.0786C10.623 14.6929 9.18724 15 7.55867 15H0.744385V12.15H4.21581H7.38724C8.38724 12.15 9.25153 11.9643 9.9801 11.5929C10.723 11.2071 11.2944 10.6643 11.6944 9.96429C12.1087 9.26429 12.3158 8.44286 12.3158 7.5C12.3158 6.54286 12.1087 5.72143 11.6944 5.03571C11.2944 4.33572 10.723 3.8 9.9801 3.42857C9.25153 3.04286 8.38724 2.85 7.38724 2.85H4.21581H0.744385Z" fill="#762CE6" />
      <path d="M21.8981 12.2143V8.74286H28.8624V6.04286H21.8981V2.78571H29.7838V0H18.4481V15H30.0624V12.2143H21.8981Z" fill="#762CE6" />
      <path d="M34.3938 0H30.6438L37.1152 15H40.5438L47.0366 0H43.5866L38.9556 10.7135L34.3938 0Z" fill="#762CE6" />
    </svg>
  ),
  ux: (
    <svg width="31" height="16" viewBox="0 0 31 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.9095 15.3103C4.75585 15.3103 3.07196 14.7153 1.85783 13.5255C0.643689 12.3357 0.0366211 10.6369 0.0366211 8.42925V0H3.54894V8.30023C3.54894 9.73377 3.84525 10.7659 4.43787 11.3967C5.03048 12.0274 5.86159 12.3428 6.93118 12.3428C8.00078 12.3428 8.83188 12.0274 9.4245 11.3967C10.0171 10.7659 10.3134 9.73377 10.3134 8.30023V0H13.7824V8.42925C13.7824 10.6369 13.1753 12.3357 11.9612 13.5255C10.747 14.7153 9.06315 15.3103 6.9095 15.3103Z" fill="#9E5AFF" />
      <path d="M15.307 15.0522L21.833 6.12841V8.66578L15.5888 0H19.5782L23.8927 6.04239L22.2232 6.0639L26.4727 0H30.2886L24.0878 8.51526V6.02089L30.6572 15.0522H26.6028L22.1365 8.66578H23.7409L19.3397 15.0522H15.307Z" fill="#9E5AFF" />
    </svg>
  ),
  xr: (
    <svg width="33" height="16" viewBox="0 0 33 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.657227 15.2883L7.23119 6.22451V8.80168L0.941152 0H4.95979L9.30603 6.13715L7.62431 6.15899L11.905 0H15.7489L9.50259 8.6488V6.11531L16.1202 15.2883H12.0361L7.53695 8.80168H9.15314L4.71954 15.2883H0.657227Z" fill="#17CBF6" />
      <path d="M19.0462 0H25.6638C27.0325 0 28.2119 0.225684 29.202 0.677053C30.192 1.11386 30.9565 1.74723 31.4952 2.57717C32.0339 3.4071 32.3033 4.3972 32.3033 5.54746C32.3033 6.68316 32.0339 7.66598 31.4952 8.49592C30.9565 9.31129 30.192 9.93738 29.202 10.3742C29.192 10.3786 29.182 10.383 29.172 10.3873L32.5872 15.2883H28.7651L25.8301 11.0283C25.775 11.029 25.7196 11.0294 25.6638 11.0294H22.5843V15.2883H19.0462V8.21199H25.4673C26.5593 8.21199 27.3746 7.97903 27.9134 7.5131C28.4521 7.03261 28.7215 6.3774 28.7215 5.54746C28.7215 4.70297 28.4521 4.04776 27.9134 3.58183C27.3746 3.1159 26.5593 2.88293 25.4673 2.88293H19.0462V0Z" fill="#17CBF6" />
    </svg>
  ),
};

function Header() {
  const [showSolutionsItems, setShowSolutionsItems] = useState(false);

  const handleSolutionsClick = () => {
    setShowSolutionsItems(!showSolutionsItems);
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary pe-5 ps-5 fixed-top">
        <Container fluid>
          <Navbar.Brand href="#">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
              <Nav.Link className='ms-5 position-relative' href="#action1" onClick={handleSolutionsClick}>
                Solutions
              </Nav.Link>
              {showSolutionsItems && (
                <div className='dropdown-list'>
                  <h5>{DropDown.SOLUTIONS}</h5>
                  <div className="dropdown-item">
                    {Object.keys(dropdownItems.solutions).map((key) => (
                      <div className="container-list" key={key}>
                        <div className="item">{iconsList[key]}</div>
                        <ul>
                          {dropdownItems.solutions[key].map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <Nav.Link className='ms-5 position-relative' href="#action2">
                Industries
              </Nav.Link>

              <NavDropdown className='ms-5 position-relative' title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">
                  Research and Dissemination
                  <p className='navparagrafo'>News and articles about products and services</p>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Security
                  <p className='navparagrafo'>Protection of your data</p>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Customer support
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Button className='ms-5 position-relative rounded-5' variant="primary">
              Contact sales
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  );
}

export default Header;
