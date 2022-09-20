import { Row, Col, Image } from 'react-bootstrap';

function NFTImage() {
  return (
    <Row className='nftImage pt-3'>
      <Col md={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src="/nft1.png" />
      </Col>
      <Col md={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src="/nft2.png" />
      </Col>
      <Col md={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src="/nft3.png" />
      </Col>
      <Col md={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src="/nft4.png" />
      </Col>
    </Row>
  );
}

export default NFTImage;
