import ContentImage from "./ContentImage";

function Oasis() {
  return (
    <div className="oasis">
      <ContentImage src='/Oasis.png' >
        <div className="display-6 text-white">
          <p className="fw-normal"><span className="text-blue-200 fw-bold">OASIS</span> 안에서</p>
          <p className="fw-normal">최고의 수익을 찾아보세요</p>
        </div>
        <p className="fs-5">Search for the vein of money</p>
        <div className="d-flex justify-content-between pt-3">
          <button className="oasis-btn w-100 me-3" type="button">다운로드</button>
          <button className="oasis-btn w-100 ms-3" type="button">설치 매뉴얼</button>
        </div>
      </ContentImage>
    </div>
  ); 
}
export default Oasis;