import { Col, Row } from "react-bootstrap";

function NFTBenefit() {
	return (
		<div className="mt-5">
      <p className="fs-2 text-blue-100 fw-medium mb-2">NFT Benefit</p>
      <p className="fs-5 text-white">OASIS BOT NFT를 영입하고 스쿼드를 꾸려 혜택을 받아보실 수 있습니다.</p>
      <ul className="oasis-ul">
        <li><p><span className="fw-semibold text-blue-200">OASIS BOT NFT 스쿼드</span>가 수수료를 절감시켜줍니다.</p></li>
        <li><p>형성되는 <span className="fw-semibold text-blue-200">OASIS BOT NFT 스쿼드</span>에 따라서 더욱 할인된 수수료로 이용하실 수 있습니다. </p></li>
      </ul>
      <ol className="oasis-ol ps-4">
        <Row>
          <Col md={12}>
            <li className="text-white mb-2">
              <p className="mb-0">OASIS BOT NFT 4인 스쿼드 효과</p>
            </li>
          </Col>
          <Col md={12}><p>기본 수수료 10%에서 할인된 7.5%의 수수료가 적용됩니다.</p></Col>
        </Row>
        <Row>
          <Col md={12}>
            <li className="text-white mb-2">
              <p className="mb-0">OASIS BOT NFT 10인 스쿼드 효과</p>
            </li>
          </Col>
          <Col md={12}><p>기본 수수료 10%에서 할인된 5%의 수수료가 적용됩니다.</p></Col>
        </Row>
      </ol>
      <ul className="oasis-ul">
        <li className="text-p">
          <p>이후 추가될 유료 로직들, 컨텐츠에 대한 혜택도 제공 될 예정입니다. ( 추후 공개 )</p>
        </li>
      </ul>
    </div>
	);
}

export default NFTBenefit;