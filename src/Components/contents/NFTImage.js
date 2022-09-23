import { Row, Col, Image } from 'react-bootstrap';
import nft1 from '../../images/nft1.png';
import nft2 from '../../images/nft2.png';
import nft3 from '../../images/nft3.png';
import nft4 from '../../images/nft4.png';

function NFTImage() {
  return (
    <Row className='nftImage pt-3'>
      <Col lg={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src={nft1} />
      </Col>
      <Col lg={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src={nft2} />
      </Col>
      <Col lg={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src={nft3} />
      </Col>
      <Col lg={3} xs={6} className="d-flex justify-content-center p-3">
        <Image fluid src={nft4} />
      </Col>
    </Row>
  );
}

export default NFTImage;
