function NFTRoadmap(props) {
  const roadmap = props.data;
	return (
		<div className="roadmap mt-5">
      <p className="fs-2 text-blue-100 fw-medium mb-2">NFT Roadmap</p>
      <div className="d-flex w-100">
        <div className="bar"></div>
        <div className="pt-3 mb-3">
        {roadmap.map((content, index) =>
        <div key={index}>
          <div className="ps-4 mb-4">
            <div className={"mb-4 line line-"+(index + 1) }></div>
            <p className={"mb-3 text-bar-"+(parseInt(index/2) + 1) }>
              {content.title}
            </p>
            <p className="text-white" dangerouslySetInnerHTML={{__html:content.content}}></p>
          </div>
        </div>
        )}
        </div>
      </div>
    </div>
	);
}

export default NFTRoadmap;