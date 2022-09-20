import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row } from "react-bootstrap";
import { faTwitter, faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
  <footer>
    <Container fluid className='footer-line mt-5'>
      <Row className='mx-0 py-4'>
        <Col xs={12} lg={3} className='my-auto text-center text-lg-start'>
          <Row>
            <Col xs={12} className='mb-lg-3 fw-bold fs-5'>
              Mail Me!
            </Col>
            <Col xs={12}>
              <a href="mailto:teamprivateclub@gmail.com" className='footer-email'>
                teamprivateclub@gmail.com
              </a>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={6} className="my-4 my-lg-0">
          <Row className="justify-content-center">
            <Col xs={3} className='px-0'>
              <Image fluid src='/logo.png' className='footer-logo'></Image>
            </Col>
          </Row>
        </Col>
        <Col xs={12} lg={3} className='my-auto'>
          <Row>
            <Col xs={{span:6, order:1}} lg={{span:12, order:0}} className='mb-lg-3 text-end'>
              <a href="https://twitter.com/SC3_M1/with_replies" target='_black'><FontAwesomeIcon className="footer-icon" icon={faTwitter} /></a>
              <a href="https://t.me/StupidCatCharityClub" target='_black'><FontAwesomeIcon className="footer-icon" icon={faTelegram} /></a>
              <a href="https://discord.gg/6r44wVKYjb" target='_black'><FontAwesomeIcon className="footer-icon" icon={faDiscord} /></a>
            </Col>
            <Col xs={6} lg={12} className="footer-small text-lg-end">
              Published by DeveloperRyou
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <Container fluid className="m-0 p-0">
      <span className="footer-lastline"></span>
    </Container>
  </footer>
  );
}

export default Footer;
