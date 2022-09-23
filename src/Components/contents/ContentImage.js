import { Col, Image, Row } from "react-bootstrap";

function ContentImage(props) {
  return (
    <Row className={props.className}>
      <Col xs={12} sm={8} className="pe-sm-5">
		    {props.children}
      </Col>
      <Col xs={12} sm={4} className="d-sm-block d-none" >
        <Row className="h-100">
          <Image src={props.src} className="w-100 my-auto"/>
        </Row>
      </Col>
    </Row>
  ); 
}
export default ContentImage;