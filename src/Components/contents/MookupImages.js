import { Col, Row } from "react-bootstrap";
import MookupImage from "./MookupImage";

function MookupImages(props) {
  return (
    <div>
      <Row className="mt-0 mt-md-4">
        <Col sm={12} md={6} className="mt-4 mt-md-0">
          <MookupImage src="/DashBoard.png" description="DashBoard" />  
        </Col>
        <Col sm={12} md={6} className="mt-4 mt-md-0">
          <MookupImage src="/OASISBot.png" description="OASIS Bot" />
        </Col>
      </Row>
      <Row className="mt-0 mt-md-4">
        <Col sm={12} md={6} className="mt-4 mt-md-0">
          <MookupImage src="/BackTest.png" description="BackTest" />
        </Col>
        <Col sm={12} md={6} className="mt-4 mt-md-0">
          <MookupImage src="/Additional.png" description="추가기능은 지속적으로 개발중입니다."/>
        </Col>
      </Row>
    </div>
  ); 
}
export default MookupImages;