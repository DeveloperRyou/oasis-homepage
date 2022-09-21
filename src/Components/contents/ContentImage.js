import { Col, Image, Row } from "react-bootstrap";

function ContentImage(props) {
  return (
    <Row className={props.className}>
      <Col lg={8} md={12} className="pe-lg-5">
		    {props.children}
      </Col>
      <Col lg={4} md={12}>
        <Row className="h-100">
          <Image src={props.src} className="w-100 my-auto"/>
        </Row>
      </Col>
    </Row>
  ); 
}
export default ContentImage;