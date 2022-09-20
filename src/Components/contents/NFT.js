import NFTBenefit from "./NFTBenefit";
import NFTRoadmap from "./NFTRoadmap";
import NFTBuy from "./NFTBuy";
import NFTImage from "./NFTImage";
import { Fade } from "react-awesome-reveal";

function NFT(props) {
	return (
    <div>
      <Fade triggerOnce direction='up'>
        <p className="fs-1 text-blue-200 fw-medium mb-0">OASIS BOT NFT</p>
        <NFTBenefit />
      </Fade>
      <Fade triggerOnce direction='up'>
        <NFTImage />
      </Fade>
      <Fade triggerOnce direction='up'>
        <NFTRoadmap data={props.data} />
      </Fade>
      <NFTBuy />
    </div>
	); 

}
export default NFT;