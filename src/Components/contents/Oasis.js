import ContentImage from "./ContentImage";
import oasis from "../../images/Oasis.png";

function Oasis() {
  const url = "https://drive.google.com/u/0/uc?id=1X8j45CHdfxWh2KkOLlQRFNUmKs0oHzdB&export=download&confirm=t&uuid=a6ba4bf1-aa34-4d73-ba95-f93516d9e948";
  const manual = ()=>{
    alert("매뉴얼은 준비중입니다.");
  }
  return (
    <div className="oasis">
      <ContentImage src={oasis} className="text-center text-sm-start">
        <div className="display-6 text-white">
          <p className="fw-normal"><span className="text-blue-200 fw-bold">OASIS</span> 안에서</p>
          <p className="fw-normal">최고의 수익을 찾아보세요</p>
        </div>
        <p className="fs-5">Search for the vein of money</p>
        <div className="d-flex justify-content-between pt-3">
          <div className="w-50">
            <a href={url}>
              <button className="oasis-btn w-100 me-2 me-lg-3" type="button">
                프로토타입 다운로드
              </button>
            </a>
          </div>
          <div className="w-50">
            <button className="oasis-btn w-100 ms-2 ms-lg-3" type="button" onClick={manual}>설치 매뉴얼</button>
          </div>
        </div>
      </ContentImage>
    </div>
  ); 
}
export default Oasis;