import { Col, Row } from "react-bootstrap";
import MookupImage from "./MookupImage";
import DashBoard from "../../images/DashBoard.png";
import OASISBot from "../../images/OASISBot.png";
import BackTest from "../../images/BackTest.png";
import Additional from "../../images/Additional.png";

function MookupImages() {
  return (
    <div>
      <Row className="mt-0 mt-lg-4">
        <Col md={12} lg={6} className="mt-4 mt-lg-0">
          <MookupImage src={DashBoard} description="DashBoard" />  
        </Col>
        <Col md={12} lg={6} className="mt-4 mt-lg-0">
          <MookupImage src={OASISBot} description="OASIS Bot" />
        </Col>
      </Row>
      <Row className="mt-0 mt-lg-4">
        <Col md={12} lg={6} className="mt-4 mt-lg-0">
          <MookupImage src={BackTest} description="BackTest" />
        </Col>
        <Col md={12} lg={6} className="mt-4 mt-lg-0">
          <MookupImage src={Additional} description="추가기능은 지속적으로 개발중입니다."/>
        </Col>
      </Row>
    </div>
  ); 
}
export default MookupImages;