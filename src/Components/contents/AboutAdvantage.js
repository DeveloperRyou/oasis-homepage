import ContentImage from "./ContentImage";
import Advantage from '../../images/Advantage.png';

function AboutAdvantage() {
	return (
		<ContentImage src={Advantage} className="mt-5">
      <div>
        <p className="fs-1 text-blue-200 fw-medium mb-0">Advatages of OASIS BOT?</p>
        <p className="fs-3 text-white">OASIS BOT의 장점이란?</p>
      </div>
      <div>
        <ul className="oasis-ul">
          <li>
            <p><span className="text-blue-200 fw-semibold">OASIS BOT</span>은 <span className="text-blue-200 fw-semibold">OASIS 자체 로직</span>에 의해 안정적인 수익을 발생 시킵니다.</p>
          </li>
          <li>
            <p>365일 24시간 내내 자동으로 매매가 가능합니다.</p>
          </li>
          <li>
            <p>메일과 텔레그램 알림을 통해 수익 내역 및 상황을 안내합니다.</p>
          </li>
          <li>
            <p>가상화폐 매매에 어려움을 느끼는 분들께 적합합니다.</p>
          </li>
        </ul>
      </div>
    </ContentImage>
	);
}

export default AboutAdvantage;