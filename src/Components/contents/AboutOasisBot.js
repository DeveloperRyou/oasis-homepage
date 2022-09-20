import ContentImage from "./ContentImage";
import About2 from '../../images/About2.png';

function AboutOasisBot() {
	return (
		<ContentImage src={About2} className="mb-5">
      <div>
        <p className="fs-1 fw-medium text-blue-200 mb-0">About the OASIS BOT</p>
        <p className="fs-3 text-white">오아시스 봇에 대하여</p>
      </div>
      <div>
        <p>
          <span className="fw-semibold text-blue-200">OASIS BOT</span>이란, <span className="fw-semibold text-blue-200">OASIS</span>내에서 자체 개발한 로직에 의해 매수와 매도를 자동으로 해주는 프로그램을 말합니다. 
          가상화폐 시장은 사이클 속도가 빠르며 매매에 어려움을 느끼는 사람들이 많습니다.
        </p> 
        <p>
          <span className="fw-semibold text-blue-200">OASIS BOT</span>은 자동으로 매 순간 최적의 순간에 매수와 매도를 진행 합니다. <span className="fw-semibold text-blue-200">OASIS BOT</span>과 함께 꾸준한 시장 참여를 통해 지속적인 수익을 만들어 나갈 수 있습니다.
        </p>
      </div>
    </ContentImage>
	);
}

export default AboutOasisBot;