import { Col, Image, Row } from "react-bootstrap";

function ContentImage(props) {
  return (
    <Row className={props.className}>
      <Col md={8} sm={12} className="pe-5">
		    {props.children}
      </Col>
      <Col md={4} sm={12}>
        <Row className="h-100">
          <Image src={props.src} className="w-100 my-auto"/>
        </Row>
      </Col>
    </Row>
  ); 
}
export default ContentImage;