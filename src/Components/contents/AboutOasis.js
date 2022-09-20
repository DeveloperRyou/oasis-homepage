import ContentImage from "./ContentImage";

function AboutOasis() {
	return (
		<ContentImage src='/About1.png' className="mb-5">
      <div>
        <p className="fs-1 fw-medium text-blue-200 mb-0">About the OASIS</p>
        <p className="fs-3 text-white">오아시스에 대하여</p>
      </div>
      <div>
        <p>
          <span className="fw-semibold text-blue-200">OASIS</span>는 사막의 죽을 것 같은 갈증 속에서 휴식을 주는 존재인지라 비유적으로 안식처라는 의미로 통하기도 합니다. 
        </p>
        <p>
          자사 <span className="fw-semibold text-blue-200">OASIS</span>는 가상화폐 시장 속 트레이더들에게 안식처와 같은 존재가 되려고 합니다.
        </p>
      </div>
    </ContentImage>
	);
}

export default AboutOasis;