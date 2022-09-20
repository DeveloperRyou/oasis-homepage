import { Image } from "react-bootstrap";
import upbit from "../../images/upbit.png"

function AboutSupport() {
	return (
		<div className="support mt-5">
		  <div className="text-center">
			  <p className="fs-1 text-blue-200 fw-medium">지원거래소</p>
		  </div>
      <div className="d-flex justify-content-around pt-4">
        <div className="text-center">
          <Image src={upbit} className="rounded-4" />
          <p className="mt-3 fs-4 fw-normal"> 업비트 </p>
        </div>
      </div>
		</div>
	  );
}
export default AboutSupport;