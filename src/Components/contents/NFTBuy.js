import { Row, Col } from 'react-bootstrap';

function NFTBuy() {
  return (
    <Row className="buy bg-blue-300 mb-3 p-4" >
      <Col lg={3} xs={12} className="text-center mb-3 m-lg-auto">
        <h3 className="fw-bold">BUY AN OASIS</h3>
      </Col>
      <Col lg={{span:4, offset:1}} xs={12} className="mb-2 m-lg-auto text-center">
        <p className="text-black mb-lg-0">
          OpenSea에서 당신의 <br/> <span className='text-black fw-bold'>OASIS BOT NFT</span>를 영입하세요!
        </p>
      </Col>
      <Col lg={{span:3, offset:1}} xs={12} className="m-auto text-center">
        <a href="https://opensea.io/collection/oasis-bot" target='_blank' rel="noopener noreferrer">
          <button className="buy-btn" type="button">BUY AN OASIS NFT <br/> ON OPENSEA</button>
        </a>
      </Col>
    </Row>
  );
}

export default NFTBuy;
